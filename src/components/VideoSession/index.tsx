/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import * as Sentry from '@sentry/react';
import { Error, SessionEventHandlers, SignalEvent } from 'opentok-react/types/opentok';

import {
  CONNECTED,
  DISCONNECTED,
  RECONNECTED,
  RECONNECTING,
  CONNECTION_DESTROYED,
  SIGNAL_TYPE,
  videoSources,
} from '../../constants';

import theme from '../../shared/theme';

import OTSessionWrapper from './OTSessionWrapper.js';

import { isDeviceNotFound, isAuthError } from '../../utils/opentokErrorService';
import { breadcrumb, captureException } from '../../utils/sentryService';
import { getPrimeiroNome } from '../../utils/strings';

import { Message, VideoSessionType } from './types';

import StreamSubscriber from '../StreamSubscriber';
import StreamPublisher from '../StreamPublisher';
import Chat from '../Chat';
import BarraOpcoes from '../BarraOpcoes';
import ConfirmationModal from '../ConfirmationModal';
import CardErro from '../CardErro';

const ContainerTelemedicina = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.gray50};
`;


const VideoSession = ({ isPictureInPictureEnabled = false, publisherType = 'paciente', chamadaEmAndamento, recusouTermo, onSessionEnded, getTokboxApiKey, currentUserName, appLog, onClickVoltar, termoObrigatorio } : VideoSessionType) => {
  const sessionRef = useRef<any>();
  const [sessionStatus, setSessionStatus] = useState<String | undefined>();
  const [mensagemErro, setMensagemErro] = useState('');
  const [
    mostrarConfirmacaoFinalizacao,
    setMostrarConfirmacaoFinalizacao,
  ] = useState(false);
  const [videoPaciente, setVideoPaciente] = useState(true);
  const [videoSource, setVideoSource] = useState(videoSources.CAMERA);
  const [medicoConectado, setMedicoConectado] = useState(false);
  const [noDevice, setNoDevice] = useState(false);
  const [audioPaciente, setAudioPaciente] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [pictureInPictureEnabled, setPictureInPictureEnabled] = useState(false);

  const onError = (err: Error) => {
    appLog && appLog('<OTSession /> onError ', err);

    /* envia erros ao sentry */
    captureException(err);

    if (isAuthError(err)) {
      setMensagemErro('Sessão de telemedicina expirou!');
    } else {
      setMensagemErro('Ocorreu um erro durante a chamada');
    }
  };

  const onToggleVideo = () => {
    appLog && appLog('<Controles /> onToggleVideo ');

    setVideoPaciente((val) => !val);
  };

  const onToggleAudio = () => {
    appLog && appLog('<Controles /> onToggleAudio ');

    setAudioPaciente((val) => !val);
  };

  const onToggleChat = () => {
    setChatOpen((val) => !val);
  };

  const publisherIsPaciente = () => {
    return publisherType === 'paciente';
  }

  const onSendMessage = (msg: String) => {
    sessionRef.current?.sessionHelper.session.signal({
      type: 'text-chat',
      data: JSON.stringify({
        text: msg,
        sender: {
          alias: getPrimeiroNome(publisherIsPaciente() ? currentUserName : chamadaEmAndamento.nomeMedico),
        },
        sentOn: new Date().getTime(),
      }),
    });
  };

  const onToggleScreenSharing = () => {
    const screenSharingOption =
      videoSource === videoSources.CAMERA
        ? videoSources.SCREEN
        : videoSources.CAMERA;

    appLog && appLog('onToggleScreenSharing', screenSharingOption);

    setVideoSource(screenSharingOption);
  };

  const onEndCall = () => {
    appLog && appLog('Finalizando chamada de telemedicina');

    sessionRef.current?.sessionHelper.session.disconnect(
      chamadaEmAndamento.codigoSessao
    );

    appLog && appLog('Chamada finalizada com sucesso');

    onSessionEnded && onSessionEnded(chamadaEmAndamento.codigoSessao);
  };

  const onMostrarConfirmacaoFinalizacao = () => {
    setMostrarConfirmacaoFinalizacao(true);
  };

  const subscriberNameResolver = () => {
    if (publisherIsPaciente()) {
      return `Dr(a). ${getPrimeiroNome(chamadaEmAndamento.nomeMedico)}`
    }
    return 'Paciente'
  }

  const sessionEventHandlers: SessionEventHandlers = {
    connectionDestroyed: (event: any) => {
      /* quando o cliente remoto finaliza a sessão VOLUNTARIAMENTE */
      appLog && appLog('<OTSession /> connectionDestroyed', event);

      setSessionStatus(CONNECTION_DESTROYED);

      breadcrumb({message: 'cliente remoto desconectou da sessão', category: 'telemedicina'});

      onSessionEnded && onSessionEnded(chamadaEmAndamento.codigoSessao);
    },
    sessionConnected: (event: any) => {
      appLog && appLog('<OTSession /> sessionConnected', event);

      const idConexaoOrigem = event.target.connection.connectionId;
      const idMinhaConexao =
        sessionRef.current?.sessionHelper.session.connection.connectionId;

      breadcrumb(
        {message: `cliente ${
          idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto'
        } conectou na sessão`,
        category: 'telemedicina'}
      );

      appLog && appLog('Minha conexão? ', idConexaoOrigem === idMinhaConexao);

      setSessionStatus(CONNECTED);
    },
    sessionDisconnected: (event: any) => {
      /* quando o cliente (local ou remoto) é desconectado da sessão (POSSIVELMENTE POR FALTA DE CONECTIVIDADE DA REDE) */
      appLog && appLog('<OTSession /> sessionDisconnected', event);

      const idConexaoOrigem = event.target.id;
      const idMinhaConexao =
        sessionRef.current === null
          ? idConexaoOrigem
          : sessionRef.current?.sessionHelper.session.id;

      appLog && appLog('Minha conexão?', idConexaoOrigem === idMinhaConexao);

      breadcrumb(
        {message: `cliente ${
          idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto'
        } desconectou da sessão`,
        category: 'telemedicina',
        level: Sentry.Severity.Warning}
      );

      if (idConexaoOrigem === idMinhaConexao) {
        setSessionStatus(CONNECTION_DESTROYED);
      } else {
        setSessionStatus(DISCONNECTED);
      }
    },
    sessionReconnected: (event: any) => {
      appLog && appLog('<OTSession /> sessionReconnected', event);

      const idConexaoOrigem = event.target.id;
      const idMinhaConexao =
        sessionRef.current === null
          ? idConexaoOrigem
          : sessionRef.current?.sessionHelper.session.id;

      breadcrumb(
        {message: `cliente ${
          idConexaoOrigem === idMinhaConexao ? 'local' : 'remoto'
        } reconectou na sessão`,
        category: 'telemedicina',
        level: Sentry.Severity.Warning}
      );

      setSessionStatus(RECONNECTED);
    },
    sessionReconnecting: (event: any) => {
      appLog && appLog('<OTSession /> sessionReconnecting', event);
      setSessionStatus(RECONNECTING);
    },
    signal: (event: SignalEvent) => {
      appLog && appLog('<OTSession /> signal', event);

      if (event?.data && event?.type === SIGNAL_TYPE) {
        const eventData = JSON.parse(event?.data);
        const myConnectionId =
          sessionRef.current?.sessionHelper.session.connection.connectionId;
        const itsMe = event?.from.connectionId === myConnectionId;
        
        const newMessage = itsMe
          ? { me: true, label: 'Eu', text: eventData.text }
          : {
              me: false,
              label: subscriberNameResolver(),
              text: eventData.text,
            };

        setMessages((m) => [...m, newMessage]);

        if (!chatOpen) {
          setChatOpen(true);
        }
      }
    },
  };

  const streamMedicoHandlers = {
    onSubscribe: () => {
      appLog && appLog(`<OTSubscriber /> onSubscribe`);

      setMedicoConectado(true);
    },
    onSubscribeError: (err: Error) => {
      appLog && appLog(`<OTSubscriber /> onSubscribeError: ${err}`);

      setMedicoConectado(false);
    },
  };

  const streamPacienteHandlers = {
    onError: (err: Error) => {
      appLog && appLog(`<OTPublisher /> onError`, err);

      captureException(err);

      if (isDeviceNotFound(err)) {
        setNoDevice(true);
        setVideoPaciente(false);
      }
    },
    onAccessDenied: () => {
      appLog && appLog(`<OTPublisher /> onAccessDenied`);

      setMensagemErro(
        'Para iniciar a chamada de vídeo, é necessário permitir acesso à camera do dispositivo.'
      );

      onEndCall();
    },
  };

  useEffect(() => {
    if (sessionStatus === CONNECTION_DESTROYED && (termoObrigatorio && !recusouTermo)) {
      setMensagemErro('Chamada finalizada');
    }
  }, [sessionStatus]);

  useEffect(() => {
    if (termoObrigatorio && recusouTermo) {
      appLog && appLog('Finalizando chamada de telemedicina');

      sessionRef.current?.sessionHelper.session.disconnect(
        chamadaEmAndamento.codigoSessao
      );

      appLog && appLog('Chamada finalizada com sucesso');

      setMensagemErro(
        'Para iniciar a chamada, é preciso aceitar o termo de comparecimento'
      );
    }
  }, [recusouTermo]);

  if (mensagemErro) {
    return <CardErro onClickVoltar={onClickVoltar}>{mensagemErro}</CardErro>;
  }

  if (!chamadaEmAndamento) {
    return <CardErro onClickVoltar={onClickVoltar}>Nenhuma chamada em andamento</CardErro>;
  }
  const aceitouTemoObrigatorio = () => {
    if (termoObrigatorio) {
      if (!chamadaEmAndamento.aceitouTermoComparecimento) return false;
      return true;
    } else {
      return true;
    };
  }

  const videoPacienteEnabled = () => {
    if (videoPaciente) {
      aceitouTemoObrigatorio()
    } else {
      return false;
    }
  }
  const audioPacienteEnabled = () => {
    if (audioPaciente) {
      aceitouTemoObrigatorio()
    } else {
      return false;
    }
  }

  const pictureInpictureRequest = () => {
    const subscriberVideo: any = document.querySelector('.OTSubscriberContainer video.OT_video-element');

    if (subscriberVideo) {
      subscriberVideo
        .requestPictureInPicture()
        .then((res) => {
          setPictureInPictureEnabled(true);

          subscriberVideo.addEventListener('leavepictureinpicture', () => {
            setPictureInPictureEnabled(false);
          });
        })
        .catch((error) => {
          console.log('Request picture-in-picture failed');
        });
    }
  }

  const Wrapper: any = OTSessionWrapper;
  return (
    <>
      <ConfirmationModal
        title="Finalizar"
        isOpen={mostrarConfirmacaoFinalizacao}
        onCancelar={() => {
          setMostrarConfirmacaoFinalizacao(false);
        }}
        onConfirmar={onEndCall}
        toggleModal={() => null}
      >
        Deseja realmente finalizar a chamada?
      </ConfirmationModal>
      <ContainerTelemedicina>
        <Wrapper
          ref={sessionRef}
          apiKey={getTokboxApiKey()}
          sessionId={chamadaEmAndamento.codigoSessao}
          token={publisherIsPaciente() ? chamadaEmAndamento.tokenPaciente : chamadaEmAndamento.tokenMedico}
          onError={onError}
          eventHandlers={sessionEventHandlers}
        >
        {!pictureInPictureEnabled && (
          <>
            <StreamSubscriber
              {...streamMedicoHandlers}
              nomeSubscriber={subscriberNameResolver()}
            />
          
              <StreamPublisher
                {...streamPacienteHandlers}
                noDevice={noDevice}
                videoEnabled={videoPacienteEnabled()}
                onToggleVideo={onToggleVideo}
                audioEnabled={audioPacienteEnabled()}
                onToggleAudio={onToggleAudio}
                sharingScreen={videoSource === videoSources.SCREEN}
                nomePublisher={getPrimeiroNome(currentUserName, 10)}
                videoSource={videoSource}
              />
              <BarraOpcoes
                chatOpen={chatOpen}
                onToggleChat={onToggleChat}
                sharingScreen={videoSource === videoSources.SCREEN}
                onToggleScreenSharing={onToggleScreenSharing}
                onEndCall={onMostrarConfirmacaoFinalizacao}
                disabled={termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento}
                isPictureInPictureEnabled={isPictureInPictureEnabled}
                onClickPictureInPicture={pictureInpictureRequest}
              />
              <Chat
                open={chatOpen}
                messages={messages}
                onMessage={onSendMessage}
                disabled={
                  !medicoConectado || (termoObrigatorio && !chamadaEmAndamento.aceitouTermoComparecimento)
                }
              />
          </>
          )}
        </Wrapper>
      </ContainerTelemedicina>
    </>
  );
};

export default VideoSession;

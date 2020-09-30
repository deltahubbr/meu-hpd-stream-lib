/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { OTPublisher } from 'opentok-react';
import { PublisherEventHandlers } from 'opentok-react/types/opentok';

import { videoSources } from '../../constants';
import theme from '../../shared/theme';

import Controles from '../Controles';
import { StreamPacienteType } from './types';

const ContainerStreamPaciente = styled.div`
  position: absolute;
  top: 60px;
  right: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContainerCameraPaciente = styled.div`
  width: 140px;
  height: 105px;
  border-radius: 10px;
  border: 1pt solid ${theme.colors.yellow400};
  overflow: hidden;
  margin-bottom: 10px;
  background-color: ${(props: { noDevice: Boolean }) =>
    props.noDevice ? theme.colors.gray700 : 'transparent'};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    width: 180px;
    height: 145px;
  }
`;

const NoDevice = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function StreamPaciente({
  paciente,

  noDevice = false,
  videoSource,
  sharingScreen,

  videoEnabled = true,
  onToggleVideo,

  audioEnabled = true,
  onToggleAudio,

  onPublish,
  onError,
  onAccessDenied,
  onStreamCreated,
  onStreamDestroyed,
}: StreamPacienteType) {
  const publisherEventHandlers: PublisherEventHandlers = {
    accessDenied: (event) => {
      onAccessDenied && onAccessDenied(event);
    },
    streamCreated: (event) => {
      onStreamCreated && onStreamCreated(event);
    },
    streamDestroyed: ({ reason }) => {
      onStreamDestroyed && onStreamDestroyed(reason);
    },
  };

  const publisherProperties = useMemo(
    () =>
      videoSource === videoSources.SCREEN
        ? {
            publishVideo: videoEnabled,
            publishAudio: audioEnabled,
            name: paciente,
            width: '180px',
            height: '145px',
            showControls: false,
            videoSource: videoSources.SCREEN,
          }
        : {
            publishVideo: videoEnabled,
            publishAudio: audioEnabled,
            name: paciente,
            width: '180px',
            height: '145px',
            showControls: false,
          },
    [videoEnabled, audioEnabled, videoSource]
  );

  return (
    <ContainerStreamPaciente>
      <ContainerCameraPaciente noDevice={noDevice}>
        <OTPublisher
          properties={publisherProperties}
          onPublish={onPublish}
          onError={onError}
          eventHandlers={publisherEventHandlers}
        />
        {noDevice && (
          <NoDevice>
            <span
              style={{
                color: theme.colors.gray400,
                fontSize: '10pt',
              }}
            >
              Câmera não detectada
            </span>
          </NoDevice>
        )}
      </ContainerCameraPaciente>
      <Controles
        noDevice={noDevice || sharingScreen}
        videoEnabled={videoEnabled}
        onToggleVideo={onToggleVideo}
        audioEnabled={audioEnabled}
        onToggleAudio={onToggleAudio}
      />
    </ContainerStreamPaciente>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import RoundedIcon from '../RoundedIcon';
import theme from '../../shared/theme';
import { BarraOpcoesType } from './types';

const BarraOpcoesContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    justify-content: center;
    align-items: center;
  }
`;

const OpcoesContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    width: 250px;
  }
`;

export default function BarraOpcoes({
  chatOpen,
  onToggleChat,
  onClickPictureInPicture,
  sharingScreen,
  onToggleScreenSharing,
  onEndCall,
  isScreenSharingEnabled = false,
  isPictureInPictureEnabled = false,
  disabled
}: BarraOpcoesType) {
  return (
    <BarraOpcoesContainer>
      <OpcoesContainer>
        {isPictureInPictureEnabled && (<RoundedIcon
          icon="fas fa-compress-alt"
          onClick={onClickPictureInPicture}
          title={'Minimizar vídeo'}
        />)}
        <RoundedIcon
          invertedBg={theme.colors.blue300}
          inverted={chatOpen}
          icon="far fa-comments"
          onClick={onToggleChat}
          title={chatOpen ? 'Fechar chat' : 'Abrir chat'}
        />
        <RoundedIcon
          invertedBg={theme.colors.blue300}
          inverted={false}
          icon="fas fa-phone-slash"
          bg={theme.colors.unknown_red}
          onClick={onEndCall}
          title="Finalizar chamada"
        />

        {isScreenSharingEnabled && (
          <RoundedIcon
            invertedBg={theme.colors.blue300}
            inverted={sharingScreen}
            icon="fas fa-desktop"
            onClick={onToggleScreenSharing}
            title={
              sharingScreen
                ? 'Parar compartilhamento de tela'
                : 'Compartilhar tela'
            }
          />
        )}
      </OpcoesContainer>
    </BarraOpcoesContainer>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Icone from '../Icone';
import { IconType, ControlesType } from './types';


const ControlesContainer = styled.div`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 100%;
`;

const IconContainer = styled.span`
    width: 48px;
    height: 48px;
    background-color: ${(props: {inverted: boolean}) => props.inverted ? 'rgb(255,35,11)': 'rgba(0, 0, 0, 0.1)'};
    color: #ffffff;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
`;

export const Icon = ({ icon, title, inverted = false, onClick }: IconType) => (
  <IconContainer
    inverted={inverted}
    onClick={onClick}
    title={title}
  >
    <Icone icone={icon} />
  </IconContainer>
);

export default function Controles({
  noDevice,
  videoEnabled = true,
  onToggleVideo,
  audioEnabled = true,
  onToggleAudio,
}: ControlesType) {
  return (
    <ControlesContainer>
      {!noDevice && (
        <Icon
          icon={videoEnabled ? 'fas fa-video' : 'fas fa-video-slash'}
          inverted={!videoEnabled}
          onClick={onToggleVideo}
          title={videoEnabled ? 'Ocultar vídeo' : 'Compartilhar vídeo'}
        />
      )}

      <Icon
        icon={audioEnabled ? 'fas fa-microphone' : 'fas fa-microphone-slash'}
        inverted={!audioEnabled}
        onClick={onToggleAudio}
        title={audioEnabled ? 'Colocar em mudo' : 'Compartilhar áudio'}
      />
    </ControlesContainer>
  );
}

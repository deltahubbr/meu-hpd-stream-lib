/// <reference types="react" />
import { StreamPacienteType } from './types';
export default function StreamPaciente({ nomePublisher, noDevice, videoSource, sharingScreen, videoEnabled, onToggleVideo, audioEnabled, onToggleAudio, onPublish, onError, onAccessDenied, onStreamCreated, onStreamDestroyed, onMediaStopped, }: StreamPacienteType): JSX.Element;

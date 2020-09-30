/// <reference types="react" />
import { StreamPacienteType } from './types';
export default function StreamPaciente({ paciente, noDevice, videoSource, sharingScreen, videoEnabled, onToggleVideo, audioEnabled, onToggleAudio, onPublish, onError, onAccessDenied, onStreamCreated, onStreamDestroyed, }: StreamPacienteType): JSX.Element;

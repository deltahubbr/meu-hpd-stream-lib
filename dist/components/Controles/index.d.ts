/// <reference types="react" />
import { IconType, ControlesType } from './types';
export declare const Icon: ({ icon, title, inverted, onClick }: IconType) => JSX.Element;
export default function Controles({ noDevice, videoEnabled, onToggleVideo, audioEnabled, onToggleAudio, }: ControlesType): JSX.Element;

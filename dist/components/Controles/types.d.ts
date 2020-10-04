/// <reference types="react" />
export interface IconType {
    icon?: string;
    title?: string;
    inverted: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
export interface ControlesType {
    noDevice?: boolean;
    videoEnabled: boolean;
    onToggleVideo?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    audioEnabled: boolean;
    onToggleAudio?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

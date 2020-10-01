/// <reference types="react" />
export interface BarraOpcoesType {
    chatOpen?: boolean;
    onToggleChat?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    sharingScreen?: boolean;
    onToggleScreenSharing?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    onClickPictureInPicture?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    onEndCall?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    isScreenSharingEnabled?: boolean;
    isPictureInPictureEnabled?: boolean;
    disabled?: boolean;
}

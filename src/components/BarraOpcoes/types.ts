export interface BarraOpcoesType {
    chatOpen?: boolean,
    onToggleChat?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    sharingScreen?: boolean,
    onToggleScreenSharing?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    onEndCall?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    isScreenSharingEnabled?: boolean,
    disabled?: boolean
}
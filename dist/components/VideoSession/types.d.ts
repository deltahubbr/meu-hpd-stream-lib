export interface Message {
    me: boolean;
    label: string;
    text: string;
}
export interface Chamada {
    idAtendimento: string;
    codigoSessao: string;
    tokenPaciente?: string;
    tokenMedico?: string;
    subscriberName: string;
    aceitouTermoComparecimento?: boolean;
}
export interface VideoSessionType {
    publisherType: 'medico' | 'paciente';
    chamadaEmAndamento: Chamada;
    recusouTermo?: boolean;
    termoObrigatorio: boolean;
    onSessionEnded: (codigoSessao: string) => void;
    getTokboxApiKey: () => string;
    currentUserName: string;
    appLog?: (msg: string, params?: string | Object) => void;
    onClickVoltar?: (event: any) => void;
    isPictureInPictureEnabled?: boolean;
    onTogglePictureInPicture?: (value: boolean) => void;
}

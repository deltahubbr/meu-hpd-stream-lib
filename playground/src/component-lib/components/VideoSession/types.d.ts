export interface Message {
    me: boolean;
    label: string;
    text: string;
}
export interface Chamada {
    idAtendimento: string;
    codigoSessao: string;
    tokenPaciente: string;
    nomeMedico: string;
    status: string;
    urlFotoMedico: string;
    aceitouTermoComparecimento?: boolean;
}
export interface VideoSessionType {
    chamadaEmAndamento: Chamada;
    recusouTermo: boolean;
    onSessionEnded: (codigoSessao: string) => void;
    getTokboxApiKey: () => string;
    currentUserName: string;
    appLog?: (msg: string, params?: string | Object) => void;
}

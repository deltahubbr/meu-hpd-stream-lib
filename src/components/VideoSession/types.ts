import { onLoadProps } from "../FileUploader/types";

export interface Message {
    me: boolean,
    label: string,
    text?: string,
    file?: any,
}

export interface Chamada {
    idAtendimento: string,
    codigoSessao: string,
    tokenPaciente?: string,
    tokenMedico?: string,
    subscriberName: string,
    aceitouTermoComparecimento?: boolean,
}

export type AppLog = (msg: string, params?: string | Object) => void; 
export interface VideoSessionType {
    uploadDisabled?: boolean,
    publisherType: 'medico' | 'paciente',
    chamadaEmAndamento: Chamada,
    recusouTermo?: boolean,
    termoObrigatorio: boolean,
    onSessionEnded: (codigoSessao: string) => void,
    getTokboxApiKey: () => string,
    currentUserName: string,
    appLog?: AppLog,
    onClickVoltar?: (event: any) => void,
    isPictureInPictureEnabled?: boolean,
    onTogglePictureInPicture?: (value: boolean) => void,
    onSelectFileUpload?: (param: onLoadProps) => Promise<any>,
}
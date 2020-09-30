import { Error, Event, StreamCreatedEvent } from "opentok-react/types/opentok";

export interface StreamPacienteType {
    paciente?: string,
    noDevice: boolean,
    videoSource: string,
    sharingScreen?: boolean,
    videoEnabled?: boolean,
    onToggleVideo: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    audioEnabled?: boolean,
    onToggleAudio: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    onPublish?: () => void,
    onError?: (error: Error) => void,
    onAccessDenied?: (event: Event<"accessDenied", unknown>) => void,
    onStreamCreated?: (event: StreamCreatedEvent) => void,
    onStreamDestroyed?: (event: string) => void,
}
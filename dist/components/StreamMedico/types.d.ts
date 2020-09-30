import { Error, VideoEnabledChangedEvent } from "opentok-react/types/opentok";
export interface StreamMedicoType {
    medico: string;
    onSubscribe?: () => void;
    onSubscribeError?: (error: Error) => void;
    onVideoEnabled?: (event?: VideoEnabledChangedEvent<"videoEnabled">) => void;
    onVideoDisabled?: (event?: VideoEnabledChangedEvent<"videoDisabled">) => void;
}

import { Error, VideoEnabledChangedEvent } from "opentok-react/types/opentok";
import { AppLog } from "../VideoSession/types";

export interface StreamMedicoType {
    nomeSubscriber: string,
    onSubscribe?: () => void,
    onSubscribeError?: (error: Error) => void,
    onVideoEnabled?: (event?: VideoEnabledChangedEvent<"videoEnabled">) => void,
    onVideoDisabled?: (event?: VideoEnabledChangedEvent<"videoDisabled">) => void,
    pictureInPictureEnabled?: boolean;
    appLog?: AppLog
}
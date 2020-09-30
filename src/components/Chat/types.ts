import { Message } from "../VideoSession/types";

export interface ChatType {
    open: boolean,
    messages: Message[],
    disabled?: boolean,
    onMessage?: (inputMessage: string) => void
}
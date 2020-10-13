import { onLoadProps } from "../FileUploader/types";
import { Message } from "../VideoSession/types";

export interface ChatType {
  open: boolean,
  messages: Message[],
  disabled?: boolean,
  onMessage?: (inputMessage: string) => void,
  uploadDisabled?: boolean,
  onSelectFileUpload?: (param: onLoadProps) => Promise<any>,
}

export interface MessageBoxType {
  message: {
    file?: {
      nome: string,
      url: string,
    },
    text?: string,
  },
  justify: string
}
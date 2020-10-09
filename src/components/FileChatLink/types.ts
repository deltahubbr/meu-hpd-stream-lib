export interface FileChatType {
    name: string,
    extension: string,
    url: string,
}

export interface FileUploaderType {
    arquivo: FileChatType | undefined,
}

export interface ExtensionsIcons {
    ext: string[],
    icon: string,
}
export interface onLoadProps {
    extensao: string,
    file?: string | ArrayBuffer | null
}

export interface FileUploader {
    disabled?: boolean,
    isLoading?: boolean,
    onLoad: (props: onLoadProps) => void,
    onError: (error: any) => void
}
export interface LoadingButtonComponentType {
    confirmLoading?: boolean,
    onConfirmar?: (event: React.MouseEvent<any, MouseEvent>) => void,
    confirmDisabled?: boolean,
    confirmLabel?: string
}

export interface ConfirmationModalType {
    isOpen?: boolean,
    title: string,
    children?: React.ReactNode,
    cancelLabel?: string,
    onCancelar?: (event: React.MouseEvent<any, MouseEvent>) => void,
    cancelDisabled?: boolean,
    confirmLabel?: string,
    onConfirmar?: (event: React.MouseEvent<any, MouseEvent>) => void,
    confirmDisabled?: boolean,
    confirmLoading?: boolean,
    hasToggle?: boolean,
    toggleModal: () => void,
    onlyConfirmType?: boolean,
    loadingButtonComponent?: (props: LoadingButtonComponentType) => React.ReactNode,
}
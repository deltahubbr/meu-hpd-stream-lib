/// <reference types="react" />
import { ConfirmationModalType } from './types';
export default function ConfirmationModal({ isOpen, title, children, cancelLabel, onCancelar, cancelDisabled, confirmLabel, onConfirmar, confirmDisabled, confirmLoading, hasToggle, toggleModal, onlyConfirmType, loadingButtonComponent }: ConfirmationModalType): JSX.Element;

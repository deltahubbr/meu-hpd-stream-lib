/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Button } from 'reactstrap';
import { ConfirmationModalType } from './types';

export default function ConfirmationModal({
  isOpen = false,
  title,
  children,
  cancelLabel,
  onCancelar,
  cancelDisabled = false,
  confirmLabel,
  onConfirmar,
  confirmDisabled = false,
  confirmLoading = false,
  hasToggle = false,
  toggleModal = () => {},
  onlyConfirmType = false,
  loadingButtonComponent
}: ConfirmationModalType) {
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={isOpen}
      toggle={() => toggleModal()}
    >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {title}
        </h5>
        {hasToggle && (
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleModal()}
          >
            <span aria-hidden>×</span>
          </button>
        )}
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        {!onlyConfirmType && (
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={onCancelar}
            disabled={cancelDisabled}
          >
            {cancelLabel || 'Cancelar'}
          </Button>
        )}
        {loadingButtonComponent && loadingButtonComponent({confirmLoading, onConfirmar, confirmDisabled, confirmLabel}) || (
          <Button
            color="primary"
            type="button"
            onClick={onConfirmar}
            disabled={confirmDisabled}
          >
            {confirmLabel || 'Confirmar'}
          </Button>
        )}
        {/* <LoadingButton
          loading={confirmLoading}
          color="primary"
          type="button"
          onClick={onConfirmar}
          disabled={confirmDisabled}
        >
          {confirmLabel || 'Confirmar'}
        </LoadingButton> */}
      </div>
    </Modal>
  );
}

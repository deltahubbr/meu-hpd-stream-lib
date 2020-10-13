import React, { useState } from 'react';
import ReactLoading from 'react-loading';

import { uploadFileTypes } from '../../utils/uploadFileTypes';
import theme from '../../shared/theme';
import Icone from '../Icone';

import * as S from './styles';
import { FileUploader } from './types';

const FileUploader: React.FC<FileUploader> = ({disabled,  onLoad, onError, isLoading}) => {
  /**
   *  TODO: Disparar notificação ao ocorrer erro
   *        do upload da imagem
   */
  function handleChange(e) {
    try {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();

        const ext = `.${e.target.files[0].type.split('/')[1]}`;
        const nome = e.target.files[0].name;

        reader.onload = function (evt) {
          const file = evt?.target?.result
          onLoad({ nome, extensao: ext, file: typeof file === 'string' ? file.split(',')[1] : file  });
        };

        reader.readAsDataURL(e.target.files[0]); // convert to base64 string
      }
    } catch (err) {
      onError(err);
    }
  }

  const acceptedExtensions = Object.keys(uploadFileTypes).map((type) => {
      return uploadFileTypes[type]
    }).join();

  return (
    <S.UploaderContainer disabled={disabled || false}>
        { isLoading ? (
        <ReactLoading type="spin" color={theme.colors.gray400} height={25} width={16}/>
        ): (
          <>
            <label htmlFor="file-chat-uploader" style={{margin: '0px'}}>
              <Icone
                color={(disabled) ? theme.colors.gray300 : theme.colors.gray600}
                icone="fas fa-upload"
                size="14px"
              />
            </label>
            <S.InputFile
              type="file"
              id="file-chat-uploader"
              accept={acceptedExtensions}
              onChange={handleChange}
            />
          </>
        )}
    </S.UploaderContainer>
  );
}

export default FileUploader;


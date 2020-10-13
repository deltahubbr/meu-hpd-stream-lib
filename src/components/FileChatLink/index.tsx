import React from 'react';
import { find, map, some } from 'lodash';
import ReactLoading from 'react-loading';

import theme from '../../shared/theme';
import { uploadFileTypes } from '../../utils/uploadFileTypes';
import Icone from '../Icone';

import * as S from './styles';
import { ExtensionsIcons, FileUploaderType } from './types';

const FileChatLink: React.FC<FileUploaderType> = ({arquivo}) => {
  const extIcons: ExtensionsIcons[] = [
    {
      ext: uploadFileTypes.PDF,
      icon: 'fas fa-file-pdf',
    },
    {
      ext: uploadFileTypes.WORD,
      icon: 'fas fa-file-word',
    },
    {
      ext: uploadFileTypes.EXCEL,
      icon: 'fas fa-file-excel',
    },
    {
      ext: uploadFileTypes.IMAGES,
      icon: 'fas fa-file-image',
    }
  ];

  const iconTypeResolverr = () => {
    return find(extIcons, (types) => some(types.ext, (ext) => ext.toLowerCase() === arquivo?.extension.toLowerCase()))?.icon
  }

  return arquivo && (
    <S.Container href={arquivo.url} target="_blank">
      <Icone
        color={theme.colors.gray400}
        icone={iconTypeResolverr()}
        size="30px"
      />
      <S.NomeArquivo>{arquivo.name}</S.NomeArquivo>
    </S.Container>
  ) || null;
}

export default FileChatLink;
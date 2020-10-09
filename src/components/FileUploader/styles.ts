import styled from 'styled-components';
import theme from '../../shared/theme';

export const UploaderContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  left: 10px;
  align-items: center;

  :hover {
    cursor: ${(props: {disabled: boolean}) => props.disabled ? 'default': 'pointer'};

    i {
      color: ${theme.colors.gray800} !important;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  :focus + label {
    /* keyboard navigation */
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
`;
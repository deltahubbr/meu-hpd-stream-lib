import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 5px;
  border: solid 1px #b7c2da;
  border-radius: 4px;
  background-color: #e7ecf7;

  :hover  {
    cursor: pointer;
  }
`;

export const NomeArquivo = styled.span`
  margin-top: 0.5rem;
  line-height: 1.3;
  font-size: 10px;
  text-align: center;
  word-break: break-all;
`;
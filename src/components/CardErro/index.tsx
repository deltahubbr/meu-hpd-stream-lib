/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Card, CardText, Button } from 'reactstrap';

import theme from '../../shared/theme';
import { CardErroType } from './types';

const ContainerSemChamadas = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray50};
`;

const CustomCard = styled(Card)({
  padding: '30px',
});

const CustomSpan = styled.span`
  text-align: center;
`;

export default function CardErro({ children, onClickVoltar }: CardErroType) {
  return (
    <ContainerSemChamadas>
      <CustomCard>
        <CardText>
          <CustomSpan className="h3">{children}</CustomSpan>
        </CardText>
        <Button
          color="primary"
          outline
          type="button"
          onClick={onClickVoltar}
        >
          Voltar para o início
        </Button>
      </CustomCard>
    </ContainerSemChamadas>
  );
}

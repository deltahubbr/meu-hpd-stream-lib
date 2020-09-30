/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';

import { removeWhitespaces } from '../../utils/strings';
import Icone from '../Icone';
import { RoundedIconType, RoundedIconContainerType } from './types';

const RoundedIconContainer = styled.span`
  width: 48px;
  height: 48px;
  background-color: ${(props: RoundedIconContainerType) =>
    props.inverted ? props.invertedBg : props.bg};
  color: #ffffff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.inverted ? props.invertedBg : props.bg};
  }
`;

export default function RoundedIcon({
  bg = 'rgba(0, 0, 0, 0.1)',
  invertedBg = 'rgb(255,35,11)',
  inverted = false,
  onClick,
  icon,
  title,
}: RoundedIconType) {
  const id = removeWhitespaces(`id_${new Date().getTime()}_${icon}`);

  const Component = useCallback(
    () => (
      <>
        <UncontrolledTooltip placement="top" target={id}>
          {title && title}
        </UncontrolledTooltip>

        <RoundedIconContainer
          id={id}
          bg={bg}
          invertedBg={invertedBg}
          inverted={inverted}
          onClick={onClick}
          title={title}
        >
          <Icone icone={icon} />
        </RoundedIconContainer>
      </>
    ),
    [onClick]
  );

  return <Component />;
}

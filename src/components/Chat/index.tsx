/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Input, Form, Button } from 'reactstrap';
import { map } from 'lodash';

import theme from '../../shared/theme';
import Icone from '../Icone';
import { ChatType } from './types';

const ChatContainer = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 300px;
  width: 350px;
  border-radius: 15px;
  background-color: ${theme.colors.gray50};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  -webkit-border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-bottomleft: 5px;
  -moz-border-radius-bottomright: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ChatHead = styled.div`
  height: 35px;
  width: 100%;
  background-color: ${theme.colors.blue700};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ChatHeadTitle = styled.span`
  color: #ffffff;
  font-size: 9pt;
  font-weight: 400;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MessagesContainerWrapper = styled.div`
  width: 100%;
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 5px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

const CustomForm = styled(Form)`
  flex: 1;
  display: flex;
`;

const MessageBoxContainer = styled.div`
  margin-bottom: 20px;
`;

const MessageLabel = styled.div`
  text-align: ${(props: {align: string}) => props.align || 'right'};
`;

const MessageBoxLabel = ({ align = 'right', children = ''}) => (
  <MessageLabel align={align}>
    <p className="h5">{`${children}:`}</p>
  </MessageLabel>
);

const MessageBoxText = styled.div`
  word-break: break-word;
  text-align: ${(props: {align: string}) => props.align || 'right'};
`;

const EmptyMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.span`
  margin-top: 15px;
  font-size: 10pt;
  color: ${theme.colors.gray500};
`;

export default function Chat({ open, messages = [], disabled, onMessage }: ChatType) {
  const [inputMessage, setInputMessage] = useState('');

  const onSubmit = (evt: Event) => {
    evt.preventDefault();
    onMessage && onMessage(inputMessage);
    setInputMessage('');
  };

  const hasMessages = messages.length > 0;

  return (
    <ChatContainer className={`${open ? '' : 'd-none'}`}>
      <ChatHead>
        <ChatHeadTitle>Chat</ChatHeadTitle>
      </ChatHead>
      <MessagesContainer>
        {hasMessages && (
          <MessagesContainerWrapper>
            {map(messages, (message, index) => (
              <Fragment key={index}>
                {message.me && (
                  <MessageBoxContainer>
                    <MessageBoxLabel align="right">
                      {message.label}
                    </MessageBoxLabel>
                    <MessageBoxText align="right">
                      {message.text}
                    </MessageBoxText>
                  </MessageBoxContainer>
                )}
                {!message.me && (
                  <MessageBoxContainer>
                    <MessageBoxLabel align="left">
                      {message.label}
                    </MessageBoxLabel>
                    <MessageBoxText align="left">{message.text}</MessageBoxText>
                  </MessageBoxContainer>
                )}
              </Fragment>
            ))}
          </MessagesContainerWrapper>
        )}
        {!hasMessages && (
          <EmptyMessages>
            <Icone
              color={theme.colors.gray500}
              icone="fas fa-comment-slash"
              size="48px"
            />
            <EmptyText>Nenhuma mensagem encontrada</EmptyText>
          </EmptyMessages>
        )}
      </MessagesContainer>
      <InputContainer>
        <CustomForm onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Digite a mensagem"
            value={inputMessage}
            onChange={(evt) => setInputMessage(evt.target.value)}
            maxLength={160}
            disabled={disabled}
          />
          <Button title="Enviar" type="submit" disabled={disabled}>
            Enviar
          </Button>
        </CustomForm>
      </InputContainer>
    </ChatContainer>
  );
}

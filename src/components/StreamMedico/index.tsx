/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { OTStreams } from 'opentok-react';

import OTSubscriberWrapper from './OTSubscriberWrapper.js';

import theme from '../../shared/theme';
import { StreamMedicoType } from './types';
import { SubscriberEventHandlers } from 'opentok-react/types/opentok';

const StreamContainer = styled.div`
  background-color: ${theme.colors.gray700};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default function StreamMedico({
  medico,
  onSubscribe,
  onSubscribeError,
  onVideoEnabled,
  onVideoDisabled,
}: StreamMedicoType) {
  const subscriberEventHandlers: SubscriberEventHandlers = {
    videoEnabled: (event) => {
      onVideoEnabled && onVideoEnabled(event);
    },
    videoDisabled: (event) => {
      onVideoDisabled && onVideoDisabled(event);
    },
  };

  const Wrapper: any = OTSubscriberWrapper;
  return (
    <StreamContainer id="stream-medico">
      <OTStreams>
        <Wrapper
          retry
          maxRetryAttempts={3}
          retryAttemptTimeout={2000}
          properties={{ width: '100vw', height: '100vh', name: medico }}
          // properties={{ width: '100vw', height: '100vh' }}
          onSubscribe={onSubscribe}
          onError={onSubscribeError}
          eventHandlers={subscriberEventHandlers}
        />
      </OTStreams>
    </StreamContainer>
  );
}

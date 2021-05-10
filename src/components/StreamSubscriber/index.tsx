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
  nomeSubscriber,
  onSubscribe,
  onSubscribeError,
  onVideoEnabled,
  onVideoDisabled,
  pictureInPictureEnabled,
  appLog
}: StreamMedicoType) {

  const subscriberEventHandlers: SubscriberEventHandlers = {
    videoEnabled: (event) => {
      appLog && appLog('subscriberEvent: videoEnabled', event);
      onVideoEnabled && onVideoEnabled(event);
    },
    videoDisabled: (event) => {
      appLog && appLog('subscriberEvent: videoDisabled', event);
      onVideoDisabled && onVideoDisabled(event);
    },
    audioBlocked: (event) => {
      appLog && appLog('subscriberEvent: audioBlocked', event);
    },
    audioLevelUpdated: (event) => {
      appLog && appLog('subscriberEvent: audioLevelUpdated', event);
    },
    connected: (event) => {
      appLog && appLog('subscriberEvent: connected', event);
    },
    destroyed: (event) => {
      appLog && appLog('subscriberEvent: destroyed', event);
    },
    disconnected: (event) => {
      appLog && appLog('subscriberEvent: disconnected', event);
    },
    videoDimensionsChanged: (event) => {
      appLog && appLog('subscriberEvent: videoDimensionsChanged', event);
    },
    videoDisableWarning: (event) => {
      appLog && appLog('subscriberEvent: videoDisableWarning', event);
    },
    videoDisableWarningLifted: (event) => {
      appLog && appLog('subscriberEvent: videoDisableWarningLifted', event);
    },
    videoElementCreated: (event) => {
      appLog && appLog('subscriberEvent: videoElementCreated', event);
    },
  };

  const Wrapper: any = OTSubscriberWrapper;
  return (
    <StreamContainer id="stream-medico" hidden={pictureInPictureEnabled}>
      <OTStreams>
        <Wrapper
          retry
          maxRetryAttempts={3}
          retryAttemptTimeout={2000}
          properties={{ width: '100vw', height: '100vh', name: nomeSubscriber }}
          // properties={{ width: '100vw', height: '100vh' }}
          onSubscribe={onSubscribe}
          onError={onSubscribeError}
          eventHandlers={subscriberEventHandlers}
        />
      </OTStreams>
    </StreamContainer>
  );
}

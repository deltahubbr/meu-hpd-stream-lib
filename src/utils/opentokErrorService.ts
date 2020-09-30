import { Error } from 'opentok-react/types/opentok';

import {
    DEVICE_NOT_FOUND,
    AUTHENTICATION_ERROR,
  } from '../constants';
  
  export const isDeviceNotFound = (err: Error) => {
    return err.name === DEVICE_NOT_FOUND;
  };
  
  export const isAuthError = (err: Error) => {
    return err.name === AUTHENTICATION_ERROR;
  };
  
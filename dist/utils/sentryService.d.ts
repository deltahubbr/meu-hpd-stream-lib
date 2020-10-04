import * as Sentry from '@sentry/react';
import { Error } from 'opentok-react/types/opentok';
export declare const breadcrumb: ({ message, category, data, level }: Sentry.Breadcrumb) => void;
export declare const captureException: (err: Error) => void;

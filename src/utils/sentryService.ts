import * as Sentry from '@sentry/react';
import { Error } from 'opentok-react/types/opentok';

export const breadcrumb = ({message,
  category,
  data,
  level = Sentry.Severity.Info
} : Sentry.Breadcrumb
) => {
  Sentry.addBreadcrumb({
    message,
    category,
    level,
    data,
  });
};

export const captureException = (err: Error) => {
  Sentry.captureException(err);
};

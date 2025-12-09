import dataController from './Controllers/data.controller.js';
import analytics from './Analytics/analytics.controller.js';

export const initial = {
  clientEmail: '',
  clientKey: '',
};

function init(clientEmail, clientKey) {
  // return new tc(clientId, clientKey);
  if (!clientEmail || !clientKey) {
    return {
      error: 'Invalid Credentials',
      message: 'Please provide clientEmail and clientKey',
    };
  }
  initial.clientEmail = clientEmail;
  initial.clientKey = clientKey;
  return {
    data: dataController,
    analytics: analytics,
  };
}

export default init;

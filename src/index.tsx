import './assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from './mocks/browser';
import RootApp from './RootApp';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RootApp />);

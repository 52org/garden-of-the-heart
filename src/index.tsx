import './assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import RootApp from './RootApp';
import { worker } from './services/api/mswMock/browser';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/garden-of-the-heart') {
      window.location.pathname = '/garden-of-the-heart/';
      return;
    }
    await worker.start({
      serviceWorker: {
        url: '/garden-of-the-heart/mockServiceWorker.js',
      },
      onUnhandledRequest: 'bypass',
    });
    root.render(<RootApp />);
  }
}
main();

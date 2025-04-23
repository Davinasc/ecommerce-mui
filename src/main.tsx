import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  const { worker } = await import('./services/api/mocks/browser');

  return worker.start();
}

const rootElement = document.getElementById('root');

if (rootElement) {
  enableMocking().then(() => {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
} else {
  console.error('Root element not found');
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from '@/App.tsx';

import { Provider as ChakraUIProvider } from './components/ui/provider.tsx';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element not found');
}

if (rootElement.hasChildNodes()) {
  throw new Error('Root element already has children');
}

const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ChakraUIProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraUIProvider>
  </StrictMode>,
);

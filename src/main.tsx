import { App } from '@/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ChakraUIProvider } from './components/ui/provider.tsx';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element not found');
}

if (rootElement.hasChildNodes()) {
  throw new Error('Root element already has children');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraUIProvider>
      <App />
    </ChakraUIProvider>
  </StrictMode>
);

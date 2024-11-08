import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '@/routes/error-page';
import { RootPage } from '@/routes/root-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
]);

export { router };

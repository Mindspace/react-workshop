import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const ContactDashboard = React.lazy(() => import('@workshop/ui'));

export const router = createBrowserRouter([
  {
    // descendant routing for lazy-loaded, nested <routes></routes>
    path: '/contacts/*',
    element: (
      <React.Suspense fallback={<>...</>}>
        <ContactDashboard />
      </React.Suspense>
    ),
    errorElement: <div> Error Occurred </div>,
  },
  {
    path: '*',
    element: <Navigate replace to="/contacts" />,
  },
]);
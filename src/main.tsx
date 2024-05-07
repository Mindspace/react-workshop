import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

//import App from './app/app';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from '../styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/app.routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);

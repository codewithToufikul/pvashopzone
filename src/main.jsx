import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'font-awesome/css/font-awesome.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);

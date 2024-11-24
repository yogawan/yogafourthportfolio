import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePages from './components/pages/HomePages';
import CertificatePages from './components/pages/CertificatePages';
import ProjectPages from './components/pages/ProjectPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages></HomePages>
  },
  {
    path: '/project',
    element: <ProjectPages></ProjectPages>
  },
  {
    path: '/certificate',
    element: <CertificatePages></CertificatePages>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
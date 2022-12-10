import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import path = require('path')
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MakeShort from './app/short/make-short.component';
import OpenShort from './app/short/open-short.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MakeShort />,
  },
  {
    path: "/:id",
    element: <OpenShort />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

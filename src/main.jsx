import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Home></Home>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

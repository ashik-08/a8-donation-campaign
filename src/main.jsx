import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import DonationDetails from './pages/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../donation.json')
      },
      {
        path: "/donation",
        element: <h2>Donation Page</h2>
      },
      {
        path: "/statistics",
        element: <h2>Statistics Page</h2>
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../donation.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

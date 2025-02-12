import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/shared/ProtectedRoute'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import OrderFlow from './pages/OrderFlow'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import About from './pages/About'
import { ProductPage } from './pages/products/ProductPage'
import { ErrorBoundary } from '@/components/shared/ErrorBoundary'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'about', element: <About /> },
      { path: 'products/:productId', element: <ProductPage /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'order',
        element: <OrderFlow />,
      },
    ],
  },
])
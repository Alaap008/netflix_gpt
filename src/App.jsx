import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/browse',
          element: (
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App

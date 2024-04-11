import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
// comps & pages
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home/index.jsx'
import EstateDetails from './pages/EstateDetails.jsx'
import Connect from './pages/Connect'
import UpdateProfile from './pages/UpdateProfile.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import RouteGuard from './comps/RouteGuard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/' 
      element={<AuthProvider> <App/> </AuthProvider>} 
      errorElement={<ErrorPage /> }
    >
      <Route 
        index 
        element={<RouteGuard> <Home/> </RouteGuard>} 
        loader={() => fetch('/estates.json')} 
      />
      <Route 
        path='details/:id' 
        element={<RouteGuard> <EstateDetails/> </RouteGuard>} 
      />
      <Route 
        path='update-profile' 
        element={<RouteGuard> <UpdateProfile/> </RouteGuard>} 
      />
      <Route 
        path='connect' 
        element={<RouteGuard> <Connect/> </RouteGuard>} 
      />
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

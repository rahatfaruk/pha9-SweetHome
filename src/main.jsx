import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import 'animate.css'
// comps & pages
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import EstateDetails from './pages/EstateDetails'
import Connect from './pages/Connect'
import UpdateProfile from './pages/UpdateProfile'
import Blogs from './pages/Blogs'
// context
import AuthProvider from './context/AuthProvider'
import RouteGuard from './comps/RouteGuard'

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
      <Route 
        path='blogs' 
        element={<RouteGuard> <Blogs/> </RouteGuard>} 
      />
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

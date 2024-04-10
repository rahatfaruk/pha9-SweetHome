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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage /> }>
      <Route index element={<Home/>} loader={() => fetch('/estates.json')} />
      <Route path='details/:id' element={<EstateDetails/>} />
      <Route path='update-profile' element={<UpdateProfile/>} />
      <Route path='connect' element={<Connect/>} />
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

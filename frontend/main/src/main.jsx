import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faMicrosoft, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import CreateUserProfilePage from './pages/CreateUserProfilePage.jsx'
import SignInPage from './pages/SignInPage.jsx'

library.add(fas, faMicrosoft, faGoogle, faGithub, faFontAwesome);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="non">404</div>,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/create-user-profile",
    element: <CreateUserProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

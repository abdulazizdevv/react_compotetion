import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx' 
import "./assets/style/main.scss"
// import { AuthProvidor } from './context/AuthContext.jsx'
// import { UserProvidor } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <AuthProvidor> */}
      {/* <UserProvidor> */}
      <RouterProvider router={router}/>
      {/* </UserProvidor> */}
      {/* </AuthProvidor> */}
  </React.StrictMode>,
)

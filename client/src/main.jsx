import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      {/* <Route path='admin' element={<Admin/>}/>
      <Route path='employee' element={<Employee/>}/>
      <Route path='questionnair' element={<AllQROfEmp/>}/> */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

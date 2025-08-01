import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import NewMoodBoard from './components/newmoodboard/NewMoodBoard.jsx'
import MoodboardList from './components/moodboardlist/MoodboardList.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='/newmoodboard' element={<NewMoodBoard/>}/>
       <Route path='/moodboard-list' element={<MoodboardList/>}/>
      
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router}/>
  
  </StrictMode>,
)

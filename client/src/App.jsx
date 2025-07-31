import { useState ,useEffect} from 'react'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import Register from './components/register/Register'
// import MoodboardList from './components/MoodboardList'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [currentView, setCurrentView] = useState("login")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      // try {
      //   const userData = await authService.getCurrentUser()
      //   setUser(userData.user)
      // } catch (error) {
      //   console.log("Not authenticated")
      // } finally {
      //   setLoading(false)
      // }
       setLoading(false)
    }

    checkAuth()
  }, [])

  const handleLogin = (userData) => {
    setUser(userData.user)
    localStorage.setItem("token", userData.token)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("token")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // if (user) {
  //   return <Dashboard user={user} onLogout={handleLogout} />
  // }

  return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      {/* <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">MoodBoard</h1>
          <p className="text-gray-600">Express your daily mood</p>
        </div>

        {currentView === "login" ? (
          <Login onLogin={handleLogin} onSwitchToRegister={() => setCurrentView("register")} />
        ) : (
          <Register onLogin={handleLogin} onSwitchToLogin={() => setCurrentView("login")} />
        )}
      </div> */}
      {/* <Login/> */}
      <Outlet/>
     
    </div>
  )
}

export default App

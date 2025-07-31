

import { useState } from "react"
// import { authService } from "../services/authService"

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // try {
    //   const response = await authService.login(formData)
    //   onLogin(response)
    // } catch (error) {
    //   setError(error.message)
    // } finally {
    //   setLoading(false)
    // }
     setLoading(false)
  }

   return (
    <main className="flex justify-center items-center bg-white min-h-[80vh]">
      <div className="w-full max-w-2xl rounded-lg p-6 flex flex-col items-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-center text-gray-800 mb-10">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-1/2">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full  px-4 py-5 bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-5 bg-[#FAFAFA] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="flex justify-start">
            <a
              href="#"
              className="text-sm text-[#171717] underline underline-offset-4"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-center w-full mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-96 bg-black text-white font-semibold text-lg py-6 rounded-full hover:bg-gray-900 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="text-center mt-4">
        
             
              Don&apos;t have an account? <span onClick={onSwitchToRegister}> Register here</span>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Login

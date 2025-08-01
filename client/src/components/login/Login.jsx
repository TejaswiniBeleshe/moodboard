import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  const { email, password } = formData;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Password validation
  if (password.length < 8) {
    setError("Password must be at least 8 characters long.");
    return;
  }

  try {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/newmoodboard"); 
    }, 1000);
  } catch (err) {
    setLoading(false);
    setError("Login failed. Please try again.");
  }
};


  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 login-bg px-3">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-3 display-5 fw-bold">Welcome Back</h1>
        <div className="bg-white p-4 rounded-4 shadow">
          <h2 className="text-center mb-4 fs-4 text-dark">Login Here</h2>
          <form onSubmit={handleSubmit}>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password (min 8 chars)"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center mt-3 mb-0 small">
              Don’t have an account?{" "}
              <Link to="/register" className="text-decoration-underline text-primary">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <style jsx>{`
         .login-bg {
            background: linear-gradient(to bottom right, #ede9fe, #ffffff, #f3e8ff);
          }

      `}</style>
    </main>
  );
}

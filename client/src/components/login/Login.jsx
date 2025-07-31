import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Logged in with:", formData);
    }, 1500);
  };

  return (
    <main className="login-main">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password (min 8 chars)"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="login-register">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="login-register-link">
              Register here
            </Link>
          </p>
        </form>
      </div>
      {
        <style jsx>
          {
            `
            .login-main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to bottom right, #ede9fe, #ffffff, #f3e8ff);
}

.login-container {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-error {
  background-color: #ffe0e0;
  border: 1px solid #ff6b6b;
  color: #b30000;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.login-input {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-size: 1rem;
  outline: none;
}

.login-input:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 2px #d8b4fe;
}

.login-button {
  padding: 1rem;
  background-color: #9333ea;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #7e22ce;
}

.login-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.login-register {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
}

.login-register-link {
  color: #9333ea;
  text-decoration: underline;
}

            
            
            
            `
          }


        </style>
      }
    </main>
  );
}

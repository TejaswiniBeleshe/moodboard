import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        setError('');
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      const { username, email, password } = formData;

      
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      if (!usernameRegex.test(username)) {
        setError("Username should be 3-20 characters long and contain only letters, numbers, or underscores.");
        return;
      }


      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
      if (!passwordRegex.test(password)) {
        setError("Password must be at least 6 characters long and include both letters and numbers.");
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
    <main className="d-flex justify-content-center align-items-center px-3 register-bg min-vh-100">
      <div className="bg-white shadow rounded-4 p-4 w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4 fs-3 text-dark">Register Here</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger text-center">{error}</div>}

          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
              minLength="3"
              maxLength="20"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <div className="text-center mt-3 small">
            Already have an account?{" "}
            <Link to="/" className="text-decoration-underline text-primary">
              Login here
            </Link>
          </div>
        </form>
      </div>
      <style jsx>{`
        .register-bg {
            background: linear-gradient(to bottom right, #ede9fe, #ffffff, #f3e8ff);
          }

      
      
      `}</style>
    </main>
  );
};

export default Register;

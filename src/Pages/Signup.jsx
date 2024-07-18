import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { userName, email, password };
    await axios
      .post("https://backend-password-reset-flow.onrender.com/api/user/register-user", payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
      setUserName('')
      setEmail('')
      setPassword('')
    
  };

  return (
    <div>
      <div className="container signup mt-5">
        <div className="row">
          <div className="col p-5 shadow-lg signup-box">
            <h1 className="text-center mb-3 text-signup">Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text fw-medium" id="inputGroup-sizing-lg">
                  User Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text fw-medium" id="inputGroup-sizing-lg">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text fw-medium" id="inputGroup-sizing-lg">
                  Password
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn fw-bold px-5 py-3 mt-3 fs-5">
                Sign Up
              </button>
              <p>
                Already Have an Account ? <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

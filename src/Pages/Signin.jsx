import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("https://backend-password-reset-flow.onrender.com/api/user/login-user", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token);
        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
      setEmail('')
      setPassword('')
  };
  return (
    <div>
      <div className="container signup mt-5">
        <div className="row">
          <div className="col p-5 shadow-lg signin-box">
            <h1 className="text-center mb-3 text-signin">Sign In Page</h1>
            <form onSubmit={handleSubmit}>
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
                  placeholder="Enter Your Email"
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
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn fw-bold px-5 py-3 mt-3 fs-5">
                Sign In
              </button>
              <p>
                Don't Have an Acound Pleace!<Link to="/signup">Sign Up</Link>
              </p>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

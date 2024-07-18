import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email };
    await axios
      .post("https://backend-password-reset-flow.onrender.com/api/user/forgot-password", payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
  };
  return (
    <div>
      <div className="container signup mt-5 p-5">
        <div className="row">
          <div className="col p-5 shadow-lg signin-box bg-white">
            <h1 className="text-center mb-3 text-landingpage">
              Forgot Password ?
            </h1>
            <h3 className="text-center">Enter Your Registered Email Address</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-lg mb-3">
                <span
                  className="input-group-text fw-medium"
                  id="inputGroup-sizing-lg"
                >
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  placeholder="Enter Your Registered Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn fw-bold px-5 py-3 mt-3 fs-5">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

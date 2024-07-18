import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { id,token} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { password, confirmPassword };
    await axios
      .post(
        `https://backend-password-reset-flow.onrender.com/api/user/reset-password/${id}/${token}`,
        payload
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    // setPassword("");
    // setConfirmPassword("");
  };
  return (
    <div>
      <div className="container signup mt-5 p-5">
        <div className="row">
          <div className="col p-5 shadow-lg signin-box bg-white">
            <h1 className="text-center mb-3 text-landingpage">Reset Pssword</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group input-group-lg mb-3">
                <span
                  className="input-group-text fw-medium"
                  id="inputGroup-sizing-lg"
                >
                 New Password
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  placeholder="Enter Password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group input-group-lg mb-3">
                <span
                  className="input-group-text fw-medium"
                  id="inputGroup-sizing-lg"
                >
                  Confirm Password
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  placeholder="Re Enter The Password"
                  // value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn fw-bold px-5 py-3 mt-3 fs-5">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

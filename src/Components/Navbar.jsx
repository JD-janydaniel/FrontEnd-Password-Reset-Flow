import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fw-bold"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ga-maamli-regular">
            Password ResetFlow
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link disabled" aria-disabled="true">
                Home
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

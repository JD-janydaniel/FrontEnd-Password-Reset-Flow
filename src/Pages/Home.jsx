import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import '../index.css'


const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center py-4 g-5">
              <div className="col-12 col-md-6">
                <div className="text-center text-md-start">
                  <h1 className="display-md-2 display-4 fw-bold text-dark pb-2">
                    <span className="textcolor1">Pass</span>
                    <span className="textcolor2">word</span>
                    <span className="textcolor3"> Resetflow</span>
                  </h1>
                  <p className="lead">
                  The password reset flow allows users to regain access by clicking "Forgot Password," receiving a verification link via email, and setting a new password. Security measures include email verification, time-sensitive links, and strong password requirements. This ensures a secure and user-friendly experience for recovering account access.
                  </p>
                  <Link
                    to="/signup"
                    className="btn fw-bold px-5 py-3 mt-3 fs-5"
                  >
                    Getstarted
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="/passwordvector2.jpg"
                  alt="vector"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  );
};

export default Home;

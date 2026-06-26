import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="card auth-card shadow-lg border-0">
        <div className="card-body p-5">

          <h2 className="text-center fw-bold mb-4">
            Create Account
          </h2>

          <form>

            <div className="mb-3">
              <label>Full Name</label>
              <input type="text" className="form-control"  placeholder="Enter Name" />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email"/>
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input   type="password" className="form-control"   placeholder="Create Password"  />
            </div>

            <div className="mb-3">
              <label>Confirm Password</label>
              <input type="password" className="form-control"  placeholder="Confirm Password"  />
            </div>

            <button className="btn btn-warning w-100">
              Sign Up
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account?
            <Link to="/login" className="ms-2">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
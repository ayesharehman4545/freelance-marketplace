import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="card auth-card shadow-lg border-0">
        <div className="card-body p-5">

          <h2 className="text-center fw-bold mb-4">
            Welcome Back
          </h2>

          <form>
            <div className="mb-3">
              <label>Email Address</label>
              <input  type="email"  className="form-control"  placeholder="Enter Email"  />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter Password"/>
            </div>

            <button className="btn btn-warning w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account?
            <Link to="/signup" className="ms-2">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
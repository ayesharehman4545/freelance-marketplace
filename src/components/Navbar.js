import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../App.css";

const Navbar = () => {
  const closeMenu = () => {
  const navbar = document.getElementById("navbarNav");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        transition: "background-color 0.3s ease", }}>
     <div className="container">
  <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/" >
    <img src={process.env.PUBLIC_URL + "/images/icon.png"}
      alt="TechAura Logo"
      style={{
        height: "70px",
        width: "auto",
        borderRadius: "6px",
        objectFit: "contain", }}/>
    <span className="fs-4 fw-bold text-white"> TechAura </span>
  </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item px-2">
             <Link className="nav-link fw-medium text-warning" to="/"  onClick={closeMenu} >
              Home
            </Link>
            </li>

            <li className="nav-item px-2">
                <Link className="nav-link fw-medium text-white-50"  to="/services" onClick={closeMenu}>
                Services
                </Link>
            </li>

            <li className="nav-item px-2">
                <Link className="nav-link fw-medium text-white-50"  to="/seller" onClick={closeMenu}>
                Seller Profile
                </Link>
            </li>

            <li className="nav-item px-2">
                <Link className="nav-link fw-medium text-white-50"  to="/service-details" onClick={closeMenu}>
                Service Details
                </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/about"onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50"  to="/contact" onClick={closeMenu}>
              Contact
              </Link>
            </li>

          <li className="nav-item ms-lg-3 mb-2 mb-lg-0">
  <Link to="/login" onClick={closeMenu} className="text-decoration-none">
    <button className="btn btn-outline-light btn-sm px-4 rounded-pill fw-semibold shadow-sm nav-btn">
      Login
    </button>
  </Link>
</li>

<li className="nav-item ms-lg-3">
  <Link to="/signup" onClick={closeMenu} className="text-decoration-none">
    <button className="btn btn-warning btn-sm px-4 rounded-pill fw-bold shadow-sm nav-btn-signup text-white">
      Sign Up
    </button>
  </Link>
</li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
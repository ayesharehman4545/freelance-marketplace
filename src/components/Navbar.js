import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-nav">
        <div className="container">

          <Link
            className="navbar-brand d-flex align-items-center fw-bold logo" to="/" >
            <img src="/images/icon.png" alt="TechAura" />
            <span>TechAura</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-flex">

            <ul className="navbar-nav ms-4">
              <li className="nav-item">
                <NavLink className="nav-link nav-custom" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-custom" to="/services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-custom"  to="/seller" >
                  Seller Profile
                </NavLink>
              </li>
              
               <li className="nav-item">
                <NavLink className="nav-link nav-custom" to="/service-details" >
                  Service Details
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-custom"   to="/about" >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link nav-custom"   to="/contact" >
                  Contact
                </NavLink>
              </li>

            </ul>

            <div className="ms-auto d-flex gap-2 auth-btns">

              <Link to="/login" className="btn btn-outline-light btn-sm px-3" >
                Login
              </Link>
              <Link to="/signup" className="btn btn-warning btn-sm px-3 fw-bold">
                Sign Up
              </Link>

            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start mobile-menu"
        tabIndex="-1"
        id="offcanvasNavbar">
        <div className="offcanvas-header">
          <h5 className="text-white fw-bold">TechAura</h5>

          <button type="button" className="btn-close " data-bs-dismiss="offcanvas" ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to="/" className="nav-link nav-custom"  data-bs-dismiss="offcanvas">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link nav-custom" data-bs-dismiss="offcanvas" >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/seller" className="nav-link nav-custom" data-bs-dismiss="offcanvas">
                Seller Profile
              </NavLink>
            </li>
            
             <li className="nav-item">
              <NavLink to="/service-details" className="nav-link nav-custom" data-bs-dismiss="offcanvas">
                Service Details
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link nav-custom" data-bs-dismiss="offcanvas">
                About
              </NavLink>
            </li>

            <li className="nav-item"> 
              <NavLink  to="/contact" className="nav-link nav-custom" data-bs-dismiss="offcanvas" >
                Contact
              </NavLink>
            </li>

            <div className="mt-4 d-flex flex-column gap-2">
              <Link to="/login" className="btn btn-outline-light w-100" data-bs-dismiss="offcanvas" >
                Login
              </Link>

              <Link to="/signup" className="btn btn-warning w-100 fw-bold"  data-bs-dismiss="offcanvas" >
                Sign Up
              </Link>

            </div>

          </ul>
        </div>
      </div>

      <style>{`
        html{
          scroll-behavior:smooth;
        }

        .custom-nav {
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
        }

        .logo{
          color:#fff !important;
          font-size:2rem;
          text-decoration:none;
        }

        .logo img{
          width:38px;
          height:38px;
          margin-right:10px;
        }

        .logo span{
          color:white;
          font-weight:700;
        }

        .navbar-nav{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .nav-custom{
          color:white !important;
          font-size:1.15rem;
          font-weight:600;
          position:relative;
          padding:10px 8px !important;
          transition:.3s;
        }

        .nav-custom:hover{
          color:#ff9f1c !important;
        }

        .nav-custom.active{
          color:#ff9f1c !important;
        }

        .nav-custom.active::after{
          content:"";
          position:absolute;
          left:0;
          top:50%;
          transform:translateY(-50%);
          width:4px;
          height:36px;
          background:#ff9f1c;
          border-radius:20px;
        }

        .auth-btns .btn{
          border-radius:25px;
          transition:0.3s;
        }

        .auth-btns .btn:hover{
          transform:translateY(-2px);
        }

        .navbar-toggler{
          box-shadow:none !important;
        }

        .navbar-toggler-icon{
          filter:invert(1);
        }

       .mobile-menu{
        background:#ffffff;
         color:#000;
        }

        .mobile-menu .offcanvas-header{
         background:#fff;
         border-bottom:1px solid #ddd;
        }

        .mobile-menu h5{
        color:#000 !important;
        }

        .mobile-menu .nav-custom{
        color:#000 !important;
        }

        .mobile-menu .nav-custom:hover{
        color:#ff9f1c !important;
        }

        .mobile-menu .nav-custom.active{
         color:#ff9f1c !important;
        }

        .mobile-menu .btn-outline-light{
        border:1px solid #000;
        color:#000;
        }

        .mobile-menu .btn-outline-light:hover{
        background:#000;
        color:#fff;
        }

        @media(max-width:991px){
          .custom-nav{
            padding:12px 0;
          }

          .logo{
            font-size:1.6rem;
          }

          .logo img{
            width:32px;
            height:32px;
          }

          .nav-custom.active::after{
            width:4px;
            height:28px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
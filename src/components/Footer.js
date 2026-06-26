import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
              <h4 className="fw-bold mb-3 text-warning">MyService</h4>

              <p className="text-secondary">
                Providing reliable solutions for your business with quality,
                trust, and professional services.
              </p>

              <div className="d-flex gap-3 fs-4 mt-3">
                <a href="/" className="footer-icon">
                  <FaFacebook />
                </a>

                <a href="/" className="footer-icon">
                  <FaTwitter />
                </a>

                <a href="/" className="footer-icon">
                  <FaInstagram />
                </a>

                <a href="/" className="footer-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li>  <a href="/">Home</a>  </li>
                <li> <a href="/about">About</a> </li>
                <li> <a href="/services">Services</a> </li>
                <li> <a href="/contact">Contact</a> </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <p className="text-secondary">
                <FaMapMarkerAlt className="me-2 text-warning" />
                Lahore, Pakistan
              </p>
              <p className="text-secondary">
                <FaPhoneAlt className="me-2 text-warning" />
                +92 3167421678
              </p>

              <p className="text-secondary">
                <FaEnvelope className="me-2 text-warning" />
               techaura7575@gmail.com
              </p>
            </div>
          </div>

          <hr className="border-secondary" />
          <div className="text-center text-secondary">
            © 2026 MyService. All Rights Reserved.
          </div>
        </div>
      </footer>

      <style>{`
        .footer-icon{
          color:white;
          transition:.3s;
        }

        .footer-icon:hover{
          color:#ffcc00;
          transform:translateY(-4px);
        }

        .footer-links{
          padding-left:0;
        }

        .footer-links li{
          margin-bottom:10px;
        }

        .footer-links a{
          color:#bdbdbd;
          text-decoration:none;
          transition:.3s;
        }

        .footer-links a:hover{
          color:#ffcc00;
          padding-left:6px;
        }

        p{
          margin-bottom:12px;
        }
      `}</style>
    </>
  );
};

export default Footer;
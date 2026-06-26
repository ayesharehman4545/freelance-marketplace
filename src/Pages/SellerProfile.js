import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SellerProfile = () => {
  const projects = [
  {
    img: process.env.PUBLIC_URL + "/images/portfolio1.jfif",
    title: "E-Commerce Website",
    desc: "Full shopping system with cart & payment UI",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio2.jfif",
    title: "Restaurant Website",
    desc: "Online food ordering & menu system",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio3.jfif",
    title: "Portfolio Design",
    desc: "Modern personal portfolio with animations",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio4.jfif",
    title: "Business Dashboard",
    desc: "Admin dashboard with analytics UI",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio5.jfif",
    title: "Blog Website",
    desc: "SEO friendly blog platform",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio6.jfif",
    title: "Landing Page",
    desc: "High converting product landing page",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio7.jfif",
    title: "Booking System",
    desc: "Hotel / appointment booking UI",
  },
  {
    img: process.env.PUBLIC_URL + "/images/portfolio8.jfif",
    title: "Social Media App UI",
    desc: "Modern Instagram-like interface",
  },
];

  return (
    <div className="container py-5 mt-5">

      <div className="card seller-card border-0 shadow-lg overflow-hidden">
        <div className="row g-0 align-items-center">

          <div className="col-lg-4 text-center p-4">
            <img src={process.env.PUBLIC_URL + "/images/pic1.jfif"}  alt="Seller" className="seller-img img-fluid rounded-circle shadow"/>
          </div>

          <div className="col-lg-8 p-4">

            <h2 className="fw-bold mb-2"> Ayesha Rehman </h2>
            <h5 className="text-warning mb-3"> Full Stack Web Developer </h5>
            <p className="text-muted">
              Passionate Full Stack Developer with 5+ years of experience
              building modern, responsive and scalable web applications.
            </p>
            <h6 className="fw-bold mt-4"> Skills  </h6>

            <div className="mb-4">
              <span className="badge bg-primary m-1 p-2">React</span>
              <span className="badge bg-success m-1 p-2">Node.js</span>
              <span className="badge bg-warning text-dark m-1 p-2">Bootstrap</span>
              <span className="badge bg-danger m-1 p-2">MongoDB</span>
              <span className="badge bg-info m-1 p-2">JavaScript</span>
            </div>

            <div className="row text-center mb-4">

              <div className="col-4">
                <h3 className="text-warning fw-bold">100+</h3>
                <small>Projects</small>
              </div>

              <div className="col-4">
                <h3 className="text-warning fw-bold">5+</h3>
                <small>Years</small>
              </div>

              <div className="col-4">
                <h3 className="text-warning fw-bold">4.9★</h3>
                <small>Rating</small>
              </div>

            </div>

            <div className="d-flex flex-wrap gap-3">

              <Link to="/contact">
                <button className="btn btn-warning px-4">
                  Contact Seller
                </button>
              </Link>

              <Link to="/service-details"  className="btn btn-outline-warning px-4" >
                View Service
              </Link>

            </div>

          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center fw-bold mb-2">
          Portfolio Projects
        </h2>

        <p className="text-center text-muted mb-4">
          Some of our latest work & creative designs
        </p>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="portfolio-card shadow-sm">

                <img src={project.img}  alt={project.title}  className="img-fluid portfolio-img" />

                <div className="portfolio-overlay">
                  <h5>{project.title}</h5>
                  <p className="small"> {project.desc}  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default SellerProfile;
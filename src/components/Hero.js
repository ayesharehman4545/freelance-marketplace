import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "bootstrap";
import "../App.css";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hero = document.querySelector("#heroCarousel");

    if (hero) {
      new Carousel(hero, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
        touch: true,
      });
    }
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide hero" >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={process.env.PUBLIC_URL + "/images/background.jfif"} className="d-block w-100 hero-img"  alt="Hero 1" />

          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">   Build Stunning Digital Experiences</h1>
            <p className="hero-text"> Modern UI • Professional Freelancers • Creative Solutions </p>
            <button className="btn btn-warning btn-lg hero-btn" onClick={() => navigate("/services")}>
              Explore Services
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + "/images/background1.jfif"} className="d-block w-100 hero-img"  alt="Hero 2" />

          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title"> Grow Your Business Faster </h1>
            <p className="hero-text">Hire Top Freelancers For Every Project </p>
            <button className="btn btn-warning btn-lg hero-btn" onClick={() => navigate("/services")}>
              Hire Now
            </button>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev"  type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default Hero;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

 const team = [
  {
    id: 1,
    name: "Ayesha Rehman",
    role: "CEO & Founder",
    image: process.env.PUBLIC_URL + "/images/pic3.jfif",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "UI/UX Designer",
    image: process.env.PUBLIC_URL + "/images/pic2.jfif",
  },
  {
    id: 3,
    name: "Ali Ahmed",
    role: "Full Stack Developer",
    image: process.env.PUBLIC_URL + "/images/pic8.jfif",
  },
];

  return (
    <>
      <section className="about-hero text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-3 fw-bold" data-aos="fade-up">
            About Us
          </h1>
          <p className="lead mt-3" data-aos="fade-up" data-aos-delay="200">
            Empowering businesses and freelancers through innovative digital solutions
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-img-wrapper">
              <img src={process.env.PUBLIC_URL + "/images/about1.jfif"}
               className="img-fluid rounded-4 shadow-lg"  alt="about"/>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">Who We Are</h2>

            <p className="text-muted">
              We are a modern digital platform connecting skilled professionals
              with global businesses to deliver high-quality solutions.
            </p>

            <div className="mt-4">
              <h5>🚀 Platform Purpose</h5>
              <p className="text-muted">
                Build a bridge between freelancers and clients worldwide.
              </p>

              <h5>🎯 Business Goals</h5>
              <p className="text-muted">
                Deliver reliable, scalable and innovative digital services.
              </p>

              <h5>🏢 Company Background</h5>
              <p className="text-muted">
                Founded with a vision to empower digital growth globally.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" data-aos="fade-up">
              Our Mission & Vision
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6" data-aos="zoom-in">
              <div className="p-4 bg-white shadow rounded-4 h-100 mission-card">
                <h3>🎯 Mission</h3>
                <p className="text-muted">
                  To provide smart digital solutions that help businesses grow faster.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="zoom-in">
              <div className="p-4 bg-white shadow rounded-4 h-100 mission-card">
                <h3>🌍 Vision</h3>
                <p className="text-muted">
                  To become a globally trusted digital service platform.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" data-aos="fade-up">
            Meet Our Team
          </h2>
        </div>

        <div className="row g-4">

          {team.map((member) => (
            <div
              className="col-lg-4 col-md-6"
              key={member.id}
              data-aos="flip-left" >
              <div className="team-card text-center p-3">
                <img src={member.image} alt={member.name}  className="team-img mb-3"/>

                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default About;
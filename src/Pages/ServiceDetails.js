import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const reviews = [
  {
    name: "Sarah",
    image: process.env.PUBLIC_URL + "/images/pic1.jfif",
    review: "Amazing work! Highly recommended.",
  },
  {
    name: "Aliya",
    image: process.env.PUBLIC_URL + "/images/pic2.jfif",
    review: "Delivered before deadline.",
  },
  {
    name: "Eman",
    image: process.env.PUBLIC_URL + "/images/pic3.jfif",
    review: "Outstanding communication and quality.",
  },
  {
    name: "Zara",
    image: process.env.PUBLIC_URL + "/images/pic4.jfif",
    review: "Very professional and responsive throughout the project.",
  },
  {
    name: "Ali",
    image: process.env.PUBLIC_URL + "/images/pic8.jfif",
    review: "Excellent design skills and attention to detail.",
  },
  {
    name: "Meer",
    image: process.env.PUBLIC_URL + "/images/pic6.jfif",
    review: "The website exceeded my expectations. Great job!",
  },
];
const ServiceDetails = () => {
return ( <div className="container py-5 mt-5">

  <div className="service-banner">
  <img src={process.env.PUBLIC_URL + "/images/banner.jpg"} alt="Service Banner" className="img-fluid rounded-4 shadow-lg"/>
  </div>

  <div className="card service-card border-0 shadow-lg p-4 mt-4">
    <div className="d-flex justify-content-between flex-wrap align-items-center">

      <div>
        <h2 className="fw-bold">
          Professional Website Development
        </h2>

        <p className="text-muted">
          Modern responsive websites using React,
          Bootstrap, Node.js and MongoDB.
        </p>
      </div>

      <div className="rating-box">
        ⭐ 4.9 (250 Reviews)
      </div>

    </div>

    <hr />

    <div className="row text-center g-4">

      <div className="col-md-4">
        <div className="info-box">
          <h6>Price</h6>
          <h4 className="text-warning">$120</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-box">
          <h6>Delivery Time</h6>
          <h4>3 Days</h4>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-box">
          <h6>Revisions</h6>
          <h4>Unlimited</h4>
        </div>
      </div>

    </div>

    <hr />

    <h4 className="mb-3">Service Features</h4>

    <ul className="feature-list">
      <li>✔ Responsive Design</li>
      <li>✔ SEO Friendly</li>
      <li>✔ Fast Loading</li>
      <li>✔ Modern UI/UX</li>
      <li>✔ Clean Code</li>
      <li>✔ Free Support</li>
    </ul>

    <div className="d-flex gap-3 flex-wrap mt-3">

      <button className="btn btn-warning px-4">
        Order Now
      </button>

      <Link to="/seller" className="btn btn-outline-warning px-4">
        Seller Profile
      </Link>

    </div>
  </div>

  <div className="mt-5">

    <h3 className="text-center mb-4">
      Client Reviews
    </h3>

    <div className="row g-4">

      {reviews.map((item, index) => (

        <div className="col-lg-4 col-md-6" key={index}>
          <div className="review-card h-100 text-center">

            <img  src={item.image} alt={item.name} className="review-img mb-3" />
            <h5>⭐⭐⭐⭐⭐</h5>
            <p>{item.review}</p>
            <strong>{item.name}</strong>

          </div>
        </div>

      ))}

    </div>

  </div>

</div>


);
};

export default ServiceDetails;

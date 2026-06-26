import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    freelancer: "Ali Khan",
    description: "Professional responsive websites.",
    price: "PKR 35,000",
    rating: "⭐ 4.9",
    category: "Web Development",
    image: process.env.PUBLIC_URL + "/images/service1.jfif",
  },
  {
    id: 2,
    title: "Graphic Design",
    freelancer: "Sara Ahmed",
    description: "Creative logo and branding design.",
    price: "PKR 22,000",
    rating: "⭐ 4.8",
    category: "Graphic Design",
    image: process.env.PUBLIC_URL + "/images/service6.jfif",
  },
  {
    id: 3,
    title: "Video Editing",
    freelancer: "Hamza",
    description: "Professional video editing services.",
    price: "PKR 28,000",
    rating: "⭐ 4.7",
    category: "Video Editing",
    image: process.env.PUBLIC_URL + "/images/service10.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    freelancer: "Ayesha",
    description: "Social media growth strategies.",
    price: "PKR 25,000",
    rating: "⭐ 4.8",
    category: "Marketing",
    image: process.env.PUBLIC_URL + "/images/service8.jfif",
  },
  {
    id: 5,
    title: "Content Writing",
    freelancer: "Fatima",
    description: "SEO optimized content writing.",
    price: "PKR 18,000",
    rating: "⭐ 4.9",
    category: "Writing",
    image: process.env.PUBLIC_URL + "/images/service7.jfif",
  },
  {
    id: 6,
    title: "Mobile App Development",
    freelancer: "Usman",
    description: "Android & iOS applications.",
    price: "PKR 60,000",
    rating: "⭐ 5.0",
    category: "Programming",
    image: process.env.PUBLIC_URL + "/images/service4.jfif",
  },
  {
    id: 7,
    title: "WordPress Website",
    freelancer: "Bilal",
    description: "Custom WordPress solutions.",
    price: "PKR 32,000",
    rating: "⭐ 4.8",
    category: "Web Development",
    image: process.env.PUBLIC_URL + "/images/service9.jfif",
  },
  {
    id: 8,
    title: "UI/UX Design",
    freelancer: "Hira",
    description: "Modern user experience designs.",
    price: "PKR 27,000",
    rating: "⭐ 4.9",
    category: "Graphic Design",
    image: process.env.PUBLIC_URL + "/images/service2.jfif",
  },
  {
    id: 9,
    title: "YouTube Editing",
    freelancer: "Ahmad",
    description: "Engaging YouTube videos.",
    price: "PKR 24,000",
    rating: "⭐ 4.7",
    category: "Video Editing",
    image: process.env.PUBLIC_URL + "/images/service16.jfif",
  },
  {
    id: 10,
    title: "Facebook Ads",
    freelancer: "Zain",
    description: "Targeted ad campaigns.",
    price: "PKR 38,000",
    rating: "⭐ 4.8",
    category: "Marketing",
    image: process.env.PUBLIC_URL + "/images/service13.png",
  },
  {
    id: 11,
    title: "Blog Writing",
    freelancer: "Noor",
    description: "High-quality blog articles.",
    price: "PKR 16,000",
    rating: "⭐ 4.9",
    category: "Writing",
    image: process.env.PUBLIC_URL + "/images/service14.jfif",
  },
  {
    id: 12,
    title: "React Development",
    freelancer: "Taha",
    description: "Modern React web applications.",
    price: "PKR 52,000",
    rating: "⭐ 5.0",
    category: "Programming",
    image: process.env.PUBLIC_URL + "/images/service15.jfif",
  },
];
function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredServices = servicesData.filter((service) => {
    const matchSearch = service.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || service.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container py-5 mt-5">
      <h1 className="text-center fw-bold mb-4">
        Explore Freelance Services
      </h1>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"  className="form-control shadow-sm"   placeholder="Search Services..."  value={search}
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
      
        <div className="text-center mb-5">
        {[
          "All",
          "Web Development",
          "Graphic Design",
          "Writing",
          "Marketing",
          "Video Editing",
          "Programming",
        ].map((cat) => (
          <button  key={cat} className={`btn m-2 ${
              category === cat
                ? "btn-warning"
                : "btn-outline-warning"  }`}
            onClick={() => setCategory(cat)} > {cat} </button>  ))}
      </div>

     <div className="row g-4">
        {filteredServices.map((service) => (
          <div
            className="col-lg-3 col-md-6"
            key={service.id}>
            <div className="card service-card h-100 shadow border-0">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title} />

              <div className="card-body">
                <h5 className="fw-bold"> {service.title} </h5>

                <p className="text-muted">  {service.freelancer}</p>
                <p>{service.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-success"> {service.price} </span>

                  <span>{service.rating}</span>
                </div>

                <button className="btn btn-warning w-100 mt-3"> Get Service</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
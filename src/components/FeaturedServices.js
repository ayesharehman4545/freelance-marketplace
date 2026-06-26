import React from "react";

const services = [
  {
    title: "Web Development",
    img: `${process.env.PUBLIC_URL}/images/service1.jfif`,
    desc: "Modern responsive websites",
  },
  {
    title: "UI/UX Design",
    img: `${process.env.PUBLIC_URL}/images/service2.jfif`,
    desc: "Creative user interfaces",
  },
  {
    title: "Digital Marketing",
    img: `${process.env.PUBLIC_URL}/images/service3.jfif`,
    desc: "Strong digital identity",
  },
  {
    title: "Mobile App Development",
    img: `${process.env.PUBLIC_URL}/images/service4.jfif`,
    desc: "Android & iOS apps",
  },
  {
    title: "SEO Optimization",
    img: `${process.env.PUBLIC_URL}/images/service5.jfif`,
    desc: "Rank your website on Google",
  },
  {
    title: "Graphic Design",
    img: `${process.env.PUBLIC_URL}/images/service6.jfif`,
    desc: "Logos, banners & branding",
  },
  {
    title: "Content Writing",
    img: `${process.env.PUBLIC_URL}/images/service7.jfif`,
    desc: "Engaging blog & website content",
  },
  {
    title: "E-commerce Solutions",
    img: `${process.env.PUBLIC_URL}/images/service8.jfif`,
    desc: "Online store development",
  },
  {
    title: "WordPress Development",
    img: `${process.env.PUBLIC_URL}/images/service9.jfif`,
    desc: "Custom WordPress websites",
  },
  {
    title: "Video Editing",
    img: `${process.env.PUBLIC_URL}/images/service10.png`,
    desc: "Professional video editing",
  },
  {
    title: "Social Media Management",
    img: `${process.env.PUBLIC_URL}/images/service11.jfif`,
    desc: "Grow your social presence",
  },
  {
    title: "Cyber Security",
    img: `${process.env.PUBLIC_URL}/images/service12.jfif`,
    desc: "Secure your systems & data",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 container">
      <h2 className="text-center mb-5">Our Services</h2>

      <div className="row">
        {services.map((s, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card card-3d text-dark p-3">
              <img src={s.img} alt="" height="200px" />
              <h4 className="mt-3">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
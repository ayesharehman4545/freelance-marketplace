import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject.trim())
      newErrors.subject = "Subject is required";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="contact-page"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}>
      <div className="container">
        <div className="text-center text-dark mb-5">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div
              className="p-4 p-md-5"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #ddd",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)", }}>
              <h3 className="text-dark mb-4">Send Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input  type="text" name="name" placeholder="Your Name"  className="form-control form-control-lg"
                    style={{ color: "#000" }}
                    value={form.name}
                    onChange={handleChange}/>
                  {errors.name && (
                    <small className="text-danger">
                      {errors.name}
                    </small>  )}
                </div>

                <div className="mb-3">
                  <input type="email"  name="email" placeholder="Your Email"  className="form-control form-control-lg"
                    style={{ color: "#000" }}
                    value={form.email}
                    onChange={handleChange} />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email}
                    </small> )}
                </div>

                <div className="mb-3">
                  <input  type="text" name="subject"  placeholder="Subject" className="form-control form-control-lg"
                    style={{ color: "#000" }}
                    value={form.subject}
                    onChange={handleChange}/>
                 
                  {errors.subject && (
                    <small className="text-danger">
                      {errors.subject}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <textarea  rows="6" name="message"  placeholder="Write your message..." className="form-control form-control-lg"
                    style={{ color: "#000" }}
                    value={form.message}
                    onChange={handleChange}/>
                  {errors.message && (
                    <small className="text-danger">
                      {errors.message}
                    </small>
                  )}
                </div>

                <button className="btn btn-warning btn-lg px-5" type="submit" >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="p-4 p-md-5 h-100"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #ddd",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)", }} >

              <h3 className="mb-4 text-dark">
                Contact Information
              </h3>

              <div className="mb-4 text-dark">
                <h5>📍 Address</h5>
                <p>Hafiz center, Lahore, Pakistan</p>
              </div>

              <div className="mb-4 text-dark">
                <h5>📞 Phone</h5>
                <p>+92 3167421678</p>
              </div>

              <div className="mb-4 text-dark">
                <h5>✉️ Email</h5>
                <p>techaura7575@gmail.com</p>
              </div>

              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{
                  border: 0,
                  borderRadius: "15px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
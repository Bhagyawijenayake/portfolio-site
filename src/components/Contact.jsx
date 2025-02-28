import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; // Updated import
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/contact.css"; // Import your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        import.meta.env.VITE_USER_ID // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <h1 data-aos="fade-up">Contact Me</h1>
      <p data-aos="fade-up" data-aos-delay="100">
        Feel free to reach out to me for collaborations, opportunities, or just
        a friendly chat!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            <FaPaperPlane /> Send Message
          </button>
          {isSubmitted && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="contact-info" data-aos="fade-up" data-aos-delay="300">
          <h2>Get in Touch</h2>
          <p>
            You can also reach me directly via email or connect with me on
            social media.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong> bhagyasudaraka98@gmail.com
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/bhagyawijenayake/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Bhagyawijenayake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useEffect } from "react";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../css/blog.css";

const Blog = () => {
  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="blog-section">
      <h2 data-aos="fade-up">Blog</h2>

      {/* LinkedIn Article */}
      <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
        <h3>
          <FaLinkedin /> Exploring the Usage of useState in React
        </h3>
        <div className="article-preview">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQHCJgWQ1EGviw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686663061487?e=1746057600&v=beta&t=xqAkJHfylMIJSjKL4J6XrEnZB8vL4VjfqjQJ106Y_u0"
            alt="Exploring the Usage of useState in React"
            className="preview-image"
            data-aos="zoom-in"
          />
          <p className="preview-description" data-aos="fade-up">
            Learn how to effectively use the useState hook in React to manage
            state in functional components.
          </p>
          <a
            href="https://www.linkedin.com/pulse/exploring-usage-usestate-react-bhagya-wijenayake/"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-link"
            data-aos="fade-up"
          >
            Read on LinkedIn
          </a>
        </div>
      </div>

      {/* Medium Article */}
      <div className="blog-card" data-aos="fade-up" data-aos-delay="200">
        <h3>
          <FaMedium /> Understanding AbortController in JavaScript
        </h3>
        <div className="article-preview">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1fByfyXPSgR-pMgEbiujBA.png"
            alt="Understanding AbortController in JavaScript"
            className="preview-image"
            data-aos="zoom-in"
          />
          <p className="preview-description" data-aos="fade-up">
            A deep dive into the AbortController API in JavaScript and how it
            can be used to cancel fetch requests.
          </p>
          <a
            href="https://medium.com/gitconnected/understanding-abortcontroller-in-javascript-ae688d2ecb2f?sk=44df0d145a053ed41b2cbd66ae11bf51"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-link"
            data-aos="fade-up"
          >
            Read on Medium
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

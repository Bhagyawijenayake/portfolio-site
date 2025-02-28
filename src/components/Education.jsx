import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import "../css/education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2 data-aos="fade-down">
        <FaGraduationCap /> Education
      </h2>

      {/* Education 1 */}
      <div className="education-card" data-aos="fade-up">
        <h3>BSc. (Hons) in Software Engineering</h3>
        <p>University of Kelaniya | 2020 - 2024</p>
        <p>GPA: 3.14 | Degree Classification: Second Class Lower Division</p>
      </div>

      {/* Education 2 */}
      <div className="education-card" data-aos="fade-up" data-aos-delay="100">
        <h3>Physical Science (2017 A/L)</h3>
        <p>Maliyadeva College | 2004 - 2017</p>
        <p>Chemistry A | Combined Mathematics B | Physics B</p>
      </div>

      {/* Certificate Section */}
      <div
        className="certificate-section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>
          <FaCertificate /> Certificates
        </h2>
        <div className="certificate-card" data-aos="fade-right">
          <h3>Full Stack Web Development</h3>
          <p>Issued by: Udemy | 2023</p>
          <p>Skills: React, Node.js, MongoDB, Express.js</p>
        </div>
        <div
          className="certificate-card"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3>JavaScript Algorithms and Data Structures</h3>
          <p>Issued by: freeCodeCamp | 2022</p>
          <p>Skills: JavaScript, Algorithms, Data Structures</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

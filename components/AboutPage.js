// About.js
import React from 'react';
import './files/About.css';
import Instagram from './Images/instagram.jpeg'; // Import the Instagram image
import Twitter from './Images/twitter.png'; // Import the Twitter image

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to FashionDesignSystem, where creativity meets innovation in the world of fashion. Our platform is dedicated to revolutionizing the way designers bring their visions to life and empowering fashion enthusiasts to explore their passion.</p>

      <h3>Our Vision</h3>
      <p>Our vision is to redefine the fashion industry by providing a dynamic platform that inspires creativity, fosters collaboration, and promotes sustainability. We believe that every individual has the potential to make a unique contribution to the world of fashion.</p>

      <h3>Our Mission</h3>
      <p>Our mission is to empower designers, stylists, and fashion enthusiasts to express themselves freely through their designs. We strive to create a supportive community where creativity flourishes and boundaries are pushed.</p>

      <h3>Contact Us</h3>
      <p>For inquiries, please contact us at: <strong>+1234567890</strong></p>

      <h3>Connect With Us</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" /> {/* Use curly braces to reference the imported image */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" /> {/* Use curly braces to reference the imported image */}
        </a>
      </div>

      <h3>Our Team</h3>
      <p>We have a team of passionate individuals committed to pushing the boundaries of creativity and innovation in the world of fashion. Our team includes designers, developers, educators, and industry experts.</p>

      <h3>Join Us</h3>
      <p>Whether you're a seasoned designer or a fashion enthusiast, join us to shape the future of fashion and create a more sustainable and inclusive world for all.</p>

      <p>Thank you for choosing FashionDesignSystem. Let's create something extraordinary together.</p>
    </div>
  );
}

export default About;

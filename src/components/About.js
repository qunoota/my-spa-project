import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-secondary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Learn more about our mission, values, and the team behind our success.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="lead text-center">
          To deliver innovative, high-quality products and services that empower individuals and businesses to thrive in a fast-changing world.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Values</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-lightbulb-fill text-warning mb-3" style={{ fontSize: '3rem' }}></i>
              <h4>Innovation</h4>
              <p>We embrace creativity and forward-thinking to stay ahead.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-people-fill text-info mb-3" style={{ fontSize: '3rem' }}></i>
              <h4>Collaboration</h4>
              <p>Teamwork is at the heart of everything we do.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-check text-success mb-3" style={{ fontSize: '3rem' }}></i>
              <h4>Integrity</h4>
              <p>We are committed to honesty, transparency, and accountability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-3"
            />
            <h5>Jane Doe</h5>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-3"
            />
            <h5>John Smith</h5>
            <p>Chief Technology Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-3"
            />
            <h5>Emily Johnson</h5>
            <p>Head of Marketing</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta bg-dark text-white py-5">
        <div className="container text-center">
          <h2>Want to Know More About Us?</h2>
          <p>Contact us today to learn how we can help you succeed.</p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

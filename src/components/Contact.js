import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you! Get in touch with us through the form or the details below.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>
              <i className="bi bi-envelope-fill text-primary me-2"></i>Email
            </h3>
            <p>
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
          </div>
          <div className="col-md-4">
            <h3>
              <i className="bi bi-telephone-fill text-primary me-2"></i>Phone
            </h3>
            <p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
          </div>
          <div className="col-md-4">
            <h3>
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>Address
            </h3>
            <p>123 React Street, JavaScript City, 45678</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Send Us a Message</h2>
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Location</h2>
          <div className="map-container" style={{ width: '100%', height: '400px', backgroundColor: '#e9ecef' }}>
            <p className="lead pt-5">
              [Map Placeholder] Add a Google Map here for your office location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

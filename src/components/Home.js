import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">
            Explore our latest updates, features, and services.
          </p>
          <a href="#features" className="btn btn-light btn-lg mt-3">
            Learn More
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container my-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-gear-fill text-primary mb-3" style={{ fontSize: '3rem' }}></i>
            <h4>High Performance</h4>
            <p>Experience lightning-fast performance with our innovative solutions.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-shield-check text-success mb-3" style={{ fontSize: '3rem' }}></i>
            <h4>Secure</h4>
            <p>Your safety is our priority with top-notch security features.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-people-fill text-info mb-3" style={{ fontSize: '3rem' }}></i>
            <h4>User-Friendly</h4>
            <p>Our platform is designed for an intuitive and seamless user experience.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial">
                <p>
                  <em>"This website exceeded all my expectations. Highly recommend!"</em>
                </p>
                <h5>- Jane Doe</h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial">
                <p>
                  <em>"Outstanding service and features. A truly amazing experience."</em>
                </p>
                <h5>- John Smith</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta bg-dark text-white py-5">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied users today.</p>
          <a href="/signup" className="btn btn-primary btn-lg">
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

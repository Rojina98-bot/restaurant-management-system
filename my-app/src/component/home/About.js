import React from 'react';
import {Link} from 'react-router-dom';
const About=()=>{
    return(
        <>
  <header>
    <h1 className="site-heading text-center text-faded d-none d-lg-block">
      <span className="site-heading-upper text-primary mb-3">
        A Restaurant Management System
      </span>
      <span className="site-heading-lower">Business Casual</span>
    </h1>
  </header>
  <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div className="container">
      <a
        className="navbar-brand text-uppercase fw-bold d-lg-none"
        href="index.html"
      >
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-lg-4">
            <Link className="nav-link text-uppercase" to="../">
              Home
            </Link>
          </li>
          <li className="nav-item px-lg-4">
            <Link className="nav-link text-uppercase" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item px-lg-4">
            <Link className="nav-link text-uppercase" to="/Login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="page-section about-heading">
    <div className="container">
      <img
        className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
        src="assets/img/about.jpg"
        alt="..."
      />
      <div className="about-heading-content">
        <div className="row">
          <div className="col-xl-9 col-lg-10 mx-auto">
            <div className="bg-faded rounded p-5">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">
                Where Flavor Takes Flight!
                </span>
                <span className="section-heading-lower">About Our Restaurant</span>
              </h2>
              <p>
              Welcome to HUNGRY BUNNY, a culinary haven where flavors dance on your taste buds 
              and ambiance transports you to a world of gastronomic delights. Nestled in the heart of
               Kathmandu, our restaurant is a celebration of fine dining and a testament to our passion
                for food. At HUNGRY BUNNY, we take pride in crafting exquisite dishes that blend
                 the freshest ingredients with innovative culinary techniques. Our dedicated team of
                  chefs, sommeliers, and staff work together to create an unforgettable dining 
                  experience for each guest who walks through our doors. Whether you're savoring 
                  the rich aroma of our handcrafted cocktails, indulging in our meticulously
                   prepared dishes, or relishing the warm hospitality, every moment spent 
                   at HUNGRY BUNNY is a journey of delight. 
              </p>
              <p className="mb-0">
              Join us for an exceptional dining experience that lingers on your palate and in your 
                <em> heart</em>
                ,leaving you with cherished memories that will beckon you to return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer text-faded text-center py-5">
    <div className="container">
    </div>
  </footer>
</>

    )
}
export default About;
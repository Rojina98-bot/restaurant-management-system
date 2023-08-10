import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from 'react-router-dom';
const Home=()=>{
    return(
        <>component/
        <header>
          <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">
              Hungry Bunny
            </span>
            <span className="site-heading-lower">Business Casual</span>
          </h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div className="container">
            <a
              className="navbar-brand text-uppercase fw-bold d-lg-none"
              href="./"
            >
              Visit Today
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
                  <Link className="nav-link text-uppercase" to="./">
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
        <section className="page-section clearfix">
          <div className="container">
            <div className="intro">
              <img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src="assets/img/intro.jpg"
                alt="..."
              />
              <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Taste Delight</span>
                  <span className="section-heading-lower">Worth Tasting</span>
                </h2>
                <p className="mb-3">
                Indulge your taste buds with our diverse and mouthwatering
                menu that caters to every craving. From sizzling steaks to
                gourmet burgers, delectable pasta to exotic sushi, our chefs 
                craft each dish with passion and expertise.
                </p>
                <div className="intro-button mx-auto">
                  <a className="btn btn-primary btn-xl" href="#!">
                    Visit Us Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner bg-faded text-center rounded">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Our Promise</span>
                    <span className="section-heading-lower">To You</span>
                  </h2>
                  <p className="mb-0">
                    When you walk into our shop to start your day, we are dedicated to
                    providing you with friendly service, a welcoming atmosphere, and
                    above all else, excellent menu made with the highest quality
                    ingredients. If you are not satisfied, please let us know and we
                    will do whatever we can to make things right!
                  </p>
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
export default Home;
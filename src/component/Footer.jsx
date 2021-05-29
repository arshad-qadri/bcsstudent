import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <div className="footer-css mx-auto d-flex justify-content-evenly align-items-center ">
            <a className="navbar-brand footer-title" href="#/">
              &copy; Baker Web Academy. Proudly created with Wix.com
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    SECTIONS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    GET INVOLVED!
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    ABOUT
                  </a>
                </li>
              </ul>
            </div>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

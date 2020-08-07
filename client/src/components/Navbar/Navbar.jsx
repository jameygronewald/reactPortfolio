import React from "react";

const Navbar = () => {
  return (
    <nav className="topNavBar navbar navbar-expand-sm navbar-dark fixed-top">
      <a id="navbarBrand" className="navbar-brand col-7" href="about">
        Jamey Gronewald
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link divider" href="about">
            Home 
          </a>
          <a className="nav-item nav-link divider" href="portfolio">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

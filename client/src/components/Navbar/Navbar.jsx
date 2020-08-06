import React from "react";

const Navbar = () => {
  return (
    <nav class="topNavBar navbar navbar-expand-sm navbar-dark fixed-top">
      <a id="navbarBrand" class="navbar-brand col-7" href="#">
        Jamey Gronewald
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link divider active" href="about">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link divider" href="portfolio">
            Portfolio
          </a>
          <a class="nav-item nav-link" href="contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

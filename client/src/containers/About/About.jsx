import React from "react";

const About = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="card col-lg-8 aboutCard">
          <header id="aboutHeader" className="card-header">
            About
          </header>
          <div className="card-body row">
            <figure>
              <img
                id="aboutImage"
                className="card-img-top col-sm-4"
                src=""
                alt="Jamey"
              />
            </figure>
            <div className="row col-md-6">
              <div className="card-text">
                Full-stack web developer interested in storytelling and building
                new platforms from which artists can create and be heard. From
                Atlanta, GA and based out of Seattle, WA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

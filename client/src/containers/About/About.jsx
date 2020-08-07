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
                src={require("../../assets/appImages/portfolioAbout.png")}
                alt="Jamey"
              />
            </figure>
            <div className="row col-md-6">
              <div className="card-text">
                Full-stack web developer with skills in JavaScript, React,
                Express, node.js, and MongoDB. Passionate about learning and
                discovering new avenues through which to participate in the
                creative process. Firmly believe that the experience of others
                should form the basis of products and services. Interested in
                storytelling and building new platforms from which artists can
                create and be heard. From Atlanta, GA and based out of Seattle,
                WA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

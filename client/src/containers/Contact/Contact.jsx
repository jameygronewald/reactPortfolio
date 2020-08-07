import React from "react";
import resume from "../../assets/resume.pdf"

const Contact = () => {
  return (
    <main className="container contactContent">
      <div className="row">
        <h1 id="contactHeader" className="page-header col-md-4">
          Contact Me
        </h1>
        <div className="contactCard card col-md-6 mx-auto">
          <div className="card-body">
            <h2 className="card-title">
              <a className="hyperlink" href="mailto:jrgronewald@gmail.com">
                <strong>Email: jrgronewald@gmail.com</strong>
              </a>
            </h2>
            <h3 className="card-subtitle mb-2">Cell: 404-242-0029</h3>
            <h4>
              <a
                className="row hyperlink mx-auto"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Resume</strong>
              </a>
            </h4>
            <h4>
              <a
                className="row hyperlink mx-auto"
                href="https://github.com/jameygronewald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Github</strong>
              </a>
            </h4>
            <h4>
              <a
                className="row hyperlink mx-auto"
                href="https://www.linkedin.com/in/jamey-gronewald-08411a1a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>LinkedIn</strong>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

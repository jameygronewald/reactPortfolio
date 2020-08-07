import React from 'react';

const ProjectCard = ({ imageName, projectTitle, cardText, deployedLink, repoName }) => {
    return (
        <section className="card col-lg-3 projectCard">
          <figure>
            <img
              className="card-img-top projectImage"
              src={imageName}
              alt={projectTitle}
            />
          </figure>
          <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text">
              {cardText}
            </p>
          </div>
          <div className="card-footer row">
            <strong className="text-dark col-12">
              Run the{" "}
              <span>
                <a
                  className="hyperlink"
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web App
                </a>
              </span>
            </strong>
            <strong className="text-dark col-12">
              Check Out the{" "}
              <span>
                <a
                  className="hyperlink"
                  href={`https://github.com/jameygronewald/${repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </span>
            </strong>
          </div>
        </section>
    );
};

export default ProjectCard;
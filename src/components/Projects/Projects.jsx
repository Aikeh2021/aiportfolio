import React from "react";
import "./Projects.css";

const Projects = ({title, description, link, updated, image, alt, contribution,skills, site, siteName}) => {

    return (
    <div>
      <div className="card mb-3">
        <img src={image} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
          {description} 
          </p>
          <h4 className="card-title">Contributions/Skills:</h4>
          <p className="card-text">
          {contribution} 
          </p>
          <p className="card-text">
          {skills} 
          </p>
          <a className="btn-lg btn btn-danger button-q" href={link} target="_blank" rel="noreferrer">View Github Repo</a>
          <a className="btn-lg btn btn-danger button-q" href={site} target="_blank" rel="noreferrer">{siteName}</a>
          <p className="card-text">
            <small className="text-muted">{updated}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

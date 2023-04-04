import React from "react";
import "../../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import project1Image from "../../images/project1.jpeg";
import project2Image from "../../images/project2.jpeg";

const projects = [
  {
    title: "NSP Sports",
    description: "A sports news website.",
    image: project1Image,
    url: "https://santizetina.github.io/NSP-Sports/",
  },
  {
    title: "Retrogram",
    description: "A social media platform for people who miss the simpler way's.",
    image: project2Image,
    url: "https://project-2-retrogram.herokuapp.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="container portfolio-container">
      <h1>My Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 card-container">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

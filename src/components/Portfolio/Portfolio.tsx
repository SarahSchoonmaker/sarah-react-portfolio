import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";

const projects = [
  {
    title: "Pet Pals",
    description:
      "Users register, create a profile, search for friends, create posts, message friends, comment and like posts from friends. React, Node, Express, Vite, MongoDB. Github repo is available upon request. Currently private due to submissions to startup accelerators. You can create a user and connect with test friends in Los Angeles.",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/SarahSchoonmaker/real-estate-react",
    demo: "https://petpalco.io",
    image: require("../../assets/petpal.png"),
  },
  {
    title: "Pizza Shop",
    description:
      "This is a fullstack food ordering app built with Next.js 14 (React.js, MongoDB, Tailwind CSS).",
    tech: ["React", "Next.js", "MongoDB"],
    github: "https://github.com/SarahSchoonmaker/pizza-shop-react",
    image: require("../../assets/pizza.png"),
  },
  {
    title: "GDPR Compliance Geographic Monitor ",
    description: `Analyzed 100K+ demo data as Amazon employee data access patterns for EU merchant data, detecting cross-border
GDPR violations with real-time geographic monitoring`,
    tech: ["Python (GeoPandas, Folium, Scikit-learn) with SQLite"],
    github: "https://github.com/SarahSchoonmaker/compliance-geospatial-analysis",
    image: require("../../assets/compliance.png"),

  },
  {
    title: "Maritime Vessel Traffic",
    description: `A Python-based platform for analyzing and predicting maritime trade route disruptions using geospatial data, machine learning, and database-driven vessel tracking.`,
    tech: [
      "Python",
      "GeoPandas",
      "Folium",
      "Scikit-learn",
      "Pandas",
      "SQLAlchemy",
    ],
    github: "https://github.com/SarahSchoonmaker/maritime-geospatial-analyzer",
    image: require("../../assets/results.png"),
  },
];

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View project on GitHub"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>
                  {project.description}{" "}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}

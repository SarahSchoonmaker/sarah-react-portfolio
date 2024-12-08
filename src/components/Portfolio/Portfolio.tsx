import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Projects</h2>
      <div className="projects">
        {/* Project 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/SarahSchoonmaker/real-estate-react"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project on GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real Estate App with React</h3>
              <p>
                Realtor app allows users to find their dream homes or rental
                properties, and it also allows users to list their properties
                for rent or sale.
                <a
                  href="https://github.com/SarahSchoonmaker/real-estate-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Code
                </a>
                .
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2 */}
        <ScrollAnimation animateIn="flipInX">
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
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/SarahSchoonmaker/React-airbb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project on GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Air B&B Clone</h3>
              <p>
                Clone of Air B&B using React, Redux, Express, JWT, MongoDB.
                <a
                  href="https://github.com/SarahSchoonmaker/React-airbb"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Code
                </a>
                .
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

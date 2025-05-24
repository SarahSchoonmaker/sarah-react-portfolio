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
              <h3>Pet Pals</h3>
              <p>
                Users register, create a profile, search for friends, create posts, message friends, 
                comment and like posts from friends. React, Node, Express, Vite, MongoDB. Github repo is available
                upon request. Currently private due to submissions to startup accelerators. You can create a user 
                and connect with test friends in Los Angeles.
                <a
                  href="petpalco.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Demo
                </a>
                .
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
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
              <h3>Pizza Shop</h3>
              <p>
This is a fullstack food ordering app built with Next.js 14 (React.js, MongoDB, Tailwind CSS).

                <a
                  href="https://github.com/SarahSchoonmaker/pizza-shop-react"
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
                <li>Next.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 3 */}
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
                  href="https://github.com/SarahSchoonmaker/Spring-Pet-Clinic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project on GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Spring Boot Pet Database</h3>
              <p>
                This database allows users to create and read owners and
                veterinarians.
                <a
                  href="https://github.com/SarahSchoonmaker/Spring-Pet-Clinic"
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
                <li>Java 17</li>
                <li>Spring Boot</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       
      </div>
    </Container>
  );
}

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
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/SarahSchoonmaker/flask-stock-data"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real Estate App with React</h3>
              <p>
                Realtor app allows users to find there dream homes or rental
                properties, and it also allows users to list their properties
                for rent or sale.
                <a href=""> View Code</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Flask & Plotly</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

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
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/SarahSchoonmaker/python-fastapi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Pet E-Commerce Store</h3>
              <p>
                This is a pet shop application written using Typescript,
                React.js, Redux Toolkit, Node.js, MongoDB and Tailwind CSS. It
                features a home page that displays a list of categories and a
                list of products. Users are able to sign up / sign in with
                Google authentication, access their user page and edit their
                user information. Users are also able to select which product
                they want to order as well as several different options for
                their order, checkout using Paypal or cash on delivery, and
                track their order. The app also features an admin dashboard
                which allows admins to view, create, modify and delete products,
                orders, users and admins..
                <a href=""> View Code</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React, Redux, Typescript</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>TailwindCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

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
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/SarahSchoonmaker/CI-CD-Jenkins-Flask"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Air B&B Clone</h3>
              <p>
                Clone of Air B&B using React, Redux, Express, JWT, MongoDB.
                <a href="https://github.com/SarahSchoonmaker/React-airbb">
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
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

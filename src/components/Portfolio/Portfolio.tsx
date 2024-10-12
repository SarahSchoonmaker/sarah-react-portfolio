import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";
import React from 'react';


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" 
          stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/SarahSchoonmaker/flask-stock-data" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Stock Data Visualization with Flask</h3>
            <p>Flask application that allows users to enter the name of a 
              company and visualize its stock market data using Plotly.  
              <a href="https://github.com/SarahSchoonmaker/flask-stock-data"> View Code</a>.
              
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Flask & Plotly</li>
              
            </ul>
          </footer>
        </div>
      </ScrollAnimation>
       
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" 
            stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/python-fastapi" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>RESTful API with Python</h3>
              <p>CRUD RESTful API with Python, FastAPI, SQLAlchemy ORM, Pydantic, 
                Alembic, PostgreSQL, and Docker-compose to perform the basic Create/Read/Update/Delete operations against a database.
                <a href="https://github.com/SarahSchoonmaker/python-fastapi"> View Code</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Python</li>
              <li>FastAPI</li>
              <li>SQLAlchemy</li>
              <li>Docker Compose</li>
                   
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" 
            stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" >
              <title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/youtube-sentiment-analysis" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>YouTube Sentiment Analysis</h3>
              <p>Using Pandas to analyze sentiment of comments on YouTube. 
                <a href="https://github.com/SarahSchoonmaker/youtube-sentiment-analysis"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Python</li>
              <li>Pandas</li>
              <li>MatplotLib</li>
          
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" 
            stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/CI-CD-Jenkins-Flask" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>CI/CD Template with Flask, Docker, and Jenkins</h3>
              <p>CI/CD template for automatic build and deployment to AWS EC2 and Dockerhub registry.
                <a href="https://github.com/SarahSchoonmaker/CI-CD-Jenkins-Flask"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Flask</li>
              <li>Docker</li>
              <li>Jenkins</li>
                 
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       
        </div>


    </Container>
  );
}
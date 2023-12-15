import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
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
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/docker-etl-aws" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Docker ETL with AWS </h3>
              <p>End-to-end pipeline requesting weather data from an API and visualizing the results on a Dashboard. 
                I use the weather api, Docker, AWS Elastic container registry, AWS Lambda, AWS EventBridge and Grafana as the dashboard solution
                <a href="https://github.com/SarahSchoonmaker/docker-etl-aws"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Python</li>
              <li>AWS Lambda, EventBridge, ECR</li>
              <li>Grafana</li>
                   
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/django-react-ecommerce" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Django E-Commerce Store</h3>
              <p>Django e-commerce store with React.
                <a href="https://github.com/SarahSchoonmaker/django-react-ecommerce"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Django</li>
              <li>React.js</li>
          
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/SQL-PowerBI-HRData" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>SQL & PowerBI</h3>
              <p>SQL Analysis of employee data<a href="https://github.com/SarahSchoonmaker/SQL-PowerBI-HRData"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>MySQL</li>
              <li>PowerBI</li>
                 
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       
        </div>


    </Container>
  );
}
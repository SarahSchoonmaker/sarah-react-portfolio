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
            <a href="https://github.com/SarahSchoonmaker/linear-regression-stock-prediction" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Linear Regression for Stock Prediction</h3>
            <p>Using Sklearn to train and run a linear regression on a stock's price history in order to formulate
              a future prediction. <a href="https://github.com/SarahSchoonmaker/linear-regression-stock-prediction"> View Code</a>.
              
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Sklearn</li>
              
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/mean-reversion" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Analysis of a given stock price's overbought and oversold levels.</h3>
              <p>Using Python, Pandas, Matplotlib, and the Yahoo Finance API to analyze a stocks 
                distance from the moving average. <a href="https://github.com/SarahSchoonmaker/mean-reversion"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Python</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Yahoo Finance API</li>
             
                
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
              <h3>ETL Data Pipeline</h3>
              <p>End-to-end pipeline requesting weather data from an API and visualizing the results in 
                Grafana<a href="https://github.com/SarahSchoonmaker/docker-etl-aws"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>Python</li>
              <li>AWS</li>
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
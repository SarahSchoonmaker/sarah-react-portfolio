import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
     

      <h2 className ="project2">Data Science Projects</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/SarahSchoonmaker/rsi-trading.git" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>RSI Trading Strategy Using Python</h3>
            <p>Using Python and Python libraries to indicate overbought and oversold stocks
              with a chart displaying the results.  <a href="https://github.com/SarahSchoonmaker/rsi-trading.git"> View Code</a>.
              
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>Jupyter Notebook</li>
             
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/lendingclub-data.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Anaysis of Lending Club Loan Data</h3>
              <p>Cleaning and classifying LendingClub data to determine the probability of loan default. 
                    <a href="https://github.com/SarahSchoonmaker/lendingclub-data.git">  View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Data Analysis</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/Data-Analytics-Projects" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Sales and Customer Churn Prediction</h3>
              <p>This Github Repository hosts several projects estimating sales and customer churn rates. 
                 <a href="https://github.com/SarahSchoonmaker/Data-Analytics-Projects"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Predictive Models</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        


      </div>
    </Container>
  );
}
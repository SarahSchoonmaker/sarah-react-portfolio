import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
     

      <h2 className ="project2">Front-end Development Projects</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/SarahSchoonmaker/django-react-ecommerce.git" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>E-Commerce Store with JavaScript, React, and Python</h3>
            <p>E-Commerce store using Django, JavaScript, and React with PayPal/Credit Card integration, 
            user profiles, admin user management product reviews, and a shopping cart.
             <a href="https://www.buildproshop.com/"> Demo</a>. 
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python/Django</li>
              <li>JavaScript/React</li>
              <li>Redux</li>
              <li>PostgreSQL</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/Django-real-estate.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Real Estate Company Website with Python/
                Django</h3>
              <p>Displays listings, create, edit, and delete listings, realtors, and assign
              realtors listings.  <a href="https://github.com/SarahSchoonmaker/Django-real-estate.git"> View Code</a>. 
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python/Django</li>
                <li>PostgreSQL</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/jenkins-docker-django.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Continuous Integration/
                Continuous Deployment Pipeline with Jenkins and Docker</h3>
              <p>CI/CD pipeline for voting application.
              <a href="https://github.com/SarahSchoonmaker/jenkins-docker-django.git"> View Code</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Python/Django</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
           <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/django-restaurant-location-search.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Multi-vendor Restaurant Marketplace with location based search of
              nearby restaurants.</h3> 
              <p>
              <a href="https://github.com/SarahSchoonmaker/django-restaurant-location-search.git"> View Code</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python/Django</li>
                <li>PostgreSQL</li>
                <li>Google Autocomplete</li>
                <li>Location search</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      <h2>Data Engineering Projects</h2>
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


      </div>
    </Container>
  );
}
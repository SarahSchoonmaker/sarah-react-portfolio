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
            <a href="https://github.com/SarahSchoonmaker/django-react-ecommerce.git" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Django E-Commerce Store</h3>
            <p>E-Commerce store using Django and React with PayPal/Credit Card integration, 
            user profiles, admin user management product reviews, and a shopping cart.
             <a href="https://www.buildproshop.com/"> Demo</a>. 
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Django</li>
              <li>React</li>
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
              <h3>Django Real Estate Company</h3>
              <p>Displays listings, create, edit, and delete listings, realtors, and assign
              realtors listings.
               {/*<a href="https://www.buildproshop.com/"> Demo</a>.*/}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
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
              <h3>Jenkins, Docker, and Django CI/CD Pipeline</h3>
              <p>CI/CD pipeline for polling application.
               {/*<a href="https://www.buildproshop.com/"> Demo</a>.*/}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Django</li>
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
              <h3>Django Multi-vendor Restaurant Marketplace with location based search of
              nearby restaurants.</h3>
              <p>
                {/*<a href="https://www.buildproshop.com/"> Demo</a>.*/}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Google Autocomplete</li>
                <li>Location search</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}
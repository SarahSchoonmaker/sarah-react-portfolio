import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
     

      <h2 className ="project2">Backend Engineering & ETL Projects</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/SarahSchoonmaker/Databricks" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>ETL Pipeline and Data Visualization</h3>
            <p>Using Databricks to warehouse data and setup an ETL pipeline with S3, SQL, and PowerBI.  <a href="https://github.com/SarahSchoonmaker/Databricks"> View Code</a>.
              
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Python</li>
              <li>SQL</li>
              <li>PowerBI</li>
              <li>Databricks</li>
              <li>AWS S3</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/AWS-ETL-Pipeline" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>AWS ETL Pipeline</h3>
              <p>ETL data pipeline pulling data from an API and storing it in DynamoDB with outputs sent by S3 for analysis. 
                    <a href="https://github.com/SarahSchoonmaker/AWS-ETL-Pipeline">  View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list"> 
              <li>AWS Glue</li>
              <li>Lambda</li>
              <li>S3</li>
              <li>SQS</li>
              <li>DynamoDB</li>
              <li>Athena</li>
              <li>ETL</li>
                
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
              <h3>Jupyter Notebook, PowerBI, and MySQL</h3>
              <p>HR Employee distribution insights. 
                 <a href="https://github.com/SarahSchoonmaker/SQL-PowerBI-HRData"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PowerBI</li>
                <li>SQL</li>
                <li>Jupyter Notebook</li>
                <li>Business Analytics</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/fastAPI-CRUD" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>FastAPI CRUD Application</h3>
              <p> 
                 <a href="https://github.com/SarahSchoonmaker/fastAPI-CRUD"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>FastAPI CRUD Application</li>
               
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/SarahSchoonmaker/PyShop" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>Django E-Commerce</h3>
              <p> PyShop is an online Python Ecommerce website built with Django, SQLite and Bootstrap. 
                Easily deployable anywhere anytime with modules developed upon the inbuilt django admin.
                 <a href="https://github.com/SarahSchoonmaker/PyShop"> View Code</a>.
              
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django E-Commerce</li>
               
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
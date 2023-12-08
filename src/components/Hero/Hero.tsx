import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi! 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Sarah Schoonmaker</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <p> Over 3  years of experience building python applications, visualization dashboards, and Rest APIs for 
          quantitative research and business analyst teams to store and visualize data. 
          Frequently working with Python, Flask, PostgreSQL, Rest APIs, AWS (S3, EC2, Lambda, DynamoDB, SQS), React.js,
          Node.js, and CI/CD with Jenkins and Docker. <br></br>
          
          Available for on-site roles in NY/NJ
 
           
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
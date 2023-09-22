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
          <h3>Backend Python Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I build applications that store and visualize
          large amounts of finacial market data. Fruently building and maintaining
          databases, Restful APIs, and CI/CD pipelines with Python, Django, SQL, 
          AWS (S3, EC2, RDS, DynamoDB), Docker, 
          Jenkins, and Github actions.  
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
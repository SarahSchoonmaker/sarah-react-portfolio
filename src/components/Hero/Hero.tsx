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
          <h3>Frontend Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Experienced Frontend Developer with experience building e-commerce stores
          at a global consumer goods and asset management industries. Strong background in finance, trading, and frontend
          development.  <br></br>
          <br></br>
          
          Frequently using Python, JavaScript/Typescript, Flask, Django, React, MySQL, Docker, Jenkins, and 
          AWS (EC2, RDS, S3, and Lambda).
 
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
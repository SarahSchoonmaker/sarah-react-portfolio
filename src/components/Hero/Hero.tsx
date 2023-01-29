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
          <h3>Data Analyst & Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Software Developer with experience building and maintaining large scale 
          e-commerce websites processing millions of requests, integrating subscription payments, and Google Analytics. I also
          lead marketing teams in analyzing marketing data and developing strategies. Technologies frequently used include:
          Python, Django, JavaScript, React, TypeScript, Wordpress, PHP, HTML/CSS, PostgreSQL, AWS, Unit Testing with Pytest or Cypress, 
          Docker, Jenkins, and more to build highly functional, scalable, and beautiful web applications. </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
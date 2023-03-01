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
          <h3>Front-end Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Building and maintaining the front-end of Python and JavaScript e-commerce applications 
          processing and storing real-time data. Frequently use Python, Flask, JavaScript, React, PostgreSQL, HTML, and CSS/SASS.</p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
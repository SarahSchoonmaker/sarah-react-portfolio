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
          <h3>Data Scientist</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Leveraging data to build and test trading strategies, implement 
          risk management plans, and build scanners that look for anomalies in market data for potentially 
          profitable opportunities. </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
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
          <h3>Data Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <p>Data Engineer working with portfolio
            managers to identify trends and build profitable strategies. 
            Pursuing an MS in Computer Science with a Machine Learning specialization at the Stevens Insitute of Technology. 
            In my free time, I am always learning something new, exercising at the gym, watching ice hockey (Go Rangers), 
            studying the financial markets, and finding new recipes to cook. 
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
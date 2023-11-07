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
        <p>Backend Python Developer building databases, APIs, and data pipelines for portfolio
            managers and business analytics teams. Providing efficient and reliable data for 
            generating performance reports and analyzing financial data for strategy building. 
            Frequently using Python, Django, PostgreSQL/SQL Server, AWS (S3, EC2, Lambda, Glue, Redshift), 
            Snowflake, Docker, and Jenkins. 
           
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
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
        <p> Backend Developer always learning, automating, and optimizing solutions.  
          Frequently working with Flask, Rest APIs/Fast API, PostgreSQL, AWS (S3, EC2, Lambda, SQS), and machine learning model 
          deployment using Flask, React, and NodeJS. Additional experience in application support for web applications 
          and data analytics with Python, Pandas, Numpy, Matplotlib, Seaborn. <br></br><br></br>
          
 
           
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
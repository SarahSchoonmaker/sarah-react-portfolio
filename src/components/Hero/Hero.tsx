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
          <p className="small-resume">Experienced Data Engineer building and maintaining ETL pipelines that deliver 
          large amounts of financial market data for teams providing 
          data-driven analysis for business and trading strategy development. <br></br>
          <br></br>
          
          Frequently using Python, Snowflake, Apache Spark, Kafka, Docker, MySQL, and 
          AWS (EC2, ECS, EMR, RDS, S3, Kinesis, Glue, and Redshift).
 
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
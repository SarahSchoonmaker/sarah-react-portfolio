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
<<<<<<< HEAD
          <h3>Data Scientist</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I prepare and analyze large amounts 
          of data in order to tell a story, validate ideas, identify patterns, 
          and build data-driven strategies.
          </p>
=======
          <h3>Data Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Building data pipelines and databases with Python, SQL, Databricks, 
          AWS (S3, Redshift, Glue, DynamoDB, CloudWatch, Kinesis, Lambda), Docker, Apache Kafka, Grafana,
          and Snowflake </p>
>>>>>>> b43acda2e0180729be7b0032dd4338e501dd07dd
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
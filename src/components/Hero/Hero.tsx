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
          <p className="small-resume">Experienced Data Scientist working with 
          large amounts of financial market data. Identifying trends, patterns, and anomalies. Providing 
          data-driven analysis for business and trading strategy development. <br></br>
          <br></br>
          
          Frequently using Python, Pandas, NumPy, SciPy, Matplotlib, Scikit-learn, Linear and Logistic Regressions, Decision Trees, 
          K-means Clustering, and Time Series Analysis. ETL pipelines with AWS (RDS, S3, DynamoDB, Kinesis, Glue, and Redshift), Docker, 
          and Jenkins.  
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
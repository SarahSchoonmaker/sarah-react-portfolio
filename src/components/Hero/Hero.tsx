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
          <h3>ETL Data Engineer | Data Analyst</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Experienced ETL Data Engineer & Data Analyst building efficient data pipelines and working with 
          large amounts of lending, real estate, and financial market data. Identifying trends, patterns, and anomalies. Providing 
          data-driven analysis for business and trading strategy development. <br></br>
          <br></br>
          
          Frequently using Python, Pandas, NumPy, MatPlotLib, SciPy, Java, Scala, Logistic Regression, Decision Trees, Data Preprocessing, 
          MYSQL, PostgreSQL, AWS, Hadoop, Spark, Kafka, PowerBI, and Tableau. Software development experience with Python, Django, React, 
          SQL, AWS, Docker, Jenkins, and Ansible.  
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
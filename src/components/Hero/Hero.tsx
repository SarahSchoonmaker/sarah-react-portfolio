import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import React from 'react';
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
        <p>Always learning, automating, and optimizing solutions.  
          Frequently working with Python, Flask, Rest APIs/Fast API, PostgreSQL, ETL/ELT pipelines, Jenkins, Docker, Airflow, DBT, 
          and AWS (Redshift, Glue, SNS, Kinesis, S3, EC2, Lambda). 
          
 
           
          </p>
        </ScrollAnimation>

      
      </div>
    
    </Container>
  )
}
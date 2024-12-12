import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import { NavHashLink } from "react-router-hash-link";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi! 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Sarah Schoonmaker</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p>
            Building enterprise-grade financial technology solutions from
            engaging user interfaces to architecting scalable backend systems. I
            develop intuitive and pleasing to users financial dashboards and
            cross-platform applications that deliver real-time data. Java,
            Python, JavaScript, PostgreSQL, and AWS.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

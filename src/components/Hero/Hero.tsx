import { Container } from "./styles";
import React from "react";
import { FadeIn } from "../FadeIn";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <FadeIn delay={0}>
          <p>Hi! 👋, I'm</p>
        </FadeIn>
        <FadeIn delay={200}>
          <h1>Sarah Schoonmaker</h1>
        </FadeIn>
        <FadeIn delay={400}>
          <h3>Software Developer</h3>
        </FadeIn>
        <FadeIn delay={600}>
          <p>
            Building enterprise-grade financial technology solutions from
            engaging user interfaces to architecting scalable backend systems.
            Java, Python, JavaScript, PostgreSQL, and AWS.
          </p>
        </FadeIn>
      </div>
    </Container>
  );
}

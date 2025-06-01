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
          <h3>Software Engineer</h3>
        </FadeIn>
        <FadeIn delay={600}>
          <p>
            Building enterprise-grade applications with engaging user interfaces
            and features serving millions of customers across the financial
            technology and e-commerce industries. Frequently working with
            Python, Data Analytics, Machine Learning, React, Next.js, Node.js,
            Express, MongoDB, JavaScript, PostgreSQL, Unit Testing, and AWS.
          </p>
        </FadeIn>
      </div>
    </Container>
  );
}

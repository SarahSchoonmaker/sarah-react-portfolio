import React from "react";
import { Container } from "./styles";
import Sarah from "../../assets/SarahImg.jpg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import graphql from "../../assets/graphql.png";
import { FadeIn } from "../FadeIn";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <FadeIn delay={0}>
          <h2>About Me</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p>
            Software Developer with previous experience in equity trading
            utilizing data analytics to discover trends and anomalies in
            financial market and e-commerce. In my free time, I am always
            learning something new about technology, the financial markets,
            entrepreneurship, exercising at the gym, watching ice hockey (Go
            Rangers), and finding new recipes to cook.
          </p>
        </FadeIn>
      </div>
      <div className="about-image">
        <FadeIn delay={400}>
          <img src={Sarah} alt="Sarah Schoonmaker" />
        </FadeIn>
      </div>
    </Container>
  );
}

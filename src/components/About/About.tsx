import { Container } from "./styles";
import Sarah from "../../assets/SarahImg.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import graphql from "../../assets/graphql.png";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Data Analyst with a background in frontend development. 
            Pursuing an MS in Computer Science with a specialization in machine learning 
            at the Stevens Insitute of Technology. In my free time, I am always learning,
            exercising at the gym, watching ice hockey (Go Rangers), 
            studying the financial markets, 
            and finding new recipes to cook. 
           
          </p>
        </ScrollAnimation>
       
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={Sarah} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

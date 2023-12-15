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
          <p>Software Developer with previous experience in equity trading and 
            data analytics to discover trends and
            anomalies in financial market data.   
            Pursuing an MS in Computer Science at the Stevens Insitute of Technology. 
            In my free time, I am always learning something new about technology, the financial markets,
            entrepreneurship, exercising at the gym,
            watching ice hockey (Go Rangers), and finding new recipes to cook. 
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
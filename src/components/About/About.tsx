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
          <p>Fullstack Developer always striving to build high quality web applications. 
            Pursuing an MS in Computer Science at Stevens Insitute of Technology. In my free time, 
            I enjoy the gym, watching ice hockey (Go Rangers), studying the financial markets, 
            pursuing offensive security certifications (OSCP and OSWP), and finding new recipes to cook. 
            NY native currently residing in Palm Beach, FL.  
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript. Tenho familiaridade em desenvolver layouts que me fornecem. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.</p>
        </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Sou uma pessoa dedicada que corre atrás para realizar seus sonhos, trabalhador e orientado a resultados, sempre busco alcançar minha melhor versão.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Technologies used on projects:</h3>
        </ScrollAnimation> */}
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>


          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <img src={graphql} alt="Typescript" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={Sarah} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>S</span>
        <span>Schoonmaker</span>
      </a>
      <div>
        <p>
          Made with love using <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="www.linkedin.com/in/compliance-sarah"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/sarahschoonmaker"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

       
      </div>
    </Container>
  )
}

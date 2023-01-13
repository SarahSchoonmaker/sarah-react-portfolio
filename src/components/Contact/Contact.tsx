import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Get In Touch</h2>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:srschoonmaker@gmail.com">srschoonmaker@gmail.com</a>
        </div>
       
      </div>
      <Form></Form>
    </Container>
  )
}
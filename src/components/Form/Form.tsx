import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
// import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'
import React from 'react';

export function Form() {
  const [state, handleSubmit] = useForm('myyozglw')

  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email Sent Successfully!', {
        position: "bottom-left", // Updated here
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  });
  
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Send Message</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Send Message
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Enter contact information</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Write Your Message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        
        {/* <ReCAPTCHA
          sitekey="6LcCTvYjAAAAADjmzwwDbgmPVHdHvdF4Nldnen4Q"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA> */}
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message }
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}

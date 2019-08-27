import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'

// const LocationsPage = ({data}) => (
const ContactPage = () => (
  <Layout>
    <Wrapper>
      <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="JSX Form" />
        <label>Your Email:</label>
        <input type="email" name="email" />
        <br />
        <label>Message:</label>
        <textarea name="message" />
        <br />
        <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  </Layout>
)

export default ContactPage

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 8px 0 8px;
  h1 {
    text-align: center;
  }
  // @media only screen and (max-width: 600px) {
  //   padding: 40px 4px 0 4px;
  // }
`

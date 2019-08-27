import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import styled from 'styled-components'

// const LocationsPage = ({data}) => (
const ContactPage = () => (
  <Layout>
    <Wrapper>
      <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="JSX Form" />
     
        <label className="hidden">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
   
        <label>Your Name:</label>
        <input type="text" name="name" />
        <label>Your Email:</label>
        <input type="email" name="email" />
        <label>
          Reason for contacting:{' '}
          <select name="reason[]">
            <option value="returns">Returns</option>
            <option value="buy">Buy</option>
          </select>
        </label>
        <label>Message:</label>
        <textarea name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  </Layout>
)

export default ContactPage

const Wrapper = styled.div`
  .hidden {
    display: none;
  }
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

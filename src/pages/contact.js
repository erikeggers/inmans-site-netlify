import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import styled from 'styled-components'

// const LocationsPage = ({data}) => (
const ContactPage = () => (
  <Layout>
    <Wrapper>
      <h2>Contact Us</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
      
      
            <input type="submit" value="Send Message" className="special" />

 
            

      </form>
      {/* <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <label className="hidden">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>

        <label>Your Name:</label>
        <input type="text" name="name" placeholder="Name" required/>
        <label>Your Email:</label>
        <input type="email" name="email" placeholder="Email" required/>
        <label>
          Reason for contacting:
          <select name="reason[]" required>
            <option value="general">General Questions</option>
            <option value="buy">Wholesale Inquiry</option>
            <option value="returnsAndShipping">Returns and Shipping</option>
            <option value="suggestion">General Suggestion</option>
            <option value="store">Recommend a store</option>
            <option value="recipe">Submit a recipe</option>
          </select>
        </label>
        <label>Message:</label>
        <textarea name="message" placeholder="Type your message here..." required/>
        <br />
        <button type="submit">Send</button>
      </form> */}
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
  label {
    display: block;
    font-weight: bold;
  }
  input,
  textarea,
  select {
    margin-bottom: 12px;
    outline: none;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    padding: 10px;
    background-color: #0a2a43;
    color: #fffaef;
  }
  textarea {
    width: 100%;
    height: 150px;
  }
  button {
    background-color: #ff6551;
    text-decoration: none;
    color: #fffaef;
    font-size: 20px;
    padding: 10px 40px;
    transition: 0.3s;
    :hover {
      background-color: #ff4e38;
    }
  }
  // @media only screen and (max-width: 600px) {
  //   padding: 40px 4px 0 4px;
  // }
`

import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import styled from 'styled-components'

// const LocationsPage = ({data}) => (
const ContactPage = () => (
  <Layout>
    <Wrapper>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Reason:{' '}
            <select name="role[]">
              <option value="buy">Buy</option>
              <option value="return">Return</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
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

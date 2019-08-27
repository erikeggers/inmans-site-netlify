import React from 'react'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import styled from 'styled-components'

// const LocationsPage = ({data}) => (
const ThankYouPage = () => (
  <Layout>
    <Wrapper>
      <h1>Thank you, we will contact you soon!</h1>
    </Wrapper>
  </Layout>
)

export default ThankYouPage

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
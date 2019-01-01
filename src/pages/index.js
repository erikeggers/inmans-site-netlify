import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from "styled-components"
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Bree Serif:300,400,700', 'Open Sans:300,400,700', 'sans-serif']
  }
});

const ImageWrapper = styled.div`
  position: relative; 
  width: 100%;
  max-height: 740px; 
  overflow: hidden; 
  background-color: #080808;
  .text {
    top: 200px;
    position: absolute;
    top: calc(35% - 5rem);
    left: 0;
    text-align: center;
    width: 100%;
    padding: 0 6%;
    h2 {
      color: #FFFAEF; 
      font-size: 70px;
      margin-bottom: 40px;
    }

    a {
      margin-top: 20px;
      background-color: #FF6551;
      text-decoration: none;
      color: #FFFAEF;
      font-size: 20px;
      padding: 20px 40px;
    }
    
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <ImageWrapper>
      <Img fluid={data.file.childImageSharp.fluid} style={{ height: '100%', opacity: '0.5' }} />
      <div className="text">
        <h2>Recipes born in the South from someone born in the South</h2>
        <Link to="/products">
          View our Products
        </Link>
      </div>
    </ImageWrapper>
    <h1>Hello there</h1>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Best wishes,</p>
    <p>Dwight</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)



export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  file(relativePath :{
    regex: "/firepit/"
  }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
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
      background-color: #FF6551;
      text-decoration: none;
      color: #FFFAEF;
      font-size: 20px;
      padding: 20px 40px;
    }
    
  }
`

const Recipes = styled.div`
  overflow: hidden;
  background-color: #0A2A43;
  height: 600px;
  position: relative;
  .recipe-image {
    height: 400px;
  }
  .recipe-image::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to top, rgba(10,42,67,1) 20%, rgba(237,237,237,0) 100%);
    margin-top: -450px;
    height: 450px;
    width: 100%;
    content: '';
  }
  .recipeContent {
    position: absolute;
    width: 100%;
    top: 160px;
    text-align: center;
    h2, p {
      color: #FFFAEF;
    } 
    p:last-of-type {
      margin-bottom: 60px;
    }
    a {
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
      <Img fluid={data.imageOne.childImageSharp.fluid} style={{ height: '100%', opacity: '0.5' }} />
      <div className="text">
        <h2>Recipes born in the South from someone born in the South</h2>
        <Link to="/products">
          View Products
        </Link>
      </div>
    </ImageWrapper>
    <div className="content">
      <h1>Welcome to Inman Specialty Foods, LLC.</h1>
      <p>{data.site.siteMetadata.desc}</p>
      <p>Best wishes,</p>
      <p>Dwight</p>
    </div>
    <Recipes>
      <div className="recipe-image">
        <Img fluid={data.imageTwo.childImageSharp.fluid} style={{ height: '100%' }} />
      </div>
      <div className="recipeContent">
        <h2>Recipes</h2>
        <p>What good is a <b>great</b> sauce without a <b>great</b> recipe?</p>
        <p>We offer a wide range of recipes and of course the perfect sauce or rub for it!</p>
        <p>Have a recipe you would like to submit? Please contact us!</p>
        <Link to="/recipes">
          View Recipes
        </Link>
      </div>
    </Recipes>
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
  imageOne: file(relativePath: { regex: "/firepit/" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { regex: "/meatonplate/" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
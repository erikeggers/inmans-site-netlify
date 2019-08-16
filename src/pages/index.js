import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from "styled-components"



const IndexPage = ({ data }) => (
  <Layout>
    <ImageWrapper>
      <Img className="image" fluid={data.imageOne.childImageSharp.fluid} style={{ height: '100%', opacity: '0.5' }} />
      <div className="text">
        <h2>Flavors born in the South</h2>
        <Link to="/products">
          View Products
        </Link>
      </div>
    </ImageWrapper>
    <div style={{borderTop: '30px solid #FF6551'}}>
      <div className="content">
        <h1>Welcome to Inman Specialty Foods, LLC.</h1>
        <p>{data.site.siteMetadata.desc}</p>
        <p>Best wishes,</p>
        <p>Dwight</p>
      </div>
    </div>
    <CtaContainer>
      <Cta>
        <div className="cta-image">
          <Img fluid={data.imageTwo.childImageSharp.fluid} style={{ height: '100%' }} />
        </div>
        <div className="cta-content">
          <h2>Recipes</h2>
          <p>What good is a <b>great</b> sauce without a <b>great</b> recipe? We offer a wide range of recipes and of course the perfect sauce or rub for it!</p>
          <Link to="/recipes">
            View Recipes
          </Link>
        </div>
      </Cta>
      <Cta>
        <div className="cta-image">
          <Img fluid={data.imageThree.childImageSharp.fluid} style={{ height: '100%' }} />
        </div>
        <div className="cta-content">
          <h2>Blog</h2>
          <p>Follow the story of Inman's by checking out the latest blog posts.</p>
          <Link to="/blog">
            View Blog
          </Link>
        </div>
      </Cta>
    </CtaContainer>
    <SocialMedia>
      <h2>Let's get social</h2>
      <p>Follow us on Facebook to stay update date with our latest products and events!</p>
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2FInmanLLC%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=112677395506576" 
        width="500" 
        height="500" 
        style={{border:'none',overflow:'hidden'}} 
        scrolling="no" 
        frameBorder="0" 
        title="facebook"
        allow="encrypted-media">
      </iframe>
    </SocialMedia>
  </Layout>
)

const ImageWrapper = styled.div`
  position: relative; 
  width: 100%;
  max-height: 640px; 
  overflow: hidden; 
  background-color: #080808;
  .image {
    transition: .16s;
    :hover {
      transform: scale(1.03);
    }
  }
  .text {
    position: absolute;
    top: calc(42% - 5rem);
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
      transition: 0.3s;
      :hover {
        background-color: #ff4e38;
      }
    }
    
  }
`

const CtaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`

const Cta = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #0A2A43;
  height: 600px;
  position: relative;
  .cta-image {
    height: 400px;
    transition: 0.3s;
  }
  :hover {
    .cta-image {
      transform: scale(1.1);
    }
  }
  .cta-image::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to top, rgba(10,42,67,1) 20%, rgba(237,237,237,0) 100%);
    margin-top: -450px;
    height: 450px;
    width: 100%;
    content: '';
  }
  .cta-content {
    padding: 10%;
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
      transition: 0.3s;
      :hover {
        background-color: #ff4e38;
      }
    }
  }
`

const SocialMedia = styled.div`
  padding: 40px 10px 0px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
  imageThree: file(relativePath: { regex: "/apple/" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
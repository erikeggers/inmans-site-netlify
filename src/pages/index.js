import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'styled-components'

const IndexPage = ({ data }) => (
  <Layout>
    <ImageWrapper>
      <Img
        className="image"
        fluid={data.imageOne.childImageSharp.fluid}
        style={{ height: '100%', opacity: '0.5' }}
      />
      <div className="text">
        <h2>Flavors born in the South</h2>
        <a href="https://inman-specialty-foods-llc.myshopify.com/collections/all">View Products</a>
      </div>
    </ImageWrapper>
    <div style={{ borderTop: '30px solid #FF6551' }}>
      <div className="content">
        <WelcomeWrapper>
          <div className="welcome-text">
            <h1>Welcome to Inman Specialty Foods, LLC.</h1>
            <p>{data.site.siteMetadata.desc}</p>
            <p>Best wishes,</p>
            <p>Dwight</p>
          </div>
          <CertsContainer>
            <div className="certs-icon">
              <Img
                className="image"
                fluid={data.CSCProduct.childImageSharp.fluid}
                style={{ width: '150px' }}
              />
            </div>
            <div className="certs-icon">
              <Img
                className="image"
                fluid={data.SCSFA.childImageSharp.fluid}
                style={{ width: '150px' }}
              />
            </div>
          </CertsContainer>
        </WelcomeWrapper>
      </div>
    </div>
    <CtaContainer>
      <Cta>
        <div className="cta-image">
          <Img
            fluid={data.imageTwo.childImageSharp.fluid}
            style={{ height: '100%' }}
          />
        </div>
        <div className="cta-content">
          <h2>Recipes</h2>
          <p>
            What good is a <b>great</b> sauce without a <b>great</b> recipe? We
            offer a wide range of recipes and of course the perfect sauce or rub
            for it!
          </p>
          <Link to="/recipes">View</Link>
        </div>
      </Cta>
      <Cta>
        <div className="cta-image">
          <Img
            fluid={data.imageThree.childImageSharp.fluid}
            style={{ height: '100%' }}
          />
        </div>
        <div className="cta-content">
          <h2>Locations</h2>
          <p>
            Can't wait to get your hands on a product? Checkout our fantastic
            partners that carry Inman's!
          </p>
          <Link to="/locations">View</Link>
        </div>
      </Cta>
    </CtaContainer>
    <SocialMedia>
      <h2>Let's get social</h2>
      <p>
        Follow us on Facebook to stay update date with our latest products and
        events!
      </p>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FInmanLLC%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=112677395506576"
        width="340"
        height="500"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="facebook"
      ></iframe>
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
    transition: 0.16s;
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
      color: #fffaef;
      font-size: 60px;
      margin-bottom: 40px;
      @media only screen and (max-width: 670px) {
        font-size: 40px;
      }
    }

    a {
      background-color: #ff6551;
      text-decoration: none;
      color: #fffaef;
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
  background-color: #0a2a43;
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
    background-image: linear-gradient(
      to top,
      rgba(10, 42, 67, 1) 20%,
      rgba(237, 237, 237, 0) 100%
    );
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
    h2,
    p {
      color: #fffaef;
    }
    p:last-of-type {
      margin-bottom: 60px;
    }
    a {
      background-color: #ff6551;
      text-decoration: none;
      color: #fffaef;
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
const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CertsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .certs-icon {
    margin: 6px;
  }
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
    imageOne: file(relativePath: { eq: "images/firepit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/meatonplate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "images/map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CSCProduct: file(relativePath: { eq: "images/CSCProduct.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SCSFA: file(relativePath: { eq: "images/scsfa.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

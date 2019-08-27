import React from 'react'
import { Link } from "gatsby"
// import logo from '../images/InmansLogoCream.png'
import styled from "styled-components"

const Footer = () => (
  <StyledFooter>
    <p>Inman Specialty Foods &copy; 2019</p>
    <nav>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/shipping-and-returns">Shipping and Returns</Link>
        </li>
        <li>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/termsofuse">Terms of Use</Link>
        </li>
      </ul>
    </nav>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background: #0A2A43;
  border-top: 30px solid #FF6551;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0 10px 0;
  p {
    color: #FFFAEF;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  nav, ul {
    margin: 0;
    padding: 0;
    ul {
      list-style-type: none;
      text-align: center;
      margin: 0;
      li {
        padding: 10px;
        display: inline-block;
        margin: 0;
        a {
          color: #FFFAEF;
        }
      }
    }
  }
`

export default Footer

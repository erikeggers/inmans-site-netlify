import React from 'react'
import { Link } from "gatsby"
import logo from '../images/InmansLogoCream.png'
import styled from "styled-components"


const HeaderWrapper = styled.div`
  background: #0A2A43;
  box-shadow: 0px 6px 26px 0px rgba(0,0,0,0.75);
  a {
    line-height: 0;
  }
  img {
    width: 180px;
    margin: 0;
  }

`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  max-width: 1290px;
  margin: 0 auto;
  padding: 1.45rem 0;
  nav {
    display: inline-block;
    ul {
      margin: 0;
      display: flex;
      justify-content: space-between;
      list-style: none;
      font-size: 20px;
      li {
        font-family: 'Bree Serif', serif;
        margin: 0;
        a {
        text-decoration: none;
        text-transform: uppercase;
        color: #FFFAEF;
        margin-left: 40px;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Inamn's" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
        </ul>
      </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header

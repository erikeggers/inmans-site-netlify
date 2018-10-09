import React from 'react'
import { Link } from "gatsby"
import logo from '../images/InmansLogo.png'
import styled from "styled-components"


const HeaderWrapper = styled.div`
  background: #fff;
  marginBottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Inamn's" />
        </Link>
      </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
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

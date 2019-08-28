import React from 'react'
import { Link } from "gatsby"
import logo from '../images/InmansLogoCream.png'
import styled from "styled-components"
import Headroom from 'react-headroom'

const Header = () => (
  <StyledHeadroom>
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
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  </StyledHeadroom>
)

const StyledHeadroom = styled(Headroom)`
  height: 119px !important;
`

const HeaderWrapper = styled.div` 
  width: 100%;
  background: #0A2A43;
  box-shadow: 0px 6px 26px 0px rgba(0,0,0,0.75);
  a {
    line-height: 0;
  }
  img {
    width: 180px;
    margin: 0;
  }
  @media only screen and (max-width: 870px) {
    img {
      margin-bottom: 20px;
    }
  } 
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1290px;
  margin: 0 auto;
  padding: 1.45rem 1.5rem;
  @media only screen and (max-width: 870px) {
    flex-direction: column;
  } 
  nav {
    display: inline-block;
    ul {
      margin: 0;
      display: flex;
      justify-content: space-between;
      list-style: none;
      font-size: 20px;
      @media only screen and (max-width: 670px) {
        font-size: 18px;
        flex-wrap: wrap;
        max-width: 540px;
        justify-content: center;
      } 
      li {
        font-family: 'Bree Serif', serif;
        margin: 0;
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: #FFFAEF;
          margin: 0 20px;
          transition: 1.3s;
          :hover {
            text-decoration: underline;
          }
          @media only screen and (max-width: 670px) {
            margin: 0 10px;
          } 
        }
      }
    }
  }
`
export default Header

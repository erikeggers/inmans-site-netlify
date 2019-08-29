import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Inman Specialty Foods' },
            { name: 'keywords', content: 'Inman Specialty Foods' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledContainer>
          {children}
        </StyledContainer>
        <Footer/>
      </>
    )}
  />
)

const StyledContainer = styled.div`
  margin-bottom: 180px;
  @media only screen and (max-width: 870px) {
    padding-top: 46px;
  }
  @media only screen and (max-width: 670px) {
    padding-top: 46px;
  }
  @media only screen and (max-width: 534px) {
    padding-top: 72px;
  }
  @media only screen and (max-width: 534px) {
    padding-top: 60px;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

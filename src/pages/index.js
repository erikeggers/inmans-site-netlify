import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
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
}`
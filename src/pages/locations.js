import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from 'styled-components'

// const LocationsPage = ({data}) => (
const LocationsPage = () => (
  <Layout>
    <Wrapper>
      <h3>Check back for locations where you can purchase our products or feel free to drop us a line using our <Link to="/contact">Contact Page</Link> if you know of a store that would like to carry Inman Specialty Foods items.</h3>
      {/* {data.allMarkdownRemark.edges.map(({node}) => (
        <RecipeListing key={node.id} post={node} />
        ))} */}

    </Wrapper>
  </Layout>
)

export default LocationsPage

// export const query = graphql`
// query LocationMeta {
//   allMarkdownRemark(
//     sort: { order: DESC, fields: [frontmatter___date]},
//     filter: { frontmatter: {type: { eq:"location" }}
//   }) {
//     edges {
//       node {
//         id
//         frontmatter {
//           name
//           url
//         }
//       }
//     }
//   }
// }
// `

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 8px 0 8px;
  h1 {
    text-align: center;
  }
  // @media only screen and (max-width: 600px) {
  //   padding: 40px 4px 0 4px;
  // } 
`
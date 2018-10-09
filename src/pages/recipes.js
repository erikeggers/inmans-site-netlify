import React from 'react'
import RecipeListing from '../components/Posts/PostListing'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const RecipesPage = ({data}) => (
  <Layout>
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <RecipeListing key={node.id} post={node} />
        ))}
    </div>
  </Layout>
)

export default RecipesPage

export const query = graphql`
query RecipeMeta {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: { frontmatter: {type: { eq:"recipe" }}
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM, DD YYYY")
          author
          thumbnail
        }
        fields {
          slug
        }
        html
        excerpt
      }
    }
  }
}
`
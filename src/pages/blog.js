import React from 'react'
import PostListing from '../components/Posts/PostListing'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => (
  <Layout>
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostListing key={node.id} post={node} />
        ))}
    </div>
  </Layout>
)

export default BlogPage

export const query = graphql`
query BlogMeta {
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
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
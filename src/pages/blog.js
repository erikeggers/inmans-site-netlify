import React from 'react'
import PostListing from '../components/Posts/PostListing'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const BlogPage = ({data}) => (
  <Layout>
    <BlogWrapper>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostListing key={node.id} post={node} />
        ))}
    </BlogWrapper>
  </Layout>
)

export default BlogPage

export const query = graphql`
query BlogMeta {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: { frontmatter: {type: { eq:"blog" }}
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
const BlogWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 8px 0 8px;
  @media only screen and (max-width: 600px) {
    padding: 40px 4px 0 4px;
  } 
`
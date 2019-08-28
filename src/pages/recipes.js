import React from 'react'
import RecipeListing from '../components/Posts/PostListing'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const RecipesPage = ({data}) => (
  <Layout>
    <RecipeWrapper>
    <h2>Recipes</h2>
    <p className="tagline">Try these delicious recipes using Inman's!</p>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <RecipeListing key={node.id} post={node} />
        ))}
    </RecipeWrapper>
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

const RecipeWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 8px 0 8px;
  @media only screen and (max-width: 600px) {
    padding: 40px 4px 0 4px;
  } 
  h2 {
    padding-left: 18px;
    margin-bottom: 0;
  }
  .tagline {
    padding-left: 18px;
  }
`
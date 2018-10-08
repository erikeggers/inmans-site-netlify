import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default class PostView extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
				<div>
					{data.markdownRemark.frontmatter.thumbnail && 
						<img src={data.markdownRemark.frontmatter.thumbnail} alt="Inmans's"/> 
					}
					<span>Posted by {data.markdownRemark.frontmatter.author} on {data.markdownRemark.frontmatter.date}</span>
					<h1>{data.markdownRemark.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML= {{
						__html: data.markdownRemark.html
					}}/>
				</div>
			</Layout>
    )
  }
}

export const query = graphql`
	query PostQuery($slug: String!) {
		markdownRemark(fields: {
			slug: {
					eq: $slug
			}
		}) {
			html
			frontmatter {
					title
					date(formatString:"MMMM DD, YYYY")
					author
					thumbnail
			}
		}
	}
`
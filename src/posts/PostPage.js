import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export default class PostView extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
				<PostWrapper>
					{data.markdownRemark.frontmatter.thumbnail && 
						<img src={data.markdownRemark.frontmatter.thumbnail} alt="Inmans's"/> 
					}
					<span>Posted by {data.markdownRemark.frontmatter.author} on {data.markdownRemark.frontmatter.date}</span>
					<h1>{data.markdownRemark.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML= {{
						__html: data.markdownRemark.html
					}}/>
				</PostWrapper>
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

const PostWrapper = styled.article`
	align: center;
	max-width: 900px;
	padding:1.5rem;
	box-shadow:0 1px 2px #aaa;
	background:white;
	margin: 60px auto 30px auto; 
	border-radius:3px;
	h3 {
		margin: 0;
		padding: 0;
	}
	img {
		margin: 0px auto 20px auto;
		display: block;
	}
	p {
		margin-top: 20px;
	}
	span {
		font-size: 12px;
		display: block;
	}
	a {
		text-decoration: none;
		color: #0A2A43;	
	}
	.postLink {
		text-align: right;
	}
	@media only screen and (max-width: 600px) {
    padding:1rem;
  } 
`

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const PostListing = ({post}) => (
	<PostWrapper>
    {post.frontmatter.thumbnail &&
      <img src={post.frontmatter.thumbnail} alt="Inman's"/>
    }
		<h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
		<span>Posted by {post.frontmatter.author} on {post.frontmatter.date}</span>
		<p>{post.excerpt}</p>
		<div className="postLink">
			<Link to={post.fields.slug}>View Post</Link>
		</div>
	</PostWrapper>
)

export default PostListing

const PostWrapper = styled.article`
	padding:1.5rem;
	box-shadow:0 1px 2px #aaa;
	background:white;
	margin:0 1rem 1rem;
	border-radius:3px;
	h3 {
		margin: 0;
		padding: 0;
	}
	p {
		margin-top: 20px;
	}
	span {
		font-size: 12px;
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
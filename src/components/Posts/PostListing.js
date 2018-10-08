import React from 'react'
import { Link } from "gatsby"


const PostListing = ({post}) => (
	<article>
    {post.frontmatter.thumbnail &&
      <img src={post.frontmatter.thumbnail} alt="Inman's"/>
    }
		<span>Posted by {post.frontmatter.author} on {post.frontmatter.date}</span>
		<h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
		<p>{post.excerpt}</p>
	</article>
)

export default PostListing

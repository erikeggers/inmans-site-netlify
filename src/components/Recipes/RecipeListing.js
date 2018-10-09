import React from 'react'
import { Link } from "gatsby"


const RecipeListing = ({recipe}) => (
	<article>
    {recipe.frontmatter.thumbnail &&
      <img src={recipe.frontmatter.thumbnail} alt="Inman's"/>
    }
		<h3><Link to={recipe.fields.slug}>{recipe.frontmatter.title}</Link></h3>
	</article>
)

export default RecipeListing

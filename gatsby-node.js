const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts"
    })
    createNodeField({
      node,
      name: "slug",
      value: `/posts${slug}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      blog: allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      recipes: allMarkdownRemark(filter: {frontmatter: {type: {eq: "recipe"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {
      result.data.blog.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/posts/PostPage.js"),
          context: {
            slug: node.fields.slug
          }
        })
      })
      result.data.recipes.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/recipes/RecipePage.js"),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}

module.exports = {
  siteMetadata: {
    title: "Inman's",
    desc: "Welcome to Inman Specialty Foods, LLC. This website specializes in \"Recipes born in the South from someone born in the South\". Our food items range from BBQ sauces and dry rubs to seafood items and more. We intend to add items when we can so check back from time to time to see whats new. Everything is intended to add a unique flavor to favorite recipes or visit our recipe page to get suggestions and see what we have created. You can even share yourown suggestions. We hope you come back time and time again to explore, share, and try new items you can't live without. Please tell your friends and family if you do."
  },
  //pathPrefix: "/inmans-site",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      }
    }, 
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

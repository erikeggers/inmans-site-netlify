module.exports = {
  siteMetadata: {
    title: "Inman's",
    desc: "We specialize in \"Flavors born in the South\". Our food items range from BBQ sauces and dry rubs to seafood items and more. Everything is intended to add a unique flavor to ​your​ favorite recipes or visit our recipe page to get suggestions and see what we have created. You can even share your own suggestions. We hope you come back time and time again to explore, share, and try new items you can't live without. Please tell your friends and family when you do."
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
        name: "src",
        path: `${__dirname}/static/`
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
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
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'inmans-specialty-foods',
        short_name: 'inmans',
        start_url: '/',
        background_color: '#0A2A43',
        theme_color: '#0A2A43',
        display: 'minimal-ui',
        icon: 'src/images/InmansLogo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "inman-specialty-foods-llc",
        accessToken: "2ae0de9b0b4fdc59500bbcac4e2deb3c",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop", "content"],
      },
    },
    'gatsby-plugin-offline',
  ],
}

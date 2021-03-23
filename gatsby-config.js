const myCustomQueries = {
  xs: `(max-width: 480px)`,
}

module.exports = {
  siteMetadata: {
    title: "crowdfunding-product-page",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon-32x32.png`,
      },
    },
  ],
}

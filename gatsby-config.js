const myCustomQueries = {
  xs: `(max-width: 425px)`,
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
  ],
}

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Ayaos Starter`,
    siteDescription: `Ayaos`,
    siteKeywords: `Ayaos`,
    siteUrl: `https://ayaos.work/`,
    ogpImage: `/images/img_ogp.jpg`,
    author: `Ayaos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-****',
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: 'gatsby' },
    //   },
    // },
  ],
}

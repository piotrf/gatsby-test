module.exports = {
  siteMetadata: {
    siteUrl: `https://piotrf.pl`,
    title: `piotrf.pl-v2 (2017)`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          `gatsby-transformer-sharp`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-plugin-netlify` // must come in last
  ]
};

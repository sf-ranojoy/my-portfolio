/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */


/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});


module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `A simple portfolio website.`,
    author: `@ballack96`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        allowList: ["GATSBY_UNSPLASH_ACCESS_KEY"], // Ensure Gatsby allows this variable
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    }, // <- Closing bracket added here
  ],
};

console.log("Loaded Contentful Space ID:", process.env.CONTENTFUL_SPACE_ID);
console.log("Loaded Contentful Token:", process.env.CONTENTFUL_ACCESS_TOKEN);
module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ]
};

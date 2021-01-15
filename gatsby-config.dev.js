
module.exports = {
  siteMetadata: {
    title: 'HackBeanpot 2020',
    siteUrl: 'https://hackbeanpot.com/'
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-resolve-src', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-sass',
    options: {
      useResolveUrlLoader: true
    }
  }, {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-152750259-1"
    }
  }, {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint: "https://hackbeanpot.us10.list-manage.com/subscribe/post?u=a98050d47fdae2481521f0474&amp;id=dccd8c8431" // string; add your MC list endpoint here; see instructions below

    }
  }]
};
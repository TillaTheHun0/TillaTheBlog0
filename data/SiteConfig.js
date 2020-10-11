
const config = {
  siteTitle: 'TillaTheHun0', // Site title.
  siteTitleShort: 'Tilla Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'TillaTheHun0', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://tillathe.blog', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A Blog For me to talk about things I like. Built with Gatsby', // Website description used for RSS feeds/meta description tag.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'MM-dd-yyyy', // Date format used in the frontmatter.
  dateFormat: 'MM-dd-yyyy', // Date format for display.
  userName: 'Tyler', // Username to display in the author segment.
  userEmail: '0tillathehun0@gmail.com', // Email used for RSS feed's author segment
  userLocation: 'Charleston, SC, USA', // User location to display in the author segment.
  userDescription:
    "I write the software, especially JavaScript. I play the drums, especially groovin'. I wore out my last soapbox, so I digitized this one instead :).", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/TillaTheHun0',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Email',
      url: 'mailto:0tillathehun0@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2020. Tyler Hall', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') { config.siteUrl = config.siteUrl.slice(0, -1) }

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') { config.siteRss = `/${config.siteRss}` }

module.exports = config

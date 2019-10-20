
const config = {
  siteTitle: 'TillaTheHun0', // Site title.
  siteTitleShort: 'Tilla Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'TillaTheHun0', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://tillathehun0.github.io/TillaTheBlog0', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A Blog For me to talk about things I like. Built with Gatsby', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-150461558-1', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Tyler', // Username to display in the author segment.
  userEmail: '0tillathehun0@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Charleston, SC, USA', // User location to display in the author segment.
  userDescription:
    "I write the software, especially JavaScript. I play the drums, especially groovin'. I wore out my last soapbox, so I digitized it instead :).", // User description to display in the author segment.
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
  copyright: 'Copyright © 2019. Tyler Hall', // Copyright string for the footer of the website and RSS feed.
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

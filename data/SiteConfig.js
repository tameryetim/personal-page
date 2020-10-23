const config = {
  siteTitle: 'Tamer Yetim',
  siteTitleShort: 'Tamer Yetim',
  siteTitleAlt: 'Tamer Yetim',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.tameryetim.com.tr',
  profileUrl: '#',
  profileAlt: 'Tamer Yetime',
  faviconUrl: '../content/images/favicon.ico',
  repo: 'https://github.com/tameryetim/personalsite',
  pathPrefix: '',
  // dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'YYYY-MM-DD',
  siteDescription:
    'Hello, this\'s Tamer Yetim.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'G-KSPHE31CLV',
  // userName: 'Charles',
  // userEmail: '',
  // userTwitter: '',
  menuLinks: [
    {
      name: 'İçerikler',
      link: '/blog/',
    },

    {
      name: 'Taglar',
      link: '/tags/',
    },
    {
      name: 'Bana Ulaşın',
      link: '/me/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
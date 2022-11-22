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
   dateFromFormatNew: 'YYYY',
  // dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'YYYY-MM-DD',
  siteDescription:
    'Hello, this\'s Tamer Yetim.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-48316511-1',
  // userName: '',
  // userEmail: '',
  //  userTwitter: '',
  menuLinks: [
       {
      name: 'Projelerm',
      link: 'https://www.tameryetim.com',
    },
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
  themeColor: '#3F80FF', 
  backgroundColor: '#ffffff',
}

if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config

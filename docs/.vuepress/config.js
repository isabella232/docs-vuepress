// sidebars
const sidebarAdmin = require('./sidebar-menus/administration')
const sidebarUserGuide = require('./sidebar-menus/user-guide')
const sidebarCommandLineTools = require('./sidebar-menus/command-line-tools')
// navbars
const navbarAdmin = require('./navbar-menus/administration')
const navbarUserGuide = require('./navbar-menus/user-guide')
const navbarTutorials = require('./navbar-menus/tutorials')

module.exports = {
  title: 'Rundeck Docs',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/main.css"
      }
    ]
  ],
  themeConfig: {
    logo: '/images/rundecklogo-black.png',
    displayAllHeaders: true,
    nav: [
      // {
      //   text: 'Home',
      //   link: '/'
      // },
      {
        text: 'User Guide',
        items: navbarUserGuide
      },
      {
        text: 'Tutorials',
        items: navbarTutorials
      },
      {
        text: 'Administration',
        items: navbarAdmin
      },
      {
        text: 'Enterprise',
        items: navbarAdmin
      },
      {
        text: 'Development',
        items: [{
          text: 'API',
          link: '/api/rundeck-api'
        }, {
          text: 'Plugin Development',
          link: '/developer/index'
        }, {
          text: 'Command Line Tools',
          link: '/manual/command-line-tools/'
        }, {
          text: 'Change Log',
          link: '/history/index'
        }]
      },
      {
        text: 'Plugins',
        items: navbarAdmin
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/administration/': sidebarAdmin,
      '/manual/command-line-tools/': [{
        title: 'Command Line Tools',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/manual/command-line-tools/rd-acl'
        ]
      }],
      '/manual': sidebarUserGuide,
      '/': [
        ''
      ]
    }
  }
}

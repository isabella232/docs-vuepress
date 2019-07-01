// sidebars
const sidebarAdmin = require('./sidebar-menus/administration')
const sidebarUserGuide = require('./sidebar-menus/user-guide')
const sidebarCommandLineTools = require('./sidebar-menus/command-line-tools')
const sidebarEnterprise = require('./sidebar-menus/enterprise')
// navbars
const navbarAdmin = require('./navbar-menus/administration')
const navbarUserGuide = require('./navbar-menus/user-guide')
const navbarTutorials = require('./navbar-menus/tutorials')
const navbarEnterprise = require('./navbar-menus/enterprise')

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
    nav: [{
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
        items: navbarEnterprise
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
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/administration/': sidebarAdmin,
      '/enterprise/': sidebarEnterprise,
      '/manual/command-line-tools/': sidebarCommandLineTools,
      '/manual': sidebarUserGuide,
      '/': [
        ''
      ]
    }
  }
}

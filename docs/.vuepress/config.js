// sidebars
const sidebarAdmin = require('./sidebar-menus/administration')
const sidebarUserGuide = require('./sidebar-menus/user-guide')
const sidebarCommandLineTools = require('./sidebar-menus/command-line-tools')
const sidebarEnterprise = require('./sidebar-menus/enterprise')
const sidebarDeveloper = require('./sidebar-menus/plugin-development')
const sidebarTutorials = require('./sidebar-menus/tutorials')
const sidebarHistory = require('./sidebar-menus/history')
// navbars
const navbarUserGuide = require('./navbar-menus/user-guide')
const navbarTutorials = require('./navbar-menus/tutorials')
const navbarAdmin = require('./navbar-menus/administration')
const navbarEnterprise = require('./navbar-menus/enterprise')
const navbarDevelopment = require('./navbar-menus/development')

module.exports = {
  title: 'Rundeck Docs',
  description: '',
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
        items: navbarDevelopment
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/administration/': sidebarAdmin,
      '/enterprise/': sidebarEnterprise,
      '/manual/command-line-tools/': sidebarCommandLineTools,
      '/manual': sidebarUserGuide,
      '/tutorials/': sidebarTutorials,
      '/developer/': sidebarDeveloper,
      '/history/': sidebarHistory,
      '/api/': [
        '/api/rundeck-api.md'
      ],
      '/': [
        ''
      ]
    }
  }
}

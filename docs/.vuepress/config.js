const sidebarAdmin = require('./sidebar-menus/administration')
const sidebarUserGuide = require('./sidebar-menus/user-guide')

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
        text: 'Home',
        link: '/'
      },
      {
        text: 'User Guide',
        items: [{
            link: '/manual/01-introduction',
            text: 'Introduction'
          },
          {
            link: '/manual/02-getting-help',
            text: 'Getting Help'
          },
          {
            link: '/manual/03-getting-started',
            text: 'Getting Started'
          },
          {
            link: '/manual/04-jobs',
            text: 'Jobs'
          },
          {
            link: '/manual/05-nodes',
            text: 'Nodes'
          },
          {
            link: '/manual/06-commands',
            text: 'Commands'
          },
          {
            link: '/manual/07-executions',
            text: 'Executions'
          },
          {
            link: '/manual/08-activity',
            text: 'Activity'
          },
          {
            link: '/manual/09-configure',
            text: 'Configure'
          },
          {
            link: '/manual/10-user',
            text: 'User'
          },
          {
            link: '/manual/11-node-filters',
            text: 'Node Filters'
          }
        ]
      }, {
        text: 'Administration',
        items: [{
            text: 'Overview',
            link: '/administration/'
          },
          {
            text: 'Installation',
            link: '/administration/install/'
          },
          {
            text: 'Configuration',
            link: '/administration/configuration/'
          },
          {
            text: 'Security',
            link: '/administration/security/default-users'
          },
          {
            text: 'Maintenance',
            link: '/administration/maintenance/index'
          }, {
            text: 'Cluster',
            link: '/administration/cluster/index'
          }, {
            text: 'Projects',
            link: '/administration/projects/index'
          }
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/administration/': sidebarAdmin,
      '/manual': sidebarUserGuide,
      '/': [
        ''
      ]
    }
  }
}

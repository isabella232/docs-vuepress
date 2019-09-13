module.exports = [{
  title: 'User Guide',
  collapsable: false,
  sidebarDepth: 0,
  children: [
    '/manual/01-introduction',
    '/manual/02-getting-help',
    '/manual/03-getting-started',
    {
      title: 'Jobs',
      collapsable: true,
      sidebarDepth: 1,
      children: [
        '/manual/04-jobs',
        '/manual/creating-jobs',
        '/manual/job-workflows',
        '/manual/job-options',
        '/manual/job-plugins',
      ]
    },
    '/manual/05-nodes',
    '/manual/06-commands',
    '/manual/07-executions',
    '/manual/08-activity',
    '/manual/09-configure',
    '/manual/10-user.md',
    '/manual/11-node-filters.md',
    '/manual/12-webhooks.md',
  ]
}]

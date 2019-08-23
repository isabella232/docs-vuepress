## Enabling the Healhcheck feature system-wide
By default the Healhcheck feature is disabled. Enable the Healthchecks to make it available in all projects.
After Heathcheck is enabled at the system level, a menu item appears in the Project Settings on the Edit Node > Configuration page.
To enable the feature:
1. Add the following properties to `rundeck-config.properties` file:
  - Enable node enhancer, the plugin to dynamically add attributes to nodes:
~~~~~~~~
rundeck.feature.enhanced-nodes.enabled=true
~~~~~~~~
  - Enable Healthcheck feature, which runs and parses diagnostic commands or scripts on remote nodes:
~~~~~~~~
rundeckpro.feature.incubator.healthcheck=true
~~~~~~~~
  - Set the name of the account that runs the Healhcheck. The default is `system`. (This account requires **node - run** and **system - storage** access.)
~~~~~~~~
rundeckpro.healthcheck.access.username=healthcheck_runner_account
~~~~~~~~
  - Set the role for the Healthcheck runner account. The default is `system`.
~~~~~~~~
rundeckpro.healthcheck.access.role=healthcheck_runner_role
~~~~~~~~

2. Restart Rundeck.

3. Create an ACL that allows the Healthcheck runner account node run and key storage access.

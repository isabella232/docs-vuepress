# Healthceck and Node Enhancer
Healthcheck provides the current node status and allows you to select nodes based on the job requirements and dependancies. Healthcheck runs a command or script and dynamically updates one or more node attributes with the results. Use Healthcheck to determine system state such as network connectivity, capacity - CPU usuage and disk space, installed software, or for tasks such as identifying nodes that require remidiation, failover, updates, and restarting a service.

## Node enhancer

Node enhancer is a plugin that adds attributes to nodes dynamically by matching criteria you set in the Rundeck console. It is required when using Healthcheck.

~~~~~~~~
rundeck.feature.enhanced-nodes.enabled=true
~~~~~~~~

## Healthcheck

Healthcheck is a plugin that runs and parses diagnostic commands or scripts on remote nodes. Attributes related to Healthcheck are applied by the node enhancer.

### Enable Healthcheck
Enabling Healthcheck makes the plugin available in all projects.
~~~~~~~~
rundeckpro.feature.incubator.healthcheck=true
~~~~~~~~
### Account to run command and scripts
Sets the name of the account that runs the Healhcheck. The default is `system`. (This account requires **node - run** and **system - storage** access.)
~~~~~~~~
rundeckpro.healthcheck.access.username=healthcheck_runner_account
~~~~~~~~
Sets the role for the Healthcheck runner account. The default is `system`.
~~~~~~~~
rundeckpro.healthcheck.access.role=healthcheck_runner_role
~~~~~~~~

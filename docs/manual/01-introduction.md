# Introduction

## What is this guide about?

Welcome to the Rundeck user guide. This guide was written to help
you quickly become productive with the Rundeck server and tools.

## What is Rundeck?

Rundeck is runbook automation that gives you and your colleagues self-service access to the processes and tools they need to get their job done. 

When used for incident management, Rundeck will help you have shorter incidents and fewer escalations. 

When used for general operations work, Rundeck will help alleviate the time-consuming and repetitive toil that currently consumes too much of your team's time. 

For more information on use cases, see the [New to Rundeck] page.

With Rundeck, it is simple and easy to create workflows (called "jobs") from any of your existing tools or scripts. Trigger Rundeck jobs from the Web GUI, API, CLI, or by schedule. Rundeck's access control features make it easy to safely delegate control of tasks to those traditionally outside of operations.

Rundeck was designed to accept the reality that heterogeneous infrastructure and tooling are a fact of life in any sizable organization. That is why Rundeck doesn't make you replace the scripts, commands, or tools you use today. You use Rundeck to execute workflows across your existing automation (e.g., Ansible, Puppet, Chef, Jenkins, Docker, Kubernetes, legacy tools, and all of your custom scripts/APIs) or quickly automate previously manual procedures. With Rundeck you can reuse the automation skills you already have and add new ones as needed.

Out of the box, Rundeck gives you capabilities that would be expensive to develop and maintain in-house: workflow control, scheduling, error-handling, logging, access control, option passing, log filtering, web GUI, REST API (with CLI tools) and integration with external sources for authentication, resource model, and option data.

## Is Rundeck free?

#### Rundeck

At its core, Rundeck is free open source software licensed under the [Apache Software License](v2.0), and you can participate in the project on [GitHub]. For those who write and run Rundeck jobs at small-scale usage (e.g., limited use or within a team), the open-source Rundeck delivers you the features you need, for free, _forever_.

#### Rundeck Enterpise (fka Rundeck Pro)

The focus of [Rundeck Enterpise], our commercial offering, is on making Rundeck production-ready and enterprise-scale. Rundeck Enterprise, built on the open source Rundeck, is the bundle of software and services you need to run Rundeck as an enterprise-class service.

Built and tested for the enterprise, Rundeck Enterpise includes exclusive features (including clustering/HA, advanced workflow, enhanced ACL management, enhanced dashboards/visualization) and Rundeck Enterprise exclusive plugins. Professional support and on-boarding services are also part of the Rundeck Enterprise subscription bundle.

_NOTE: Rundeck Enterprise was recently renamed from Rundeck Enterprise. You may still see refrences to "Pro" here and there, as we work to update our documentation. Just know that they are the same thing._

[New to Rundeck]: https://www.rundeck.com/new-to-rundeck
[rundeck enterpise]: https://www.rundeck.com/rundecker
[github]: https://github.com/rundeck/rundeck
[apache software license]: http://www.apache.org/licenses/LICENSE-2.0.html

## Who makes Rundeck?

Rundeck is developed by Rundeck, Inc. and the Rundeck community. All new users are welcomed to participate in the project and contribute. Please vote on feature ideas on the [Rundeck Trello Board].

[rundeck, inc.]: https://www.rundeck.com/
[rundeck trello board]: https://trello.com/b/sn3g9nOr/rundeck-development

## Rundeck feature highlights

- Distributed command execution
- Workflow (including option passing, conditionals, error handling, and multiple workflow strategies)
- Pluggable execution system (SSH and WinRM by default; Powershell available)
- Pluggable resource model (get details of your infrastructure from external systems)
- On-demand (Web GUI, API or CLI) or scheduled job execution
- Secure Key store for passwords and keys
- Role-based access control policy with support for LDAP/ActiveDirectory/SSO
- Access control policy editing/management tools
- History and auditing logs
- Use any scripting language

Already itching to install it? Jump ahead to
[Installing Rundeck](/manual/03-getting-started.md#download-and-installation).

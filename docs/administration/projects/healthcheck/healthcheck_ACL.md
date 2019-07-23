# Healthcheck ACLs
In order to use the Healthcheck feature:
 - Healthcheck runner account requires run permission on nodes and read permission on storage
 - Project administrators require admin permission on system and admin and config permission on the project.
## ACL for the Healthcheck Runner account
Healthcheck runs commands and scripts on the remote nodes in order to get the system status. The same account is used for all projects. The healthcheck runner connects to the node using key set in the Project Configuration or node attributes. To use Healthcheck create an ACL that allows the Healthcheck runner account to `run` commands on all nodes system wide and access all keys.
NOTE If keys are stored on server's local file system the storage access is not required.
To set up a Healthcheck runner ACL:
1. Sign into the Rundeck console with an administrator account.
2. Click the GEAR icon and choose **Access Control**.
3. Create a new policy:
  1. Enter a policy name.
  2. Go to the Editor tab and paste in the following (replace the role name with your own):
~~~~~~~~
~~~~~~~~
  3. Click **Save**.


## ACL for the project administrator to configure Healthchecks
Administrating Healthcheck including setting up commands or scripts and corresponding node attributes requires `admin` permission on the system resource and both `admin` and `config` permissions on the project (note that the policy shown below grants this access for all projects).
1. Sign into the Rundeck console with an administrator account.
2. Click the GEAR icon and choose **Access Control**.
3. Create a new policy:
  1. Enter a policy name.
  2. Go to the Editor tab and paste in the following (replace the role name with your own):
~~~~~~~~
by:
  group: project_admin
description: healtcheck
for:
  resource:
  - allow:
    - admin
    equals:
      kind: system
context:
  application: rundeck
---
by:
  group: project_admin
description: project
for:
  project:
  - allow:
    - admin
    - configure
    match:
      name: .*
context:
  application: rundeck
~~~~~~~~
  3. Click **Save**.

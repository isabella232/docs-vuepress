(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{421:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication","aria-hidden":"true"}},[t._v("#")]),t._v(" Replication")]),t._v(" "),a("p",[t._v("In order to keep a Rundeck Enterprise Cluster in sync, we provide plugins to replicate Rundeck state across instances.")]),t._v(" "),a("h2",{attrs:{id:"job-replication-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-replication-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Job Replication Plugin")]),t._v(" "),a("p",[t._v("The Job replication plugin is a SCM Export plugin included with Rundeck Enterprise. It automatically replicates Job definitions to a secondary Rundeck instance whenever a Job is modified within a project.")]),t._v(" "),a("p",[t._v("Enable the plugin in the SCM section of the Configuration page for a project.")]),t._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("dl",[a("dt",[t._v("Endpoint URL")]),t._v(" "),a("dd",[t._v("Remote Rundeck API URL")]),t._v(" "),a("dt",[t._v("API Token")]),t._v(" "),a("dd",[t._v("API Token for authentication to the remote Rundeck")]),t._v(" "),a("dt",[t._v("Project")]),t._v(" "),a("dd",[t._v("Name of remote Project to use, or "),a("code",[t._v("${job.project}")]),t._v(" to maintain the same name")])]),t._v(" "),a("h2",{attrs:{id:"execution-replication-file-storage-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-replication-file-storage-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Execution Replication File Storage Plugin")]),t._v(" "),a("p",[t._v("The Execution Replication File Storage Plugin included with Rundeck Enterprise creates a Rundeck formatted Project Archive for each execution, and uploads it to a remote\nRundeck server, to replicate the execution data")]),t._v(" "),a("p",[t._v("Enable the plugin in rundeck-config.properties:")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rundeck.execution.logs.fileStoragePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ExecutionReplicationPlugin")]),t._v("\n")])])]),a("p",[t._v("Configuration will be defined in framework.properties/project.properties:")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.rundeckUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://host")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.apiToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.outputDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/tmp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${execution.project}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30")]),t._v("\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);
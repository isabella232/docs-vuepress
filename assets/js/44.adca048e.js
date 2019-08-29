(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{413:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"autotakeover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autotakeover","aria-hidden":"true"}},[e._v("#")]),e._v(" Autotakeover")]),e._v(" "),a("p",[e._v("To support Autotakeover, you must first:")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/administration/cluster/loadbalancer/"}},[e._v("Configure a loadbalancer")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/administration/configuration/database/"}},[e._v("Configure an external database")])],1)]),e._v(" "),a("h3",{attrs:{id:"configure-autotakeover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-autotakeover","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure Autotakeover")]),e._v(" "),a("p",[e._v("Scheduled jobs are owned by the last cluster member who modified them. Jobs can also be controlled using Cluster Manager. If a cluster member goes down, all scheduled jobs on that cluster member must be moved to another cluster node. This process can be performed automatically using the heartbeat and Autotakeover features in Rundeck Enterprise version 2.1.0 and later releases.")]),e._v(" "),a("p",[e._v("Configure the heartbeat by adding the following settings in "),a("code",[e._v("rundeck-config.properties")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# heartbeat interval in seconds")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.heartbeat.interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("30")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# initial delay after startup to send heartbeat")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.heartbeat.delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("10")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# remote execute/abort message processing interval in seconds")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.remoteExec.process.interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("10")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# age in seconds since last heartbeat to consider another member inactive")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.heartbeat.considerInactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("150")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# age in seconds since last heartbeat to consider another member dead")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.heartbeat.considerDead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("300")]),e._v("\n")])])]),a("p",[e._v("Then configure Autotakeover by adding the following settings in "),a("code",[e._v("rundeck-config.properties")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# enables autotakeover for members detected as "dead"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.autotakeover.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("true")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# policy indicates which nodes to take over. "Any": all dead nodes. "Static": only allowed uuids')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.autotakeover.policy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("any")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# delay in seconds to wait after sending autotakeover proposal")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.autotakeover.delay")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("60")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sleep in minimum seconds between autotakeover atttempts for a particular destination")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.autotakeover.sleep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("300")]),e._v("\n")])])]),a("p",[e._v("If using static policy, you can configure a list of allowed member UUIDs to proceed with auto take-over if they are marked as dead. If a member is marked as dead and not in this list, auto take-over will not be performed. For example:")]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("rundeck.clusterMode.autotakeover.config.allowed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("<uuid1>,<uuid2>,...")]),e._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);
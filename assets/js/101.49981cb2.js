(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{671:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"servicenow-resource-model-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servicenow-resource-model-source","aria-hidden":"true"}},[e._v("#")]),e._v(" ServiceNow Resource Model Source")]),e._v(" "),s("p",[e._v("This is a Resource Model Source plugin that provides server information from ServiceNow's CMDB.")]),e._v(" "),s("p",[e._v("To obtain the data, the Service Now connection parameters must be passed as parameters to the plugin\n(username, password and url), and a list of server types, this can be:")]),e._v(" "),s("ul",[s("li",[e._v("all : Retrieve al types of servers")]),e._v(" "),s("li",[e._v("linux : Retrieve only linux machines")]),e._v(" "),s("li",[e._v("win : Retrieve only Windows machines")]),e._v(" "),s("li",[e._v("unix : Retrieve only unix machines")]),e._v(" "),s("li",[e._v("esx: Retrieve only ESX machines")]),e._v(" "),s("li",[e._v("solaris: Retrieve Solaris linux machines")]),e._v(" "),s("li",[e._v("aix: Retrieve only AIX machines")]),e._v(" "),s("li",[e._v("hpux: Retrieve only HPUX machines")]),e._v(" "),s("li",[e._v("osx: Retrieve only OS X machines")]),e._v(" "),s("li",[e._v("netware: Retrieve only Netware machines")]),e._v(" "),s("li",[e._v("comma separated list : as example 'linux,win'")])]),e._v(" "),s("h3",{attrs:{id:"mapping-and-default-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-and-default-values","aria-hidden":"true"}},[e._v("#")]),e._v(" Mapping and default values")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mappingParams")]),e._v(': A set of ";" separated mapping entries. This values are going to override the default mapping\none by one.\nThe minimal maping needed is the `username, because Service Now servers lacks a username field to map:')])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("username.default=root\n")])])]),s("h3",{attrs:{id:"default-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-mapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Default Mapping")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nodename.selector=name\nhostname.selector=host_name,ip_address,dns_domain\nsshport.default=22\ndescription.default=Service Now node instance\ndescription.selector=short_description\nosFamily.default=unix\nosName.selector=os\nosName.default=Linux\nosVersion.selector=os_version\nipAddress.selector=ip_address\ncpuCoreCount.selector=cpu_core_count\ncpuCount.selector=cpu_count\ncpuCpeed.selector=cpu_speed\ncpuType.selector=cpu_type\nosDomain.selector=os_domain\ntags.selector=asset_tag\ntags.default=servicenow\n")])])]),s("h3",{attrs:{id:"configuration-of-the-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-the-mapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration of the Mapping")]),e._v(" "),s("p",[e._v("The node requieres at least the nodename, hostname and user.\nA selector with a list like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hostname.selector=host_name,ip_address,dns_domain\n")])])]),s("p",[e._v("Are going to search on the result of the query the value of "),s("code",[e._v("host_name")]),e._v(", if is not set, the "),s("code",[e._v("ip_address")]),e._v(" or the\n"),s("code",[e._v("dns_domain")]),e._v(".")]),e._v(" "),s("p",[e._v("A selector with a defualt value like this example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("osName.selector=os\nosName.default=Linux\n")])])]),s("p",[e._v("Are going to search the "),s("code",[e._v("os")]),e._v(" value, if not set, are going to use the default value "),s("code",[e._v("Linux")]),e._v(".")]),e._v(" "),s("p",[e._v("The special case of the tags, if multiple tags are set using comma, all are going to be searched and used.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tags.selector=asset_tag,os\ntags.default=servicenow\n")])])]),s("p",[e._v("If is none of the "),s("code",[e._v("asset_tag")]),e._v(" or "),s("code",[e._v("os")]),e._v(" exists, the default tag are going to be used "),s("code",[e._v("servicenow")]),e._v(".")]),e._v(" "),s("p",[e._v("In the case only the default value exists, this fixed value are going to be set.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("osFamily.default=unix\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);
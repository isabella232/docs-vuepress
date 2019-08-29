(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{505:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"storage-plugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage Plugin")]),e._v(" "),r("h2",{attrs:{id:"about"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about","aria-hidden":"true"}},[e._v("#")]),e._v(" About")]),e._v(" "),r("p",[e._v("Storage plugins provide the backend for storing file contents uploaded to the "),r("router-link",{attrs:{to:"/administration/security/key-storage.html"}},[e._v("Key Storage")]),e._v(" via the "),r("router-link",{attrs:{to:"/api/rundeck-api.html#key-storage"}},[e._v("Key Storage API")]),e._v(".")],1),e._v(" "),r("p",[e._v("The Storage facility stores "),r("strong",[e._v("Resources")]),e._v(" in a "),r("strong",[e._v("Path-oriented")]),e._v(" tree structure. Each "),r("strong",[e._v("Resource")]),e._v(" has a set of key-value "),r("em",[e._v("metadata")]),e._v(", and a stream of binary data (the "),r("em",[e._v("content")]),e._v(").")]),e._v(" "),r("p",[e._v("Rundeck provides two built-in providers, "),r("code",[e._v("db")]),e._v(" and "),r("code",[e._v("file")]),e._v(", which store the contents in the database or on the filesystem.")]),e._v(" "),r("p",[e._v("When installed, Storage Plugins can be configured to apply to all storage, or for everything below a certain Path.")]),e._v(" "),r("h2",{attrs:{id:"configuring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring")]),e._v(" "),r("p",[e._v("See: "),r("router-link",{attrs:{to:"/administration/security/key-storage.html#configuring-the-storage-plugins"}},[e._v("Configuring the Storage Plugins")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"java-plugin-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-plugin-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Java Plugin Type")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Note")]),e._v(": Refer to "),r("router-link",{attrs:{to:"/developer/01-plugin-development.html#java-plugin-development"}},[e._v("Java Development")]),e._v(" for information about developing a Java plugin for Rundeck.")],1)]),e._v(" "),r("p",[r("strong",[e._v("Plugin Interface")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/storage/StoragePlugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("StoragePlugin"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("This simply extends "),r("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/org/rundeck/storage/api/Tree.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tree"),r("OutboundLink")],1),e._v(" to store resource of type "),r("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/core/storage/ResourceMeta.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ResourceMeta"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Refer to the "),r("a",{attrs:{href:"$%7Bjavadocstoragetop%7D"}},[e._v("Rundeck Storage API javadocs")]),e._v(" for more information about the underlying storage API.")]),e._v(" "),r("p",[r("strong",[e._v("Service Name")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://static.javadoc.io/org.rundeck/rundeck-core/3.1.0-20190731/com/dtolabs/rundeck/plugins/ServiceNameConstants.html#Storage",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Storage")]),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("Additional Compile-time Dependency")])]),e._v(" "),r("p",[e._v("Your build tool will need to include "),r("code",[e._v("org.rundeck:rundeck-storage-api:3.1.0-20190731")]),e._v(" as a dependency.")]),e._v(" "),r("p",[e._v("See: "),r("a",{attrs:{href:"https://search.maven.org/artifact/org.rundeck/rundeck-storage-api/3.1.0-20190731/jar",target:"_blank",rel:"noopener noreferrer"}},[e._v("org.rundeck:rundeck-storage-api:\\3.1.0-20190731"),r("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);
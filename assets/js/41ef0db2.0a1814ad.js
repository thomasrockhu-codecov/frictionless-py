(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(160)),l=["components"],o={title:"Excel Tutorial",sidebar_label:"Excel",cleanup:["rm table.xlsx"]},c={unversionedId:"tutorials/formats/excel-tutorial",id:"tutorials/formats/excel-tutorial",isDocsHomePage:!1,title:"Excel Tutorial",description:"Excel is a very popular tabular data format that usually has xlsx (newer) and xls (older) file extensions. Frictionless supports Excel files extensively.",source:"@site/../docs/tutorials/formats/excel-tutorial.md",slug:"/tutorials/formats/excel-tutorial",permalink:"/docs/tutorials/formats/excel-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/tutorials/formats/excel-tutorial.md",version:"current",lastUpdatedBy:"Alex Kreidler",lastUpdatedAt:1648464023,formattedLastUpdatedAt:"3/28/2022",sidebar_label:"Excel",sidebar:"tutorials",previous:{title:"CSV Tutorial",permalink:"/docs/tutorials/formats/csv-tutorial"},next:{title:"Google Sheets Tutorial",permalink:"/docs/tutorials/formats/gsheets-tutorial"}},s=[{value:"Reading Data",id:"reading-data",children:[]},{value:"Writing Data",id:"writing-data",children:[]},{value:"Configuring Data",id:"configuring-data",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Excel is a very popular tabular data format that usually has ",Object(i.b)("inlineCode",{parentName:"p"},"xlsx")," (newer) and ",Object(i.b)("inlineCode",{parentName:"p"},"xls")," (older) file extensions. Frictionless supports Excel files extensively."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless[excel]\n")),Object(i.b)("h2",{id:"reading-data"},"Reading Data"),Object(i.b)("p",null,"You can read this format using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="python"',script:!0,title:'"python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nresource = Resource(path='data/table.xlsx')\npprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[{'id': 1, 'name': 'english'}, {'id': 2, 'name': '\u4e2d\u56fd\u4eba'}]\n")),Object(i.b)("h2",{id:"writing-data"},"Writing Data"),Object(i.b)("p",null,"The same is actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="python"',script:!0,title:'"python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nsource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\ntarget = source.write('table.xlsx')\npprint(target)\npprint(target.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{'path': 'table.xlsx'}\n[{'id': 1, 'name': 'english'}, {'id': 2, 'name': 'german'}]\n")),Object(i.b)("h2",{id:"configuring-data"},"Configuring Data"),Object(i.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\nfrom frictionless.plugins.excel import ExcelDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.xlsx', dialect=ExcelDialect(sheet='My Table'))\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/references/formats-reference#excel"},"Excel Dialect"))))}u.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"6EMX":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("vDqi"),c=n.n(i),s=n("XzT5"),l=n("8SHQ");function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function e(t,n){for(var r in t)"object"==typeof t[r]?e(t[r],n[r]):n.hasOwnProperty(r)&&(n[r]=t[r])},b=function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a,i,f,b,d,g,y,m,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return c.a.get("".concat(l.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,c.a.all(n);case 3:if(r=e.sent,a=r.map((function(e){return e.data})),"en-US"===s.a.language){e.next=32;break}i=u(t.values()),e.prev=7,i.s();case 9:if((f=i.n()).done){e.next=24;break}return b=f.value,e.prev=11,e.next=14,c.a.get("".concat(l.e,"/contents/").concat(b,"/tours_").concat(s.a.language,".json"));case 14:d=e.sent,g=u(r);try{for(g.s();!(y=g.n()).done;)m=y.value,v=m.config.url.split("/"),v[v.length-2]===b&&p(d.data,m.data)}catch(o){g.e(o)}finally{g.f()}e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.log("Fail to get %o tours files of %o",s.a.language,b);case 22:e.next=9;break;case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(7),i.e(e.t1);case 29:return e.prev=29,i.f(),e.finish(29);case 32:return e.abrupt("return",a);case 33:case"end":return e.stop()}}),e,null,[[7,26,29,32],[11,19]])})));return function(t){return e.apply(this,arguments)}}()},"7gpI":function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("XzT5")),a=n("9xET"),i=n.n(a),c=(n("YFqc"),n("17x9")),s=n.n(c),l=n("whbN"),u=n("4CzQ"),f=n.n(u),p=n("mOvS"),b=n.n(p)()().publicRuntimeConfig;l.a.propTypes={title:s.a.string,tours:s.a.array},l.a.defaultProps={title:"",tours:[]},t.a=function(e){e.alias;var t=e.title,n=e.desc,a=e.tours;return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{className:f.a.domainTitleWrapper,children:Object(r.jsxs)("div",{children:["dbx"===t.toLowerCase()?Object(r.jsx)("img",{src:"".concat(b.asset,"/static/dist/images/dbx_logo.png"),className:f.a.title}):Object(r.jsx)("h1",{className:f.a.title,children:o.a.t(t).toUpperCase()}),Object(r.jsx)("div",{className:f.a.desc,dangerouslySetInnerHTML:{__html:o.a.t(n)}})]})}),Object(r.jsx)(i.a,{type:"flex",className:f.a.assetsContainer,children:a.map((function(e){return Object(r.jsx)(l.a,{tour:e,dbx:"dbx"===t.toLowerCase()},e.nid)}))})]})}},AP2z:function(e,t,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(s){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}return r.ab=t+"/",r(880)}()}).call(this,"/")},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},PGnZ:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generate:"_27j98",generateForm:"_1n1qG",preview:"_1zsEw",previews:"_1o1qI"}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("ntbh"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"e+nY":function(e,t,n){"use strict";n.r(t);var r=n("nKUr");var o=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||Object(o.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("o0o1"),c=n.n(i),s=n("HaE+"),l=n("q1tI"),u=n("XzT5"),f=n("20a2"),p=n("mOvS"),b=n.n(p),d=n("Djov"),g=n("7gpI"),y=n("PGnZ"),m=n.n(y),v=n("6EMX");function h(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=Object(l.useState)([]),t=e[0],n=e[1],o=Object(f.useRouter)(),i=b()().publicRuntimeConfig,p=function(){var e=Object(s.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.hikesData,e.next=3,Object(v.a)(t);case 3:r=e.sent,n(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){return p(),function(){}}),[]),Object(l.useEffect)((function(){var e,t=o.asPath.split(/\?/),n={},r=h(new URLSearchParams(t[1]));try{for(r.s();!(e=r.n()).done;){var i=a(e.value,2),c=i[0],s=i[1];n[c]=s}}catch(f){r.e(f)}finally{r.f()}console.log("parsed query: %o",n),console.log("router obj: %o",o);var l=n.lang;l?l!==u.a.language?(console.log("reload since language does not match: %o",o.asPath),o.reload(o.asPath)):console.log("query lang matches i18next langauge: %o",u.a.language):(console.log("push path[0]: %o",t[0]),o.push({pathname:t[0]||o.pathname,query:{lang:"en-US"}}))}),[u.a.language,o.query]),Object(r.jsxs)("div",{className:m.a.hikeBody,children:[Object(r.jsx)(d.a,{}),Object(r.jsx)("div",{className:m.a.hikeContainer,children:t.map((function(e){return null!==e.categoryTours?Object(r.jsx)(g.a,{title:e.categoryName,desc:e.categoryDescription,alias:e.categoryAlias||e.categoryName,tours:e.categoryTours},e.categoryName):null}))})]})}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},whbN:function(e,t,n){"use strict";(function(e){var r=n("nKUr"),o=(n("q1tI"),n("XzT5")),a=n("ZPTe"),i=n.n(a),c=n("YFqc"),s=n.n(c),l=n("JviU"),u=n.n(l),f=n("7Qib"),p=n("8SHQ"),b="production"===(e&&e.env,"production")?"".concat(p.b,"/"):"",d=function(e){var t=e.tour,n=e.dbx;e.search;return Object(r.jsx)(i.a,{sm:8,xs:24,children:Object(r.jsx)("div",{className:u.a.tour,children:Object(r.jsx)(s.a,{href:{pathname:"".concat(b).concat(t.alias),query:{lang:o.a.language}},children:Object(r.jsxs)("div",{className:u.a.info,children:[Object(r.jsx)("h2",{className:"".concat(u.a.title," ").concat(n?u.a.dbxColor:""," "),children:Object(f.f)(t.title,34)}),Object(r.jsx)("p",{className:u.a.desc,children:t.description}),Object(r.jsx)("p",{className:u.a.meta,children:"".concat(o.a.t("step",{count:t.cards})," / ").concat(t.time)})]})})})})};d.defaultProps={tour:{},dbx:!1},t.a=d}).call(this,n("8oxB"))},yAYO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hikes",function(){return n("e+nY")}])}},[["yAYO",1,2,5,8,0,3,4,9,17,19,7]]]);
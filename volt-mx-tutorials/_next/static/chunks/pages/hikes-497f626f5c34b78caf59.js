_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"6EMX":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return y}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("vDqi"),c=n.n(i),s=n("XzT5"),l=n("mOvS"),u=n.n(l),p=n("8SHQ");function f(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=u()().publicRuntimeConfig,g=function e(t,n){for(var r in t)"object"===typeof t[r]?e(t[r],n[r]):n.hasOwnProperty(r)&&(n[r]=t[r])},m=function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r,a,i,l,u,b,d,m,y,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return c.a.get("".concat(p.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,c.a.all(n);case 3:r=e.sent,a=r.map((function(e){return e.data})),i=f(t.values()),e.prev=6,i.s();case 8:if((l=i.n()).done){e.next=23;break}return u=l.value,e.prev=10,e.next=13,c.a.get("".concat(p.e,"/contents/").concat(u,"/tours_").concat(s.a.language,".json"));case 13:b=e.sent,d=f(r);try{for(d.s();!(m=d.n()).done;)y=m.value,j=y.config.url.split("/"),j[j.length-2]===u&&g(b.data,y.data)}catch(o){d.e(o)}finally{d.f()}e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log("Fail to get %o tours files of %o",s.a.language,u);case 21:e.next=8;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(6),i.e(e.t1);case 28:return e.prev=28,i.f(),e.finish(28);case 31:return e.abrupt("return",a);case 32:case"end":return e.stop()}}),e,null,[[6,25,28,31],[10,18]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.hikesData,e.next=3,m(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},"7gpI":function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("XzT5")),a=n("9xET"),i=n.n(a),c=(n("YFqc"),n("17x9")),s=n.n(c),l=n("whbN"),u=n("4CzQ"),p=n.n(u),f=n("mOvS"),b=n.n(f)()().publicRuntimeConfig;l.a.propTypes={title:s.a.string,tours:s.a.array},l.a.defaultProps={title:"",tours:[]},t.a=function(e){e.alias;var t=e.title,n=e.desc,a=e.tours;return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{className:p.a.domainTitleWrapper,children:Object(r.jsxs)("div",{children:["dbx"===t.toLowerCase()?Object(r.jsx)("img",{src:"".concat(b.asset,"/static/dist/images/dbx_logo.png"),className:p.a.title}):Object(r.jsx)("h1",{className:p.a.title,children:o.a.t(t).toUpperCase()}),Object(r.jsx)("div",{className:p.a.desc,dangerouslySetInnerHTML:{__html:o.a.t(n)}})]})}),Object(r.jsx)(i.a,{type:"flex",className:p.a.assetsContainer,children:a.map((function(e){return Object(r.jsx)(l.a,{tour:e,dbx:"dbx"===t.toLowerCase()},e.nid)}))})]})}},AP2z:function(e,t,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(s){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},a=!0;try{e[t](o,o.exports,r),a=!1}finally{a&&delete n[t]}return o.exports}return r.ab=t+"/",r(880)}()}).call(this,"/")},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},PGnZ:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",toursDetailPreview:"_1wyb7",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generateContainer:"_3r9_H",pageContent:"_3HEcY",forms:"_3n0I_",formContainer:"_15mmt",zipEmpty:"D4gGS",zipValid:"QxijF",ckEditorContainer:"_1A38U",generateForm:"_1n1qG",previews:"_1o1qI",header:"_1BKOx",logo:"d8BYZ",cardPreview:"iZurp",previewContainer:"j2Rpp"}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("ntbh"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},"e+nY":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("o0o1"),a=n.n(o),i=n("HaE+"),c=n("q1tI"),s=n("20a2"),l=n("XzT5"),u=n("Djov"),p=n("7gpI"),f=n("PGnZ"),b=n.n(f),d=n("6EMX");t.default=function(){var e=Object(c.useState)([]),t=e[0],n=e[1],o=Object(s.useRouter)(),f=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return f(),function(){}}),[l.a.language]),Object(c.useEffect)((function(){var e=o.asPath.split(/\?/),t=new URLSearchParams(e[1]).get("lang");t?t!==l.a.language&&o.push(o.asPath):o.push({pathname:e[0]||o.pathname,query:{lang:"en-US"}})}),[l.a.language,o.query]),Object(r.jsxs)("div",{className:b.a.hikeBody,children:[Object(r.jsx)(u.a,{}),Object(r.jsx)("div",{className:b.a.hikeContainer,children:t.map((function(e){return null!==e.categoryTours?Object(r.jsx)(p.a,{title:e.categoryName,desc:e.categoryDescription,alias:e.categoryAlias||e.categoryName,tours:e.categoryTours},e.categoryName):null}))})]})}},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},whbN:function(e,t,n){"use strict";(function(e){var r=n("nKUr"),o=(n("q1tI"),n("XzT5")),a=n("ZPTe"),i=n.n(a),c=n("YFqc"),s=n.n(c),l=n("JviU"),u=n.n(l),p=n("7Qib"),f=n("8SHQ"),b="production"===(e&&e.env,"production")?"".concat(f.b,"/"):"",d=function(e){var t=e.tour,n=e.dbx,a=(e.search,e.isComposer);return Object(r.jsx)(i.a,{sm:a?8:6,xs:24,children:Object(r.jsx)("div",{className:u.a.tour,children:Object(r.jsx)(s.a,{href:{pathname:"".concat(b).concat(t.alias),query:{lang:o.a.language}},children:Object(r.jsxs)("div",{className:u.a.info,children:[Object(r.jsx)("h2",{className:"".concat(u.a.title," ").concat(n?u.a.dbxColor:""," "),children:Object(p.f)(t.title,34)}),Object(r.jsx)("p",{className:u.a.desc,children:t.description}),Object(r.jsx)("p",{className:u.a.meta,children:"".concat(o.a.t("step",{count:t.cards})," / ").concat(t.time)})]})})})})};d.defaultProps={tour:{},dbx:!1,search:"",isComposer:!1},t.a=d}).call(this,n("8oxB"))},yAYO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hikes",function(){return n("e+nY")}])}},[["yAYO",1,2,5,9,0,3,4,8,18,20,7]]]);
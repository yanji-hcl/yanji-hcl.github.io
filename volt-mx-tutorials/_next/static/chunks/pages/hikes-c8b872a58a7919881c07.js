_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"6EMX":function(e,t,n){"use strict";var a=n("o0o1"),o=n.n(a),r=n("HaE+"),i=n("vDqi"),c=n.n(i),s=n("XzT5"),l=(n("LvDl"),n("8SHQ"));function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw r}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f=function e(t,n){for(var a in t)"object"===typeof t[a]?e(t[a],n[a]):n.hasOwnProperty(a)&&(n[a]=t[a])},g=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,a,r,i,p,g,b,m,d,j,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return c.a.get("".concat(l.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,c.a.all(n);case 3:if(a=e.sent,r=a.map((function(e){return e.data})),"en-US"===s.a.language){e.next=32;break}i=u(t.values()),e.prev=7,i.s();case 9:if((p=i.n()).done){e.next=24;break}return g=p.value,e.prev=11,e.next=14,c.a.get("".concat(l.e,"/contents/").concat(g,"/tours_").concat(s.a.language,".json"));case 14:b=e.sent,m=u(a);try{for(m.s();!(d=m.n()).done;)j=d.value,h=j.config.url.split("/"),h[h.length-2]===g&&f(b.data,j.data)}catch(o){m.e(o)}finally{m.f()}e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.log("Fail to get %o tours files of %o",s.a.language,g);case 22:e.next=9;break;case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(7),i.e(e.t1);case 29:return e.prev=29,i.f(),e.finish(29);case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e,null,[[7,26,29,32],[11,19]])})));return function(t){return e.apply(this,arguments)}}();t.a=g},"7gpI":function(e,t,n){"use strict";var a=n("nKUr"),o=(n("q1tI"),n("XzT5")),r=n("9xET"),i=n.n(r),c=(n("YFqc"),n("17x9")),s=n.n(c),l=n("whbN"),u=n("4CzQ"),p=n.n(u),f=n("mOvS"),g=n.n(f)()().publicRuntimeConfig;l.a.propTypes={title:s.a.string,tours:s.a.array},l.a.defaultProps={title:"",tours:[]},t.a=function(e){e.alias;var t=e.title,n=e.desc,r=e.tours;return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,{className:p.a.domainTitleWrapper,children:Object(a.jsxs)("div",{children:["dbx"===t.toLowerCase()?Object(a.jsx)("img",{src:"".concat(g.asset,"/static/dist/images/dbx_logo.png"),className:p.a.title}):Object(a.jsx)("h1",{className:p.a.title,children:o.a.t(t).toUpperCase()}),Object(a.jsx)("div",{className:p.a.desc,dangerouslySetInnerHTML:{__html:o.a.t(n)}})]})}),Object(a.jsx)(i.a,{type:"flex",className:p.a.assetsContainer,children:r.map((function(e){return Object(a.jsx)(l.a,{tour:e,dbx:"dbx"===t.toLowerCase()},e.nid)}))})]})}},AP2z:function(e,t,n){var a=n("nmnc"),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),n=e[c];try{e[c]=void 0;var a=!0}catch(s){}var o=i.call(e);return a&&(t?e[c]=n:delete e[c]),o}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var a=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();e.exports=r},NykK:function(e,t,n){var a=n("nmnc"),o=n("AP2z"),r=n("KfNM"),i=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):r(e)}},PGnZ:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generate:"_27j98",generateForm:"_1n1qG",preview:"_1zsEw",previews:"_1o1qI"}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("ntbh"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},"e+nY":function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),o=n("o0o1"),r=n.n(o),i=n("HaE+"),c=n("q1tI"),s=n("XzT5"),l=n("20a2"),u=n("mOvS"),p=n.n(u),f=n("Djov"),g=n("7gpI"),b=n("PGnZ"),m=n.n(b),d=n("6EMX");t.default=function(){var e=Object(c.useState)([]),t=e[0],n=e[1],o=Object(l.useRouter)(),u=p()().publicRuntimeConfig,b=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.hikesData,e.next=3,Object(d.a)(t);case 3:a=e.sent,n(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return b(),function(){}}),[]),Object(c.useEffect)((function(){var e=o.asPath.split(/\?/),t=new URLSearchParams(e[1]).get("lang");console.log("search params lang is: %o",t),t?t!==s.a.language?(console.log("reload since language does not match: %o",o.asPath),o.push(o.asPath)):console.log("query lang matches i18next langauge: %o",s.a.language):(console.log("push path[0]: %o",e[0]),o.reload({pathname:e[0]||o.pathname,query:{lang:"en-US"}}))}),[s.a.language,o.query]),Object(a.jsxs)("div",{className:m.a.hikeBody,children:[Object(a.jsx)(f.a,{}),Object(a.jsx)("div",{className:m.a.hikeContainer,children:t.map((function(e){return null!==e.categoryTours?Object(a.jsx)(g.a,{title:e.categoryName,desc:e.categoryDescription,alias:e.categoryAlias||e.categoryName,tours:e.categoryTours},e.categoryName):null}))})]})}},nmnc:function(e,t,n){var a=n("Kz5y").Symbol;e.exports=a},whbN:function(e,t,n){"use strict";(function(e){var a=n("nKUr"),o=(n("q1tI"),n("XzT5")),r=n("ZPTe"),i=n.n(r),c=n("YFqc"),s=n.n(c),l=n("JviU"),u=n.n(l),p=n("7Qib"),f=n("8SHQ"),g="production"===(e&&e.env,"production")?"".concat(f.b,"/"):"",b=function(e){var t=e.tour,n=e.dbx;e.search;return Object(a.jsx)(i.a,{sm:8,xs:24,children:Object(a.jsx)("div",{className:u.a.tour,children:Object(a.jsx)(s.a,{href:{pathname:"".concat(g).concat(t.alias),query:{lang:o.a.language}},children:Object(a.jsxs)("div",{className:u.a.info,children:[Object(a.jsx)("h2",{className:"".concat(u.a.title," ").concat(n?u.a.dbxColor:""," "),children:Object(p.f)(t.title,34)}),Object(a.jsx)("p",{className:u.a.desc,children:t.description}),Object(a.jsx)("p",{className:u.a.meta,children:"".concat(o.a.t("step",{count:t.cards})," / ").concat(t.time)})]})})})})};b.defaultProps={tour:{},dbx:!1},t.a=b}).call(this,n("8oxB"))},yAYO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hikes",function(){return n("e+nY")}])}},[["yAYO",1,2,5,8,17,0,3,4,9,18,20,7]]]);
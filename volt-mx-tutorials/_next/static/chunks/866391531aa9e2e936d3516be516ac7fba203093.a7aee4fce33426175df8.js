(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"6EMX":function(e,t,o){"use strict";o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return v}));var n=o("o0o1"),a=o.n(n),r=o("HaE+"),i=o("vDqi"),s=o.n(i),l=o("XzT5"),c=o("mOvS"),u=o.n(c),p=o("8SHQ");function d(e,t){var o;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return m(e,t)}(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw r}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var g=u()().publicRuntimeConfig,b=function e(t,o){for(var n in t)"object"===typeof t[n]?e(t[n],o[n]):o.hasOwnProperty(n)&&(o[n]=t[n])},f=function(){var e=Object(r.a)(a.a.mark((function e(t){var o,n,r,i,c,u,m,g,f,v,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.map((function(e){return s.a.get("".concat(p.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,s.a.all(o);case 3:n=e.sent,r=n.map((function(e){return e.data})),i=d(t.values()),e.prev=6,i.s();case 8:if((c=i.n()).done){e.next=23;break}return u=c.value,e.prev=10,e.next=13,s.a.get("".concat(p.e,"/contents/").concat(u,"/tours_").concat(l.a.language,".json"));case 13:m=e.sent,g=d(n);try{for(g.s();!(f=g.n()).done;)v=f.value,j=v.config.url.split("/"),j[j.length-2]===u&&b(m.data,v.data)}catch(a){g.e(a)}finally{g.f()}e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log("Fail to get %o tours files of %o",l.a.language,u);case 21:e.next=8;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(6),i.e(e.t1);case 28:return e.prev=28,i.f(),e.finish(28);case 31:return e.abrupt("return",r);case 32:case"end":return e.stop()}}),e,null,[[6,25,28,31],[10,18]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.a)(a.a.mark((function e(){var t,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.hikesData,e.next=3,f(t);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},"DG/x":function(e,t,o){"use strict";var n=o("nKUr"),a=(o("q1tI"),o("Y/VR")),r=o.n(a),i=o("YFqc"),s=o.n(i),l=o("XzT5"),c=o("sz4E"),u=o.n(c),p=o("8SHQ"),d=p.f?"":"/".concat(p.b);t.a=function(e){var t=e.title,o=e.className,a=e.search;return Object(n.jsx)("div",{className:"".concat(u.a.breadcrumbWrapper," ").concat(o),children:Object(n.jsxs)(r.a,{separator:Object(n.jsx)("span",{className:u.a.divider,children:"/"}),children:[Object(n.jsx)(r.a.Item,{children:Object(n.jsx)(s.a,{href:{pathname:"".concat(d,"/hikes"),query:{lang:l.a.language}},children:Object(n.jsx)("a",{className:u.a.parent,children:"HIKES"})})}),void 0!==a&&null!==a?Object(n.jsx)(r.a.Item,{children:Object(n.jsx)(s.a,{href:{pathname:"/hikes/search/".concat(a,"}"),query:{lang:l.a.language}},children:Object(n.jsx)("a",{className:u.a.parent,children:a})})}):null,Object(n.jsx)(r.a.Item,{className:u.a.child,children:t||null})]})})}},PGnZ:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",toursDetailPreview:"_1wyb7",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generateContainer:"_3r9_H",pageContent:"_3HEcY",forms:"_3n0I_",formContainer:"_15mmt",zipEmpty:"D4gGS",zipValid:"QxijF",ckEditorContainer:"_1A38U",generateForm:"_1n1qG",previews:"_1o1qI",header:"_1BKOx",logo:"d8BYZ",cardPreview:"iZurp",previewContainer:"j2Rpp"}},XKlS:function(e,t,o){"use strict";var n=o("nKUr"),a=(o("q1tI"),o("4IMT")),r=o.n(a),i=o("zk85"),s=o.n(i),l=o("mOvS"),c=o.n(l)()().publicRuntimeConfig,u=function(e){if(e)return Object(n.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:s.a.filterCloseIcon})},p=function(e){return"download"===e?Object(n.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:s.a.downloadIcon}):null},d=function(e){return e?Object(n.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:s.a.codeIcon}):null},m=function(e){var t=e.title,o=e.type,a=e.color,i=e.active,l=e.selected,c=e.children,m=e.className,g=e.onClick,b=e.featured,f=e.href,v=e.target,j=e.disabled,S=e.isCode;return Object(n.jsxs)(r.a,{title:t,className:"\n      ".concat(s.a.konyButton,"\n      ").concat(s.a[o]?s.a[o]:"","\n      ").concat(s.a[a]?s.a[a]:"","\n      ").concat(i?s.a.active:"","\n      ").concat(l?s.a.selected:"","\n      ").concat(b?s.a.featured:"","\n      ").concat(m,"\n    "),onClick:g,href:f||null,target:v,disabled:j,children:[p(o),d(S),c||t,u(l)]})};m.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=m},kACj:function(e,t,o){"use strict";o.r(t);var n=o("nKUr"),a=o("o0o1"),r=o.n(a),i=o("rePB"),s=o("HaE+"),l=o("q1tI"),c=o("XzT5"),u=o("9xET"),p=o.n(u),d=o("ZPTe"),m=o.n(d),g=o("mOvS"),b=o.n(g),f=o("Djov"),v=o("DG/x"),j=o("XKlS"),S=o("PGnZ"),y=o.n(S),h=o("6EMX"),I=o("8SHQ"),x=o("t3Un");function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function B(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach((function(t){Object(i.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.default=function(e){var t,o=e.url,a=e.previewData,i=Object(l.useState)(null),u=i[0],d=i[1],g=Object(l.useState)(null),S=g[0],O=g[1],E=b()().publicRuntimeConfig.hikesData,_="preview"===o.asPath,U=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,i,s,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=4;break}d(B(B({},a),{},{category:[a.category]})),e.next=14;break;case 4:return t=o.asPath.substr(0,o.asPath.indexOf("?")),n=I.f?t.substring(1):t.replace("/".concat(I.b),"").substring(1),e.next=8,Object(h.a)(E);case 8:i=e.sent,s=i.filter((function(e){return e.categoryTours.some((function(e){return e.alias==n}))})),O(s[0].categoryAlias),l=s.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})}))[0],c=l.categoryTours.filter((function(e){return e.alias==n}))[0],d(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){return U(),function(){}}),[a]);var k=function(e){return e.preventDefault(),e.message=function(){var e=new Date,t=Object(x.a)(null===u||void 0===u?void 0:u.fileName,S);return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===u||void 0===u?void 0:u.category,title:null===u||void 0===u?void 0:u.title,checksum:null===u||void 0===u?void 0:u.checksum,download_url:t,version:null===u||void 0===u?void 0:u.hikeVersion,filename:null===u||void 0===u?void 0:u.fileName,kuid:null===u||void 0===u?void 0:u.kuid,id:"".concat(e.getTime())}}}(),"undefined"!==typeof e.message&&(console.log(e.message),getVizSource().postMessage(e.message,"*")),!1},C=I.f?null===u||void 0===u?void 0:u.image:"/".concat(I.b).concat(null===u||void 0===u?void 0:u.image);return Object(n.jsxs)("div",{className:_?y.a.toursDetailPreview:y.a.hikeBody,children:[_||Object(n.jsx)(f.a,{search:null}),Object(n.jsxs)("div",{className:y.a.tourContainer,children:[_||Object(n.jsx)(v.a,{title:null===u||void 0===u?void 0:u.title,search:null}),Object(n.jsxs)("div",{className:y.a.tourInfo,children:[Object(n.jsx)("div",{className:y.a.tourThumb,children:Object(n.jsx)("img",{src:_?"/default/hike-default.png":C,alt:"Hike Thumbnail"})}),Object(n.jsxs)("div",{className:y.a.tourDesc,children:[Object(n.jsx)("h2",{className:y.a.tourTitle,children:null===u||void 0===u?void 0:u.title}),Object(n.jsx)("h3",{className:y.a.tourVersion,children:"".concat(c.a.t("hike_version")," ").concat(null===u||void 0===u?void 0:u.hikeVersion)}),Object(n.jsx)("div",{className:y.a.tourBody,dangerouslySetInnerHTML:{__html:null===u||void 0===u?void 0:u.description}}),Object(n.jsxs)(p.a,{className:y.a.metaData,children:[Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:y.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:y.a.tourHeader,children:c.a.t("platform_version")}),Object(n.jsx)("div",{className:y.a.tourContent,children:null===u||void 0===u?void 0:u.platformVersion})]}),Object(n.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:y.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:y.a.tourHeader,children:c.a.t("categories")}),Object(n.jsx)("ul",{className:y.a.tourContent,children:null===u||void 0===u||null===(t=u.category)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})]}),Object(n.jsx)("h3",{className:y.a.tourTime,children:"".concat(c.a.t("step",{count:null===u||void 0===u?void 0:u.cards})," / ").concat(null===u||void 0===u?void 0:u.time)}),Object(n.jsx)("div",{className:y.a.tourDetails,dangerouslySetInnerHTML:{__html:null===u||void 0===u?void 0:u.details}})]})]}),_||Object(n.jsx)("div",{className:y.a.startBtn,children:Object(n.jsx)(j.a,{title:c.a.t("start"),type:"blue",onClick:function(e){return k(e)}})})]})]})}},sz4E:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",breadcrumbWrapper:"_3IBeg"}},t3Un:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return a}));var n=o("8SHQ"),a=function(t,o){var a=(e&&e.env?"fix-empty-router-query":void 0)||n.a,r="http://localhost:".concat(n.c,"/api/zip/").concat(t),i="https://raw.githubusercontent.com/".concat(n.d,"/").concat(n.b,"/").concat(a,"/public/contents/").concat(o,"/zips/").concat(t);return n.f?r:i}}).call(this,o("8oxB"))},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{XKlS:function(e,t,o){"use strict";var n=o("nKUr"),a=(o("q1tI"),o("4IMT")),i=o.n(a),s=o("zk85"),c=o.n(s),l=o("mOvS"),r=o.n(l)()().publicRuntimeConfig,u=function(e){if(e)return Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:c.a.filterCloseIcon})},d=function(e){return"download"===e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:c.a.downloadIcon}):null},m=function(e){return e?Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:c.a.codeIcon}):null},p=function(e){var t=e.title,o=e.type,a=e.color,s=e.active,l=e.selected,r=e.children,p=e.className,v=e.onClick,g=e.featured,b=e.href,f=e.target,j=e.disabled,h=e.isCode;return Object(n.jsxs)(i.a,{title:t,className:"\n      ".concat(c.a.konyButton,"\n      ").concat(c.a[o]?c.a[o]:"","\n      ").concat(c.a[a]?c.a[a]:"","\n      ").concat(s?c.a.active:"","\n      ").concat(l?c.a.selected:"","\n      ").concat(g?c.a.featured:"","\n      ").concat(p,"\n    "),onClick:v,href:b||null,target:f,disabled:j,children:[d(o),m(h),r||t,u(l)]})};p.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=p},kACj:function(e,t,o){"use strict";o.r(t);var n=o("nKUr"),a=o("o0o1"),i=o.n(a),s=o("HaE+"),c=o("q1tI"),l=o("XzT5"),r=o("Djov"),u=o("9xET"),d=o.n(u),m=o("ZPTe"),p=o.n(m),v=o("mOvS"),g=o.n(v),b=o("DG/x"),f=o("XKlS"),j=o("PGnZ"),h=o.n(j),S=o("6EMX"),x=o("8SHQ"),y=o("t3Un");t.default=function(e){var t,o=e.url,a=Object(c.useState)(null),u=a[0],m=a[1],v=Object(c.useState)(null),j=v[0],O=v[1],k=g()().publicRuntimeConfig.hikesData,_=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,s,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.asPath.substr(0,o.asPath.indexOf("?")),n=x.f?t.substring(1):t.replace("/".concat(x.b),"").substring(1),e.next=4,Object(S.getHikesCategories)(k);case 4:a=e.sent,s=a.filter((function(e){return e.categoryTours.some((function(e){return e.alias==n}))})),O(s[0].categoryAlias),c=s.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})}))[0],l=c.categoryTours.filter((function(e){return e.alias==n}))[0],m(l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return _(),function(){}}),[]);var I=function(e){return e.preventDefault(),e.message=function(){var e=new Date,t=Object(y.a)(null===u||void 0===u?void 0:u.fileName,j);return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===u||void 0===u?void 0:u.category,title:null===u||void 0===u?void 0:u.title,checksum:null===u||void 0===u?void 0:u.checksum,download_url:t,version:null===u||void 0===u?void 0:u.hikeVersion,filename:null===u||void 0===u?void 0:u.fileName,kuid:null===u||void 0===u?void 0:u.kuid,id:"".concat(null===u||void 0===u?void 0:u.nid).concat(null===u||void 0===u?void 0:u.fid).concat(e.getTime())}}}(),"undefined"!==typeof e.message&&(console.log(e.message),getVizSource().postMessage(e.message,"*")),!1},N=x.f?null===u||void 0===u?void 0:u.image:"/".concat(x.b).concat(null===u||void 0===u?void 0:u.image);return Object(n.jsxs)("div",{className:h.a.hikeBody,children:[Object(n.jsx)(r.a,{search:null}),Object(n.jsxs)("div",{className:h.a.tourContainer,children:[Object(n.jsx)(b.a,{title:null===u||void 0===u?void 0:u.title,search:null}),Object(n.jsxs)("div",{className:h.a.tourInfo,children:[Object(n.jsx)("div",{className:h.a.tourThumb,children:Object(n.jsx)("img",{src:N,alt:"Hike Thumbnail"})}),Object(n.jsxs)("div",{className:h.a.tourDesc,children:[Object(n.jsx)("h2",{className:h.a.tourTitle,children:null===u||void 0===u?void 0:u.title}),Object(n.jsx)("h3",{className:h.a.tourVersion,children:"".concat(l.a.t("hike_version")," ").concat(null===u||void 0===u?void 0:u.hikeVersion)}),Object(n.jsx)("div",{className:h.a.tourBody,dangerouslySetInnerHTML:{__html:null===u||void 0===u?void 0:u.description}}),Object(n.jsxs)(d.a,{className:h.a.metaData,children:[Object(n.jsxs)(p.a,{span:6,sm:24,xs:24,md:6,lg:6,className:h.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:h.a.tourHeader,children:l.a.t("platform_version")}),Object(n.jsx)("div",{className:h.a.tourContent,children:null===u||void 0===u?void 0:u.platformVersion})]}),Object(n.jsxs)(p.a,{span:6,sm:24,xs:24,md:6,lg:6,className:h.a.innerTabWrapper,children:[Object(n.jsx)("h3",{className:h.a.tourHeader,children:l.a.t("categories")}),Object(n.jsx)("ul",{className:h.a.tourContent,children:null===u||void 0===u||null===(t=u.category)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})]}),Object(n.jsx)("h3",{className:h.a.tourTime,children:"".concat(l.a.t("step",{count:null===u||void 0===u?void 0:u.cards})," / ").concat(null===u||void 0===u?void 0:u.time)}),Object(n.jsx)("div",{className:h.a.tourDetails,dangerouslySetInnerHTML:{__html:null===u||void 0===u?void 0:u.details}})]})]}),Object(n.jsx)("div",{className:h.a.startBtn,children:Object(n.jsx)(f.a,{title:l.a.t("start"),type:"blue",onClick:function(e){return I(e)}})})]})]})}},t3Un:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return a}));var n=o("8SHQ"),a=function(t,o){var a=(e&&e.env?"fix-empty-router-query":void 0)||n.a,i="http://localhost:".concat(n.c,"/api/zip/").concat(t),s="https://raw.githubusercontent.com/".concat(n.d,"/").concat(n.b,"/").concat(a,"/public/contents/").concat(o,"/zips/").concat(t);return n.f?i:s}}).call(this,o("8oxB"))},zJMs:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tour",function(){return o("kACj")}])},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}},[["zJMs",1,2,5,17,0,3,4,18,20,25,7]]]);
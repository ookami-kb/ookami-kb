"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Another app migrated to Flutter"},l=void 0,i={permalink:"/ru/blog/2021/11/26/flutter-kiosk",source:"@site/blog/2021-11-26-flutter-kiosk.md",title:"Another app migrated to Flutter",description:"As you probably know, we have an app in Flutter that has been successfully running in production for more than 2 years now.",date:"2021-11-26T00:00:00.000Z",formattedDate:"26 \u043d\u043e\u044f\u0431\u0440\u044f 2021 \u0433.",tags:[],readingTime:7.385,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Another app migrated to Flutter"},prevItem:{title:"ViewModel \u0432\u043e Flutter \u2013 \u044d\u0442\u043e \u0430\u043d\u0442\u0438\u043f\u0430\u0442\u0442\u0435\u0440\u043d",permalink:"/ru/blog/2021/12/19/viewmodel-ru"},nextItem:{title:"Don't be always late...",permalink:"/ru/blog/2021/10/29/late"}},p={authorsImageUrls:[]},u=[],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As you probably know, we have an ",(0,o.kt)("a",{parentName:"p",href:"https://developers.mews.com/one-year-in-production-with-flutter/"},"app in Flutter that has been successfully running in production")," for more than 2 years now."),(0,o.kt)("p",null,"But we also have another app, a Kiosk application written natively in Kotlin and available for Android only. It ",(0,o.kt)("strong",{parentName:"p"},"was")," available, actually, as we decided to migrate it to Flutter as well. And here\u2019s a report on why and how."))}s.isMDXComponent=!0}}]);
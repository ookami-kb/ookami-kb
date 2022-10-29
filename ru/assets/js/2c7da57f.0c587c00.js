"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Adding flavor-specific tasks to Gradle"},i=void 0,l={permalink:"/ru/blog/2016/01/13/gradle",source:"@site/blog/2016-01-13-gradle.md",title:"Adding flavor-specific tasks to Gradle",description:"Suppose you have a multi-flavored project. Each flavor is a separate app, so you have to use separate google-services.json file for each flavor.",date:"2016-01-13T00:00:00.000Z",formattedDate:"13 \u044f\u043d\u0432\u0430\u0440\u044f 2016 \u0433.",tags:[],readingTime:1.1,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Adding flavor-specific tasks to Gradle"},prevItem:{title:"Email-\u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0430 \u0441\u043e \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430: \u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0435 \u043a\u0430\u043c\u043d\u0438",permalink:"/ru/blog/2016/01/17/email"},nextItem:{title:"\u041f\u043e\u0447\u0435\u043c\u0443 \u044f \u043d\u0435 \u043c\u043e\u0433\u0443 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c?",permalink:"/ru/blog/2014/09/22/django-email"}},p={authorsImageUrls:[]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Suppose you have a multi-flavored project. Each flavor is a separate app, so you have to use separate ",(0,o.kt)("inlineCode",{parentName:"p"},"google-services.json")," file for each flavor."),(0,o.kt)("p",null,"The problem is that ",(0,o.kt)("inlineCode",{parentName:"p"},"google-services.json")," file must be placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/")," directory (",(0,o.kt)("strong",{parentName:"p"},"update:")," as of version 2.0.0-alpha3 of the plugin support was added for build types), so we have to copy this file to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/")," directory on every flavor build process."))}u.isMDXComponent=!0}}]);
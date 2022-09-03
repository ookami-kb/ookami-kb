"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5869],{6617:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));i(1839);const o={title:"UI tests in Flutter with Azure Pipelines"},s=void 0,r={permalink:"/ru/blog/2020/06/15/ci-azure",source:"@site/blog/2020-06-15-ci-azure/index.md",title:"UI tests in Flutter with Azure Pipelines",description:"Continuous integration (CI) is the practice of merging all developers\u2019 working copies to shared mainline several times a day.",date:"2020-06-15T00:00:00.000Z",formattedDate:"15 \u0438\u044e\u043d\u044f 2020 \u0433.",tags:[],readingTime:6.755,hasTruncateMarker:!0,authors:[],frontMatter:{title:"UI tests in Flutter with Azure Pipelines"},prevItem:{title:"13 reasons why Dart is worse than Kotlin",permalink:"/ru/blog/2020/07/20/dart-vs-kotlin"},nextItem:{title:"Intro to Flutter: a practical guide to cross-platform development",permalink:"/ru/blog/2020/05/19/intro-to-flutter"}},l={authorsImageUrls:[]},u=[],p={toc:u};function m(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Continuous integration (CI) is the practice of merging all developers\u2019 working copies to shared mainline several times a day.")),(0,a.kt)("p",null,"One of the most important aspects of CI is keeping the mainline healthy. That\u2019s why it\u2019s crucial to have proper tests, both unit and UI, that can run against any PR and/or commit to the mainline. At the same time, these tests should also be fast. It\u2019s usually not a problem with unit tests, but UI tests, especially if you want to run them on multiple devices, can take a rather long time."),(0,a.kt)("p",null,"As a balance between speed and reliability, for PRs into the mainline, we use smoke UI tests that only prove the main functionality is working. Proper UI testing with manual QA verification is done only when we\u2019re preparing a new release candidate."),(0,a.kt)("p",null,"In this article, I will show you how we\u2019ve set up Azure Pipelines for running automated UI smoke tests for a Flutter app."))}m.isMDXComponent=!0}}]);
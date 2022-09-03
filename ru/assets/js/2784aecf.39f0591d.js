"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8982],{527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var a=o(7462),i=(o(7294),o(3905));o(1839);const n={title:"Flutter for Web: is it a killer of React?"},l=void 0,r={permalink:"/ru/blog/2020/01/29/flutter-web",source:"@site/blog/2020-01-29-flutter-web.md",title:"Flutter for Web: is it a killer of React?",description:"During one of our recent discussions about Flutter and Flutter for Web (and I do like talking about Flutter a lot), I was asked a question, whether the final goal of our Application Development department is to fire all the front-end developers and replace them with Flutter developers. It was a joke, of course, but I think it\u2019s a good question to think about and to discuss: what role Flutter is going to play in Web development.",date:"2020-01-29T00:00:00.000Z",formattedDate:"29 \u044f\u043d\u0432\u0430\u0440\u044f 2020 \u0433.",tags:[],readingTime:3.21,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Flutter for Web: is it a killer of React?"},prevItem:{title:"Intro to Flutter: a practical guide to cross-platform development",permalink:"/ru/blog/2020/05/19/intro-to-flutter"},nextItem:{title:"Flutter: how to draw text along an arc",permalink:"/ru/blog/2019/12/12/flutter-arc"}},s={authorsImageUrls:[]},u=[{value:"Landing page",id:"landing-page",level:2},{value:"Blog",id:"blog",level:2},{value:"Admin pages, dashboards",id:"admin-pages-dashboards",level:2},{value:"Progressive Web Apps",id:"progressive-web-apps",level:2},{value:"Games",id:"games",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"During one of our recent discussions about Flutter and Flutter for Web (and I do like talking about Flutter a lot), I was asked a question, whether the final goal of our Application Development department is to fire all the front-end developers and replace them with Flutter developers. It was a joke, of course, but I think it\u2019s a good question to think about and to discuss: what role Flutter is going to play in Web development."),(0,i.kt)("p",null,"Let\u2019s think about types of Web applications we usually develop."),(0,i.kt)("h2",{id:"landing-page"},"Landing page"),(0,i.kt)("p",null,"However good Flutter may be, using it for a static page is a huge overkill. Actually, the same I can say for React here, in the simplest case you can just go with plain old HTML and a little bit vanilla JS. Users will be thankful to you, if they don\u2019t need to download megabytes of JS for a couple paragraphs of text."),(0,i.kt)("p",null,"In a more complex case though, with interactivity or animations, it can be easier to go with some framework. Just grab something like GatsbyJS and you\u2019re good to go."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Verdict: NO")),(0,i.kt)("p",null,"As an experiment, I\u2019ve created a landing page in Flutter for Web. The development process was fun, but the result was unusable\u2026"),(0,i.kt)("h2",{id:"blog"},"Blog"),(0,i.kt)("p",null,"Blog means text. A lot of text. And a lot of SEO. Using \u201cUI toolkit for building beautiful, natively compiled applications\u201d sounds weird for me. Again, you can instead use GatsbyJS, or Jekyll, or (if you\u2019re slightly old-fashioned) fall back to WordPress."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Verdict: NO")),(0,i.kt)("h2",{id:"admin-pages-dashboards"},"Admin pages, dashboards"),(0,i.kt)("p",null,"Sounds slightly better. As it\u2019s usually something private, you don\u2019t need SEO; there are no long reads; it can be highly interactive \u2013 charts, toggles, gauges. But at the same time: tables, pretty standard column layout, modest amount of animations. Framework like React or Angular will be more useful here. And if you don\u2019t want to use JavaScript (and who does?) you can switch to TypeScript or even AngularDart."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Verdict: maybe, but\u2026 NO")),(0,i.kt)("h2",{id:"progressive-web-apps"},"Progressive Web Apps"),(0,i.kt)("p",null,"What do we expect from PWA? Let me think\u2026 Custom UI, a lot of interactions and animations, local storage, mobile-app-without-installation\u2026 Sounds like a job for \u201cUI toolkit for building beautiful, natively compiled applications\u201d. And what do you say to a single codebase for Web, Android and iOS? Abstraction over key-value database for all platforms with e.g. hive? Hot reload and PWA support out of the box? Statically typed language? Shut up and take my money!"),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("p",{parentName:"admonition"},"Verdict: YESSSSSS!")),(0,i.kt)("p",null,"I\u2019m looking forward to seeing Flutter for Web in production. We have a couple of side projects, where it would be a perfect fit."),(0,i.kt)("h2",{id:"games"},"Games"),(0,i.kt)("p",null,"Never developed them, so it\u2019s hard for me to say something for sure. There is Rive that can be used for animations, kinematics, effects and stuff like that. But maybe for some complex game you should prefer Unity."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Verdict: maybe")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"So, looking at these types, I would say the best use case for Flutter for Web is PWA with custom UI, unified across platforms. Especially, if you already have mobile app written in Flutter, and need a simple and limited version of it for Web. Flutter will rise and shine here, allow you to re-use almost all of your code (but yeah, we need it to become production-ready, it\u2019s still in beta)."),(0,i.kt)("p",null,"That means, I wouldn\u2019t even consider Flutter for Web as a separate product. It\u2019s just another compilation target, so use it together with Flutter for Android and Flutter for iOS."),(0,i.kt)("p",null,"Returning to the question in the beginning of the article \u2013 no, flutter-for-web developers won\u2019t replace front-end guys. Flutter for Web is a tool with rather limited functionality, but in its field it\u2019s shining. And in no way Flutter is a killer of React. It\u2019s a killer of React Native, though \ud83d\ude09"))}p.isMDXComponent=!0}}]);
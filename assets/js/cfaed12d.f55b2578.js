"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9252],{9038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));n(1839);const r={title:"Mews Challenge"},i=void 0,s={permalink:"/blog/2019/10/14/mews-challenge",source:"@site/blog/2019-10-14-mews-challenge.md",title:"Mews Challenge",description:"At the latest WebExpo conference we had a mini-game in our booth (or 2 mini-games to be precise \u2013 tests for designers and developers). The candidate selects one right answer per question and had only one attempt to pass the test. The ranking was done by the number of correct answers and by the time (in the case of a tie).",date:"2019-10-14T00:00:00.000Z",formattedDate:"October 14, 2019",tags:[],readingTime:5.625,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Mews Challenge"},prevItem:{title:"Flutter: \u0440\u0438\u0441\u0443\u0435\u043c \u0442\u0435\u043a\u0441\u0442 \u0432\u0434\u043e\u043b\u044c \u043e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u0438",permalink:"/blog/2019/12/01/flutter-arc-ru"},nextItem:{title:"Dependency Injection in Flutter",permalink:"/blog/2019/03/26/flutter-di"}},l={authorsImageUrls:[]},u=[{value:"Backend",id:"backend",level:2},{value:"Games",id:"games",level:3},{value:"Users",id:"users",level:3},{value:"Results",id:"results",level:3},{value:"Frontend",id:"frontend",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the latest ",(0,o.kt)("a",{parentName:"p",href:"https://www.webexpo.net/prague2019"},"WebExpo")," conference we had a mini-game in our booth (or 2 mini-games to be precise \u2013 tests for designers and developers). The candidate selects one right answer per question and had only one attempt to pass the test. The ranking was done by the number of correct answers and by the time (in the case of a tie)."),(0,o.kt)("p",null,'The designer test included 20 questions where you needed to select one of 2 images that presented "the right way" and "the wong way" from UX and UI points of view.'),(0,o.kt)("p",null,"The developer test was more complicated. It consisted of 20 questions across all our technology stack with 4 options to choose from: C# for backend questions, JavaScript for frontend questions, Dart for mobile development, Python and SQL from Data department (if you're interested in our technology stack check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MewsSystems/developers"},"this repo"),")."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"I decided to write this game in Dart, so for the framework I had to choose between Flutter Web and AngularDart. While it would be great to use Flutter Web, as we're using it in our department to write iOS/Android app, it's still in technical preview, and I didn't know if there would be some blockers for our game (speaking ahead \u2013 there were, but more on this later). So I've decided to use AngularDart, though I had no experience with it (well, I used to code in AngularJS several years ago, but that's it)."),(0,o.kt)("p",null,"Despite my lack of experience with AngularDart, the game was written within a couple of working days (the code was ",(0,o.kt)("strong",{parentName:"p"},"far")," from perfect though) \u2013 and btw it reminded me exactly why I wasn't a fan of Angular: too much magic under the hood comparing to e.g. React."),(0,o.kt)("p",null,"During the event I was asked if we were going to open source the game, and I've promised to raise this question intenrally. So we did discuss it, and the result of discussion was ",(0,o.kt)("em",{parentName:"p"},"why not?"),"."),(0,o.kt)("p",null,"I've started preparing the code and it occurred to me that this code wouldn't be very useful for the community: as I've already mentioned, my knowledge of AngularDart consisted of going through official tutorial, so the code probably would be good only as a ",(0,o.kt)("em",{parentName:"p"},"how-not-to")," guide. Besides that I still wanted to experiment with Flutter Web, so I've decided to create another version of this app in Flutter."),(0,o.kt)("p",null,"So I've extracted the common code (models and services for communicating with Firebase) and created a Flutter Web project \u2013 that took roughly another working day."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Actually, it would be interesting to further maintain and update both these versions, so I have an offer for the community: let's work on this project together and come to some proper implementations for both frameworks. If you have any ideas feel free to create an issue or make a pull request: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MewsSystems/mews-challenge"},"https://github.com/MewsSystems/mews-challenge"),".")),(0,o.kt)("p",null,"But in the meantime let's dive into some technical details."),(0,o.kt)("h2",{id:"backend"},"Backend"),(0,o.kt)("p",null,"For the backend part I decided to use Firebase Firestore database + Firebase Functions. On the top level there are 3 collections: games, results and users."),(0,o.kt)("h3",{id:"games"},"Games"),(0,o.kt)("p",null,"Basic information about the game:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "design": {\n    "id": "design",\n    "description": "Are you UIcasso or da UXinci? Let\'s see your eye...",\n    "title": "\ud83d\udd8c Design game"\n  },\n  "developer": {\n    "id": "developer",\n    "description": "Frontend, backend, data, applications\u2026 We know it all! How about you?",\n    "title": "\ud83d\udcbb Developer game"\n  }\n}\n')),(0,o.kt)("p",null,"Each game contains a sub-collection questions. Here's an example developer question:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cs_01": {\n    "id": "cs_01",\n    "title": "What will be printed in a console?",\n    "code": "Console.WriteLine(1 << 8);",\n    "tag": "C#",\n    "rightAnswer": "a",\n    "answers": [\n      { "id": "a", "text": "256" },\n      { "id": "b", "text": "128" },\n      { "id": "c", "text": "64" },\n      { "id": "d", "text": "512" }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"And this is how it looks for a design question:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "design_01": {\n    "id": "design_01",\n    "title": "Which label of the button is better?",\n    "rightAnswer": "b",\n    "answers": [\n      { "id": "a", "image": "q1_fail.jpg" },\n      { "id": "b", "text": "q1_right.jpg" }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"As you can see, the answer can contain either text or an image. Images are stored in Firebase Storage, in the questions folder."),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("p",null,"Contains information about the user. We're only keeping the email and display name that we get from Firebase Auth, so the data looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fxXAEKGZJOaTVHzT6fbufm4MgVu1": {\n    "name": "Kirill Bubochkin",\n    "email": "kirill@mewssystems.com"\n  }\n}\n')),(0,o.kt)("p",null,"We also have here a sub-collection games with the information about the games this user played."),(0,o.kt)("h3",{id:"results"},"Results"),(0,o.kt)("p",null,"This collection contains information that is displayed on the Results page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "GAME_ID": {\n    "results": {\n      "USER_GAME_ID": {\n        "start": "DATE_TIME",\n        "end": "DATE_TIME",\n        "questionCount": 20,\n        "rightAnswerCount": 17,\n        "name": "Kirill B.",\n        "userId": "USER_ID"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"All the data except top-level games collection are filled in automatically by Firebase Functions and you don't need to do anything with them."),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"As I've already mentioned, the frontend part is written for both AngularDart and Flutter Web, so we have the following structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"core")," \u2013 common code with models and services reused by both frameworks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app_angular")," \u2013 AngularDart app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app_flutter")," \u2013 Flutter Web app.")),(0,o.kt)("p",null,"Writing the app for Flutter Web was very similar to the mobile Flutter, but you need to keep in mind that for now Flutter plugins are not supported. Also instead of e.g. Flutter Firebase library you need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase")," package for browser-based applications."),(0,o.kt)("p",null,"Also I've run into 2 major bugs, that currently prevent us from publishing our Flutter Web version to production:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"custom font rendering in Safari isn't working (so it affects Safari on macOS and all browsers on iOS): ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/41483"},"https://github.com/flutter/flutter/issues/41483")),(0,o.kt)("li",{parentName:"ul"},"links in ",(0,o.kt)("inlineCode",{parentName:"li"},"RichText")," are not always working: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/39226"},"https://github.com/flutter/flutter/issues/39226"))),(0,o.kt)("p",null,"Apart from that, the development process was pretty straightforward, widgets were pretty much the same as I would write for a mobile app. If you're interested, I can write a separate article about developing the Flutter part of the app with more technical details."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"10,000 foot view: it's a pretty common app with ",(0,o.kt)("inlineCode",{parentName:"p"},"rxdart")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," packages. Instead of BLoC pattern I've just re-used services from the ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," package: for such a simple app it's enough. I've also used ",(0,o.kt)("inlineCode",{parentName:"p"},"universal_html")," for processing external links, and ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_html")," for turning HTML code into Flutter widgets.")),(0,o.kt)("p",null,"Verdict? While Flutter Web is definitely not yet ready for the production, it's still great to see the direction it is heading in, and I'm looking forward to the stable version. It would be the perfect choice for a true multi-platform app."),(0,o.kt)("p",null,"So without any further ado, go to the app repo, create issues, make pull requests, and let's work together to make this app a showcase for using Dart in web development."),(0,o.kt)("p",null,"Oh, and you can try the game here: ",(0,o.kt)("a",{parentName:"p",href:"https://mews-challenge.firebaseapp.com/"},"https://mews-challenge.firebaseapp.com/")))}p.isMDXComponent=!0}}]);
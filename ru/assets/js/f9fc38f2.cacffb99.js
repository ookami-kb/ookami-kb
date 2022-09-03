"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5417],{4267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var o=a(7462),i=(a(7294),a(3905));a(1839);const n={title:"Multi-platform apps: are we there yet?"},l=void 0,r={permalink:"/ru/blog/2019/03/10/multiplatform",source:"@site/blog/2019-03-10-multiplatform.md",title:"Multi-platform apps: are we there yet?",description:"The weekend was rather rainy, so I was playing with Flutter. Last time I\u2019ve tried it, it was still in beta (or even alpha?), so I was interested if it finally became useful for building multi-platform apps.",date:"2019-03-10T00:00:00.000Z",formattedDate:"10 \u043c\u0430\u0440\u0442\u0430 2019 \u0433.",tags:[],readingTime:4.3,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Multi-platform apps: are we there yet?"},prevItem:{title:"Dependency Injection in Flutter",permalink:"/ru/blog/2019/03/26/flutter-di"},nextItem:{title:"\u041e \u0447\u0435\u043c \u0432\u0441\u0435-\u0442\u0430\u043a\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u0442 developer.android.com \u043f\u0440\u043e RecyclerView",permalink:"/ru/blog/2018/11/22/recycler-view"}},s={authorsImageUrls:[]},u=[],p={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The weekend was rather rainy, so I was playing with Flutter. Last time I\u2019ve tried it, it was still in beta (or even alpha?), so I was interested if it finally became useful for building multi-platform apps."),(0,i.kt)("p",null,"I\u2019ve decided to re-make our MileFarClub app (it\u2019s our internal side project for tracking steps and competing with colleagues). Here\u2019s what I was able to achieve while investing into it several hours for 2 days:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial screen with authorization by google account, requesting permissions from Google Fit on Android and Health Kit on iOS."),(0,i.kt)("li",{parentName:"ul"},"Main screen with displaying user information and total/today steps count."),(0,i.kt)("li",{parentName:"ul"},"Rank screen with the list of users and their total results."),(0,i.kt)("li",{parentName:"ul"},"All the data are read-only for now, but it\u2019s not a problem to add cross-platform updating as well. Due to the fact that we\u2019re using different sources of activity information (Google Fit vs Health Kit) it\u2019s not possible to make it totally cross-platform, so this part needs to be implemented separately. Same with background notifications and updates, as the process differs a lot between these 2 platforms.")),(0,i.kt)("p",null,"Overall impressions from Flutter is rather positive, I was able to share 100% of UI code and some high-level logic. Integrating with native code was rather smooth as well, so it\u2019s not a problem to write some mini-plugin to use native solution for each platform. Even Dart has become more usable as a language \ud83d\ude03."),(0,i.kt)("p",null,"I definitely like it more than React Native, because e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it really compiles into native code without using bridge to JavaScript, so performance is the same as of native app, especially regarding animations;"),(0,i.kt)("li",{parentName:"ul"},"it uses its own widget library, so it\u2019s not a problem to create brand-oriented UI that looks the same on both platforms (at the same time it\u2019s not a problem to use different look&feel on each platform due to the standard library including both Material and Cupertino widgets) \u2013 while React Native uses standard widgets of each platform.")),(0,i.kt)("p",null,"Yes, the project is way too simple to say something for sure, so I will definitely invest more time in exploring it, but for now it looks like the most promising solution for the near future, when comparing to the other ones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React Native \u2013 I\u2019ve already wrote about it."),(0,i.kt)("li",{parentName:"ul"},"Xamarin \u2013 it\u2019s really cool, but after MS abandons Windows Phone I\u2019m slightly afraid of Xamarin being abandoned as well;"),(0,i.kt)("li",{parentName:"ul"},"Kotlin Multiplatform \u2013 looks very good (and it\u2019s Kotlin \u2764\ufe0f), but it\u2019s too raw and not ready for production yet, it needs at least several more years to become production ready.")),(0,i.kt)("p",null,"Besides that there\u2019re rumors about Google replacing Android with Fuchsia, and Flutter is the only native framework for it. Although I\u2019m pretty sure that Google will provide some tool to convert Android app into Fuchsia app or there will be some VM to run Android apps (even Google isn\u2019t crazy enough to kill OS with ~90% of market), but still adopting native solution in its early stage can be useful."),(0,i.kt)("p",null,"P.S. For a really long time I hope to find some solution to build high-quality cross platform apps and at the same time being rather sceptical about available options. I think I\u2019ve tried almost all of them: Titanium, Phonegap, Ionic, React Native, Kotlin Multiplatform, Xamarin, Flutter\u2026 you name it. There always was some discomfort with them, so every time I was returning to native development. But I guess now I\u2019ve found the reason of this discomfort: when they say, that with This-One-Universal-Framework-To-Rule-Them-All you don't need to have experience with iOS/Android native development at all \u2013 no, it won\u2019t work. It can be useful only when you team has experience with developing native apps. So this equation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2 Flutter guys = 2 Android guys + 2 iOS guys\n")),(0,i.kt)("p",null,"is totally wrong, but this one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 Flutter guy + 1 Android guy + 1 iOS guy = 2 Android guys + 2 iOS guys\n")),(0,i.kt)("p",null,"looks more like a truth for me."),(0,i.kt)("p",null,"And you still have a benefit, because 3-person team will be as productive as 4-person one (well, yeah, it\u2019s only my theory for now), but you ",(0,i.kt)("strong",{parentName:"p"},"need")," to have developers in you team who know native development for each platform."),(0,i.kt)("p",null,"And I believe that cross-platform will eventually win, mainly because (yes, I\u2019m quoting an official Flutter FAQ, so you can argue about these points being slightly opinionated, but I agree with them):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modern app design trends point towards designers and users wanting more motion-rich UIs and brand-first designs. In order to achieve that level of customized, beautiful design, Flutter is designed to drive pixels instead of the OEM widgets."),(0,i.kt)("li",{parentName:"ul"},"By using the same renderer, framework, and set of widgets, it\u2019s easier to publish for both iOS and Android concurrently, without having to do careful and costly planning to align two separate codebases and feature sets."),(0,i.kt)("li",{parentName:"ul"},"By using a single language, a single framework, and a single set of libraries for all of your UI (regardless if your UI is different for each mobile platform or largely consistent), we also aim to help lower app development and maintenance costs.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8790],{5107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));a(1839);const i={title:"Another app migrated to Flutter"},r=void 0,s={permalink:"/ru/blog/2021/11/26/flutter-kiosk",source:"@site/blog/2021-11-26-flutter-kiosk.md",title:"Another app migrated to Flutter",description:"As you probably know, we have an app in Flutter that has been successfully running in production for more than 2 years now.",date:"2021-11-26T00:00:00.000Z",formattedDate:"26 \u043d\u043e\u044f\u0431\u0440\u044f 2021 \u0433.",tags:[],readingTime:7.385,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Another app migrated to Flutter"},prevItem:{title:"ViewModel \u0432\u043e Flutter \u2013 \u044d\u0442\u043e \u0430\u043d\u0442\u0438\u043f\u0430\u0442\u0442\u0435\u0440\u043d",permalink:"/ru/blog/2021/12/19/viewmodel-ru"},nextItem:{title:"Don't be always late...",permalink:"/ru/blog/2021/10/29/late"}},l={authorsImageUrls:[]},p=[{value:"What\u2019s the application about?",id:"whats-the-application-about",level:2},{value:"The process",id:"the-process",level:2},{value:"Problems",id:"problems",level:3},{value:"Benefits",id:"benefits",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Benefits",id:"benefits-1",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Bonus: useful libraries",id:"bonus-useful-libraries",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As you probably know, we have an ",(0,o.kt)("a",{parentName:"p",href:"https://developers.mews.com/one-year-in-production-with-flutter/"},"app in Flutter that has been successfully running in production")," for more than 2 years now."),(0,o.kt)("p",null,"But we also have another app, a Kiosk application written natively in Kotlin and available for Android only. It ",(0,o.kt)("strong",{parentName:"p"},"was")," available, actually, as we decided to migrate it to Flutter as well. And here\u2019s a report on why and how."),(0,o.kt)("h2",{id:"whats-the-application-about"},"What\u2019s the application about?"),(0,o.kt)("p",null,"This is a Kiosk app for self-check-in and checkout in hotels. One of the core ideas behind it is simple maintenance: instead of buying a standalone (and very expensive) Kiosk and integrating it with your system, you just grab an Android tablet, scan the QR code from the PMS, and voil\xe0: you have it ready. By the way, this is what's called BYOD (Bring Your Own Device) in the mobile enterprise world. And it's very flexible: you can choose what key cutter you need or whether you want to integrate it with the payment terminal."),(0,o.kt)("p",null,"So, initially, the app was only available for Android. The reason behind it was pretty simple: since the app is always in full-screen mode, and the tablet itself is most probably in a special bounce pad, who cares if this is an iPad or some cheap Android tablet?"),(0,o.kt)("p",null,"Some properties do care, as it turned out. For some, it's a matter of brand, and they prefer having iPads. Others already have a fleet of iPad devices and want to use them for Kiosk. Anyway, the feature request was sitting for some time, but it still wasn\u2019t popular enough to develop and maintain a separate iOS version."),(0,o.kt)("p",null,"And here comes Flutter:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we already have another app in Flutter, and it proved to be useful for us;"),(0,o.kt)("li",{parentName:"ul"},"we have our own design system with Flutter implementation \u2013 we can reuse it instead of maintaining a native Android version;"),(0,o.kt)("li",{parentName:"ul"},"we can unify architecture and share some code;"),(0,o.kt)("li",{parentName:"ul"},"we can maintain a single codebase for Android, iOS and maybe even Web/Desktop.")),(0,o.kt)("h2",{id:"the-process"},"The process"),(0,o.kt)("p",null,"There were 2 ways to migrate the app: either we could do it gradually and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/add-to-app"},"add Flutter to the existing app"),", or we could just rewrite it from scratch. Both options have pros and cons."),(0,o.kt)("p",null,"Gradual rewriting can be done in parallel with maintaining the current app, but there's a significant overhead, and some functionality will be inevitably duplicated. On the other hand, rewriting is more straightforward, and we don't need to plug into existing architecture, but it's all or nothing \u2013 if the app is 90% ready, it's not ready at all."),(0,o.kt)("p",null,"Eventually, we decided on the second route and rewrote the app from scratch. A dream for a developer and a nightmare for a tech lead. Being in both roles, I'm not sure whether I was more excited or scared \ud83d\ude01"),(0,o.kt)("p",null,"Significant points (yeah, they\u2019re expected, but it hurts anyway):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the deadline was pretty optimistic (it always is);"),(0,o.kt)("li",{parentName:"ul"},"since it's a different language, you cannot just use the same tests, so there were regression bugs;"),(0,o.kt)("li",{parentName:"ul"},'be ready for "what the hell is this doing here?" reactions.')),(0,o.kt)("h3",{id:"problems"},"Problems"),(0,o.kt)("p",null,"The first and foremost step of the migration process was to make it work in the same (or better) way on Android tablets. We were concentrated on that, so we didn't even test the app on iPads. After the Android version was released, we could put more effort into the iOS part, and of course, there were some problems specific to the iOS version (although, I was afraid there would be more of them)."),(0,o.kt)("p",null,"And, naturally, most of the problems were at the juncture between the native platform and Flutter: webviews and camera."),(0,o.kt)("p",null,"We use webview for displaying things like Terms & Conditions or House Rules. They come from the backend in HTML, and we apply some CSS to them. At first, we used ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/webview_flutter"},"webbview_flutter")," as it\u2019s maintained by the official flutter.dev publisher and it worked well for Android. But on iOS, it was just giving us a white screen, and we didn't find a simple way to fix this. So we decided to switch to ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_inappwebview"},"flutter_inappwebview"),", and so far, it works well for both Android and iOS."),(0,o.kt)("p",null,"The camera is a common source of pain in native development, especially in Android, where the possible hardware and software range is too broad. ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/camera"},"camera")," package does a great job of abstracting over all these discrepancies and the somewhat cumbersome native Camera API, but there are some problems. For example, we ran into ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/90070"},"this issue")," and had to downgrade to version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.8.1+7")," for now."),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"Apart from achieving the initial goals (such as unifying architecture and sharing code or going cross-platform), there are some more minor improvements that we acquired after migration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The kiosk codebase is now 2x smaller. Of course, it's not just about Flutter being so tremendous and concise (although it is). We could achieve some code reduction even after rewriting to the same language and framework, as it was basically a major refactoring. But it's still pretty cool to know that we have more platforms to support and less code to maintain.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Custom keyboard implementation is much easier. We use a custom keyboard in the app rather than an external system keyboard: for granular control, security and a consistent look and feel. I remember we spent a lot of time explaining to native Android that the input field (despite being enabled and writable) doesn't need to have the keyboard. In Flutter, it's just a matter of 2 parameters (readOnly: true, showCursor: true) and providing a TextEditingController with custom functionality. Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/flutter-community/custom-in-app-keyboard-in-flutter-b925d56c8465"},"this excellent article")," for inspiration if you need to integrate a custom keyboard into your app.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A declarative and functional approach to UI. Without exaggeration, I think this is the best trend in front-end and mobile development of the last few years:"),(0,o.kt)("div",{parentName:"li",className:"math math-display"},(0,o.kt)("span",{parentName:"div",className:"katex-display"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"U"),(0,o.kt)("mi",{parentName:"mrow"},"I"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mi",{parentName:"mrow"},"f"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"s"),(0,o.kt)("mi",{parentName:"mrow"},"t"),(0,o.kt)("mi",{parentName:"mrow"},"a"),(0,o.kt)("mi",{parentName:"mrow"},"t"),(0,o.kt)("mi",{parentName:"mrow"},"e"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"UI = f(state)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,o.kt)("p",{parentName:"li"},"Yes, now we have Jetpack Compose, so native Android development goes in the same direction. But back then, for our pretty complex registration card screen (that has a lot of dynamic form fields based on the nationality of the guest, the legal environment of a hotel, and a ton of other stuff), we ended up with a scary piece of code that no one wanted to touch. It's still pretty complex in Flutter, but it is, at least, maintainable."))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"There's one part that we definitely cannot make cross-platform: installation and management. First, it's low-level. Second, it's totally different for iOS and Android."),(0,o.kt)("p",null,"Currently, for Android, we have our own solution \u2013 we've developed a separate DPC-app that you can install as part of the enrolment process using ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/android/management/provision-device#qr_code_method"},"the QR-code provisioning method")," \u2013 it automatically gets device owner permissions, so it can install and update other applications, and grant permissions to them. Furthermore, it means that we don't even need Google Play for the deployment, as we can simply upload a new app version to cloud storage (Azure Storage in our case), and the DPC-app periodically checks, downloads and installs a new version automatically."),(0,o.kt)("h3",{id:"benefits-1"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we fully control the deployment process;"),(0,o.kt)("li",{parentName:"ul"},'we can do the "real" CI/CD without waiting for Google Play approval;'),(0,o.kt)("li",{parentName:"ul"},"we can do some intelligent deployment. This \"smart deployment\" means that we don't just force an update while a user is in the middle of the session, nor do we wait for the app to be closed (which doesn't make sense for a single-app kiosk mode). Instead, our Kiosk app and DPC-app communicate with each other. DPC-app notifies Kiosk if the new version is available, and Kiosk notifies DPC-app when it's ready to be updated (e.g. the current session has ended).")),(0,o.kt)("h3",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we need to maintain the code for the DPC app;"),(0,o.kt)("li",{parentName:"ul"},"we lack some features like remote rebooting and don't have resources to implement them;"),(0,o.kt)("li",{parentName:"ul"},"as I mentioned, for iOS, we need to implement all this functionality from scratch.")),(0,o.kt)("p",null,"That's why, while launching iOS beta, we decided to try some 3rd-party MDM solutions. If everything goes smoothly, we're thinking about migrating Android devices to the MDM as well, so it's both beta for the iOS app and for a distribution model in general."),(0,o.kt)("p",null,"So, expect another article on integrating an MDM solution sometime in the future :)"),(0,o.kt)("h2",{id:"bonus-useful-libraries"},"Bonus: useful libraries"),(0,o.kt)("p",null,"As a bonus, here are some valuable libraries we've discovered (or written) for this app."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/wakelock"},"wakelock")," allows preventing the screen from sleeping on Android, iOS, macOS, Windows, and web."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/hand_signature"},"hand_signature")," will enable you to draw smooth signatures with a variety of draw and export settings \u2013 and also supports SVG."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/native_device_orientation"},"native_device_orientation")," \u2013 reading device's native orientation, either from UI orientation or from sensors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/kiosk_mode"},"kiosk_mode")," \u2013 this is our library for working with Lock Task / Guided Access modes on Android and iOS.")))}d.isMDXComponent=!0}}]);
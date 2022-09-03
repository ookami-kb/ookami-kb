"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1863],{6996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));n(1839);const i={title:"Storybook + Flutter = storybook_flutter"},l=void 0,r={permalink:"/ru/blog/2021/04/15/storybook-flutter",source:"@site/blog/2021-04-15-storybook-flutter/index.md",title:"Storybook + Flutter = storybook_flutter",description:"- \u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f",date:"2021-04-15T00:00:00.000Z",formattedDate:"15 \u0430\u043f\u0440\u0435\u043b\u044f 2021 \u0433.",tags:[],readingTime:5.18,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Storybook + Flutter = storybook_flutter"},prevItem:{title:"Don't be always late...",permalink:"/ru/blog/2021/10/29/late"},nextItem:{title:"Storybook + Flutter = storybook_flutter",permalink:"/ru/blog/2021/03/29/storybook-flutter-ru"}},s={authorsImageUrls:[]},d=[{value:"Why do you need it?",id:"why-do-you-need-it",level:2},{value:"Can&#39;t you just use some existing library?",id:"cant-you-just-use-some-existing-library",level:2},{value:"What does it look like?",id:"what-does-it-look-like",level:2},{value:"What can you do with it?",id:"what-can-you-do-with-it",level:2},{value:"How to use it?",id:"how-to-use-it",level:2},{value:"How to customize it?",id:"how-to-customize-it",level:2},{value:"We need more customizations!",id:"we-need-more-customizations",level:2},{value:"What about plugins?",id:"what-about-plugins",level:2},{value:"Which platforms are supported?",id:"which-platforms-are-supported",level:2},{value:"Any roadmap?",id:"any-roadmap",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ru/blog/2021/03/29/storybook-flutter-ru"},"\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f")))),(0,a.kt)("p",null,"This article is all about promoting my Flutter library for showcasing isolated widgets and screens. Something like Storybook in the React world. Actually, it's even named ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/storybook_flutter"},"storybook_flutter"),"."),(0,a.kt)("h2",{id:"why-do-you-need-it"},"Why do you need it?"),(0,a.kt)("p",null,"First, to speed up UI development. Yes, Flutter has a \"hot reload\" that makes UI development very smooth, but what if the widget you're developing is somewhere deep in the app screens? What if it's visible only under some specific conditions? Besides that, hot reload won't work in all cases. So the possibility to isolate the widget, make it a separate story, and work with this story could be very helpful."),(0,a.kt)("p",null,"Second, showcasing your widgets and screens. For example, we implement our own design library for Flutter and we'd like to integrate an interactive sandbox with widgets into our documentation. Especially now, when Flutter for Web is in stable channel."),(0,a.kt)("p",null,"Third, there's been a feature request from the very beginning: generating golden tests automatically with every possible combination of widget parameters. I find this idea pretty interesting, and I'd like to add this functionality in the future."),(0,a.kt)("h2",{id:"cant-you-just-use-some-existing-library"},"Can't you just use some existing library?"),(0,a.kt)("p",null,"Probably, yes. But, at the moment there's no clear leader among the community libraries. Also, you can't just take NIH syndrome off the counter :) Besides that, I'd like to be able to add features we need as quickly as possible."),(0,a.kt)("h2",{id:"what-does-it-look-like"},"What does it look like?"),(0,a.kt)("p",null,"Somewhat like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4565).Z,width:"4064",height:"2574"})),(0,a.kt)("p",null,"Yep, not a piece of art, but that's not the first priority right now, and my design skill is a little subpar...\nBesides that, I'm still experimenting with the placement of buttons and toolbars, so it doesn't make sense to polish visual style at the moment."),(0,a.kt)("h2",{id:"what-can-you-do-with-it"},"What can you do with it?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Story navigation with optional grouping by section."),(0,a.kt)("li",{parentName:"ul"},"Knobs (customizable parameters) for widgets."),(0,a.kt)("li",{parentName:"ul"},"Light/dark theme switch."),(0,a.kt)("li",{parentName:"ul"},"Fullscreen mode for stories without any UI elements \u2013 can be used on the web, for example, to embed the story into iframe."),(0,a.kt)("li",{parentName:"ul"},"Customization."),(0,a.kt)("li",{parentName:"ul"},"Device frames (thanks to the ",(0,a.kt)("a",{parentName:"li",href:"https://pub.dev/packages/device_frame"},"device_frame")," package)."),(0,a.kt)("li",{parentName:"ul"},"Plugin support.")),(0,a.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,a.kt)("p",null,"Add the dependency to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"storybook_flutter: ^0.5.0\n")),(0,a.kt)("p",null,"Create the story. One of the simplest examples would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\nimport 'package:storybook_flutter.dart';\n\nvoid main() => runApp(const MyApp());\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) => Storybook(\n        children: [\n          Story.simple(\n            name: 'Button',\n            child: ElevatedButton(\n              onPressed: () {},\n              child: const Text('Push me'),\n            ),\n          ),\n        ],\n      );\n}\n")),(0,a.kt)("p",null,"Run the project, and voil\xe0:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9457).Z,width:"2544",height:"1890"})),(0,a.kt)("p",null,"Let's add some knobs. All we need to do is to replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"simple")," constructor with a default one, and to use ",(0,a.kt)("inlineCode",{parentName:"p"},"builder")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"child"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Story(\n  name: 'Button',\n  builder: (context, k) => ElevatedButton(\n    onPressed:\n        k.boolean(label: 'Enabled', initial: true) ? () {} : null,\n    child: Text(k.text(label: 'Text', initial: 'Push me')),\n  ),\n),\n")),(0,a.kt)("p",null,"Run the build again. It's even better now:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2787).Z,width:"1280",height:"960"})),(0,a.kt)("p",null,"Grouping stories by sections is as simple as adding ",(0,a.kt)("inlineCode",{parentName:"p"},"section")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Story(\n  name: 'Button',\n  section: 'Buttons',\n  builder: (context, k) => ElevatedButton(\n    onPressed:\n        k.boolean(label: 'Enabled', initial: true) ? () {} : null,\n    child: Text(k.text(label: 'Text', initial: 'Push me')),\n  ),\n),\n")),(0,a.kt)("p",null,"All the stories with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"section")," value will be grouped automatically."),(0,a.kt)("h2",{id:"how-to-customize-it"},"How to customize it?"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Story")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"padding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," parameters that control (Captain Obvious here) the padding and background color of the story:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Story(\n  name: 'Button',\n  section: 'Buttons',\n  padding: const EdgeInsets.all(8),\n  background: Colors.red,\n  builder: (context, k) => ElevatedButton(\n    onPressed:\n        k.boolean(label: 'Enabled', initial: true) ? () {} : null,\n    child: Text(k.text(label: 'Text', initial: 'Push me')),\n  ),\n),\n")),(0,a.kt)("p",null,"But that's too simple. More interesting things can be done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperBuilder")," parameter. It allows wrapping the story with a custom widget:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Story(\n  name: 'Button',\n  section: 'Buttons',\n  wrapperBuilder: (context, story, child) => Container(\n    decoration: BoxDecoration(border: Border.all()),\n    margin: const EdgeInsets.all(16),\n    child: Center(child: child),\n  ),\n  builder: (context, k) => ElevatedButton(\n    onPressed:\n        k.boolean(label: 'Enabled', initial: true) ? () {} : null,\n    child: Text(k.text(label: 'Text', initial: 'Push me')),\n  ),\n),\n")),(0,a.kt)("p",null,"This builder can be passed as a value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"storyWrapperBuilder")," parameter in ",(0,a.kt)("inlineCode",{parentName:"p"},"Storybook"),". In that case, each story will be wrapped with this widget (of course, you can still override it with a story's ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperBuilder")," individually)."),(0,a.kt)("h2",{id:"we-need-more-customizations"},"We need more customizations!"),(0,a.kt)("p",null,"If builders, wrappers and parameters are not enough, you can take ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomStorybook")," and do everything yourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    final decoration = BoxDecoration(\n      border: Border(\n        right: BorderSide(color: Theme.of(context).dividerColor),\n        left: BorderSide(color: Theme.of(context).dividerColor),\n      ),\n      color: Theme.of(context).cardColor,\n    );\n    return MaterialApp(\n      debugShowCheckedModeBanner: false,\n      home: Scaffold(\n        body: CustomStorybook(\n          builder: (context) => Row(\n            children: [\n              Container(\n                width: 200,\n                decoration: decoration,\n                child: const Contents(),\n              ),\n              const Expanded(child: CurrentStory()),\n              Container(\n                width: 200,\n                decoration: decoration,\n                child: const KnobPanel(),\n              ),\n            ],\n          ),\n          children: [\n            Story(\n              name: 'Button',\n              builder: (context, k) => ElevatedButton(\n                onPressed:\n                    k.boolean(label: 'Enabled', initial: true) ? () {} : null,\n                child: Text(k.text(label: 'Text', initial: 'Push me')),\n              ),\n            )\n          ],\n        ),\n      ),\n    );\n  }\n}\n")),(0,a.kt)("p",null,"You can still use built-in widgets: ",(0,a.kt)("inlineCode",{parentName:"p"},"Contents"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CurrentStory")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KnobPanel")," (I bet you can guess what they do). We'll get some minimalistic result here:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5963).Z,width:"2544",height:"1890"})),(0,a.kt)("p",null,"One of the possible use cases for ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomStorybook")," can be ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/storybook_device_preview"},"this plugin")," that adds Storybook to another package, ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/device_preview"},"device_preview"),", supporting contents and a knobs panel. With it you can achieve something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5297).Z,width:"2544",height:"1890"})),(0,a.kt)("h2",{id:"what-about-plugins"},"What about plugins?"),(0,a.kt)("p",null,"The latest version adds support for plugins and the first-party plugin, ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceFramePlugin"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1885).Z,width:"4064",height:"2574"})),(0,a.kt)("p",null,"Plugins allow overriding the way stories are rendered, as well as add custom settings to the panel. Creating plugins is a topic for another article though."),(0,a.kt)("h2",{id:"which-platforms-are-supported"},"Which platforms are supported?"),(0,a.kt)("p",null,"Well, there's no special magic under the hood, so ",(0,a.kt)("strong",{parentName:"p"},"in theory")," it should work on all the platforms supported by Flutter. I've tested it on Android, iOS, web and macOS."),(0,a.kt)("h2",{id:"any-roadmap"},"Any roadmap?"),(0,a.kt)("p",null,"First, stabilize plugin API and think about what plugins should be provided out of the box (and develop them, of course)."),(0,a.kt)("p",null,"After that, I think I will look into golden test generation, like I mentioned in the beginning."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"That's it.\nAny comments, feature requests and bug reports are welcome (as well as likes and stars)."))}p.isMDXComponent=!0},5963:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/custom-storybook-e1c58faeb712418b4c192fb6e04afd76.png"},1885:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/device-frame-plugin-a65d2a1dff069800c1738a1cdaf122cd.png"},5297:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/device-preview-e951c8fbc951de46fc1a39eedf21931d.png"},2787:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/knobs-fbee81d4101c82f1856632639a1ccc06.gif"},4565:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/looks-like-f0f539110b27a0d3b8e88af21db964b5.png"},9457:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/simple-story-3c886d28a781323ebf83119b04f4110b.png"}}]);
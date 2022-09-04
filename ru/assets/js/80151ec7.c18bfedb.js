"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2913],{4219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},l="Flutter & Dart tips",s={unversionedId:"flutter-dart-tips",id:"flutter-dart-tips",title:"Flutter & Dart tips",description:"A collection of different tips for Flutter and Dart, mainly some things found during code reviews.",source:"@site/docs/flutter-dart-tips.md",sourceDirName:".",slug:"/flutter-dart-tips",permalink:"/ru/docs/flutter-dart-tips",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0418\u043d\u0442\u0440\u043e",permalink:"/ru/docs/intro"}},o={},d=[{value:"Test files suffix",id:"test-files-suffix",level:2},{value:"Beware of <code>firstWhere</code>",id:"beware-of-firstwhere",level:2},{value:"<code>setUp</code> in tests",id:"setup-in-tests",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter--dart-tips"},"Flutter & Dart tips"),(0,r.kt)("p",null,"A collection of different tips for Flutter and Dart, mainly some things found during code reviews."),(0,r.kt)("h2",{id:"test-files-suffix"},"Test files suffix"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget about ",(0,r.kt)("inlineCode",{parentName:"p"},"_test")," suffix.")),(0,r.kt)("p",null,"Test files should reside inside a test folder located at the root of your Flutter application or package."),(0,r.kt)("p",null,"Test files should always end with ",(0,r.kt)("inlineCode",{parentName:"p"},"_test.dart"),", this is the convention used by the test runner when searching for tests."),(0,r.kt)("p",null,"Don't forget about adding ",(0,r.kt)("inlineCode",{parentName:"p"},"_test")," suffix to you test files: this is how test runner finds tests. When you\u2019re creating your first test file, it\u2019s easy to spot the mistake, since flutter test will give you an error for no test files found."),(0,r.kt)("p",null,"But when you already have hundreds of tests, it\u2019s easy to forget about it and end up with \u201cignored\u201d test. Even during code review we\u2019re not always that watchful about file names."),(0,r.kt)("admonition",{title:"Further reading",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/testing"},"https://docs.flutter.dev/testing")))),(0,r.kt)("h2",{id:"beware-of-firstwhere"},"Beware of ",(0,r.kt)("inlineCode",{parentName:"h2"},"firstWhere")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"firstWhere")," can throw ",(0,r.kt)("inlineCode",{parentName:"p"},"StateError"),".")),(0,r.kt)("p",null,"If you don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"orElse")," function, and there's no element in collection that satisfies the given predicate, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstWhere")," function will throw ",(0,r.kt)("inlineCode",{parentName:"p"},"StateError"),"."),(0,r.kt)("p",null,"Also, you cannot just return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"orElse")," function, as it doesn't satisfy the function signature."),(0,r.kt)("p",null,'Instead, use "safer" ',(0,r.kt)("inlineCode",{parentName:"p"},"firstWhereOrNull")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n    final list = [1, 2, 4];\n\n    // Bad state: no element\n    // This will error\n    final a = list.firstWhere((e) => e == 3);\n\n    // Won't compile:\n    // The return type `Null` isn't a `int`, as required by the closure's context.\n    // This will error\n    final b = list.firstWhere((e) => e == 3, orElse: () => null);\n\n    // c == null\n    // highlight-next-line\n    final c = list.firstWhereOrNull((e) => e == 3);\n}\n")),(0,r.kt)("admonition",{title:"Further reading",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.dart.dev/stable/2.8.2/dart-core/Iterable/firstWhere.html"},"https://api.dart.dev/stable/2.8.2/dart-core/Iterable/firstWhere.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/package-collection_collection/IterableExtension/firstWhereOrNull.html"},"https://api.flutter.dev/flutter/package-collection_collection/IterableExtension/firstWhereOrNull.html")))),(0,r.kt)("h2",{id:"setup-in-tests"},(0,r.kt)("inlineCode",{parentName:"h2"},"setUp")," in tests"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Prefer ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"setUpAll"),".")),(0,r.kt)("p",null,"Making tests (especially, unit tests) run faster is important. But even more important is to not introduce hidden dependencies between them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setUpAll")," makes it very easy to accidentally introduce hidden dependencies between tests that should be isolated."),(0,r.kt)("p",null,"Avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"setUpAll")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDownAll")," unless absolutely necessary, and prefer using ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"tearDown"),"."),(0,r.kt)("p",null,"One way to find hidden dependency is to run tests in random order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flutter test --test-randomize-ordering-seed random\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n    setUpAll(() {\n        // Set up dependencies that are very slow and unpractical\n        // to do before every test.\n    });\n\n    setUp(() {\n        // Everything else.\n        //\n        // You can also reset the state of dependencies created in setUpAll\n        // to avoid hidden test dependencies.\n    });\n\n    test('add', () {\n        expect(add(1, 2), 3);\n    });\n}\n")),(0,r.kt)("admonition",{title:"Further reading",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/flutter_test/setUpAll.html"},"https://api.flutter.dev/flutter/flutter_test/setUpAll.html")))))}u.isMDXComponent=!0}}]);
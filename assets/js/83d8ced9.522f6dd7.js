"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Dependency Injection in Flutter"},o=void 0,l={permalink:"/blog/2019/03/26/flutter-di",source:"@site/blog/2019-03-26-flutter-di.md",title:"Dependency Injection in Flutter",description:"As I wrote in a previous article, we\u2019re experimenting with Flutter while developing our side project for step challenges with colleagues. This side project should also be considered as a playground, where we can check if we can use Flutter in more serious projects. That\u2019s why we want to use some approaches there that can look like an over-engineering for such a small project.",date:"2019-03-26T00:00:00.000Z",formattedDate:"March 26, 2019",tags:[],readingTime:4.935,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Dependency Injection in Flutter"},prevItem:{title:"Mews Challenge",permalink:"/blog/2019/10/14/mews-challenge"},nextItem:{title:"Multi-platform apps: are we there yet?",permalink:"/blog/2019/03/10/multiplatform"}},s={authorsImageUrls:[]},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Concrete class injection",id:"concrete-class-injection",level:3},{value:"Interface injection",id:"interface-injection",level:3},{value:"Providers",id:"providers",level:3},{value:"Assisted injection",id:"assisted-injection",level:3},{value:"Singletons, qualifiers and asynchronous injection",id:"singletons-qualifiers-and-asynchronous-injection",level:3},{value:"Wiring it up",id:"wiring-it-up",level:3},{value:"Running",id:"running",level:2},{value:"Profit",id:"profit",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As I wrote in a ",(0,a.kt)("a",{parentName:"p",href:"https://developers.mews.com/multiplatform-apps-are-we-there-yet/"},"previous article"),", we\u2019re experimenting with Flutter while developing our side project for step challenges with colleagues. This side project should also be considered as a playground, where we can check if we can use Flutter in more serious projects. That\u2019s why we want to use some approaches there that can look like an over-engineering for such a small project."),(0,a.kt)("p",null,"So one of the first questions was what can we use for dependency injection. A quick search in the internet revealed 2 libraries with positive reviews: ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dartlang.org/packages/get_it"},"get_it")," and ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dartlang.org/packages/kiwi"},"kiwi"),". As ",(0,a.kt)("inlineCode",{parentName:"p"},"get_it")," turned out to be a Service Locator (and I\u2019m not a fan of this pattern), I was going to play with ",(0,a.kt)("inlineCode",{parentName:"p"},"kiwi"),", which looked more promising, but then I\u2019ve found another one library: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/inject.dart"},"inject.dart"),". It is heavily inspired by Dagger library, and as we use the latest one in our other Android projects, I\u2019ve decided to dig into it."),(0,a.kt)("p",null,"It\u2019s worth saying that though this library is located in Google GitHub repository, it\u2019s not an official library from Google and no support is currently provided:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This library is currently offered as-is (developer preview) as it is open-sourced from an internal repository inside Google. As such we are not able to act on bugs or feature requests at this time.")),(0,a.kt)("p",null,"Nevertheless it looks like the library does everything that we need for now, so I\u2019d like to share some info on how you can use this library in your project."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"As there\u2019s no package in ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dartlang.org/"},"official repository"),", we have to install it manually. I prefer to do it as a git submodule, so I\u2019m creating a folder ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor")," in my project source directory and running the following command from this directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule add https://github.com/google/inject.dart\n")),(0,a.kt)("p",null,"And now we can set it up by adding following lines into ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  // other dependencies here\n  inject:\n    path: ./vendor/inject.dart/package/inject\n\ndev_dependencies:\n  // other dev_dependencies here\n  build_runner: ^1.0.0\n  inject_generator:\n    path: ./vendor/inject.dart/package/inject_generator\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"What functionality do we usually expect from a DI library? Let\u2019s go through some common use cases:"),(0,a.kt)("h3",{id:"concrete-class-injection"},"Concrete class injection"),(0,a.kt)("p",null,"It can be as simple as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:inject/inject.dart';\n\n@provide\nclass StepService {\n  // implementation\n}\nWe can use it e.g. with Flutter widgets like this:\n\n@provide\nclass SomeWidget extends StatelessWidget {\n  final StepService _service;\n\n  SomeWidget(this._service);\n}\n")),(0,a.kt)("h3",{id:"interface-injection"},"Interface injection"),(0,a.kt)("p",null,"First of all we need to define an abstract class with some implementation class, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"abstract class UserRepository {\n  Future<List<User>> allUsers();\n}\n\nclass FirestoreUserRepository implements UserRepository {\n  @override\n  Future<List<User>> allUsers() {\n    // implementation\n  }\n}\n")),(0,a.kt)("p",null,"And now we can provide dependencies in our module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:inject/inject.dart';\n\n@module\nclass UsersServices {\n  @provide\n  UserRepository userRepository() => FirestoreUserRepository();\n}\n")),(0,a.kt)("h3",{id:"providers"},"Providers"),(0,a.kt)("p",null,"What to do if we need not an instance of some class to be injected, but rather a provider, that will give us a new instance of this class each time? Or if we need to resolve the dependency lazily instead of getting concrete instance in constructor? I didn\u2019t find it neither in documentation (well, because there\u2019s no documentation at all) nor in provided examples, but it actually works this way that you can request a function returning the required instance and it will be injected properly.\nWe can even define a helper type like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"typedef Provider<T> = T Function();\n")),(0,a.kt)("p",null,"and use it in our classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"@provide\nclass SomeWidget extends StatelessWidget {\n  final Provider<StepService> _service;\n\n  SomeWidget(this._service);\n\n  void _someFunction() {\n    final service = _service();\n    // use service\n  }\n}\n")),(0,a.kt)("h3",{id:"assisted-injection"},"Assisted injection"),(0,a.kt)("p",null,"There\u2019s no built in functionality to inject objects that require arguments known at runtime only, so we can use the common pattern with factories in this case: create a factory class that takes all the compile-time dependencies in constructor and inject it, and provide a factory method with runtime argument that will create a required instance."),(0,a.kt)("h3",{id:"singletons-qualifiers-and-asynchronous-injection"},"Singletons, qualifiers and asynchronous injection"),(0,a.kt)("p",null,"Yes, the library supports all of this. There\u2019s actually a good explanation in the official example."),(0,a.kt)("h3",{id:"wiring-it-up"},"Wiring it up"),(0,a.kt)("p",null,"The final step in order to make everything work is to create an injector (aka component from Dagger), e.g. like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'main.inject.dart' as g;\n\n@Injector(const [UsersServices, DateResultsServices])\nabstract class Main {\n  @provide\n  MyApp get app;\n  static Future<Main> create(\n    UsersServices usersModule,\n    DateResultsServices dateResultsModule,\n  ) async {\n    return await g.Main$Injector.create(\n      usersModule,\n      dateResultsModule,\n    );\n  }\n}\n")),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"UserServices")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DateResultsServices")," are previously defined modules, ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp")," is the root widget of our application, and ",(0,a.kt)("inlineCode",{parentName:"p"},"main.inject.dart")," is an auto-generated file (more on this later)."),(0,a.kt)("p",null,"Now we can define our main function like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void main() async {\n  var container = await Main.create(\n    UsersServices(),\n    DateResultsServices(),\n  );\n  runApp(container.app);\n}\n")),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"As inject works with code generation, we need to use build runner to generate the required code. We can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flutter packages pub run build_runner build\n")),(0,a.kt)("p",null,"or watch command in order to keep the source code synced automatically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flutter packages pub run build_runner watch\n")),(0,a.kt)("p",null,"But there\u2019s one important moment here: by default the code will be generated into the cache folder and Flutter doesn\u2019t currently support this (though there\u2019s a work in progress in order to solve this problem). So we need to add the file ",(0,a.kt)("inlineCode",{parentName:"p"},"inject_generator.build.yaml")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'builders:\n  inject_generator:\n    target: ":inject_generator"\n    import: "package:inject_generator/inject_generator.dart"\n    builder_factories:\n      - "summarizeBuilder"\n      - "generateBuilder"\n    build_extensions:\n      ".dart":\n        - ".inject.summary"\n        - ".inject.dart"\n    auto_apply: dependents\n    build_to: source\n')),(0,a.kt)("p",null,"It\u2019s actually the same content as in file ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor/inject.dart/package/inject_generator/build.yaml")," except for one line: ",(0,a.kt)("inlineCode",{parentName:"p"},"build_to: cache")," has been replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"build_to: source"),"."),(0,a.kt)("p",null,"Now we can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"build_runner"),", it will generate the required code (and provide error messages if some dependencies cannot be resolved) and after that we can run Flutter build as usual."),(0,a.kt)("h2",{id:"profit"},"Profit"),(0,a.kt)("p",null,"That\u2019s all. You should also check the examples provided with the library itself, and if you have some experience with Dagger library, inject will be really very familiar to you."))}u.isMDXComponent=!0}}]);
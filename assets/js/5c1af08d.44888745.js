"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9567],{2670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));a(1839);const s={title:"1 year in production with Flutter: lessons learned"},i=void 0,r={permalink:"/blog/2021/02/05/one-year-flutter",source:"@site/blog/2021-02-05-one-year-flutter/index.md",title:"1 year in production with Flutter: lessons learned",description:"- \u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f",date:"2021-02-05T00:00:00.000Z",formattedDate:"February 5, 2021",tags:[],readingTime:18.72,hasTruncateMarker:!0,authors:[],frontMatter:{title:"1 year in production with Flutter: lessons learned"},prevItem:{title:"1 \u0433\u043e\u0434 \u0441 Flutter \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d\u0435",permalink:"/blog/2021/02/14/one-year-flutter-ru"},nextItem:{title:"13 reasons why Dart is worse than Kotlin",permalink:"/blog/2020/07/20/dart-vs-kotlin"}},l={authorsImageUrls:[]},d=[{value:"What do we do?",id:"what-do-we-do",level:2},{value:"Architecture",id:"architecture",level:2},{value:"BLoC",id:"bloc",level:3},{value:"Libraries",id:"libraries",level:2},{value:"freezed",id:"freezed",level:3},{value:"built_collection",id:"built_collection",level:3},{value:"flutter_bloc",id:"flutter_bloc",level:3},{value:"json_serializable",id:"json_serializable",level:3},{value:"retrofit",id:"retrofit",level:3},{value:"provider",id:"provider",level:3},{value:"Teamwork",id:"teamwork",level:2},{value:"Formatting",id:"formatting",level:3},{value:"Analyzer",id:"analyzer",level:3},{value:"CI/CD",id:"cicd",level:2},{value:"Pitfalls",id:"pitfalls",level:2},{value:"Was Flutter a good choice?",id:"was-flutter-a-good-choice",level:2}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/2021/02/14/one-year-flutter-ru"},"\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f")))),(0,o.kt)("p",null,"This is a text version of my ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/ARP5AozTplw"},"presentation")," at DartUP 2020."),(0,o.kt)("h2",{id:"what-do-we-do"},"What do we do?"),(0,o.kt)("p",null,"Our main product is a large and complex Property Management System. Also, we have a set of smaller products, one of which is a mobile application intended mainly for housekeepers and other hotel staff. Initially, it was written as a native application for iOS and Android, but about 1.5 years ago we decided to migrate it to Flutter."),(0,o.kt)("p",null,"In this article, I would like to share some problems we\u2019ve encountered so far, describe the architecture we\u2019ve eventually come to, what libraries we\u2019ve found useful, and eventually, I\u2019ll answer the question: was it a good idea to re-write our app from scratch using Flutter?"),(0,o.kt)("p",null,"First of all, let me quickly describe the functionality of the application."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8860).Z,width:"700",height:"504"})),(0,o.kt)("p",null,"This is just a common B2B app with the functionality you would normally expect from it: authentication, profile management, messages and tasks, forms, and communication with backend API."),(0,o.kt)("p",null,'There are, however, a couple of things that are not so common. First of all, we have a fully custom UI, or more precisely, a custom design system (that stays on the same level of hierarchy as Material Design for Android or Cupertino Design for iOS). It\u2019s used across all our applications and has implementations for mobile and web. Another thing, which may be not so common for the majority of apps, but is pretty standard in the enterprise world: the backend serves the whole set of products, it\u2019s not "app-centric" \u2014 \u200ait solves a lot of different tasks, so the models and flow on the backend don\u2019t really match the models and flows that we define in the mobile app. It\u2019s important because it has an impact on the overall app architecture.'),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Mainly, we follow Clean Architecture principles. If I would have been asked to describe these principles in just a couple of words, I would go with ",(0,o.kt)("strong",{parentName:"p"},"layers")," and strict ",(0,o.kt)("strong",{parentName:"p"},"directions")," of dependencies between these layers."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2667).Z,width:"700",height:"421"})),(0,o.kt)("p",null,"For us, one of the major layers is the ",(0,o.kt)("strong",{parentName:"p"},"API layer"),", where we define DTOs and methods for communication with the backend. This is a common layer that is used across the whole app. All the other functionality is divided into a set of horizontal features. Each feature can be viewed as a standalone module with more or less complete functionality, so it should communicate with other features as little as possible."),(0,o.kt)("p",null,"For example, one feature can be \u201cTask management\u201d, another one: \u201cMessaging system\u201d or \u201cProfile management\u201d. Inside of each feature we have a vertical hierarchy of some common layers with the ",(0,o.kt)("strong",{parentName:"p"},"Business Logic Layer")," on top (where we define our app models and interfaces for fetching and posting data)."),(0,o.kt)("p",null,"Next comes the ",(0,o.kt)("strong",{parentName:"p"},"Data Layer")," \u200a\u2014 \u200athis is where these interfaces are implemented, and this is the only layer that communicates with the API. As I\u2019ve mentioned earlier, our backend is pretty common, so if you have an \u201capp-centric\u201d backend (it often makes sense if the mobile app is the main product of your company), you probably have a pretty close match between backend and app models. In this case, the Data Layer can be excessive and a more reasonable way could be to allow the Business Logic Layer to communicate directly with the API layer and reuse its DTOs as models. With code generation support you can easily set it up in this way, and you can remove a lot of code duplication."),(0,o.kt)("p",null,"At the bottom, there is the ",(0,o.kt)("strong",{parentName:"p"},"Presentation Layer"),". This is the only layer that knows about Flutter. It also knows about the Business Logic Layer and the Data Layer and acts as the \u201cglue\u201d by providing necessary dependencies and combining everything together."),(0,o.kt)("h3",{id:"bloc"},"BLoC"),(0,o.kt)("p",null,"As the main pattern for implementing the architecture, we use BLoC. I won\u2019t talk a lot about the pattern itself, there are a lot of resources describing it, but: there are two main components \u200a\u2014 \u200a",(0,o.kt)("strong",{parentName:"p"},"UI")," (actually, any client) and ",(0,o.kt)("strong",{parentName:"p"},"BLoC")," itself which stands for Business Logic Component. BLoC is an entity that can receive a ",(0,o.kt)("strong",{parentName:"p"},"stream of events")," (which can be emitted by UI or by another BLoC). It transforms these events and maps them onto a ",(0,o.kt)("strong",{parentName:"p"},"stream of states")," (which in turn can be consumed by the UI to render the interface or by some other BLoC):"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3025).Z,width:"700",height:"342"})),(0,o.kt)("p",null,"It\u2019s very similar to the Redux pattern (e.g., we have unidirectional data flow), but it also has some differences: e.g., we don\u2019t have a single store (state) for the whole application, instead, the application is considered as a set of sub-states (represented by BLoCs) communicating with each other."),(0,o.kt)("p",null,"What I especially like about the BLoC pattern\u200a\u2014\u200aif we limit the number of states the app can be in, and define events forcing the transition from one state to another, we will get a State Machine."),(0,o.kt)("p",null,"From my experience, all of the business apps, at least the ones I\u2019ve developed, can be naturally represented using this State Machine pattern:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6946).Z,width:"700",height:"363"})),(0,o.kt)("p",null,"In our project, we\u2019re using BLoC pattern implementation provided by bloc library. Mostly, we follow the official guidelines regarding how to structure the app, but we have a couple of differences."),(0,o.kt)("p",null,"The first one is about BLoC to BLoC communication (dashed arrows on the next scheme)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5888).Z,width:"700",height:"573"})),(0,o.kt)("p",null,"As they propose in the official documentation, if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocA")," depending on ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocB"),"'s state, you should pass ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocB")," as a dependency to ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocA"),". For me, it\u2019s not a very clean solution, because ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocA")," now knows too much about other BLoCs. Instead, I prefer to define it such that ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocA")," has a dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream<StateB>"),"(or ",(0,o.kt)("inlineCode",{parentName:"p"},"Sink<EventB>")," if it needs to send events to ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocB"),"). Of course, when you provide the dependency you can just pass ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocB")," directly (as it implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream<StateB>")," interface), but from the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocA")," point of view, it doesn\u2019t matter who exactly provides this stream of states. That allows passing some stub streams in our test code with predefined values, instead of mocking the whole ",(0,o.kt)("inlineCode",{parentName:"p"},"BlocB")," class."),(0,o.kt)("p",null,"Another thing unrelated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_bloc")," library per se, but more about BLoC pattern usage: I often see that developers treat BLoCs as View Models and define their BLoC states very close to the UI level so that even things like confirmation dialogs and button texts are defined in the BLoC state. For me, it doesn\u2019t make much sense, and I prefer having the UI state and UI logic defined in the UI layer. BLoC in my opinion should be responsible for higher level logic (app logic or ",(0,o.kt)("em",{parentName:"p"},"business logic")," as the name suggests)."),(0,o.kt)("p",null,"The best way to decide whether some logic belongs to the UI layer or to BLoC can be this thought experiment: imagine that at some point in time we decide to step away from Flutter, and even from GUI completely, and switch to CLI instead. In this case, all changes should, ideally, be done in the UI layer, and the BLoC layer shouldn\u2019t be changed at all."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now let\u2019s talk about some principles we follow while developing the app."),(0,o.kt)("p",null,"I need to say that here in Mews as a whole (and in our mobile team in particular) we like functional programming. While we are not that deep into hardcore FP (one of the reasons is that Dart is not really the language for that), we try to at least extract practical and useful advice from FP principles and apply them in a way that they work together with OOP organically."),(0,o.kt)("p",null,"First, ",(0,o.kt)("strong",{parentName:"p"},"immutability"),". For us, it means that all our models, states, and events are immutable."),(0,o.kt)("p",null,"Next is the common use of ",(0,o.kt)("strong",{parentName:"p"},"pure functions"),". Our functions (our business logic functions, at least) are as free from side effects as possible."),(0,o.kt)("p",null,"Also, heavy usage of ",(0,o.kt)("strong",{parentName:"p"},"Algebraic Data Types"),". For example, we\u2019re using co-product types (or sealed classes: basically a limited hierarchy where a class can have only a predefined set of subclasses) for ",(0,o.kt)("em",{parentName:"p"},"states")," emitted by BLoCs and ",(0,o.kt)("em",{parentName:"p"},"events")," they can accept. Another example can be the way we treat errors. In our business logic code, we banned using the ",(0,o.kt)("inlineCode",{parentName:"p"},"throw")," keyword. Instead, we use a wrapper class, ",(0,o.kt)("inlineCode",{parentName:"p"},"Either<E, R>")," which represents that the expected result can be either successful data or an error. In that case, a client using this returned result is forced to deal with possible failure."),(0,o.kt)("p",null,"Lastly (and I hope it\u2019s a temporary hack rather than a long-running solution) is caused by the fact that we don\u2019t have proper non-nullable types yet. It should be resolved in the near future, but for now, we have to deal with it, as it\u2019s really a common source of errors. So, we decided in our business logic code to treat all types as non-nullable, and when we need to pass a null value we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional<T>")," wrapper type instead."),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)("p",null,"Now, let\u2019s talk about libraries we\u2019ve found useful. This is clearly not an exhaustive list of all the libraries we use in our app, but rather a starter kit that I would recommend for any app."),(0,o.kt)("h3",{id:"freezed"},"freezed"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code generation for immutable classes that has a simple syntax/API without compromising on the features.")),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/freezed"},"freezed")," library. It\u2019s based on code generation and removes a lot of boilerplate code if you need immutable or sealed classes."),(0,o.kt)("p",null,"This is how a typical BLoC events class looks in our application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@freezed\nabstract class TasksEvent with _$TasksEvent {\n  const factory TasksEvent.fetchRequested() = FetchRequested;\n\n  const factory TasksEvent.fetchCompleted(Either<Exception, TasksData> result) =\n      FetchCompleted;\n\n  const factory TasksEvent.filtersUpdated(TaskFilters filters) = FiltersUpdated;\n\n  const factory TasksEvent.taskUpdated(Task task) = TaskUpdated;\n\n  const factory TasksEvent.taskCreated(Task task) = TaskCreated;\n\n  const factory TasksEvent.taskResolved(Task task) = TaskResolved;\n}\n")),(0,o.kt)("p",null,"Here we state that ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksBloc")," can only receive one of the predefined events. Later, in the TasksBloc class, we delegate these events to processing methods using the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nStream<TasksState> mapEventToState(TasksEvent event) => event.map(\n      fetchRequested: _mapFetchRequested,\n      fetchCompleted: _mapFetchCompleted,\n      filtersUpdated: _mapFiltersUpdated,\n      taskUpdated: _mapTaskUpdated,\n      taskCreated: _mapTaskCreated,\n      taskResolved: _mapTaskResolved,\n    );\n\nStream<TasksState> _mapTaskCreated(TaskCreated event) async* {\n  // ...\n}\n")),(0,o.kt)("p",null,"The nice thing is that if (or when) at some point in time we add another event type, we\u2019re forced to update this code as well, otherwise, it won\u2019t compile."),(0,o.kt)("p",null,"The only disadvantage of this library, for me, is that currently it doesn\u2019t play well with immutable collections, so we use a different library for them."),(0,o.kt)("h3",{id:"built_collection"},"built_collection"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Immutable collections based on the SDK collections. Each SDK collection class is split into a new immutable collection class and a corresponding mutable builder class.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/built_collection"},"built_collection")," library is not based on code generation. Instead, it provides some helper types, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"BuiltMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BuiltList"),", and a number of helper methods for updating items in a collection using the Builder pattern."),(0,o.kt)("p",null,"Together with ",(0,o.kt)("inlineCode",{parentName:"p"},"freezed")," library, we can use it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"yield state.copyWith(\n  tasks: state.tasks.rebuild((b) => b[createdTask.id] = createdTask),\n);\n")),(0,o.kt)("h3",{id:"flutter_bloc"},"flutter_bloc"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Flutter Widgets that make it easy to implement the BLoC (Business Logic Component) design pattern. Built to be used with the bloc state management package.")),(0,o.kt)("p",null,"As I\u2019ve already mentioned, for BLoC pattern implementation we use the ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_bloc"},"flutter_bloc")," library. This is how our typical BLoC looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@freezed\nabstract class TasksState implements _$TasksState {\n  const factory TasksState({\n    @required ProcessingState<TaskFetchingError, EmptyResult> fetchingState,\n    @required ProcessingState<Exception, EmptyResult> updateState,\n    @required BuiltList<Department> departments,\n    @required TaskFilters filters,\n    @required BuiltMap<TaskId, Task> tasks,\n  }) = _TasksState;\n\n  const TasksState._();\n}\n\n@freezed\nabstract class TasksEvent with _$TasksEvent {\n  const factory TasksEvent.fetchRequested() = FetchRequested;\n\n  const factory TasksEvent.fetchCompleted(Either<Exception, TasksData> result) =\n      FetchCompleted;\n\n  const factory TasksEvent.filtersUpdated(TaskFilters filters) = FiltersUpdated;\n\n  const factory TasksEvent.taskUpdated(Task task) = TaskUpdated;\n\n  const factory TasksEvent.taskCreated(Task task) = TaskCreated;\n\n  const factory TasksEvent.taskResolved(Task task) = TaskResolved;\n}\n\nclass TasksBloc extends Bloc<TasksEvent, TasksState> {\n  @override\n  TasksState get initialState => TasksState(\n        tasks: BuiltMap<TaskId, Task>(),\n        departments: BuiltList<Department>(),\n        filters: TaskFilters());\n\n  @override\n  Stream<TasksState> mapEventToState(TasksEvent event) => event.map(\n        fetchRequested: _mapFetchRequested,\n        fetchCompleted: _mapFetchCompleted,\n        filtersUpdated: _mapFiltersUpdated,\n        taskUpdated: _mapTaskUpdated,\n        taskCreated: _mapTaskCreated,\n        taskResolved: _mapTaskResolved,\n      );\n\n  Stream<TasksState> _mapTaskCreated(TaskCreated event) async* {\n    yield state.copyWith(updateState: const ProcessingState.loading());\n    final result = await _createTask(event.task);\n    yield* result.fold(\n      _triggerUpdateError,\n      (taskId) async* {\n        final createdTask = event.task.copyWith(id: taskId);\n        yield state.copyWith(\n          tasks: state.tasks.rebuild((b) => b[createdTask.id] = createdTask),\n        );\n        yield* _triggerUpdateSuccess();\n      },\n    );\n  }\n\n  // ...\n}\n")),(0,o.kt)("p",null,"Take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"_mapTaskCreated")," method: first of all, we emit the loading state and then we wait for the ",(0,o.kt)("inlineCode",{parentName:"p"},"_createTask")," method to finish. This method is injected into the BLoC, the real implementation belongs to the Data Layer."),(0,o.kt)("p",null,"The result of this method is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Either<Exception, TaskId>"),", so we map it to either error state or success state, then yield the corresponding state."),(0,o.kt)("h3",{id:"json_serializable"},"json_serializable"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Automatically generate code for converting to and from JSON by annotating Dart classes.")),(0,o.kt)("p",null,"Another library that is heavily used in the API Layer is ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/json_serializable"},"json_serializable"),". It\u2019s based on code generation and removes a ton of boilerplate code needed for serializing/deserializing DTOs and mapping them to Dart classes."),(0,o.kt)("p",null,"This is an example of a typical DTO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@JsonSerializable()\nclass GetAllTasksRequest {\n  GetAllTasksRequest({\n    this.assigneeProfileIds,\n    this.departmentIds,\n    this.createdUtc,\n    this.deadlineUtc,\n    this.closedUtc,\n    this.state,\n    this.extent,\n  });\n\n  final List<String> assigneeProfileIds;\n  final List<String> departmentIds;\n  final TimePeriodDto createdUtc;\n  final TimePeriodDto deadlineUtc;\n  final TimePeriodDto closedUtc;\n  final TaskStateFilter state;\n  final ExtentDto extent;\n\n  Map<String, dynamic> toJson() => _$GetAllTasksRequestToJson(this);\n}\n")),(0,o.kt)("h3",{id:"retrofit"},"retrofit"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"retrofit.dart is an dio client generator using source_gen and inspired by Chopper and Retrofit.")),(0,o.kt)("p",null,"Together with the previous library, we heavily rely on ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/retrofit"},"retrofit")," to generate API methods implementation."),(0,o.kt)("p",null,"If you have experience in developing native Android apps, you\u2019ve probably heard about the Android retrofit library that served as inspiration for this package. The idea is that you\u2019re defining an interface with methods communicating with backend API, then the library generates the bodies of those methods, taking care of the serialization/deserialization of request and response DTOs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"\n@RestApi()\nabstract class RestClient {\n  factory RestClient(Dio dio) = _RestClient;\n\n  @anonymous\n  @POST('/api/general/v1/users/signIn')\n  Future<SignInResponse> signIn(@Body() SignInRequest request);\n\n  @anonymous\n  @POST('/api/general/v1/users/resetPassword')\n  Future<EmptyResponse> resetPassword(\n    @Body() ResetPasswordRequestDto request,\n  );\n\n  @POST('/api/commander/v1/tasks/getAll')\n  Future<GetAllTasksResponseDto> getTasks(@Body() GetAllTasksRequest request);\n\n  @POST('/api/commander/v1/tasks/add')\n  Future<TaskDto> createTask(@Body() CreateTaskDto request);\n}\n\nconst anonymous = Extra({'isAnonymous': true});\n")),(0,o.kt)("h3",{id:"provider"},"provider"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A wrapper around InheritedWidget to make them easier to use and more reusable.")),(0,o.kt)("p",null,"Finally, ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/provider"},"provider")," library which we use mainly for DI in a Flutter way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(_) => MultiProvider(\n  providers: [\n    Provider<AnalyticsManager>.value(value: _analyticsManager),\n    Provider<CurrentRouteObserver>.value(value: _routeObserver),\n    Provider<LocalisationManager>.value(value: _localisationManager),\n    Provider<AuthenticationManager>.value(value: _authenticationManager),\n    Provider<RestClient>.value(value: _restClient),\n    Provider<ImageUrlProvider>.value(value: _imageUrlProvider),\n  ],\n  child: App(),\n);\n\n\n_analyticsManager ??= Provider.of(context)\n  ..setCurrentScreen(_getScreenPath(_currentPage));\n")),(0,o.kt)("h2",{id:"teamwork"},"Teamwork"),(0,o.kt)("p",null,"Let\u2019s talk about teamwork now, because, if you have more than one developer, you already have a team, and you have to define some best practices and find some compromise on how to structure your code, etc."),(0,o.kt)("h3",{id:"formatting"},"Formatting"),(0,o.kt)("p",null,"This is the thing I really like about Dart: it comes with the dartfmt tool, so there\u2019s only one way to properly format your code. Actually, the official formatting rules sound like \u201cwhatever dartfmt produces as output.\u201d That eliminates all the arguing about how to format the code (except for where to put trailing commas, maybe). We even set up our CI machine in a way that it fails the build if the code is not properly formatted. The only thing I don\u2019t like about dartfmt is that it uses an 80-character line limit."),(0,o.kt)("admonition",{title:"Linus Torvalds",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u2026for chrissake, don\u2019t try to make 80 columns some immovable standard.")),(0,o.kt)("p",null,"Luckily, ",(0,o.kt)("inlineCode",{parentName:"p"},"dartfmt")," allows you to override this setting. While you cannot tweak the lint rule (either you enable ",(0,o.kt)("inlineCode",{parentName:"p"},"lines_longer_than_80_chars")," rule or disable it at all), you can at least run ",(0,o.kt)("inlineCode",{parentName:"p"},"dartfmt")," command with ",(0,o.kt)("inlineCode",{parentName:"p"},"-l")," parameter. For our project, we decided to go with a 120 column limit."),(0,o.kt)("h3",{id:"analyzer"},"Analyzer"),(0,o.kt)("p",null,"The next step is a static analysis. Again, it\u2019s nice that Dart has a powerful and customizable static analyzer out of the box. My only concern about it is that by default it\u2019s too forgiving. My common recommendation is to make it as strict as possible."),(0,o.kt)("p",null,"You can go through all the rules provided by the analyzer and override levels of each rule: whether you want it to be an error, a warning, or you prefer to disable it completely."),(0,o.kt)("p",null,"We have a lot of rules defined as warnings\u200a\u2014\u200awhen you\u2019re in a development phase playing with your code, you obviously don\u2019t want to break the hot reload just because the code isn\u2019t properly formatted, or the variable isn\u2019t used. At the same time, CI machines are set up in a way that the build will fail with both errors and warnings."),(0,o.kt)("p",null,"If you don\u2019t want to go through all the rules and define your own levels, you can use one of these community packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/pedantic"},"pedantic\u200a")," \u2014 \u200amaintained by Google;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/effective_dart"},"effective_dart")," \u200a\u2014 \u200aofficial Effective Dart guidelines;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/mews_pedantic"},"mews_pedantic\u200a")," \u2014 \u200amaintained by us.")),(0,o.kt)("h2",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,"Now it\u2019s time to talk about CI/CD in more detail. This is the point where I should say: \u201cDon\u2019t follow our way.\u201d We use Azure Pipelines to be aligned with the rest of the company. While it\u2019s really powerful and customizable, it\u2019s not specialized for Flutter or even mobile CI/CD flows. For example, if you\u2019re using Microsoft-hosted agents, they don\u2019t have Flutter pre-installed\u200a\u2014\u200athis means that every build needs to start with installing Flutter. Also, build steps are defined using some low-level stuff (like bash scripts)."),(0,o.kt)("p",null,"If you\u2019re looking for some Flutter-centric CI/CD service, there\u2019s a number of alternatives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.bitrise.io/"},"Bitrise"),". The free plan includes 1 concurrency, 30 mins/build timeout, and 200 builds a month."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codemagic.io/"},"Codemagic"),". You get 500 build minutes, macOS standard VM, and 120 min build timeout for free."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://appcircle.io/"},"Appcircle"),". It also provides a free plan with 1 concurrent build, 25 minutes max build time per build, 5 minutes/month device previews, and 100 tester emails/month.")),(0,o.kt)("p",null,"I\u2019m not sure about Appcircle, but Bitrise and Codemagic even have seamless integration with the AWS device farm. That means that you can easily run your UI tests on the whole fleet of real devices provided by AWS. It\u2019s not for free, of course, you have to pay Amazon for that, but having a simple-to-set-up-integration is a nice option."),(0,o.kt)("p",null,"I\u2019ve used Codemagic for one of my side projects, and it\u2019s really very easy to set up. If you have a common Flutter CI workflow, it\u2019s a nice service to try without worrying about maintenance."),(0,o.kt)("p",null,"You can also use GitHub actions, but it\u2019s a common-purpose CI/CD service as well, so setup can be more complex. It has a free plan with 500 MB storage and 2,000 minutes a month, but there\u2019s one important notice there: if you\u2019re using a macOS agent (and you have to, at least for building an iOS version), the time spent by the machine is multiplied by 10! So, if you\u2019re only using macOS agents you have 200 free minutes, not 2,000."),(0,o.kt)("h2",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"Now, let\u2019s talk about some pitfalls or, at least, things you need to pay attention to while developing your Flutter application."),(0,o.kt)("p",null,"For me, a major one is ",(0,o.kt)("strong",{parentName:"p"},"error handling"),". If you have an exception in Dart code, your application won\u2019t crash. For me, as a mainly native developer, this was quite confusing at first. It\u2019s crucial to use a proper error reporting tool when you\u2019re publishing your application. We use Sentry (with sentry library) for that."),(0,o.kt)("p",null,"Another thing to keep in mind: Flutter is a cross-platform framework with all the ",(0,o.kt)("strong",{parentName:"p"},"limitations")," that come from that. Also, Flutter is relatively new. One problem we\u2019ve encountered was the lack of password manager integrations (this issue should be resolved now). From time-to-time issues like this will arise: as a cross-platform framework, Flutter cannot be on the same pace with native frameworks. Once new functionality is introduced in new versions of native frameworks, some time is required for Flutter to fully adopt it."),(0,o.kt)("p",null,"Text ellipsizing was another unpleasant issue\u200a\u2014\u200athe behavior is really not user-friendly and there\u2019s no easy solution to it so far as it requires some rendering engine integration refactoring."),(0,o.kt)("p",null,"I\u2019ve already mentioned the next issue, the infamous \u201cbillion-dollar mistake.\u201d According to our error reporting tools, the majority of errors were caused by ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"NoSuchMethodError"))," (the analog of ",(0,o.kt)("inlineCode",{parentName:"p"},"NullPointerException")," in Java). Yes, hopefully, it will be obsolete soon, when NNBD types are adopted by the framework itself and all the libraries, but for now, we have what we have."),(0,o.kt)("p",null,"And one more point I\u2019d like to mention here is what I call ",(0,o.kt)("strong",{parentName:"p"},"magic"),". And unfortunately, it\u2019s not some kind of good magic. From time to time, you will get some weird error messages (it happens more often with iOS builds), and you will have to do some voodoo steps to resolve them: restart your IDE, turn off and on your PC, run ",(0,o.kt)("inlineCode",{parentName:"p"},"flutter clean"),", repeat these steps in some different order. Sometimes it helps and the errors are gone. But sometimes it doesn\u2019t, and, when it doesn\u2019t, you\u2019re lucky if you have native developers on your team, otherwise these build errors (especially the ones that Xcode produces) can be really frustrating."),(0,o.kt)("h2",{id:"was-flutter-a-good-choice"},"Was Flutter a good choice?"),(0,o.kt)("p",null,"So now it\u2019s time to answer that question. Did it make sense to re-write the app from scratch in Flutter? Was I right back then, convincing all the stakeholders to try new technology? Would I make this choice again?"),(0,o.kt)("p",null,"Despite all the limitations I\u2019ve talked about, some concerns, and maybe an unclear future (yeah, Google is famous for killing projects), I think it was a good choice. Flutter perfectly suits us. One of the major reasons, as I mentioned before, is our custom design system. With Flutter we need to implement it only once, and it works the same way for both platforms. It really boosts up development. Flutter has nice tools for implementing heavily customized UI, so it\u2019s easier than doing it even for a single platform natively (especially, in Android where the native UI layer is a total mess)."),(0,o.kt)("p",null,"In terms of a team: currently we have 4 mobile developers (including me). We all come mainly from native Android backgrounds and the transition to Flutter was really smooth. In most cases, everything works the same way on both platforms, so the speed of development has increased and versions for both iOS and Android are published practically at the same time."),(0,o.kt)("p",null,"Honestly speaking, Dart is not my favorite language. I ",(0,o.kt)("a",{parentName:"p",href:"/blog/2020/07/20/dart-vs-kotlin"},"really miss")," some of Kotlin\u2019s features, but with code generation and with all the libraries I\u2019ve mentioned, even the business logic can be developed in a straightforward and maintainable way. I\u2019m happy that we only need to implement this logic once, and especially that we only need to develop UI once, otherwise, we would need at least 1.5 times more developers and all the drawbacks that come from having a larger team."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"That\u2019s it. If you have any questions feel free to contact me on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ookami_kb"},"Twitter")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/ookamikb/"},"LinkedIn"),"."))}u.isMDXComponent=!0},8860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/year_1-d5d501904d9b5f31e74e796fa2295c62.png"},2667:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/year_2-e671401f8dbdcec0f2affba5f7aa1361.png"},3025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/year_3-d39e27f9f9a773a19f203b80dfdda2be.png"},6946:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/year_4-8881652a9176b3dd03f1c319cf8f4074.png"},5888:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/year_5-855c5ea394b71c140173cb8e8232d8c4.png"}}]);
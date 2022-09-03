"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6340],{6081:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));t(1839);const r={title:"Flutter: how to draw text along an arc"},l=void 0,i={permalink:"/blog/2019/12/12/flutter-arc",source:"@site/blog/2019-12-12-flutter-arc/index.md",title:"Flutter: how to draw text along an arc",description:"- Flutter package",date:"2019-12-12T00:00:00.000Z",formattedDate:"December 12, 2019",tags:[],readingTime:6.02,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Flutter: how to draw text along an arc"},prevItem:{title:"Flutter for Web: is it a killer of React?",permalink:"/blog/2020/01/29/flutter-web"},nextItem:{title:"Flutter: \u0440\u0438\u0441\u0443\u0435\u043c \u0442\u0435\u043a\u0441\u0442 \u0432\u0434\u043e\u043b\u044c \u043e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u0438",permalink:"/blog/2019/12/01/flutter-arc-ru"}},m={authorsImageUrls:[]},p=[],o={toc:p};function c(a){let{components:e,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://pub.dev/packages/flutter_arc_text"},"Flutter package")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/ookami-kb/flutter_arc_text"},"GitHub")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/blog/2019/12/01/flutter-arc-ru"},"\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f")))),(0,s.kt)("p",null,"For one of our side projects (highly experimental and written in Flutter for Web, by the way) I needed to implement something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(7883).Z,width:"932",height:"1600"})),(0,s.kt)("p",null,"The code is actually the same for mobile and web, so, for the sake of simplicity (and because they look nicer), I'll share screenshots from the mobile app."),(0,s.kt)("p",null,"The problem is that Flutter doesn't support drawing text along a custom path (and it ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/16477"},"doesn't look like it will"),", at least not in the near future). So I decided to implement the functionality on my own. Drawing text along any custom path would be quite complex, but luckily I only had to implement text along an arc. I'd like to share with you one way to do that."),(0,s.kt)("p",null,"For this implementation, your first geometry course should be more than enough (though, shame on me, I've realised that I've forgot almost all of mine). It won't be the best possible implementation, but for our use case it will be good enough."),(0,s.kt)("p",null,"Let's start with defining the interface of our widget (let it be ",(0,s.kt)("inlineCode",{parentName:"p"},"ArcText"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"class ArcText extends StatelessWidget {\n  const ArcText({\n    Key key,\n    @required this.radius,\n    @required this.text,\n    @required this.textStyle,\n    this.startAngle = 0,\n  }) : super(key: key);\n\n  final double radius;\n  final String text;\n  final double startAngle;\n  final TextStyle textStyle;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"startAngle")," is the initial angle where the text will start, and ",(0,s.kt)("inlineCode",{parentName:"p"},"radius")," is the arc's radius \u2013 the text will be drawn along its side. We can use it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"Container(\n  decoration: BoxDecoration(\n    border: Border.all(),\n    color: Colors.white,\n  ),\n  width: 300,\n  height: 300,\n  child: ArcText(\n    radius: 100,\n    text: 'Hello, Mews! I am ArcText widget. I can draw circular text.',\n    textStyle: TextStyle(fontSize: 18, color: Colors.black),\n    startAngle: -pi / 2,\n  ),\n)\n")),(0,s.kt)("p",null,"For the text rendering we'll be using ",(0,s.kt)("inlineCode",{parentName:"p"},"CustomPainter"),". This is where the magic happens:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"class ArcText extends StatelessWidget {\n  const ArcText({\n    Key key,\n    @required this.radius,\n    @required this.text,\n    @required this.textStyle,\n    this.startAngle = 0,\n  }) : super(key: key);\n\n  final double radius;\n  final String text;\n  final double startAngle;\n  final TextStyle textStyle;\n\n  @override\n  Widget build(BuildContext context) => CustomPaint(\n        painter: _Painter(\n          radius,\n          text,\n          textStyle,\n          initialAngle: startAngle,\n        ),\n      );\n}\n")),(0,s.kt)("p",null,"Before starting to implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"_Painter")," class let's think about how it will work:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4602).Z,width:"354",height:"378"})),(0,s.kt)("p",null,"The idea here is that we will draw each letter on top of a chord. The radius of the circle the cord belongs to is our defined radius. ",(0,s.kt)("inlineCode",{parentName:"p"},"d")," \u2013 the chord's length \u2013 equals the letter's width. That means that after drawing each letter we can rotate the canvas to a specified angle and move it to a distance ",(0,s.kt)("inlineCode",{parentName:"p"},"d")," along the x axis. It's easier to transform the canvas than to calculate new coordinates."),(0,s.kt)("p",null,"Let's start implementing the ",(0,s.kt)("inlineCode",{parentName:"p"},"_Painter")," class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"class _Painter extends CustomPainter {\n  _Painter(this.radius, this.text, this.textStyle, {this.initialAngle = 0});\n\n  final num radius;\n  final String text;\n  final double initialAngle;\n  final TextStyle textStyle;\n\n  @override\n  void paint(Canvas canvas, Size size) {}\n\n  @override\n  bool shouldRepaint(CustomPainter oldDelegate) => true;\n}\n")),(0,s.kt)("p",null,"For rendering we will need: the radius, the text itself, the text style (so that we can get a width of each letter) and the initial angle. The ",(0,s.kt)("inlineCode",{parentName:"p"},"shouldRepaint")," method defines whether the ",(0,s.kt)("inlineCode",{parentName:"p"},"paint")," method needs to be called and, in the simplest case (when we don't have any complex calculations there), it can always return ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,s.kt)("p",null,"Now we can continue implementing ",(0,s.kt)("inlineCode",{parentName:"p"},"paint"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid paint(Canvas canvas, Size size) {\n  canvas.translate(size.width / 2, size.height / 2);\n  canvas.drawCircle(Offset.zero, radius, Paint()..style=PaintingStyle.stroke);\n  canvas.translate(0, -radius);\n}\n")),(0,s.kt)("p",null,"In this code snippet we're moving the canvas so that circle radius is in the center of a container, drawing the circle (it's just a helper, we'll remove it later), and moving the canvas again to a -radius along the y axis \u2013 later it will be easy to move and rotate it. We should get the following picture:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6277).Z,width:"932",height:"1600"})),(0,s.kt)("p",null,"Let's add text rendering:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid paint(Canvas canvas, Size size) {\n  canvas.translate(size.width / 2, size.height / 2);\n  canvas.drawCircle(Offset.zero, radius, Paint()..style=PaintingStyle.stroke);\n  canvas.translate(0, -radius);\n\n  double angle = 0;\n  for (int i = 0; i < text.length; i++) {\n    angle = _drawLetter(canvas, text[i], angle);\n  }\n}\n\ndouble _drawLetter(Canvas canvas, String letter, double prevAngle) {\n  _textPainter.text = TextSpan(text: letter, style: textStyle);\n  _textPainter.layout(\n    minWidth: 0,\n    maxWidth: double.maxFinite,\n  );\n\n  final double d = _textPainter.width;\n  final double alpha = 2 * math.asin(d / (2 * radius));\n\n  final newAngle = _calculateRotationAngle(prevAngle, alpha);\n  canvas.rotate(newAngle);\n\n  _textPainter.paint(canvas, Offset(0, -_textPainter.height));\n  canvas.translate(d, 0);\n\n  return alpha;\n}\n\ndouble _calculateRotationAngle(double prevAngle, double alpha) =>\n    (alpha + prevAngle) / 2;\n")),(0,s.kt)("p",null,"As I said, the idea is rather simple: with each letter drawn we're rotating the canvas to a calculated angle, so that the chord of the current letter is parallel to the x axis; then we draw the letter and move the canvas along the x axis to a distance equal to the letter width."),(0,s.kt)("p",null,"We can use our knowledge of geometry to find a chord's angle and the new angle to rotate the canvas."),(0,s.kt)("p",null,"A chord's length can be found from the following equation:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"sin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"\u03b1"),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"d=2r\\sin {\\frac {\\alpha }{2}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0404em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6954em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.0037em"}},"\u03b1"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))))),(0,s.kt)("p",null,"So it can be transformed like this to find the chord's central angle:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"arcsin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"mfrac"},"d"),(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"r"))),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha=2\\arcsin({\\frac d {2r}})")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"arcsin"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8801em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.394em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,"The angle to rotate the canvas can be found with this simple formula:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("mn",{parentName:"mfrac"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta=(\\frac{\\alpha+\\beta} 2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2772em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9322em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.4461em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05278em"}},"\u03b2"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"\u237a")," is the central angle of the previous chord, ",(0,s.kt)("inlineCode",{parentName:"p"},"\u03b2")," is the central angle of the current chord."),(0,s.kt)("p",null,"Now it looks like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4709).Z,width:"932",height:"1600"})),(0,s.kt)("p",null,"Now we can remove the helper circle and take the initial angle into account:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid paint(Canvas canvas, Size size) {\n  canvas.translate(size.width / 2, size.height / 2 - radius);\n\n  if (initialAngle != 0) {\n    final d = 2 * radius * math.sin(initialAngle / 2);\n    final rotationAngle = _calculateRotationAngle(0, initialAngle);\n    canvas.rotate(rotationAngle);\n    canvas.translate(d, 0);\n  }\n\n  double angle = initialAngle;\n  for (int i = 0; i < text.length; i++) {\n    angle = _drawLetter(canvas, text[i], angle);\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(8965).Z,width:"932",height:"1600"})),(0,s.kt)("p",null,"That's all! Here's the final source code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"import 'dart:math' as math;\n\nimport 'package:flutter/material.dart';\nimport 'package:flutter/widgets.dart';\n\nclass ArcText extends StatelessWidget {\n  const ArcText({\n    Key key,\n    @required this.radius,\n    @required this.text,\n    @required this.textStyle,\n    this.startAngle = 0,\n  }) : super(key: key);\n\n  final double radius;\n  final String text;\n  final double startAngle;\n  final TextStyle textStyle;\n\n  @override\n  Widget build(BuildContext context) => CustomPaint(\n        painter: _Painter(\n          radius,\n          text,\n          textStyle,\n          initialAngle: startAngle,\n        ),\n      );\n}\n\nclass _Painter extends CustomPainter {\n  _Painter(this.radius, this.text, this.textStyle, {this.initialAngle = 0});\n\n  final num radius;\n  final String text;\n  final double initialAngle;\n  final TextStyle textStyle;\n\n  final _textPainter = TextPainter(textDirection: TextDirection.ltr);\n\n  @override\n  void paint(Canvas canvas, Size size) {\n    canvas.translate(size.width / 2, size.height / 2 - radius);\n\n    if (initialAngle != 0) {\n      final d = 2 * radius * math.sin(initialAngle / 2);\n      final rotationAngle = _calculateRotationAngle(0, initialAngle);\n      canvas.rotate(rotationAngle);\n      canvas.translate(d, 0);\n    }\n\n    double angle = initialAngle;\n    for (int i = 0; i < text.length; i++) {\n      angle = _drawLetter(canvas, text[i], angle);\n    }\n  }\n\n  double _drawLetter(Canvas canvas, String letter, double prevAngle) {\n    _textPainter.text = TextSpan(text: letter, style: textStyle);\n    _textPainter.layout(\n      minWidth: 0,\n      maxWidth: double.maxFinite,\n    );\n\n    final double d = _textPainter.width;\n    final double alpha = 2 * math.asin(d / (2 * radius));\n\n    final newAngle = _calculateRotationAngle(prevAngle, alpha);\n    canvas.rotate(newAngle);\n\n    _textPainter.paint(canvas, Offset(0, -_textPainter.height));\n    canvas.translate(d, 0);\n\n    return alpha;\n  }\n\n  double _calculateRotationAngle(double prevAngle, double alpha) =>\n      (alpha + prevAngle) / 2;\n\n  @override\n  bool shouldRepaint(CustomPainter oldDelegate) => true;\n}\n")),(0,s.kt)("p",null,"By the way, it's also available as a Flutter package ",(0,s.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_arc_text/"},"here"),"."))}c.isMDXComponent=!0},7883:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/arc_1-5442b5a532c7541d409416fb1f2ac9e1.png"},4602:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/arc_2-280f639af333416a4110cf9ea24120bf.png"},6277:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/arc_3-2908f78cb0574753d95b2f1731759aa3.png"},4709:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/arc_4-4884382bc49b6718dfccaeb722205a93.png"},8965:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/arc_5-5442b5a532c7541d409416fb1f2ac9e1.png"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4643],{3854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const o={title:"Developing a Kiosk Application"},l=void 0,r={permalink:"/blog/2018/07/19/developing-kiosk",source:"@site/blog/2018-07-19-developing-kiosk.md",title:"Developing a Kiosk Application",description:"In this article, I'll show how to turn your Android application into Kiosk App.",date:"2018-07-19T00:00:00.000Z",formattedDate:"July 19, 2018",tags:[],readingTime:4.73,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Developing a Kiosk Application"},prevItem:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u0438\u0430\u043b\u043e\u0433\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0440\u0438\u043d\u0433\u0442\u043e\u043d\u0430",permalink:"/blog/2018/07/22/ringtone"},nextItem:{title:"Rounded image view in Android",permalink:"/blog/2018/03/02/rounded-images"}},d={authorsImageUrls:[]},p=[{value:"Why Do I Need This?",id:"why-do-i-need-this",level:2},{value:"What Will I Need?",id:"what-will-i-need",level:2},{value:"How Can I Test It?",id:"how-can-i-test-it",level:2},{value:"How Can I Distribute It?",id:"how-can-i-distribute-it",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this article, I'll show how to turn your Android application into Kiosk App."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Kiosk App is a special type of application that is designed to always run fullscreen and does not allow the user to exit the app.")),(0,i.kt)("p",null,"In order to achieve that, we need to set our app a device owner."),(0,i.kt)("h2",{id:"why-do-i-need-this"},"Why Do I Need This?"),(0,i.kt)("p",null,"The main point of a Kiosk App is that the user has no way to exit your app \u2013 a device is locked to use only your app. This feature exists natively starting with Android 5.0 and is called Lock task mode: with lock task mode, a user can\u2019t escape the app and the Home and Recents buttons are hidden. But only apps whitelisted by DPC (device policy controller) can be locked."),(0,i.kt)("p",null,"While you can use a third-party enterprise mobility management (EMM) solution to enable lock task mode (and do another fancy stuff), that can be an overkill in case you just need a single-purpose device \u2013 you either have to pay to EMM provider or become an EMM provider yourself (which is not an easy way)."),(0,i.kt)("h2",{id:"what-will-i-need"},"What Will I Need?"),(0,i.kt)("p",null,"For developing purposes, any device with Android >= 5.0 will be ok, device owner mode can be set up with ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," command. However, in order to provision device in real life, you will need a clean (or factory reset) device with Android >= 7.0 (actually 5.0-6.0 ",(0,i.kt)("em",{parentName:"p"},"can")," be put into device owner mode, but only using NFC \u2013 so you will need 2 devices with NFC support, one of them should use ",(0,i.kt)("em",{parentName:"p"},"NFC programmer app")," which needs to be written separately. In this article, we will talk about the simpler method with QR-code, but it's supported starting with Android 7.0 only \u2013 well, the good news about enterprise development is that you ",(0,i.kt)("em",{parentName:"p"},"can")," control what devices will be used)."),(0,i.kt)("p",null,"You will also need to register admin receiver: it will get a notification when the app is put into device owner mode. It can be as simple as that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example.ookami.myapplication\n\nimport android.app.admin.DeviceAdminReceiver\nimport android.app.admin.DevicePolicyManager\nimport android.content.ComponentName\nimport android.content.Context\nimport android.content.Intent\n\nclass AdminReceiver : DeviceAdminReceiver() {\n    override fun onEnabled(context: Context, intent: Intent?) {\n        super.onEnabled(context, intent)\n        val manager = context.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager\n        val component = ComponentName(context.applicationContext, AdminReceiver::class.java)\n        manager.setLockTaskPackages(component, arrayOf(context.packageName))\n    }\n}\n")),(0,i.kt)("p",null,"In this code, we're granting permission to our app to enter lock task mode."),(0,i.kt)("p",null,"Register this receiver in ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<receiver\n        android:name=".AdminReceiver"\n        android:permission="android.permission.BIND_DEVICE_ADMIN">\n    <meta-data\n            android:name="android.app.device_admin"\n            android:resource="@xml/device_admin"/>\n    <intent-filter>\n        <action android:name="android.app.action.DEVICE_ADMIN_ENABLED"/>\n    </intent-filter>\n</receiver>\n')),(0,i.kt)("p",null,"And add file ",(0,i.kt)("inlineCode",{parentName:"p"},"device_admin.xml")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"res/xml")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="res/xml/device_admin.xml"',title:'"res/xml/device_admin.xml"'},"<device-admin>\n</device-admin>\n")),(0,i.kt)("p",null,"Now if we just add ",(0,i.kt)("inlineCode",{parentName:"p"},'android:lockTaskMode="if_whitelisted"')," to every activity in ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest"),", they will be automatically launched in lock task mode."),(0,i.kt)("h2",{id:"how-can-i-test-it"},"How Can I Test It?"),(0,i.kt)("p",null,"So let's start with provisioning app in develop mode. Actually, it's as simple as that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adb shell dpm set-device-owner com.example.ookami.myapplication/.AdminReceiver\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"com.example.ookami.myapplication/.AdminReceiver")," is the path to our admin receiver."),(0,i.kt)("p",null,"In order to unset the app as a device owner, run this (but for this to work, your application tag in ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest")," should have ",(0,i.kt)("inlineCode",{parentName:"p"},'android:testOnly="true"')," attribute):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"adb shell dpm remove-active-admin com.example.ookami.myapplication/.AdminReceiver\n")),(0,i.kt)("h2",{id:"how-can-i-distribute-it"},"How Can I Distribute It?"),(0,i.kt)("p",null,"The app is ready and tested, time to give it customer. ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," method is, of course, unacceptable here, and we need some simpler way to install our app."),(0,i.kt)("p",null,"As official docs say:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The QR code provisioning method sets up and configures device owner mode by scanning a QR code from the setup wizard. The QR code contains a payload of key-value pairs with all the information that\u2019s needed for the DPC to provision a device.")),(0,i.kt)("p",null,"So you will need to provide a client with a QR-code. If you need to pass some dynamic parameters (depending on the customer, or app configuration for example) then you have to generate this QR-code dynamically, otherwise you can just create this QR-code once and give it to ll your clients (though it still needs to be updated whenever a new version is released if you use package checksum \u2013 more on this later)."),(0,i.kt)("p",null,"In the simplest case, this QR-code can be generated with some online tool, like ",(0,i.kt)("a",{parentName:"p",href:"https://www.the-qrcode-generator.com/"},"this"),". You just need to paste JSON there with all the required parameters."),(0,i.kt)("p",null,"You can see all the possible parameters ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/android/work/prov-devices#create_a_qr_code"},"here"),", I'll just provide minimal configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME": "com.example.ookami.myapplication/.AdminReceiver",\n  "android.app.extra.EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION": "http://example.com/app.apk",\n  "android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_CHECKSUM": "gJD2YwtOiWJHkSMkkIfLRlj-quNqG1fb6v100QmzM9w="\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME")," is the same path to the admin receiver that we've used in develop mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"android.app.extra.EXTRA_PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION")," is the direct path to our app apk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_CHECKSUM")," is a string holding the URL-safe base64 encoded SHA-256 hash ot this apk. On Linux/MacOS, it can be get with the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat /path/to/app.apk | openssl dgst -binary -sha256 | openssl base64 | tr '+/' '-_' | tr -d '='\n")))),(0,i.kt)("p",null,"Pay attention that if you use this package signature, you'll have to update your QR-code every time a new version of an app is released. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"android.app.extra.PROVISIONING_DEVICE_ADMIN_SIGNATURE_CHECKSUM")," that should contain the URL-safe base64 encoded SHA-256 checksum of any signature of the Android package (but I failed to make it work properly)."),(0,i.kt)("p",null,"Now when your customer has QR-code and clean (or factory reset) device, he needs to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Power on the device and wait for a Welcome screen to appear."),(0,i.kt)("li",{parentName:"ul"},"Tap 6 times wherever on this screen \u2013 this will launch provisioning mode."),(0,i.kt)("li",{parentName:"ul"},"Connect to WiFi network by entering credentials and wait for the tablet to download and launch QR-code scanner."),(0,i.kt)("li",{parentName:"ul"},"Scan this QR-code, the app will be downloaded and installed automatically.")),(0,i.kt)("p",null,"If everything goes well, your app will receive device owner mode and can grant itself the necessary permissions."))}c.isMDXComponent=!0}}]);
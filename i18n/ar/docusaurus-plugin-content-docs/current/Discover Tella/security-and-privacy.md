---
id: security-and-privacy
title: Security and Privacy
description: تفاصيل حول أمن وخصوصية Tella.
slug: /security-and-privacy
sidebar_position: 2
---

#  الأمن والخصوصية

تم تصميم Tella لحماية أولئك الذين يواجهون القمع الجسدي والرقمي، لذلك تم تصميم جميع ميزات Tella وقرارات المنتج مع وضع الخصوصية والأمن في الاعتبار. يتم تدقيق Tella بانتظام من قبل شركات أمنية مستقلة، ويتم تصميم الميزات والتوثيقات بدعم وتوجيه من المتخصصين في مجال الأمن.


## الخصوصية {#privacy}

نحن نجمع فقط الحد الأدنى من البيانات الضرورية لتحقيق غرض Tella. **إننا لا نجمع المعلومات التعريفية الشخصية أبدا. كما أننا لا نكشف أبدا عن أي من بياناتك ولا نشاركها ولا نبيعها إلى جهات خارجية**.

من خلال استخدام تطبيقنا، يمكن للمستخدمين إرسال البيانات إلى خوادم يديرها الأفراد أو المنظمات التي يعملون معها. نحث المستخدمين على الاستفسار عن سياسات الخصوصية للبيانات لدى هؤلاء الأفراد أو المنظمات، حيث قد تكون مختلفة عن سياساتنا. نوفر نفس معايير حماية الخصوصية لجميع مستخدمينا بغض النظر عن مكان وجودهم في العالم.

يمكنك قراءة [سياسة الخصوصية](/privacy) الكاملة الخاصة بـ Tella.


### ‫‫Tella Android {#tella-android}

يتضمن تطبيق ‫‫Tella Android المتاح على متجر Google Play أداتان للتعقب، هما [Google CrashLytics](https://firebase.google.com/docs/crashlytics) و [Google Firebase Analytics](https://firebase.google.com/docs/analytics)، واللتان تساعداننا في اكتشاف الأخطاء والانهيارات. إن الحفاظ على أمن التطبيق وأدائه بشكل فعال هو أمر ضروري لحماية المستخدمين المعرضين للخطر.

### ‫Tella-FOSS إصدار البرمجيات الحرة والمفتوحة المصدر من Tella‏ {#tella-foss}

[Tella-FOSS](/faq#is-tella-available-on-f-droid)، الذي تم نشره على [متجر F-droid](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/) لا يحتوي على أي أداة للتعقب.


### ‫Tella iOS {#tella-ios}

[Tella لنظام iOS](https://apps.apple.com/us/app/tella-document-protect/id1598152580) لا يحتوي على أي أدوات تتبع.

نتيجة لسياسات Apple لتطبيقات iOS الصارمة، Tella لـ iOS حاليا غير متاح على متاجر التطبيقات البديلة ولا للتثبيت يدويا.

## التحليلات {#analytics}

In Tella Android, Tella FOSS and [Tella Web](/tella-web), users can choose to share analytics to improve Tella. This data helps us understand how people use Tella and which features are important to them. ***Analytics data is only collected if users opt-in in the app's settings***

نستخدم [Divvi Up](https://divviup.org/)، وهي خدمة تحليل بيانات تحترم الخصوصية. يتم تنفيذ Divvi Up بواسطة [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/), وهي منظمة غير ربحية تدير أيضا مشروع [Let’s Encrypt](https://letsencrypt.org/).

إليك بعض المعلومات حول نهجنا في تحليلات المحافظ على الخصوصية:

1. **جميع البيانات مجهولة المصدر ومجمعة**: تقوم مكتبة Divvi Up بتقسيم البيانات إلى قسمين مجهولين ومعمّيين ويرسل كل قسم إلى معالجي بيانات منفصلين (واحد مستضاف من قبل ISRG والآخر مستضاف من قِبلنا) ولا يتشارك المعالجان البيانات مع بعضهما البعض. بهذه الطريقة، يتم الكشف عن معلومات جزئية فقط حول البيانات الأصلية لأي من المعالجين.
2. **حتى لو أردنا ذلك، لا يمكننا الحصول على البيانات الكاملة**: لا يمكن تجميع البيانات بالكامل باستخدام جزء واحد فقط. يقوم كل معالج بتجميع أجزاء البيانات الخاصة به إلى مجموع جزئي. يمكن بعد ذلك دمج هذه المجاميع الجزئية لتشكيل تجميع نهائي، مما يسمح بإحصائيات مفيدة على مجموعة البيانات الكاملة مع الكشف عن أقل قدر ممكن من المعلومات حول المشاركين الفرديين. يمكن العثور على وثائق تقنية موسعة حول كيفية عمل Divvi Up [هنا](https://docs.divviup.org/).
3. **نقوم بجمع أقل قدر ممكن من البيانات**: على الرغم من أن جميع البيانات مجهولة المصدر، فإننا نحرص دائما على تقليل كمية البيانات التي نجمعها. في الإصدارات الأحدث من Tella، نجمع فقط البيانات حول الأحداث التالية (ولا شيء أكثر):

    **Tella Android and Tella FOSS**
    - عدد الأحداث الناجحة لفتح القفل.
    - **Tella Web**
    - عدد الزيارات (يتم تحفيزها في كل مرة يدخل فيها شخص ما أي مثيل لـ Tella Web).
    - عدد تحميلات الملفات (يتم تحفيزها في كل مرة يقوم فيها شخص ما بتحميل ملف إلى أي مثيل لـ Tella Web).
    - عدد التقارير (يتم تحفيزها في كل مرة يقوم فيها شخص ما بتحميل تقرير إلى أي مثيل لـ Tella Web).
    -  لمزيد من المعلومات حول المقاييس التي نضيفها إلى تطبيقاتنا، تحقق من [ملاحظات الإصدار](/releases).
    - الميزات الأمنية {#security-features}


يدمج Tella مجموعة من التدابير الأمنية المتنوعة لتحقيق مستوى مقبول من الأمن:
**التعمية في حالة سكون**: تُعمّى جميع البيانات في حالة سكون على جهاز المستخدم. هذا يعني أنه لا يمكن الوصول إلى البيانات التي يحتويها التطبيق إلا إذا تم فتح التطبيق (عن طريق إدخال قفل المستخدم). حتى لو تمت مصادرة الهاتف واستخراج جميع البيانات منه باستخدام الحاسوب، ستظل البيانات غير قابلة للقراءة.
**التعمية أثناء النقل**: تُعمّى جميع البيانات التي يتم نقلها بين Tella والخوادم (انظر [قسم الاتصالات](/features#connecting-to-servers)) من خلال بروتوكول [أمان طبقة النقل (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). يجعل Tella من المستحيل إرسال البيانات إلى خادم بدون تعمية TLS.


**القفل**: يختار مستخدمو Tella [طريقة لقفل](/features#app-lock) التطبيق فور تثبيته. تتوفر عدة طرق للقفل، كلمات السر والأنماط ورقم التعريف الشخصي، ويتم إبلاغ المستخدمين بمستويات الأمن لكل من هذه الطرق.


## **مهلة القفل**: يمكن للمستخدمين أيضا تهيئة [مهلة القفل](/features#lock-timeout-configuration) لاختيار سرعة قفل Tella عند عدم استخدامه. بشكل افتراضي تُضبط مهلة القفل على ’فورا‘، لذا بمجرد خروج المستخدم من Tella، يُقفل التطبيق وتُعمّى جميع البيانات.

**التمويه**: على Tella Android، يوجد حاليا [وضعان للتمويه](features#camouflage): آلة حاسبة كاملة الوظائف وإمكانية تغيير اسم التطبيق وأيقونته لتصعيب العثور عليه على الهاتف. بسبب قيود iOS، لا يمكن تمويه Tella iOS.



1. **زر الحذف السريع**: يمكن للمستخدمين تفعيل زر انزلاقي **[للحذف السريع](features#quick-delete)** لمسح البيانات من Tella في حالة الطوارئ. يمكن للمستخدمين اختيار حذف جميع الملفات المُخزَّنة في Tella والاستمارات في المُسوَّدة والاستمارات المُرسَلة وإعدادات الخادم والتطبيق نفسه عند تفعيل ذلك الزر. عند تفعيل زر الحذف السريع، يظهر للمستخدم عدّ تنازلي لمدة 5 ثوانٍ. خلال هذا العد التنازلي، يمكن للمستخدم إلغاء إجراء الحذف السريع بالضغط في أي مكان على الشاشة. عندما يصل العد إلى الصفر، يتم تطبيق إجراء الحذف الذي حدّده المستخدم. إذا كان المستخدم قد اختار خيار "حذف Tella"، سيطلب أندرويد منه تأكيد حذف التطبيق.
2. **Encryption in transit:** All data being transferred between Tella and servers (see [Connections section](/connections)) is encrypted through[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). Tella makes it impossible to send data to a server without TLS encryption.
3. **أمن الشاشة**: يمنع Tella بشكل افتراضي لقطات الشاشة وتسجيلات الشاشة داخل Tella، ويخفي معاينة الشاشة في قائمة التطبيقات الأخيرة. يمكن تعطيل [هذا الإعداد](/features#screen-security) مثلا لتسجيل فيديوهات تعليمية داخل Tella أو عرض التطبيق على الحاسوب لعرض تقديمي.
4. **تقييد محاولات فتح القفل**: يمكن للمستخدمين تحديد عدد [محاولات فتح القفل](features#restrict-unlocking-attempts) الفاشلة المسموح بها قبل حذف كل شيء داخل Tella وما إذا كان سيظهر على شاشة القفل مؤشر بصري لعدد المحاولات المتبقية  أم لا.
5. :::tip فيديو تعليمي 🎥
تعرف على المزيد حول الميزات الأمنية في هذا [الفيديو التعليمي](/video-tutorials#additional-security-features)
:::
6. القيود الأمنية {#security-limitations}
7. لا يوجد شيء اسمه تطبيق "آمن" بنسبة 100%. يعتمد الأمن على التهديدات والمخاطر التي يواجهها كل مستخدم، وعلى قدرات الخصوم. مع Tella، بذلنا كل ما في جهدنا لإضافة أكبر عدد ممكن من طبقات الأمان لتقليل احتمالية اكتشاف شخص ما للتطبيق أو الوصول إلى بياناته. نُدرج هنا جميع المخاطر والقيود الأمنية المهمة التي يجب على المستخدمين معرفتها عند استخدام Tella:
8. التمويه:
9. عندما يتم التمويه باستخدام إحدى [الطريقتين المتاحتين للتمويه](/features#camouflage) على أندرويد، لا يزال بالإمكان العثور على التطبيق في إعدادات أندرويد. هذا يعني أن أي شخص يستطيع أن يرى أن هناك تطبيقا مثبتا على الجهاز يُسمى "Tella" من خلال الذهاب إلى ’إعدادات أندرويد‘ > ’التطبيقات‘. سيكون أيضا قادرا على رؤية حجم التطبيق. لذا إذا قام المستخدم بتخزين ملفات كبيرة جدا مثل الفيديوهات، فقد يلفت ذلك الانتباه للتطبيق.
10. **Offline file sharing**: Tella allows establishing a secure connection with devices that are in the same physical location and transferring files encrypted, from one Tella vault to another. [Nearby Sharing](/nearby-sharing) works fully offline, even on insecure networks or networks being surveilled.  Nearby Sharing is available cross-platform (between Android, iOS and Desktop).

إدارة الملفات:


## تصبح الملفات التي يتم تصديرها من Tella إلى نظام ملفات الجهاز غير مُعمّاة. هذا يعني أن أي شخص لديه وصول إلى الجهاز الذي يتصفح نظام الملفات أو المعرض قد يكون قادرا على العثور على تلك الملفات.

الملفات التي يتم مشاركتها عبر التطبيقات الخارجية قد تكون مرئية لتلك التطبيقات ويتم حفظها دون تعمية على نظام ملفات الجهاز، وقد يكون بإمكان شخص ما العثور على هذه الملفات عند البحث في تلك التطبيقات. على سبيل المثال: صورة مُخزَّنة داخل Tella وتمت مشاركتها على واتساب ستكون مرئية داخل واتساب، وستكون أيضا مرئية في نظام الملفات حيث يتم تخزين صور واتساب. هذا يحدث لأنه من أجل المشاركة عبر التطبيقات الخارجية يتعين حفظ الملف على نظام ملفات الهاتف، والذي لا يكون مُعمّى. لهذا السبب نوصي بحذف الملف يدويا من نظام ملفات الجهاز بعد المشاركة.



* عند استيراد ملف يتم إنشاء نسخة من هذا الملف، ثم يتم استيراده وتعميته داخل Tella. في الإصدار 1.1 (iOS) و 2.1 (أندرويد)، طوّرنا لأجل المستخدمين ميزة الاختبار بين رغبتهم في الاحتفاظ بالملف الأصلي وبين حذفه عند استيراده إلى Tella. ومع ذلك، نوصي بالتحقق من أن الملف الأصلي غير موجود في سلة المهملات (’ملفاتي‘ > ’سلة المهملات‘) وحذف الملف من أي خدمة للنسخ الاحتياطية التلقائية التي قد تكون مُفعَّلة على هاتفك (Google Photos، Dropbox، إلخ).
    * عمليات التدقيق الأمني {#security-audits}
* نطلب بانتظام من شركات أمنية مستقلة مراجعة شيفراتنا لضمان أنها قوية وآمنة.
    * تاريخ
    * دُقق بواسطة
    * Files sent to a [server connection](/for-organizations) will be stored un-encrypted on the server, unless the server has implemented disk encryption. People who have access to the server might be able to see the files. Tella makes sure that the data travels encrypted to the server but cannot guarantee the security practices of the server. If you choose to connect to a Google Drive or Dropbox instance, or work with a third party organization for hosting your data, we recommend looking into whether the organization itself can access your data.
    * المنصات المدققة


## الرابط

ماي 2024

| تاريخ | Android و iOS و Tella Web | [عرض التقرير](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)  | ماي 2023      |
| -----|----------|----|-----------|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| شركة Subgraph Technologies. | الخطورة |  الحالة|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| العنوان | الخطورة | الحالة |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|










---
id: security-and-privacy
title: Security and privacy
description: تفاصيل حول أمن وخصوصية Tella.
slug: /security-and-privacy
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

لا يتضمن [Tella iOS ](https://apps.apple.com/us/app/tella-document-protect/id1598152580)أي أداة للتعقب. وذلك نتيجة لسياسات تطبيقات iOS الصارمة، Tella iOS حاليا غير متاح على متاجر التطبيقات البديلة ولا للتثبيت يدويا.


## الميزات الأمنية {#security-features}

يدمج Tella مجموعة من التدابير الأمنية المتنوعة لتحقيق مستوى مقبول من الأمن:



1. **التعمية في حالة سكون**: تُعمّى جميع البيانات في حالة سكون على جهاز المستخدم. هذا يعني أنه لا يمكن الوصول إلى البيانات التي يحتويها التطبيق إلا إذا تم فتح التطبيق (عن طريق إدخال قفل المستخدم). حتى لو تمت مصادرة الهاتف واستخراج جميع البيانات منه باستخدام الحاسوب، ستظل البيانات غير قابلة للقراءة.
2. **التعمية أثناء النقل**: تُعمّى جميع البيانات التي يتم نقلها بين Tella والخوادم (انظر [قسم الاتصالات](/features#connecting-to-servers)) من خلال بروتوكول [أمان طبقة النقل (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). يجعل Tella من المستحيل إرسال البيانات إلى خادم بدون تعمية TLS.
3. **القفل**: يختار مستخدمو Tella [طريقة لقفل](/features#app-lock) التطبيق فور تثبيته. تتوفر عدة طرق للقفل، كلمات السر والأنماط ورقم التعريف الشخصي، ويتم إبلاغ المستخدمين بمستويات الأمن لكل من هذه الطرق.
4. **مهلة القفل**: يمكن للمستخدمين أيضا تهيئة [مهلة القفل](/features#lock-timeout-configuration) لاختيار سرعة قفل Tella عند عدم استخدامه. بشكل افتراضي تُضبط مهلة القفل على ’فورا‘، لذا بمجرد خروج المستخدم من Tella، يُقفل التطبيق وتُعمّى جميع البيانات.
5. **التمويه**: على Tella Android، يوجد حاليا [وضعان للتمويه](features#camouflage): آلة حاسبة كاملة الوظائف وإمكانية تغيير اسم التطبيق وأيقونته لتصعيب العثور عليه على الهاتف. بسبب قيود iOS، لا يمكن تمويه Tella iOS.
6. **زر الحذف السريع**: يمكن للمستخدمين تفعيل زر انزلاقي **[للحذف السريع](features#quick-delete)** لمسح البيانات من Tella في حالة الطوارئ. يمكن للمستخدمين اختيار حذف جميع الملفات المُخزَّنة في Tella والاستمارات في المُسوَّدة والاستمارات المُرسَلة وإعدادات الخادم والتطبيق نفسه عند تفعيل ذلك الزر. عند تفعيل زر الحذف السريع، يظهر للمستخدم عدّ تنازلي لمدة 5 ثوانٍ. خلال هذا العد التنازلي، يمكن للمستخدم إلغاء إجراء الحذف السريع بالضغط في أي مكان على الشاشة. عندما يصل العد إلى الصفر، يتم تطبيق إجراء الحذف الذي حدّده المستخدم. إذا كان المستخدم قد اختار خيار "حذف Tella"، سيطلب أندرويد منه تأكيد حذف التطبيق.
7. **الوضع الصامت للكاميرا**: يمكن للمستخدمين اختيار [إيقاف صوت الكاميرا](/features#camera-silent-mode) لتجنب لفت الانتباه عند التقاط الصور.
8. **أمن الشاشة**: يمنع Tella بشكل افتراضي لقطات الشاشة وتسجيلات الشاشة داخل Tella، ويخفي معاينة الشاشة في قائمة التطبيقات الأخيرة. يمكن تعطيل [هذا الإعداد](/features#screen-security) مثلا لتسجيل فيديوهات تعليمية داخل Tella أو عرض التطبيق على الحاسوب لعرض تقديمي.
9. **تقييد محاولات فتح القفل**: يمكن للمستخدمين تحديد عدد [محاولات فتح القفل](features#restrict-unlocking-attempts) الفاشلة المسموح بها قبل حذف كل شيء داخل Tella وما إذا كان سيظهر على شاشة القفل مؤشر بصري لعدد المحاولات المتبقية  أم لا.

:::tip فيديو تعليمي 🎥
تعرف على المزيد حول الميزات الأمنية في هذا [الفيديو التعليمي](/video-tutorials#additional-security-features)
:::


## القيود الأمنية {#security-limitations}

لا يوجد شيء اسمه تطبيق "آمن" بنسبة 100%. يعتمد الأمن على التهديدات والمخاطر التي يواجهها كل مستخدم، وعلى قدرات الخصوم. مع Tella، بذلنا كل ما في جهدنا لإضافة أكبر عدد ممكن من طبقات الأمان لتقليل احتمالية اكتشاف شخص ما للتطبيق أو الوصول إلى بياناته. نُدرج هنا جميع المخاطر والقيود الأمنية المهمة التي يجب على المستخدمين معرفتها عند استخدام Tella:



* التمويه:
    * عندما يتم التمويه باستخدام إحدى [الطريقتين المتاحتين للتمويه] على أندرويد، لا يزال بالإمكان العثور على التطبيق في إعدادات أندرويد. هذا يعني أن أي شخص يستطيع أن يرى أن هناك تطبيقا مثبتا على الجهاز يُسمى "Tella" من خلال الذهاب إلى ’إعدادات أندرويد‘ > ’التطبيقات‘. سيكون أيضا قادرا على رؤية حجم التطبيق. لذا إذا قام المستخدم بتخزين ملفات كبيرة جدا مثل الفيديوهات، فقد يلفت ذلك الانتباه للتطبيق.
* إدارة الملفات:
    * تصبح الملفات التي يتم تصديرها من Tella إلى نظام ملفات الجهاز غير مُعمّاة. هذا يعني أن أي شخص لديه وصول إلى الجهاز الذي يتصفح نظام الملفات أو المعرض قد يكون قادرا على العثور على تلك الملفات.
    * الملفات التي يتم مشاركتها عبر التطبيقات الخارجية قد تكون مرئية لتلك التطبيقات ويتم حفظها دون تعمية على نظام ملفات الجهاز، وقد يكون بإمكان شخص ما العثور على هذه الملفات عند البحث في تلك التطبيقات. على سبيل المثال: صورة مُخزَّنة داخل Tella وتمت مشاركتها على واتساب ستكون مرئية داخل واتساب، وستكون أيضا مرئية في نظام الملفات حيث يتم تخزين صور واتساب. هذا يحدث لأنه من أجل المشاركة عبر التطبيقات الخارجية يتعين حفظ الملف على نظام ملفات الهاتف، والذي لا يكون مُعمّى. لهذا السبب نوصي بحذف الملف يدويا من نظام ملفات الجهاز بعد المشاركة.
    * عند استيراد ملف يتم إنشاء نسخة من هذا الملف، ثم يتم استيراده وتعميته داخل Tella. في الإصدار 1.1 (iOS) و 2.1 (أندرويد)، طوّرنا لأجل المستخدمين ميزة الاختبار بين رغبتهم في الاحتفاظ بالملف الأصلي وبين حذفه عند استيراده إلى Tella. ومع ذلك، نوصي بالتحقق من أن الملف الأصلي غير موجود في سلة المهملات (’ملفاتي‘ > ’سلة المهملات‘) وحذف الملف من أي خدمة للنسخ الاحتياطية التلقائية التي قد تكون مُفعَّلة على هاتفك (Google Photos، Dropbox، إلخ).


## عمليات التدقيق الأمني {#security-audits}

نطلب بانتظام من شركات الأمن المستقلة القيام بعملية تدقيق لشيفرتنا لضمان متانتها وأمنها. يمكنك مطالعة التقارير الكاملة لعمليات التدقيق على [هذه الصفحة](https://drive.google.com/file/d/11mPB2KZLHb6blmNuk_qyXYcn4BSVYNFT/view?usp=sharing). فيما يلي ملخص لأحدث التدقيقات مع الحالة الراهنة للتنفيذ:


| العنوان                                               | الخطورة    | الحالة      |
|-----------------------------------------------------|-------------|-------------|
| محاولات الفتح غير المُقيَّدة                        | متوسطة      | تم حلّها |
| تكرارات PBKDF2 لتدفُّق مفتاح الإخراج (أو الإدخال) المُعمّى لنظام أندرويد     | منخفضة         | تم حلّها    |
| قد تستمر بيانات Tella iOS الصوتية غير المُعمّاة لفترة أطول  | منخفضة         | تم حلّها    |
| المكتبة Retrofit2 القديمة التي اعتمد عليها Tella Android         | منخفضة         | تم حلّها    |
| ‫المكتبة البرمجية التي تم إلغاء الاعتماد عليها في Tella Android‏: Butterknife    | إخبارية| قيد التنفيذ |

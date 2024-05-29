import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>توثيق وحماية</h2>
        <p>في البيئات الصعبة، مع اتصال محدود أو معدوم بالإنترنت أو في وجه القمع، تجعل Tella من الأسهل والأكثر أمانًا توثيق انتهاكات حقوق الإنسان وجمع البيانات.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="احصل على Tella على جوجل بلاي"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="احصل على Tella على متجر التطبيقات"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="احصل على Tella على إف-درويد" />
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="لقطة شاشة لتطبيق Tella على نظام أندرويد. تعرض الاتصال بتيللا ويب أوازي وهيكل المجلدات الذي يظهر أن المستخدمين يمكنهم تسجيل وحفظ الصور والفيديوهات والصوتيات بشكل آمن ومشفر."
            className="screen"
            sources={{
                light: 'img/home-black.svg',
                dark: 'img/home-white.svg',
              }}/>
    </div>
</div>

<hr></hr>

<div className="section">
    <h2>لماذا Tella؟</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="توضيح لماذا Tella" />
        </div>
        <div className="column" id="section-column2">
            <p>إذا كنت ناشطًا، صحفيًا، مدافعًا عن حقوق الإنسان، أو أي شخص يوثق الظلم، يمكنك استخدام Tella للقيام بما يلي:</p>
            <ul>
                <li><span className="emphasis">حماية نفسك</span> من القمع الجسدي والرقمي أثناء جمع وتخزين المعلومات الحساسة.</li>
                <li><span className="emphasis">حماية البيانات التي تجمعها</span> من الرقابة، والتلاعب، والتجسس، والتدمير.</li>
                <li><span className="emphasis">إنتاج توثيق عالي الجودة بسهولة</span> يمكن استخدامه في البحث، أو المناصرة، أو العدالة الانتقالية.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. حماية بياناتك</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">تشفير ملفاتك:</span> يقوم Tella بتشفير الصور والفيديوهات والتسجيلات الصوتية تلقائيًا فور التقاطها.</li>
                <li><span className="emphasis">إخفاء ملفاتك في الجهاز:</span> تكون ملفاتك غير متاحة من معرض الهاتف العادي أو مستعرض الملفات. يمكنك الوصول إليها فقط في التطبيق.</li>
                <li><span className="emphasis">قفل ملفاتك:</span> تعيين رقم تعريف شخصي أو كلمة مرور لحماية ملفاتك. يعتبر إدخال القفل الصحيح هو الطريقة الوحيدة لفك تشفير الملفات المخزنة في Tella.</li>
                <li><span className="emphasis">إخفاء التطبيق:</span> تغيير مظهر Tella لإخفائه عن الأشخاص الذين يبحثون في هاتفك.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="توضيح الخزانة" />
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> تعرف على ميزات Tella </a>  
</div>

<div className="section">
    <h3>2. جمع الأدلة على انتهاكات حقوق الإنسان</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="توضيح دفتر الملاحظات"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">كاميرا ومسجل داخل Tella:</span> التقط الصور، وسجل الفيديوهات والصوتيات مباشرة في Tella بحيث يتم تشفير ملفاتك وإخفاؤها فورًا في التطبيق.</li>
                <li><span className="emphasis">يتكامل Tella</span> مع <a href="for-organizations#uwazi">أوازي</a>، <a href="for-organizations#open-data-kit-odk">كوبوتولبوكس</a> و <a href="for-organizations#tella-web">تيللا ويب</a>. اختر المنصة التي تناسب احتياجاتك واجمع البيانات مباشرة في Tella.</li>
                <li><span className="emphasis">وضع غير متصل بالإنترنت:</span> في المناطق ذات الاتصال المحدود أو المعدوم بالإنترنت، يمكنك حفظ بياناتك وإرسالها عند وصولك إلى اتصال إنترنت موثوق.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> اقرأ كيف تستخدم المنظمات Tella </a>    
</div>

<div className="section">
    <h3>3. Tella مجاني، متعدد اللغات، ومفتوح المصدر</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">مجاني للأبد:</span> تم تصميم Tella لأولئك الذين تكون سلامتهم معرضة للخطر. هو مجاني للتنزيل والاستخدام، وسيظل مجانيًا إلى الأبد.</li>
                <li><span className="emphasis">اختر لغتك:</span> يتوفر Tella حاليًا <a href="faq#what-languages-is-tella-available-in"> بعدة لغات </a> بما في ذلك العربية، البيلاروسية، البورمية، الإنجليزية، الإندونيسية، جينغفو، الكانادا، الكارين سغاو، الكردية، المالايالامية، الفارسية، البرتغالية، الروسية، الإسبانية (أمريكا اللاتينية) والتاميلية.</li>
                <li><span className="emphasis">ثق بالكود:</span> الكود الخاص بـ Tella مفتوح المصدر و <a href="open-source">متاح علنًا</a> بحيث يمكن للباحثين، والمحللين الأمنيين، والمطورين تدقيقه وإعادة استخدامه بحرية.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="توضيح مفتوح المصدر" />
        </div>
    </div>
</div>
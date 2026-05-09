import ThemedImage from '@theme/ThemedImage';

<div>
<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>التوثيق والحماية</h2>
        <p>في البيئات الصعبة حيث يكون الاتصال بالانترنت محدودا أو معدوما، أو في ظل القمع، يُعد تطبيق Tella وسيلة أسهل وأكثر أمنا لتوثيق انتهاكات حقوق الإنسان وجمع البيانات.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="احصل على Tella على جوجل بلاي"></img>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="احصل على Tella على متجر التطبيقات"></img>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="احصل على Tella على إف-درويد"></img>
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="Screenshot of the Tella app on Android. Showing Connections to Tella Web Uwazi and the folder structure showing that within Tella users can record and save Images, Videos and Audios securely and encripted."
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
            <img className="home-illustrations" src="img/why-tella.png" alt="توضيح لماذا Tella"></img>
        </div>
        <div className="column" id="section-column2">
            <p>إذا كنت ناشطا أو صحفيا أو مدافعا عن حقوق الإنسان، أو كنت أي شخص يُوثِّق ما يحدث من الظلم، يمكنك استخدام Tella للقيام بما يلي لـ:</p>
            <ul>
                <li><span className="emphasis">حماية نفسك</span> من القمع الجسدي والرقمي أثناء جمع وتخزين المعلومات الحساسة.</li>
                <li><span className="emphasis">حماية البيانات التي تجمعها</span> من الرقابة عليها، والتلاعب بها، والتجسس عليها، وتدميرها.</li>
                <li><span className="emphasis">إنتاج توثيقات عالية الجودة بسهولة</span>، حيث يمكن استخدامها للبحث أو للمناصرة، أو للعدالة الانتقالية.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. حماية بياناتك</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">تعمية ملفاتك:</span> يقوم Tella بتعمية الصور والفيديوهات والتسجيلات الصوتية تلقائيا فور التقاطها.</li>
                <li><span className="emphasis">إخفاء ملفاتك في الجهاز:</span> تكون ملفاتك غير متاحة من خلال معرض الصور المعتاد للهاتف وغير متاحة أيضا من خلال مدير الملفات. يمكنك الوصول إليها فقط في التطبيق.</li>
                <li><span className="emphasis">قفل ملفاتك:</span> تعيين رقم التعريف الشخصي أو كلمة السر لحماية ملفاتك. يُعد إدخال القفل الصحيح هو الطريقة الوحيدة لفك تعمية الملفات المُخزَّنة في Tella.</li>
                <li><span className="emphasis">إخفاء التطبيق:</span> تغيير مظهر Tella لإخفائه عن الأشخاص الذين يبحثون في هاتفك.</li>
                <li><span className="emphasis">Share your files:</span> choose one of the secure methods to share your files with other Tella vault or to a server.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="توضيح الخزانة"></img>
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> تعرف على ميزات Tella </a>
</div>

<div className="section">
    <h3>2. جمع الأدلة حول  انتهاكات حقوق الإنسان</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="توضيح دفتر الملاحظات"></img>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">الكاميرا ومُسجِّل الصوت من داخل Tella:</span> التقط الصور، وسجِّل الفيديوهات والأصوات مباشرة داخل Tella لكي تتم تعمية ملفاتك ولأجل إخفائها فورا في التطبيق.</li>
                <li><span className="emphasis">Tella integrates</span> with <a href="uwazi">Uwazi</a>, <a href="odk">Open Data Kit</a>, <a href="tella-web">Tella Web</a>, <a href="g-drive">Google Drive</a>, <a href="dropbox">Dropbox</a> and <a href="nextcloud">Nextcloud</a>. <a href="connections">Pick the platform</a> that best suits your needs and share data directly from Tella.</li>
                <li><span className="emphasis">Offline-first:</span> in areas with limited or no internet connection, you can save your data and submit it when you reach a reliable internet connection. Tella also offers a <a href="nearby-sharing">fully offline feature to transfer files to nearby devices</a> using Tella.</li>
            </ul>
        </div>
    </div>
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> اقرأ كيف تستخدم المنظمات Tella </a>
</div>

<div className="section">
    <h3>‫3. Tella مجاني، متعدد اللغات، ومفتوح المصدر</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">مجاني للأبد:</span> تم تصميم Tella لأولئك الذين تكون سلامتهم مُعرَّضة للخطر. إن تنزيله واستخدامه مجاني، وسيظل مجانيا إلى الأبد.</li>
                <li><span className="emphasis">اختر لغتك:</span> إن Tella متاح حاليا <a href="faq#what-languages-is-tella-available-in">بعدة لغات</a> بما في ذلك العربية، البيلاروسية، البورمية، الإنجليزية، الإندونيسية، جينغفو، الكنادية، الكارين سْغاو، الكردية، المالايالامية، الفارسية، البرتغالية، الروسية، الإسبانية (لهجة أمريكا اللاتينية) والتاميلية.</li>
                <li><span className="emphasis">ثق بالنص البرمجي:</span> إن النص البرمجي لـ Tella مفتوح المصدر و<a href="open-source">متاح للعموم</a> بحيث يمكن للباحثين، والمحللين الأمنيين، والمطورين التدقيق فيه وإعادة استخدامه بحُرية.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="توضيح مفتوح المصدر"></img>
        </div>
    </div>
</div>
</div>

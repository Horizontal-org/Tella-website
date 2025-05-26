import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Document & protect</h2>
        <p>In challenging environments, with limited or no internet connectivity or in the face of repression, Tella makes it easier and safer to document human rights violations and collect data.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Get Tella on Google Play"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Get Tella on App Store"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get Tella on F-Droid" />
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
    <h2>Why Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Why Tella illustration" />
        </div>
        <div className="column" id="section-column2">
            <p>If you are an activist, journalist, human rights defender, or anyone who documents injustice, you can use Tella to:</p>
            <ul>
                <li><span className="emphasis">Protect yourself</span> from physical and digital repression while collecting and storing sensitive information.</li>
                <li><span className="emphasis">Protect the data you collect</span> from censorship, tampering, interception, and destruction.</li>
                <li><span className="emphasis">Easily produce high quality documentation</span> that can be used for research, advocacy, or transitional justice.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Protect your data</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Encrypt your files:</span> Tella automatically encrypts your photos, videos, and audio recordings as soon as they are captured.</li>
                <li><span className="emphasis">Hide your files in the device:</span> your files are inaccessible from the phone’s regular gallery or file explorer. You can only access them in the app. </li>
                <li><span className="emphasis">Lock your files:</span> set a PIN or password to protect your files. Entering the correct lock is the only way to decrypt the files stored in Tella.</li>
                <li><span className="emphasis">Mask the app: </span> change the look of Tella to hide it from people searching your phone.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Vault illustration" />
        </div>
    </div>
    <a type="button" href="/features" className="clean-btn center button button--primary"> Learn about Tella features </a>  
</div>

<div className="section">
    <h3>2. Collect evidence of human rights violations</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Notepad illustration"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Camera and recorder inside Tella:</span> take photos, record videos and audio directly in Tella so that your files are immediately encrypted and hidden in the app.</li>
                <li><span className="emphasis">Tella integrates</span> with <a href="uwazi">Uwazi</a>, <a href="odk">Open Data Kit</a>, <a href="tella-web">Tella Web</a>, <a href="g-drive">Google Drive</a>, <a href="dropbox">Dropbox</a> and <a href="nextcloud">Nextcloud</a>. Pick the platform that best suits your need and collect data directly in Tella.</li>
                <li><span className="emphasis">Offline mode:</span> in areas with limited or no internet connection, you can save your data and submit it when you reach a reliable internet connection.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Read how organizations are using Tella </a>    
</div>

<div className="section">
    <h3>3. Tella is free, multilingual, and open-source</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Free forever:</span> Tella is designed for those whose safety is at risk. It is free to download and use, and will remain free forever.</li>
                <li><span className="emphasis">Choose your language:</span> Tella is currently <a href="faq#what-languages-is-tella-available-in"> available </a> in 21 languages.</li>
                <li><span className="emphasis">Trust the code:</span> The code for Tella is open-source and <a href="open-source">publicly available</a> so that researchers, security analysts, and developers can freely audit and reuse it.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Open source  illustration" />
        </div>
    </div>
</div>


import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Documenter &amp; protéger</h2>
        <p>Dans des environnements difficiles, caractérisés par une connectivité internet limitée ou inexistante, ou confrontés à la répression, l'application Tella permet de documenter plus facilement et en toute sécurité les violations des droits de l'homme et de collecter des données.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Get Tella on Google Play"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Get Tella on App Store"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get Tella on F-Droid"/>
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
    <h2>Pourquoi Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Why Tella illustration"/>
        </div>
        <div className="column" id="section-column2">
            <p>Si vous êtes un ou une activiste, journaliste, défenseur ou défenseuse des droits humains, ou quelqu'un qui documente les injustices, vous pouvez utiliser Tella pour:</p>
            <ul>
                <li><span className="emphasis">Vous protéger</span> de la répression physique et numérique tout en collectant et sauvegardant des informations sensibles.</li>
                <li><span className="emphasis">Protéger les données que vous collectez</span> contre leyr censure, falsification, interception et destruction.</li>
                <li><span className="emphasis">Produire facilement une documentation de haute qualité</span> pouvant être utilisée pour la recherche, le plaidoyer ou la justice transitionnelle.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Protéger vos données</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Chiffrer vos fichiers :</span> Tella crypte automatiquement vos photos, vidéos et enregistrements audio sitôt qu'ils sont capturés.</li>
                <li><span className="emphasis">Cacher vos fichiers sur l'appareil :</span> vos fichiers sont inaccessibles depuis la galerie ou l'explorateur de fichiers réguliers du téléphone. Vous pouvez uniquement y accéder via l'application.</li>
                <li><span className="emphasis">Verrouiller vos fichiers :</span> définissez un code PIN ou un mot de passe pour protéger vos fichiers. Saisir le bon code est le seul moyen de déchiffrer les fichiers stockés dans Tella.</li>
                <li><span className="emphasis">Masquer l'application :</span> changez l'apparence de Tella pour la cacher des personnes fouillant votre téléphone.</li>
            </ul>
        </div>
        <div className="column" id="section-column2"><img className="home-illustrations" src="img/vault.png" alt="Vault illustration"/></div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary">Découvrez les fonctionnalités de Tella</a>  
</div>

<div className="section">
    <h3>2. Collecter des preuves sur les violations des droits humains</h3>
    <div className="columns">
        <div className="column" id="section-column1"><img className="home-illustrations" src="img/data.png" alt="Notepad illustration"/></div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Caméra et enregistreur intégrés dans Tella :</span> prenez des photos, enregistrez des vidéos et des audios directement dans Tella afin que vos fichiers soient immédiatement cryptés et cachés dans l'application.</li>
                <li><span className="emphasis">Tella s'intègre</span> avec <a href="for-organizations#uwazi">Uwazi</a>, <a href="for-organizations#open-data-kit-odk">Kobotoolbox</a> et <a href="for-organizations#tella-web">Tella Web</a>. Choisissez la plateforme qui répond le mieux à vos besoins et collectez des données directement dans Tella.</li>
                <li><span className="emphasis">Mode hors-ligne :</span> dans les zones avec une connexion Internet limitée ou inexistante, vous pouvez enregistrer vos données et les soumettre lorsque vous avez une connexion Internet fiable.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Lire comment les organisations utilisent Tella </a>    
</div>

<div className="section">
    <h3>3. Tella est gratuite, multilingue et libre d'accès</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Gratuite pour toujours : </span>Tella est conçue pour ceux et celles dont la sécurité est en danger. Son téléchargement et son utilisation sont gratuite et le resteront à jamais.</li>
                <li><span className="emphasis">Choisir votre langue :</span> Tella est actuellement <a href="faq#what-languages-is-tella-available-in">disponible</a>en arabe, biélorusse, birman, anglais, indonésien, jingpho, kannada, karen sgaw, kurde, malayalam, persan, portugais, russe, espagnol (Amérique latine) et en tamoul.</li>
                <li><span className="emphasis">Faire confiance au code</span>: Le code de Tella est open-source et <a href="open-source">publiquement disponible</a> afin que les chercheurs et chercheuses, analystes en sécurité et développeurs ou développeuses puissent l'auditer et le réutiliser librement.</li>
            </ul>
        </div>
        <div className="column" id="section-column2"><img className="home-illustrations" src="img/open-source.png" alt="Open source  illustration"/></div>
    </div>
</div>
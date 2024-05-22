import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Documenter & protéger</h2>
        <p>Dans des environnements difficiles, avec une connectivité Internet limitée ou inexistante ou face à la répression, Tella facilite et sécurise la documentation des violations des droits humains et la collecte de données.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Téléchargez Tella sur Google Play"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Téléchargez Tella sur l'App Store"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Téléchargez Tella sur F-Droid" />
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="Capture d'écran de l'application Tella sur Android. Affiche les connexions à Tella Web Uwazi et la structure de dossiers montrant que les utilisateurs peuvent enregistrer et sauvegarder des images, vidéos et audios de manière sécurisée et cryptée."
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
            <img className="home-illustrations" src="img/why-tella.png" alt="Illustration Pourquoi Tella" />
        </div>
        <div className="column" id="section-column2">
            <p>Si vous êtes un activiste, journaliste, défenseur des droits humains, ou toute personne documentant les injustices, vous pouvez utiliser Tella pour :</p>
            <ul>
                <li><span className="emphasis">Vous protéger</span> contre la répression physique et numérique tout en collectant et stockant des informations sensibles.</li>
                <li><span className="emphasis">Protéger les données que vous collectez</span> contre la censure, la falsification, l'interception et la destruction.</li>
                <li><span className="emphasis">Produire facilement une documentation de haute qualité</span> qui peut être utilisée pour la recherche, le plaidoyer ou la justice transitionnelle.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Protégez vos données</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Cryptez vos fichiers :</span> Tella crypte automatiquement vos photos, vidéos et enregistrements audio dès qu'ils sont capturés.</li>
                <li><span className="emphasis">Cachez vos fichiers sur l'appareil :</span> vos fichiers sont inaccessibles depuis la galerie ou l'explorateur de fichiers réguliers du téléphone. Vous pouvez uniquement y accéder via l'application.</li>
                <li><span className="emphasis">Verrouillez vos fichiers :</span> définissez un code PIN ou un mot de passe pour protéger vos fichiers. Entrer le bon code est le seul moyen de déchiffrer les fichiers stockés dans Tella.</li>
                <li><span className="emphasis">Masquez l'application :</span> changez l'apparence de Tella pour la cacher des personnes fouillant votre téléphone.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Illustration de coffre-fort" />
        </div>
    </div>
    <a type="button" href="/features" className="clean-btn center button button--primary"> En savoir plus sur les fonctionnalités de Tella </a>  
</div>

<div className="section">
    <h3>2. Collectez des preuves de violations des droits humains</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Illustration de bloc-notes"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Caméra et enregistreur intégrés dans Tella :</span> prenez des photos, enregistrez des vidéos et des audios directement dans Tella afin que vos fichiers soient immédiatement cryptés et cachés dans l'application.</li>
                <li><span className="emphasis">Tella s'intègre</span> avec <a href="/for-organizations#uwazi">Uwazi</a>, <a href="/for-organizations#open-data-kit-odk">Kobotoolbox</a> et <a href="/for-organizations#tella-web">Tella Web</a>. Choisissez la plateforme qui répond le mieux à vos besoins et collectez des données directement dans Tella.</li>
                <li><span className="emphasis">Mode hors-ligne :</span> dans les zones avec une connexion Internet limitée ou inexistante, vous pouvez enregistrer vos données et les soumettre lorsque vous atteignez une connexion Internet fiable.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="/user-stories" className="clean-btn center button button--primary"> Lisez comment les organisations utilisent Tella </a>    
</div>

<div className="section">
    <h3>3. Tella est gratuit, multilingue et open-source</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Gratuit pour toujours :</span> Tella est conçu pour ceux dont la sécurité est en danger. Il est gratuit à télécharger et à utiliser, et le restera pour toujours.</li>
                <li><span className="emphasis">Choisissez votre langue :</span> Tella est actuellement <a href="/faq#what-languages-is-tella-available-in"> disponible </a> en arabe, biélorusse, birman, anglais, indonésien, jingpho, kannada, karen sgaw, kurde, malayalam, persan, portugais, russe, espagnol (Amérique latine) et tamoul.</li>
                <li><span className="emphasis">Faites confiance au code :</span> Le code de Tella est open-source et <a href="/open-source">publiquement disponible</a> afin que les chercheurs, analystes en sécurité et développeurs puissent l'auditer et le réutiliser librement.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Illustration open source" />
        </div>
    </div>
</div>
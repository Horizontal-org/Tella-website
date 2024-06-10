import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Documenta y protege</h2>
        <p>En entornos desafiantes, con conectividad a internet limitada o nula, o frente a contextos represivos, Tella facilita y hace más seguros los procesos de documentación de violaciones a los derechos humanos y la recopilación de datos.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Get Tella on Google Play"/></a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Get Tella on App Store"/></a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get Tella on F-Droid"/></a>
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
    <h2>¿Por qué Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Ilustración de ¿Por qué Tella?"/>
        </div>
        <div className="column" id="section-column2">
            <p>Si eres activista, periodista, trabajas defendiendo los derechos humanos, o eres alguien que documenta injusticias, puedes usar Tella para:</p>
            <ul>
                <li><span className="emphasis">Protegerte</span> de la represión física y digital mientras recopilas y almacenas información sensible.</li>
                <li><span className="emphasis">Proteger los datos que recopilas</span> de la censura, manipulación, interceptación y destrucción.</li>
                <li><span className="emphasis">Producir fácilmente documentación de alta calidad</span> que puede ser utilizada para investigación, defensa o justicia transicional.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Protege tus datos</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Cifra tus archivos:</span> Tella encripta automáticamente tus fotos, videos, y grabaciones de audio tan pronto como son capturadas.</li>
                <li><span className="emphasis">Oculta tus archivos en el dispositivo:</span> tus archivos son inaccesibles desde la galería regular o el explorador de archivos del teléfono. Solo puedes acceder a ellos en la app.</li>
                <li><span className="emphasis">Bloquea tus archivos:</span> establece un PIN o contraseña para proteger tus archivos. Ingresar el bloqueo correcto es la única forma de desencriptar los archivos almacenados en Tella.</li>
                <li><span className="emphasis">Disfraza la app:</span> cambia la apariencia de Tella para ocultarla de personas que busquen en tu teléfono.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Vault illustration"/>
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> Conoce las características de Tella </a>  
</div>

<div className="section">
    <h3>2. Recopila pruebas de violaciones de derechos humanos</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Notepad illustration"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Cámara y grabadora dentro de Tella:</span> toma fotos, graba videos y audio directamente en Tella para que tus archivos se encripten y oculten inmediatamente en la app.</li>
                <li><span className="emphasis">Tella se integra</span> con <a href="for-organizations#uwazi">Uwazi</a>, <a href="for-organizations#open-data-kit-odk">Kobotoolbox</a> y <a href="for-organizations#tella-web">Tella Web</a>. Elige la plataforma que mejor se adapte a tus necesidades y recopila datos directamente en Tella.</li>
                <li><span className="emphasis">Modo sin conexión:</span> en áreas con conectividad a internet limitada o nula, tu puedes guardar tus datos y enviarlos cuando tengas una conexión a internet confiable.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Lee cómo las organizaciones están usando Tella </a>    
</div>

<div className="section">
    <h3>3. Tella es gratuita, multilingüe, y de código abierto</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Gratis para siempre:</span> Tella está diseñada para quienes su seguridad está en riesgo. Es gratuita para descargar y usar, y seguirá siendo gratuita para siempre.</li>
                <li><span className="emphasis">Elige tu idioma:</span> Tella está actualmente <a href="faq#what-languages-is-tella-available-in"> disponible </a> en árabe, bielorruso, birmano, inglés, indonesio, jingpho, kannada, karen sgaw, kurdo, malayalam, persa, portugués, ruso, español (Latinoamérica) y tamil.</li>
                <li><span className="emphasis">Confía en el código:</span> El código de Tella es de código abierto <a href="open-source">disponible públicamente </a> para que investigadora(e)s, analistas de seguridad y desarrolladora(e)s puedan auditarlo y reutilizarlo libremente.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Open source  illustration"/>
        </div>
    </div>
</div>

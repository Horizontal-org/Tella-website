import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Documente &amp; proteja</h2>
        <p>Em ambientes desafiadores, com conectividade limitada ou inexistente, ou em face da repressão, o Tella torna mais fácil e seguro documentar violações aos direitos humanos e coletar dados.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Obtenha o Tella no Google Play"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Obtenha o Tella na App Store"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Obtenha o Tella no F-Droid" />
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="Captura de tela do aplicativo Tella no Android. Mostra as conexões com o Tella Web Uwazi e a estrutura de pastas que mostra que, dentro do Tella, os usuários podem gravar e salvar imagens, vídeos e áudios de forma segura e criptografada."
            className="screen"
            sources={{
                light: 'img/home-black.svg',
                dark: 'img/home-white.svg',
              }}/>
    </div>
</div>

<hr></hr>

<div className="section">
    <h2>Por que o Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Ilustração Por que Tella" />
        </div>
        <div className="column" id="section-column2">
            <p>Se você é um ativista, jornalista, defensor dos direitos humanos ou qualquer pessoa que documenta injustiças, poderá usar o Tella para:</p>
            <ul>
                <li><span className="emphasis">Proteger-se</span> da repressão física e digital ao coletar e armazenar informações sensíveis.</li>
                <li><span className="emphasis">Proteger os dados que você coleta</span> contra censura, adulteração, interceptação e destruição.</li>
                <li><span className="emphasis">Produzir facilmente documentação de alta qualidade</span> que poderá ser usada para pesquisa, advocacia pública ou justiça transicional.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Proteger seus dados</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">riptografe seus arquivos:</span> o Tella criptografa automaticamente suas fotos, vídeos e gravações de áudio assim que são capturados.</li>
                <li><span className="emphasis">Oculte seus arquivos no dispositivo:</span> seus arquivos são inacessíveis na galeria padrão do telefone ou no explorador de arquivos. Você só poderá acessá-los no aplicativo.</li>
                <li><span className="emphasis">Bloqueie seus arquivos:</span> defina um PIN ou senha para proteger seus arquivos. Inserir a chave correta é a única maneira de decifrar os arquivos armazenados no Tella.</li>
                <li><span className="emphasis">Disfarce o aplicativo:</span> altere a aparência do Tella para ocultá-lo de pessoas que procurarem no seu telefone.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Ilustração de Cofre" />
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> Saiba mais sobre os recursos do Tella </a>  
</div>

<div className="section">
    <h3>2. Coletar evidências de violações de direitos humanos</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Ilustração de Bloco de Notas"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Câmera e gravador dentro do Tella:</span> tire fotos, grave vídeos e áudio diretamente no Tella para que seus arquivos sejam imediatamente criptografados e ocultos no aplicativo.</li>
                <li><span className="emphasis">O Tella se integra</span> com <a href="for-organizations#uwazi">Uwazi</a>, <a href="for-organizations#open-data-kit-odk">Kobotoolbox</a> e <a href="for-organizations#tella-web">Tella Web</a>. Escolha a plataforma que melhor atenda às suas necessidades e colete dados diretamente no Tella.</li>
                <li><span className="emphasis">Modo offline:</span> em áreas com conectividade limitada ou inexistente, você pode salvar seus dados e enviá-los quando tiver uma conexão de internet confiável.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Leia como organizações estão usando o Tella </a>    
</div>

<div className="section">
    <h3>3. Tella é gratuito, multilíngue e de código aberto</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Gratuito para sempre:</span> o Tella é projetado para aqueles cuja segurança está em risco. É gratuito para baixar e usar, e permanecerá gratuito para sempre.</li>
                <li><span classname="emphasis">Escolha seu idioma:</span> o Tella está atualmente <a href="faq#what-languages-is-tella-available-in">disponível</a> em árabe, bielorrusso, birmanês, inglês, indonésio, jingpho, canarês, karen sgaw, curdo, malaiala, persa, português, russo, espanhol (América Latina) e tâmil.</li>
                <li><span classname="emphasis">Confie no código:</span> o código do Tella é aberto e <a href="open-source">publicamente disponível</a> para que pesquisadores, analistas de segurança e desenvolvedores possam auditá-lo e reutilizá-lo livremente.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Ilustração de Código Aberto" />
        </div>
    </div>
</div>

---
id: security-and-privacy
title: Segurança e privacidade
description: Detalhes sobre a segurança e a privacidade do Tella.
slug: /security-and-privacy
---

# Segurança e privacidade

O Tella foi construído para proteger aqueles que encaram repressão física e digital. Assim, todas as funcionalidades do Tella e decisões sobre o produto são feitas com a privacidade e a segurança em vista. O Tella é auditado regularmente por empresas de segurança independentes e as funcionalidades e a documentação são projetadas com apoio e orientação de profissionais de segurança.


## Privacidade {#privacy}

Somente coletamos a quantidade mínima de dados necessária para realizar o propósito do Tella. **Nós nunca coletamos informações pessoais identificáveis. Nós nunca revelamos, compartilhamos ou vendemos nenhum de seus dados para terceiros**.

Ao usar nosso aplicativo, usuários podem enviar dados para servidores gerenciados por indivíduos ou organizações com as quais estão trabalhando. Nós encorajamos os usuários a questionar esses indivíduos e organizações sobre suas políticas de privacidade dos dados, pois elas podem diferir das nossas. Fornecemos o mesmo padrão de proteção à privacidade para todos os usuários, independentemente do lugar do mundo em você esteja.

Você pode ler por inteiro a [Política de Privacidade](/privacy) do Tella.


### Tella para Android {#tella-android}

Tella para Android, conforme disponível na Google Play Store, inclui dois rastreadores,  [Google CrashLytics](https://firebase.google.com/docs/crashlytics) e [Google Firebase Analytics](https://firebase.google.com/docs/analytics), os quais nos auxiliam na detecção de bugs e travamentos. Isso é essencial para manter o aplicativo seguro e eficaz para usuários em risco.

### Tella-FOSS {#tella-foss}

O [Tella-FOSS](/faq#is-tella-available-on-f-droid), publicado na [loja F-droid](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/), não contém rastreador algum.


### Tella para iOS {#tella-ios}

O [Tella para iOS ](https://apps.apple.com/us/app/tella-document-protect/id1598152580) não inclui rastreador algum. Como resultado, da política estrita da Apple para aplicativos, o Tella para iOS não está atualmente disponível nas lojas alternativas de aplicativos ou para instalação manual.


## Funcionalidades de segurança {#security-features}

O Tella integra várias medidas de segurança estruturadas para atingir um nível aceitável de segurança:



1. **Criptografia em repouso**: Todos os dados são criptografados em repouso, no dispositivo do usuário. Ou seja: a menos que o aplicativo esteja desbloqueado (pela inserção do bloqueio do usuário), os dados contidos nele não podem ser acessados de forma alguma. Mesmo que alguém apreenda o telefone e extraia todos os dados pelo uso de um computador, os dados permanecerão ilegíveis.
2. **Criptografia em trânsito:** Todos os dados sendo transferidos entre o Tella e os servidores (veja a [seção de Conexões](/features#connecting-to-servers)) são criptografados por meio do protocolo [Segurança da Camada de Transporte (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). O Tella torna impossível enviar dados para o servidor sem a criptografia TLS.
3. **Bloqueio**: Os usuários do Tella [escolhem um bloqueio](/features#app-lock) para o aplicativo assim que o instalam. Bloqueios com Senha, Padrão e PIN estão disponíveis e cada nível de segurança é comunicado aos usuários.
4. **Tempo limite de bloqueio:** Usuários também podem configurar um [tempo limite de bloqueio](/features#lock-timeout-configuration), para escolher o quão rápido o Tella irá bloquear quando não estiver em uso. Por padrão, o tempo limite de bloqueio está configurado para "imediatamente". Assim, no momento em que o usuário deixa o Tella, o aplicativo é bloqueado e todos os dados são criptografados.
5. **Camuflagem**: No Tella para Android, há atualmente [dois modos de camuflagem](features#camouflage) para o Tella: uma calculadora completamente funcional e a possibilidade de modificar nome e ícone do aplicativo para tornar mais difícil encontrá-lo no telefone. Devido às restrições do iOS, não é possível camuflar o Tella para iOS.
6. **Botão Exclusão Rápida**: Usuários podem habilitar um botão deslizante de **[exclusão rápida](features#quick-delete)** para rapidamente limpar dados do Tella em uma situação de emergência. Usuários podem escolher, nas configurações do Tella, excluir todos os arquivos armazenados no Tella, formulários rascunhados e submetidos, configurações do servidor e o próprio aplicativo quando esse botão for acionado. Quando o botão Exclusão Rápida é acionado, uma contagem regressiva de 5 segundos é exibida para o usuário. Durante a contagem regressiva, o usuário pode cancelar a ação Exclusão Rápida ao tocar em qualquer lugar da tela. Quando a contagem regressiva atinge 0, a ação de exclusão configurada pelo usuário é aplicada. Se o usuário selecionou as opções de ‘excluir Tella’, o Android solicitará que ele confirme a exclusão do aplicativo. 
7. **Modo silencioso da câmera**:  Usuários podem escolher [desativar o som do obturador da câmera](/features#camera-silent-mode) para chamar menos atenção ao tirar fotos.
8. **Segurança da tela**: Por padrão, o Tella bloqueia capturas e gravações de tela dentro do Tella e oculta a prévia de tela na lista dos aplicativos recentes. [Essa configuração](/features#screen-security) pode ser desabilitada, por exemplo, para gravar tutoriais dentro do Tella ou espelhar o aplicativo para um computador para uma apresentação.
9. **Restrição de tentativas de desbloqueio**: Usuários podem decidir quantas [tentativas de desbloqueio](features#restrict-unlocking-attempts) sem sucesso são permitidas antes de todo o conteúdo dentro do Tella ser excluído e se um indicador visual com as tentativas restantes de desbloqueio será visível na tela de desbloqueio ou não.

:::tip Tutorial em vídeo 🎥
Saiba mais sobre Funcionalidades de Segurança pelo nosso [tutorial em vídeo](/video-tutorials#additional-security-features)
:::


## Limitações de segurança {#security-limitations}

Não existe um aplicativo 100% "seguro." A segurança depende das ameaças e riscos enfrentados por cada usuário e das capacidades dos adversários. Com o Tella, fizemos nosso melhor para adicionar o maior número de camadas de segurança possível para reduzir a probabilidade de alguém conseguir detectar o aplicativo ou acessar os dados dele. Aqui, listamos todos os riscos e limitações de segurança importantes dos quais os usuários devem estar cientes ao usar o Tella:



* Camuflagem:
    * No Android, quando o Tella é camuflado usando um dos dois [métodos de camuflagem disponíveis](/features#camouflage), o aplicativo ainda pode ser detectado nas Configurações do Android. Isso significa que alguém ao navegar por Configurações do Android > Aplicativos será capaz de ver que há um aplicativo chamado “Tella” instalado no dispositivo. Também será capaz de ver o tamanho do aplicativo. Então, se o usuário armazena arquivos muito grandes, como vídeos, o aplicativo pode chamar atenção. 
* Gerenciamento de arquivos:
    * Arquivos exportados do Tella para o sistema de arquivos do dispositivo não estão mais criptografados. Isso significa que alguém com acesso ao dispositivo que navegue pelo sistema de arquivos ou pela galeria pode ser capaz de encontrar esses arquivos. 
    * Arquivos compartilhados através de aplicativos de terceiros podem ser visíveis para esses aplicativos e salvos sem criptografia no sistema de arquivos do dispositivo. E alguém que realize buscas nesses aplicativos pode conseguir encontrar tais arquivos. Por exemplo: uma foto armazenada dentro do Tella e compartilhada no WhatsApp será visível dentro do WhatsApp e também será visível no sistema de arquivos, no qual as fotos do WhatsApp são armazenadas. Isso acontece porque, para ser compartilhado com aplicativos de terceiros, o arquivo precisa ser salvo no sistema de arquivos do telefone, que não é criptografado. Por isso recomendamos excluir manualmente o arquivo do sistema de arquivos do dispositivo após compartilhá-lo.
    * A importação de um arquivo cria uma cópia dele e então o importa e criptografa dentro do Tella. Nas versões 1.1(iOS) e 2.1(Android), desenvolvemos uma funcionalidade para os usuários selecionarem se desejam manter ou excluir o arquivo original no momento da importação para o Tella. No entanto, recomendamos que verifique se o arquivo original não está presente na Lixeira (Meus arquivos > Lixeira) e exclua o arquivo de quaisquer serviços de backup automático habilitados no seu telefone (Google Photos, Dropbox, etc.).


## Auditorias de segurança {#security-audits}

Regularmente, solicitamos a empresas de segurança independentes que auditem nosso código para garantir a robustez e segurança dele. Você pode ver relatórios completos dessas auditorias [nesta página](https://drive.google.com/file/d/11mPB2KZLHb6blmNuk_qyXYcn4BSVYNFT/view?usp=sharing). Este é o resumo da última auditoria e do atual status de implementação:


| Título                                               | Gravidade    | Status      |
|-----------------------------------------------------|-------------|-------------|
| Tentativas Irrestritas de Desbloqueio                        | Médio      | Resolvido |
| Iterações da chave BPKDF22 da cifra de fluxo Android Cipher Stream I/O     | Baixo         | Resolvido    |
| Dados de Áudio sem Criptografia do Tella iOS podem Persistir por Mais Tempo  | Baixo         | Resolvido    |
| Dependência Retrofit2 do Tella para Android Desatualizada         | Baixo         | Resolvido    |
| Dependência Depreciada do Tella para Android: Butterknife    | Informativo| Em andamento |

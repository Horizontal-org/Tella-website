---
id: security-and-privacy
title: Segurança e Privacidade
description: Detalhes sobre a segurança e a privacidade do Tella.
slug: /security-and-privacy
sidebar_position: 2
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

O [Tella para iOS](https://apps.apple.com/us/app/tella-document-protect/id1598152580) não inclui rastreador algum.

As a result of Apple’s strict iOS app policies, Tella for iOS is currently not available on alternative app stores or for manual install.

## Análises de uso {#analytics}

In Tella Android, Tella FOSS and [Tella Web](/tella-web), users can choose to share analytics to improve Tella. This data helps us understand how people use Tella and which features are important to them. ***Analytics data is only collected if users opt-in in the app's settings***

We use [Divvi Up](https://divviup.org/), a privacy-respecting telemetry service. Divvi Up is implemented by the [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/), a nonprofit organization that also maintains the [Let’s Encrypt](https://letsencrypt.org/) project. 

Here are some information about our privacy-preserving analytics approach:

1. **All data is anonymous and aggregated**: the Divvi Up library splits the data into two anonymized and encrypted shares and uploads each share to different data share processors (one hosted by ISRG and one hosted by us) that do not share data with each other. This way, only partial information about the original data is revealed to either processor.
2. **Even if we wanted to, we couldn't get the whole data**: It's not possible to construct the whole data with only one share. Each processor aggregates its data shares into a partial sum. The partial sums can then be combined into a final aggregation, permitting useful statistics over the whole body of data while revealing minimal information about individual participants. Extensive technical documentation about how Divvi Up works can be found [here](https://docs.divviup.org/).
3. **We collect as little data as possible**: Even though all data is anonymized, we always minimize the amount of data we collect. As of the latest versions of Tella, we only collect data about the following events (and nothing more):

    **Tella Android and Tella FOSS**
    - Number of times Tella is successfully unlocked.
    - Number of media files recorded (videos/photos taken and audio recordings captured).
    - Number of files imported from the device's gallery or file system into Tella.
    - Number of security features activated (number of times that camouflage is enabled, number of times that the quick delete action is triggered).
    - Number of new installations.
    - Number of reports uploaded to any connection (Tella Web, Uwazi, ODK, Nexcloud, Google Drive, Dropbox)
    - Time spend in Tella. 


    **Tella Web**
   The data below is only collected from Tella Web instances that have opted-in to share privacy-preserving analytics with the Tella team.
    - Number of visits (triggered every time someone enters any Tella Web instance).
    - Number of file uploads (triggered every time someone uploads a file to any Tella Web instance).
    - Number of Report uploads (triggers every time someone uploads a report to any Tella Web instance).


   For more information about the metrics we add to our apps, check out our [release notes](/releases).


## Funcionalidades de segurança {#security-features}

O Tella integra várias medidas de segurança estruturadas para atingir um nível aceitável de segurança:



1. **Criptografia em repouso**: Todos os dados são criptografados em repouso, no dispositivo do usuário. Ou seja: a menos que o aplicativo esteja desbloqueado (pela inserção do bloqueio do usuário), os dados contidos nele não podem ser acessados de forma alguma. Mesmo que alguém apreenda o telefone e extraia todos os dados pelo uso de um computador, os dados permanecerão ilegíveis.
2. **Encryption in transit:** All data being transferred between Tella and servers (see [Connections section](/connections)) is encrypted through[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). Tella makes it impossible to send data to a server without TLS encryption.
3. **Bloqueio**: Os usuários do Tella [escolhem um bloqueio](/features#app-lock) para o aplicativo assim que o instalam. Bloqueios com Senha, Padrão e PIN estão disponíveis e cada nível de segurança é comunicado aos usuários.
4. **Tempo limite de bloqueio:** Usuários também podem configurar um [tempo limite de bloqueio](/features#lock-timeout-configuration), para escolher o quão rápido o Tella irá bloquear quando não estiver em uso. Por padrão, o tempo limite de bloqueio está configurado para "imediatamente". Assim, no momento em que o usuário deixa o Tella, o aplicativo é bloqueado e todos os dados são criptografados.
5. **Camuflagem**: No Tella para Android, há atualmente [dois modos de camuflagem](features#camouflage) para o Tella: uma calculadora completamente funcional e a possibilidade de modificar nome e ícone do aplicativo para tornar mais difícil encontrá-lo no telefone. Devido às restrições do iOS, não é possível camuflar o Tella para iOS.
6. **Botão Exclusão Rápida**: Usuários podem habilitar um botão deslizante de **[exclusão rápida](features#quick-delete)** para rapidamente limpar dados do Tella em uma situação de emergência. Usuários podem escolher, nas configurações do Tella, excluir todos os arquivos armazenados no Tella, formulários rascunhados e submetidos, configurações do servidor e o próprio aplicativo quando esse botão for acionado. Quando o botão Exclusão Rápida é acionado, uma contagem regressiva de 5 segundos é exibida para o usuário. Durante a contagem regressiva, o usuário pode cancelar a ação Exclusão Rápida ao tocar em qualquer lugar da tela. Quando a contagem regressiva atinge 0, a ação de exclusão configurada pelo usuário é aplicada. Se o usuário selecionou as opções de ‘excluir Tella’, o Android solicitará que ele confirme a exclusão do aplicativo. 
7. **Modo silencioso da câmera**:  Usuários podem escolher [desativar o som do obturador da câmera](/features#camera-silent-mode) para chamar menos atenção ao tirar fotos.
8. **Segurança da tela**: Por padrão, o Tella bloqueia capturas e gravações de tela dentro do Tella e oculta a prévia de tela na lista dos aplicativos recentes. [Essa configuração](/features#screen-security) pode ser desabilitada, por exemplo, para gravar tutoriais dentro do Tella ou espelhar o aplicativo para um computador para uma apresentação.
9. **Restrição de tentativas de desbloqueio**: Usuários podem decidir quantas [tentativas de desbloqueio](features#restrict-unlocking-attempts) sem sucesso são permitidas antes de todo o conteúdo dentro do Tella ser excluído e se um indicador visual com as tentativas restantes de desbloqueio será visível na tela de desbloqueio ou não.
10. **Offline file sharing**: Tella allows establishing a secure connection with devices that are in the same physical location and transferring files encrypted, from one Tella vault to another. [Nearby Sharing](/nearby-sharing) works fully offline, even on insecure networks or networks being surveilled.  Nearby Sharing is available cross-platform (between Android, iOS and Desktop).

:::tip Tutorial em vídeo 🎥
Saiba mais sobre Funcionalidades de Segurança pelo nosso [tutorial em vídeo](/video-tutorials#additional-security-features)
:::


## Limitações de segurança {#security-limitations}

Não existe um aplicativo 100% "seguro." A segurança depende das ameaças e riscos enfrentados por cada usuário e das capacidades dos adversários. Com o Tella, fizemos nosso melhor para adicionar o maior número de camadas de segurança possível para reduzir a probabilidade de alguém conseguir detectar o aplicativo ou acessar os dados dele. Aqui, listamos todos os riscos e limitações de segurança importantes dos quais os usuários devem estar cientes ao usar o Tella:



* Camuflagem:
    * On Android, when Tella is camouflaged using one of the two [camouflaging methods available](/features#camouflage), the app can still be detected in the Android Settings. This means that someone who navigates to the Android settings > Apps will be able to see that there is an app installed on the device that is called “Tella”. They will also be able to see the size of the app. So if the user stores very large files, like videos, the app may raise attention.
* Gerenciamento de arquivos:
    * Arquivos exportados do Tella para o sistema de arquivos do dispositivo não estão mais criptografados. Isso significa que alguém com acesso ao dispositivo que navegue pelo sistema de arquivos ou pela galeria pode ser capaz de encontrar esses arquivos. 
    * Arquivos compartilhados através de aplicativos de terceiros podem ser visíveis para esses aplicativos e salvos sem criptografia no sistema de arquivos do dispositivo. E alguém que realize buscas nesses aplicativos pode conseguir encontrar tais arquivos. Por exemplo: uma foto armazenada dentro do Tella e compartilhada no WhatsApp será visível dentro do WhatsApp e também será visível no sistema de arquivos, no qual as fotos do WhatsApp são armazenadas. Isso acontece porque, para ser compartilhado com aplicativos de terceiros, o arquivo precisa ser salvo no sistema de arquivos do telefone, que não é criptografado. Por isso recomendamos excluir manualmente o arquivo do sistema de arquivos do dispositivo após compartilhá-lo.
    * Files sent to a [server connection](/for-organizations) will be stored un-encrypted on the server, unless the server has implemented disk encryption. People who have access to the server might be able to see the files. Tella makes sure that the data travels encrypted to the server but cannot guarantee the security practices of the server. If you choose to connect to a Google Drive or Dropbox instance, or work with a third party organization for hosting your data, we recommend looking into whether the organization itself can access your data.
    * A importação de um arquivo cria uma cópia dele e então o importa e criptografa dentro do Tella. Nas versões 1.1(iOS) e 2.1(Android), desenvolvemos uma funcionalidade para os usuários selecionarem se desejam manter ou excluir o arquivo original no momento da importação para o Tella. No entanto, recomendamos que verifique se o arquivo original não está presente na Lixeira (Meus arquivos > Lixeira) e exclua o arquivo de quaisquer serviços de backup automático habilitados no seu telefone (Google Photos, Dropbox, etc.).


## Auditorias de segurança {#security-audits}

Solicitamos regularmente a empresas de segurança independentes que auditem nosso código para garantir que ele seja robusto e seguro.

| Data | Auditado por | Plataformas auditadas  | Link      |
| -----|----------|----|-----------|
| May 2026 | Convocation Research and Design Labs  |  Android, iOS, Desktop |[Placeholder for report !]|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| Maio de 2024 | Subgraph Technologies, Inc. |  Android, iOS, Tella Web|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| Maio de 2023 | Subgraph Technologies, Inc. | Android, iOS, Tella Web |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|










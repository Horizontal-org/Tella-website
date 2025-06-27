---
id: features
title: Funcionalidades do Tella
description: Uma descrição detalhada das funcionalidades do Tella.
slug: /features
---

import FeaturesTable from '.././_features-table.md';
import ConnectionsTable from '.././_connections-table.md';

# Funcionalidades do Tella

Todas as funcionalidades a seguir estão disponíveis para todos os usuários no momento em que eles baixam o Tella. Elas não exigem conexão alguma com o servidor ou configurações especiais.

<FeaturesTable/>


## Bloqueio do aplicativo {#app-lock}

Ao instalar o Tella, o usuário tem de selecionar um bloqueio 🔒 para criptografar e decifrar o conteúdo do aplicativo.


* No Android, o usuário pode selecionar um padrão, PIN ou senha.
* No iOS, o usuário pode selecionar um PIN ou senha.

Sem esse bloqueio, não é possível abrir o Tella.

:::danger
Se o usuário perder o bloqueio, não é possível recuperar acesso ao Tella e aos arquivos armazenados dentro do aplicativo. O usuário tem de desinstalar e reinstalar o Tella e todos os arquivos serão perdidos. 🔒🔑🚪
:::

:::tip Tutorial em vídeo 🎥
Saiba mais sobre os Bloqueios do Tella em nosso [tutorial em vídeo](/video-tutorials#tella-locks) 
:::

## Background encryption {#background-encryption}

Tella [encrypts](#encryption) files in the background so that users can continue performing actions (take more photos or videos, import more files, etc) while files are being encrypted. Users can see ongoing activities that are taking place in the background in a **Background activity tray** that's accessible from the Tella homescreen, by tapping on the "notifications" icon (🔔) on the top left. 

While files are being encrypted, Tella displays an orange marker on the notifications icon. If the user opens the background activity tray while some files are being encrypted, they will see the list of files in the queue and the encryption progress.

:::danger
If the user hard exit Tella (for example by using [Quick Exit](#quick-exit) or minimizing the app) while files are being encrypted in the background, those will be lost.
:::

:::info
If [verification mode](/features#verification-mode) is turned on, background encryption is automatically disabled to make sure that all file metadata is captured at the same time as the photo, video, or audio file is saved.  
:::

## Backup files to a cloud {#backup-files}
We are in the process of adding options for individuals and organizations to backup their data to different clouds. Backups, for the moment, need to be made manually, by creating reports (using, for example, the date of "today" as the report title) and submitting them to the connected server. Files will be available on the connected server inside a folder with the report title.

For the moment we support the following connections. Follow each of the links to find details and step-by-step guides on how to connect and use each of them:
* [Open Data Kit (ODK)](/odk)
* [Uwazi](/uwazi)
* [Tella Web](/tella-web)
* [Google Drive](/g-drive)
* [Nextcloud](/nextcloud)
* [Dropbox](/dropbox)

On this table we explain what server types are available on the Tella apps:
<ConnectionsTable/>.


:::danger
For the moment, the submission to any type of server it is **not** encrypted. People who have access to the server itself are able to see the files.
:::



## Configuração do tempo limite de bloqueio {#lock-timeout-configuration}

By default Tella will lock immediately every time the user exits the app or your phone’s screen turns off. If you’d like to change this setting, the user can do so by going to 

Configurações ⚙️ > Segurança > Tempo Limite de Bloqueio.  

As opções disponíveis são 1 minuto, 5 minutos, 30 minutos e 1 hora. ⏱️

:::info
Please use this feature carefully as if Tella is unlocked the data would be unprotected and anyone who enters Tella will be able to see all information there.
:::

:::info
Enquanto a câmera ou o gravador de áudio estiverem abertos, o Tella não bloqueará
:::

:::tip Tutorial em vídeo 🎥
Saiba mais sobre as Funcionalidades Adicionais de Segurança do Tella em nosso [tutorial em vídeo](/video-tutorials#additional-security-features)
:::



## Modo silencioso da câmera {#camera-silent-mode}

By default Tella has camera silent mode disabled. By going to **Settings ⚙️** > **Security** > **Camera silent mode**, it is possible to turn off the camera shutter sound to draw less attention when taking photos. 📷🔇

:::tip Tutorial em vídeo 🎥
Saiba mais sobre as Funcionalidades Adicionais de Segurança do Tella em nosso [tutorial em vídeo](/video-tutorials#additional-security-features)
:::


## Segurança da tela {#screen-security}

By default Tella blocks screenshots, screen recordings inside Tella and hides the screen preview in the list of recent apps 📱🔒. It is possible to disable this security feature if the users need to take screenshots or screen recordings, or to mirror Tella to a computer for a presentation, by going to **Settings** ⚙️ > **Security** > **Screen security**.

No iOS, a segurança de tela somente bloqueia gravações dentro do Tella e bloqueia a tela na lista de aplicativos recentes, mas não é possível desabilitar capturas ou gravações de tela.


:::tip video tutorial 🎥
Learn more about Tella Additional Security Features in our [video tutorial](/video-tutorials#additional-security-features)
:::

## Restrição de tentativas de desbloqueio {#restrict-unlocking-attempts}
Entrando em **Configurações ⚙️** > **Segurança** > **Excluir após Falha no Desbloqueio**, o usuário pode decidir quantas tentativas falhas de desbloqueio são permitidas antes de todo o conteúdo dentro do Tella ser excluído.

Por padrão, essa configuração está desativada, ou seja, as tentativas de desbloqueio não são restritas e os dados não serão excluídos. O usuário pode escolher restringir as tentativas de desbloqueio para 5, 10 ou 20. Se escolher qualquer uma das opções, ele também pode selecionar tanto exibir um indicador visual na tela de desbloqueio 3 tentativas antes do número especificado (faltam 3 tentativas, faltam 2 tentativas, etc.) como exibir nenhum indicador visual.   

Após o número especificado de tentativas falhas, todos os arquivos, conexões e todo o conteúdo dentro do Tella é excluído e o usuário retornará ao estado "recém-instalado" do aplicativo.

:::info
The Restrict unlocking attempts feature cannot be enabled if Calculator camouflage is enabled.
:::

:::danger
Mesmo que essa configuração de segurança previna tentativas de desbloqueio do Tella por força bruta, ela deve ser usada com cautela, pois não há maneira de restaurar o conteúdo do Tella uma vez que o número máximo de falhas nas tentativas de desbloqueio for atingido.
:::

## Edição de Mídia {#edit-media}
We are in the process of adding the ability to edit media files directly within Tella's encrypted container, so users don't longer need to export their files outside Tella for editing those.

| **Media Type** | **Funcionalidade** | **Tella para Android** | **Tella para iOS** | **Tella FOSS** |
|----------------|-------------|-------------------|---------------|----------------|
| Imagem          | Crop        | ✔️                | ✔️            | ✔️             |
| Imagem          | Rotate      | ✔️                | ✔️            | ✔️             |
| Imagem          | Flip        | ✔️                | Ainda não       | ✔️             |
| Imagem          | Auto-zoom        | ✔️                | Ainda não       | ✔️        |
| Vídeo          | Trim        | - Tella Web <br />- Uwazi       | ✔️          | - Tella Web <br />- Uwazi        |
| Vídeo          | Rotate      | - Tella Web <br />- Uwazi       | ✔️          | - Tella Web <br />- Uwazi        |
| Áudio          | Trim        | - Tella Web <br />- Uwazi           |  ✔️          | - Tella Web <br />- Uwazi        |

Users can edit a picture by going to **More** > **Edit** from the **Images** folder or by tapping the **Edit** button on the top right while viewing image you have on Tella. 
- **Rotate**:  Use the Rotate button at the bottom of the screen to rotate the image counter-clock wise. 
- **Crop**: Drap the corners of the white canvas to crop the picture. 
- **Auto-zoom**: The image will automatically zoom in and out depending on the selected canvas, to avoid loosing image quality.
- **Flip**: Use the flip buttons to mirror the image horizontally or vertically.

When edits are done, users can press the orange check on the top right of the edit screen. The edited file will be saved as a copy of the original file in the same folder.


Users can edit videos or audio recordings: 
- In any folder, next to the file to be edited, by tapping on **⁝** > **Edit**.
- While listening to an audio recording or watching a video in Tella, by tapping the **Edit** button in the top right corner. 

Current editing options include:
- **Trim**: Move the vertical orange lines to select the new start and end point of your audio or video. 
- **Rotate**: Use the Rotate button on the top right of the screen to rotate the video counter-clock wise.

Use the Play button at the bottom of the screen to listen to the audio or the Cancel button to start over. When you are done editing the file, use the orange scissors ✂️ icon in the top-right corner to save the trimmed audio or video. The edited file will be saved as a copy of the original file in the same folder.


## Criptografia {#encryption}

Todos os arquivos armazenados dentro do Tella são criptografados. Sem o bloqueio do aplicativo, é impossível decifrar e acessar quaisquer arquivos armazenados no Tella. 🔒🔐

Ao instalar o aplicativo, o usuário decide qual método de bloqueio gostaria de usar. Para Android, o usuário pode usar um padrão de seis pontos, um PIN ou uma senha. Para iOS, pode usar um PIN ou uma senha. O aplicativo não pode ser aberto sem um bloqueio.

Mesmo que o dispositivo esteja ligado a um computador e todos os dados do dispositivo forem extraídos para serem analisados, todo o conteúdo e os dados do Tella vão parecer sem sentido e serão inúteis. Desbloquear o aplicativo pela inserção do bloqueio correto é a única forma de decifrar e, portanto, ler o conteúdo armazenado no Tella.

:::danger
Se o bloqueio do usuário for muito fraco, um adversário pode ser capaz de adivinhá-lo e abrir o aplicativo no telefone; ou os dados poderiam ser extraídos e um computador poderia descobrir a chave de criptografia por força bruta e decifrar os dados.
:::

:::danger
Se o usuário esquecer seu bloqueio, não há como ganhar acesso ao aplicativo e recuperar o conteúdo
:::

:::tip video tutorial 🎥
Learn more about Locks and Encryption in our [video tutorial](/video-tutorials#tella-locks)
:::

:::info
Detalhes técnicos sobre criptografia podem ser encontrados na seção [Segurança e Privacidade](/security-and-privacy).
:::

## Gerenciamento de arquivos {#file-management}

O Tella permite aos usuários gerenciar arquivos e pastas de maneira similar à que eles fariam em um computador. Todos os arquivos são **criptografados e somente acessíveis dentro do Tella**. 📂📝

No Tella, usuários podem:

* Armazenar qualquer arquivo, incluindo fotos 📷, vídeos 🎥, arquivos de áudio 🎧, e documentos 📝.
* In the All Files folder:
    - Criar pastas e subpastas.
    - Mover arquivos para dentro de pastas e de uma pasta para outra.
* Exportar arquivos para seus dispositivos. Uma vez salvos em seus dispositivos fora do Tella, os arquivos não estão mais criptografados e podem ser acessados por qualquer pessoa que realize buscas no dispositivo.
* Importar arquivos de seus dispositivos. Os arquivos são automaticamente criptografados quando importados para o Tella.

:::danger
Importing files from the device file system into Tella makes a copy of the files into Tella. Tella will ask if you want to keep or delete the original file from your phone when importing. If you choose to keep the original file, they will be present on the device, outside of Tella and unencrypted. 🔒
:::

## Feedback {#feedback}

Há diversas formas de os usuários [entrarem em contato com a equipe do Tella](/contact-us) para sugerir melhorias, relatar bugs e problemas e solicitar suporte. Dentro do Tella, há 2 alternativas:

1. **E-mail:**
   - Navegue para **Configurações** > **Sobre e Ajuda** > **Contate-nos** para encontrar o endereço de e-mail.
   - Os usuários podem enviar e-mail para a equipe do Tella usando seu aplicativo de e-mail de preferência.

2. **Formulário de Feedback dentro do Aplicativo:**
   - Entre em **Configurações** > **Feedback** para habilitar um formulário de feedback dentro do aplicativo.
   - Isso permite aos usuários compartilhar feedback anonimamente com a equipe do Tella.


Para garantir a privacidade e anonimato do usuário, somente dados essenciais são transmitidos para nosso servidor de feedback por meio de solicitações HTTPS POST. Os logs que contém informações de usuário (endereço de IP, data e hora e cabeçalho de requisição User-Agent) são automaticamente excluídos a cada semana.

No banco de dados do servidor de feedback, nós somente armazenamos uma cópia do texto enviado pelos usuários no formulário de feedback e de qual plataforma ele veio (Android ou iOS).


:::info
A única informação que receberemos é o conteúdo que os usuários adicionam especificamente no formulário de feedback. Se usuários estiverem solicitando suporte ou desejarem que façamos acompanhamento, eles deverão fornecer uma maneira segura para entrarmos em contato.
:::


## Importação de arquivos do dispositivo {#import-files-from-device}

O usuário pode importar arquivos para dentro do Tella para mantê-los seguros pela funcionalidade importar. Eles podem importar arquivos indo no botão **Adicionar ( + )** seja em Todos os arquivos, Imagens, Vídeo, Áudio ou Documentos, a depender do tipo de arquivo que desejem importar e então para **Importar de dispositivo** 📥 Uma caixa de diálogo aparecerá perguntando ao usuário se deseja manter ou excluir o arquivo original da memória de seu telefone. Os arquivos importados serão mantidos seguros no Tella.


:::tip video tutorial 🎥
Learn more about [Collecting Evidence](video-tutorials#collecting-evidence) and [Sharing data](/video-tutorials#sharing-data-with-other-apps) in our video tutorials.
:::

## Preservação de metadados ao importar {#preserve-metadata-when-importing}

On **Settings** > **Security** users have the option to Preserve or delete the file's metadata when importing Photos and Videos to Tella. EXIF metadata of files migth include data about when the file was created, camera settings or location of the device.

## Privacy preserving analytics (opt-in) {#privacy-preserving-analytics}
Android users can opt-in to share analytics to improve Tella. All information is anonymous, agregated and can never be linked to individual usres. For technical information about what system do we use and what metrics to we collect, visit the [Analytics section of the Security and Privacy page](/security-and-privacy#analytics).

## Abertura de arquivos no Tella {#open-files-in-tella}
Imagens, vídeos, PDFs e áudios podem ser visualizados dentro do Tella. 📱📄

## Camuflagem {#camouflage}

No Tella para Android, é possível camuflar o Tella de duas maneiras:

1. Usuários podem mudar nome e ícone do aplicativo para fazê-lo parecer um outro aplicativo como um jogo ou um aplicativo de previsão do tempo. 🎮🌦️
2. Usuários podem ocultar o Tella sob uma calculadora totalmente funcional. Para conseguir abrir o Tella, o usuário deve inserir seu PIN na calculadora, seguido de **=**. A camuflagem da Calculadora só é possível se o usuário usa um bloqueio com PIN. Não é possível camuflar o Tella como uma Calculadora caso um padrão ou uma senha esteja sendo usada. 🔢🔒

Neste momento, devido a restrições na App Store da Apple, o Tella para iOS não dá suporte às configurações de camuflagem disponíveis no Tella para Android.

:::danger
O nome "Tella" e seu ícone permanecerão visíveis nas configurações do Android. Isso significa que a camuflagem não protegerá contra um indivíduo _ativamente_ procurando pelo Tella no telefone ou conduzindo uma análise em profundidade do dispositivo. 🔒👀
:::

:::info
The Calculator camouflage feature cannot be enabled if the Restrict unlock attempts feature is on.
:::

:::tip Tutorial em vídeo 🎥
Saiba mais sobre [Camuflando o Tella](/video-tutorials#camouflaging-tella) em nosso tutorial em vídeo.
:::


## Personalização da tela inicial {#homescreen-customization}

Por padrão, a tela inicial do Tella organiza os arquivos por tipo:  📷 imagens, 🎥 vídeos, 🎧 áudio, 📄 documentos, e outros arquivos. Além disso, ela contém uma seção Todos os arquivos na qual todos os arquivos podem ser acessados. Para mais informações, veja a seção Gerenciamento de Arquivos.

Por conveniência e facilidade de acesso, também é possível personalizar a tela inicial para igualmente mostrar atalhos para um ou mais dos seguintes:

* Arquivos recentes, para abrir rapidamente os arquivos mais novos no Tella 💼
* Formulários favoritos, para usuários conectados a um servidor ODK 📝
* Templates favoritos, para usuários conectados a um servidor Uwazi 📋

Essa configuração pode ser encontrada em **Configurações** > **Geral**. 


## Exclusão rápida {#quick-delete}

Um botão de Exclusão rápida permite aos usuários, em apenas alguns segundos, excluir dados sensíveis dentro do Tella. A Exclusão rápida pode ser configurada em **Configurações** > **Segurança** > **Exclusão rápida**, onde o usuário pode escolher habilitar um botão deslizante na tela inicial para excluir rapidamente informações do Tella em situações de emergência. Se habilitado, o usuário pode escolher exatamente o que será deletado quando a funcionalidade for usada. As opções disponíveis são:

* Delete files: Deletes all files stored in Tella 🗑️
* Delete draft and submitted forms: Deletes drafts and submitted forms in all Connections. [Visit the For Organizations page](/for-organizations) to  discover the available server connections 📝
* Delete server settings: Deletes all server connections and all the forms, templates or reports associated with them 📋
* Excluir o Tella: exclui o aplicativo e todos os dados contidos nele. Essa ação aciona uma mensagem que pergunta se o usuário também deseja desinstalar o Tella ❌.  

:::info Excluir o Tella
A opção Excluir o Tella pode não estar disponível em alguns telefones Android devido a limitações técnicas. Estamos trabalhando em uma solução para esse problema. Para o iOS não é possível excluir um aplicativo programaticamente.
:::

## Saída rápida {#quick-exit}

Ao clicar no botão saída na tela inicial do Tella no canto superior direito, usuários do Android podem fechar rapidamente o aplicativo em caso de emergência. Embora ter o tempo limite de bloqueio configurado para “imediatamente” signifique que o aplicativo já será bloqueado quando o usuário sair, o uso do botão Saída rápida adiciona uma camada extra de segurança e garantia que o aplicativo será completamente fechado e bloqueado 🔒

No iOS, não é possível encerrar um aplicativo de dentro do aplicativo em si. Tocar no botão de saída rápida, em vez disso, bloqueia o aplicativo.

## Modo de verificação {#verification-mode}

Nas configurações do Tella, usuários podem ativar o "Modo de Verificação" ✅

Quando ativado, todas as vezes que um usuário capturar uma foto ou vídeo ou gravar um áudio, o Tella automaticamente guarda informações de verificação (metadados do arquivo). Essas informações de verificação podem ser usadas para corroborar evidências, fazer verificação cruzada com outros fatos conhecidos sobre o evento ou sobre a área em que foram capturadas. As informações da verificação serão incluídas como um arquivo separado ao salvar o arquivo no dispositivo ou ao compartilhá-lo por meio de aplicativos de terceiros. O formato do arquivo é .CSV com informações de metadados incluídas nas colunas. Esse arquivo pode ser aberto com qualquer aplicativo de planilha (como Excel, Google Spreadsheets ou OpenOffice).

:::info Contate-nos
Se você precisa de ajuda para entender melhor o Modo de Verificação, sinta-se à vontade para entrar em contato conosco 😊
:::

Abaixo está uma lista de cada parte de metadado capturado pelo Tella:

**Informações sobre o arquivo**

* Caminho do arquivo: onde o arquivo estava localizado no diretório do Tella 📂
* Hash do arquivo: um número exclusivo para identificar o arquivo 🔍
* Modificação do arquivo: data e hora nas quais o arquivo foi modificado por último no dispositivo 📅

**Informações sobre o dispositivo**

* Fabricante: o nome do fabricante do dispositivo 📱
* Hardware: o modelo exato do dispositivo 💻
* ID do dispositivo: um número exclusivo identificador do dispositivo Android 🆔
* Tamanho da tela: o tamanho exato da tela do dispositivo 📏
* Idioma: o idioma para o qual o sistema operacional do dispositivo está configurado 🌐
* Local: a região geográfica para a qual o dispositivo está configurado 🌍
* Status da conexão: se o dispositivo está ou não conectado à internet 📶
* Tipo de rede: se o dispositivo está conectado à internet, especifica se é por meio de uma rede wi-fi ou uma rede celular 📲
* MAC do wi-fi: um identificador exclusivo para o conector wi-fi do dispositivo 🔍
* IPv4: um endereço único identificador da conexão de internet do dispositivo 🔗
* IPv6: um identificador mais recente para a conexão de internet de um dispositivo 🔗

**Informações sobre o ambiente no qual o arquivo foi capturado**

* Localização: a localização exata do dispositivo, incluindo as coordenadas de latitude e longitude, altitude em metros, acurácia da medida em metros e a hora 🌍
* Provedor da localização: como a localização do dispositivo é determinada 📍
* Velocidade da localização: a velocidade com qual o dispositivo está viajando 🚀
* Informações do celular: os números identificadores das torres de celular às quais o dispositivo está conectado 📡
* Informações do wi-fi: o nome de todas as redes de wi-fi nos arredores do dispositivo 🔍

## Conexão a servidores {#connecting-to-servers}

Usuários podem coletar dados diretamente no Tella, guardar os dados protegidos dentro do aplicativo e conectar a um servidor para enviar seguramente os dados para um servidor. Essa funcionalidade é frequentemente usada por organizações que centralizam os dados coletados por voluntários ou ativistas em seus locais de atuação. Essas pessoas coletam informações usando o Tella em seus telefones e então as enviam para suas organizações. Implantações anteriores do Tella nas quais usuários em seus locais de atuação coletavam dados e os enviavam para um servidor de uma organização variaram de 1 a 2.000 usuários. 📲 📡 

Atualmente, os servidores que podem ser conectados ao Tella são:

* [Open Data Kit (ODK)](/odk)
* [Uwazi](/uwazi)
* [Tella Web](/tella-web)
* [Google Drive](/g-drive)
* [Nextcloud](/nextcloud)
* [Dropbox](/dropbox)


:::tip Tutorial em vídeo 🎥
Saiba mais sobre a [Conexão a Servidores](/video-tutorials#server-connections) por nossos tutoriais em vídeo.
:::


## Câmera (fotos e vídeos) {#camera-photos-and-videos}

O Tella oferece uma câmera embutida pela qual você pode capturar fotos e vídeos. Todas as mídias coletadas dentro do Tella não estarão disponíveis fora dele, pois todos os arquivos são criptografados assim que são capturados. Arquivos apenas são acessíveis dentro do Tella pelo uso do bloqueio para abrir o aplicativo. Fotos e vídeos não aparecerão na galeria do telefone. No Tella, fotos e vídeos receberão um nome padrão, mas os usuários podem renomeá-los usando o botão Renomear. Os arquivos também podem ser organizados em pastas. 📷

A câmera oferece a possibilidade de modificar a resolução dos vídeos antes da gravação, de modo a economizar espaço: quanto mais baixa for a resolução, menos espaço o vídeo ocupa, mas também menor é a qualidade do vídeo. 🎥 💾

No [Tella-FOSS](/faq#is-tella-available-on-f-droid), no qual usamos a biblioteca CameraX de código aberto completo, algumas das funcionalidades da câmera não estão disponíveis (zoom, girar a câmera, habilitar o flash, habilitar a grade, mudar a resolução do vídeo).


## Seleção da resolução de vídeo {#select-video-resolution}
Você pode facilmente escolher a resolução de vídeo desejada no Tella ao acessar a tela de gravação de vídeo e tocar no botão Configurações. As opções disponíveis incluem:
- Resolução mais alta possível
- Resolução alta (1080p)
- Resolução média (720p)
- Baixa resolução (480p)

A resolução do vídeo se refere ao número de pixels em cada quadro do vídeo. Resoluções mais altas, como 1080p ou 720p, resultam em um vídeo mais definido e detalhado. No entanto, lembre-se de que vídeos com uma resolução mais alta também possuem tamanhos de arquivo maiores, os quais podem exigir mais espaço de armazenamento do seu dispositivo.

É importante notar que a seleção da resolução do vídeo é atualmente suportado apenas em dispositivos Android.


## Gravação de Áudio {#audio-recorder}

O Tella possui um gravador de áudio embutido. Todos os áudios gravados dentro do Tella não estarão disponíveis fora dele, pois todos os arquivos são criptografados assim que são capturados. Arquivos de áudio apenas são acessíveis dentro do Tella pelo uso do bloqueio para abrir o aplicativo. Gravações não aparecerão no aplicativo de Gravação de Voz do dispositivo ou no sistema de arquivos. No Tella, arquivos de áudio receberão um nome padrão, mas os usuários podem renomeá-los usando o botão Renomear. As gravações de áudio também podem ser organizadas em pastas. 🎤 🎧

O gravador de áudio permite aos usuários pausar a gravação e reiniciá-la conforme necessário, guardando toda a informação no mesmo arquivo. Usuários vêem quanto espaço há disponível no dispositivo ao gravar, para garantir que faltará espaço durante a gravação. 📈 💾


## Coleta de dados offline {#offline-data-collection}

Uma vez que o Tella é instalado e configurado no telefone, ele não precisa de uma conexão com a internet para coletar dados. 📲 Uma conexão com a internet é necessária somente para compartilhar arquivos por meio de outros aplicativos ou de Conexões. 🌐 Se os usuários possuem um servidor conectado, assim que os formulários ou templates são baixados para o telefone, todos os dados coletados serão armazenados na aba caixa de saída e eles podem carregá-los no servidor no momento em que conectarem à internet. 📩



---
id: tella-web
title: Tella Web
description: A funcionalidade Relatórios empodera usuários a carregar fotos, vídeos, PDFs e gravações de áudio para o servidor Tella Web de sua organização de forma conveniente
slug: /tella-web
---

# Conexão com o Tella Web

O Tella Web é uma ferramenta de código aberto que permite a indivíduos e organizações centralizar e gerenciar relatórios enviados por usuários do Tella, incluídos fotos, vídeos e arquivos de áudio.

Tella Web is developed internally by our team at Horizontal, the same team responsible for developing Tella's mobile apps. It is a user-friendly solution for backing up media files to a remote server in a safe and private manner. Using a Tella Web server also allows users to pull data (guides, instructions, important messages etc) from the server directly to their Tella 

We can provide support for the installation, configuration, and maintenance of a Tella Web instance if you don't have someone within your organization who can do it.

Similarly to all other connections([Uwazi](/uwazi), [Google Drive](/g-drive), [Nextcloud](/nextcloud), [Dropbox](/dropbox) and [Open Data Kit](/odk)), connecting to Tella Web enhances the security of data collected on Tella by:
1. Permitir aos usuários coletar dados diretamente de dentro do contêiner criptografado do Tella.
2. Assegurar que os dados são enviados diretamente do Tella para o Tella Web, sem depender de ferramentas ou aplicativos de terceiros.
3. Permitir aos usuários realizar backup de seus dados em um servidor remoto, para diminuir o risco de os dados serem descobertos em seus dispositivos móveis. 
4. Assegurar que as organizações possam preservar informações importantes, mesmo no caso de apreensão ou destruição de dispositivo, e possam organizá-las para uso em processos de pesquisa, advocacia pública ou processos de responsabilização.

Tella Web is a great option to collect "reports" from users. Reports can include photos, videos, audio recordings, pdf documents and text. Organizations can also upload PDFs to each Tella Web project and users can access these resources directly from their Tella vault.

A configuração do Tella Web envolve três etapas, os quais são minuciosamente discutidos nesta seção:

* **Instalar o Tella Web**: esta etapa envolve instalar o servidor Tella Web e configurar o nome do domínio para assegurar seu funcionamento adequado.
* **Set up your project(s) on your server**: In this step, admins decide how to organize themselves to collect data, create "projects", add "resources" for users to download on their devices and set roles and permissions for users.
* **Preparar as pessoas nos locais de atuação para começar a submeter relatórios.**: Usuários instalam o Tella no seu dispositivo Android ou iPhone. Eles, então, conectam-se ao projeto do Tella Web e iniciam a coleta de informações.

## When to Use Tella Web {#when-to-use-tella-web}

The Tella Web could be a good alternative if:
- Você tem a capacidade de auto-host Tella Web.
- People on the ground will be sending mostly media files, with some text and don't need structured data collection (forms).
- You will be partnering with Horizontal and you want the same organization to help you with installation, configuration, and maintenance of your Tella Web instance and the Tella apps.


:::tip
If you need help figuring out if Tella Web is best for your use-case, [read our guide](/for-organizations) or [contact us](/contact-us)!
:::


## Instale o servidor {#install-the-server}

Esta etapa consiste em instalar e configurar o Tella Web no servidor que a sua organização irá utilizar. Ela precisa ser completada pela pessoa que será responsável pela administração do sistema (um desenvolvedor ou um administrador de sistemas). Instruções técnicas podem ser encontradas em [nosso Github](https://github.com/Horizontal-org/tellaweb). 

You can check Tella Web release notes [here](https://github.com/Horizontal-org/tellaweb/releases).


:::info
Nossa equipe pode oferecer suporte com a instalação, configuração e manutenção do Tella Web. Se você tiver alguma pergunta ou precisar de suporte, [entre em contato conosco](/contact-us/).
:::

:::tip
[Contate-nos](/contact-us/) para ter acesso a nosso servidor de demonstração para que você possa testar o Tella Web antes de instalá-lo em seu próprio servidor.
:::


## Configure o seu projeto no seu servidor {#set-up-your-project-on-your-server}

Uma vez instalado o Tella Web e criada a primeira conta de usuário "administrador", é hora de configurar o projeto ou projetos para os quais a equipe em campo irá compartilhar informações. 



:::info
Dê uma olhada [neste tutorial em vídeo](/video-tutorials#connections-full-video) para uma demonstração de como configurar o Tella Web.
:::

### Admin center {#admin-center}


#### Configure spaces’ settings {#configure-spaces-settings}
Admins of the Tella Web space can enable or disable system-wide settings depending on their own risk assessment and privacy consideration:
- [Opt-in to share analytics with Tella team](/security-and-privacy#analytics).
- Login suspeito detectado:
    - If enabled Tella Web will record location for each login IP and approximate location based on IP. If the user is connecting from an unusual location Tella Web will block the login attempt to prevent any unauthorized sing-in and send an email to the user to confirm if was a legitimate login attempt. 
    - We use a [third party service](https://ipinfo.io/) to calculate the country of the IP. 
    - Tella Web requires an SMTP server to be properly configured and working for this feature to work. 
    - If disabled Tella Web won't store the IP, won't calculate location nor ping any third party service.
- Comentário:
    - When enabled, Tella Web shows a feedback box that allow users to send an anonymous note to the Tella team on any feedback request or bug reports that they might find. It doesn't contain any information about the user or the Tella Web instance.
    - Para garantir a privacidade e anonimato do usuário, somente dados essenciais são transmitidos para nosso servidor de feedback por meio de solicitações HTTPS POST. Os logs que contém informações de usuário (endereço de IP, data e hora e cabeçalho de requisição User-Agent) são automaticamente excluídos a cada semana.
    - On the Feedback server database, we only store a copy of the text sent by users in the feedback form and which platform it came from (in this case from "Tella Web" without specifying which server installation). 

#### Backup your space {#backup-your-space}

Admins of the Tella Web instance can export all data out of Tella Web by generating a backup. Backups can be used to port the data to another location, including a computer, a USB flash drive, an external disk or a remote server.  The action to generate the backup runs in the background and, if triggered, an email notification will be sent to the person who generated the backup when it is ready to download. However, all backups are accessible in the Admin Center to all users with admin access.

The backup is a full export everything in the space: including all Projects, Reports, Users and Resources, plus all metadata. The export is a zip file including a collection of CSVs and folders with with the uploaded media. For now, there is no way to import the backup back into a Tella Web instance from the Admin Center, but each backup includes a .sql file that advanced users can use to import the data to the database directly. 

:::warning
The information included in the backup is highly sensitive, it not only contains all the data (unencrypted) but also information about the Tella Web users. Please proceed with caution when generating the backup.
:::


### Gerenciando Projetos {#managing-projects}

O Tella Web permite a você criar e gerenciar projetos, garantindo que seus relatórios estejam organizados e acessíveis.

Projetos funcionam como pastas nas quais os usuários do Tella podem enviar relatórios. Por exemplo, você pode criar projetos para áreas geográficas específicas ou temas como violência policial, violência de gênero e ofensas ao meio ambiente.

Cada projeto tem sua própria URL. Assim, o usuário do Tella pode estar conectado a múltiplos projetos do Tella Web.


#### Visualize todos os projetos disponíveis {#view-all-available-projects}

Clique no botão "Projetos" no menu esquerdo de navegação para acessar a tela "Projetos".

A tela "Projetos" exibe cada projeto existente como um cartão.


#### Crie um novo projeto {#create-a-new-project}

Na tela "Projetos", clique no botão "Criar projeto". Aparecerá uma caixa de diálogo pedindo a você para nomear o projeto. Insira o nome desejado para o projeto e clique "Criar". Você será redirecionado para a tela "Configurações do projeto" para o novo projeto criado.


#### Abra um Projeto {#open-a-project}

Abra a tela "Projetos" e clique no cartão do projeto desejado. 

Isso abrirá o projeto, no qual você pode acessar todos os relatórios submetidos para ele.

Você pode abrir, excluir ou baixar os relatórios (a depender das suas permissões para este projeto específico).


#### Defina as configurações de um projeto {#configure-projects-settings}

Na tela "Configurações do projeto", você pode configurar o projeto:
* A seção "Geral" permite a você renomear o projeto, visualizar detalhes do projeto e modificar a URL dele.
* A seção "Gerenciar acesso" permite a você adicionar ou remover usuários do projeto. [Aqui](/tella-web#managing-users) há mais informações sobre os papéis dos usuários
* A seção "Zona de perigo" fornece opções para excluir o projeto, incluindo todos os relatórios dentro dele.


#### Apague um projeto {#delete-a-project}

Na tela "Configurações do projeto", role para baixo para a seção "Zona de perigo".

Clique na opção "Excluir projeto". 

Uma caixa de diálogo aparecerá alertando você sobre a exclusão permanente do projeto e todos os relatórios dele. Para continuar com a exclusão, insira o nome do projeto corretamente (incluindo o tamanho de caixa correto dos caracteres). Digite "DELETE" (em letras maiúsculas) para confirmar a exclusão.

Uma vez confirmada, o projeto e todos os relatórios associados a ele serão excluídos permanentemente. 


#### Configure a URL de um projeto {#configure-the-project-url}

A URL do projeto é automaticamente gerada quando ele é criado. Para editar a URL, dirija-se à seção "Geral" na tela de "Configurações do projeto" e modifique-a adequadamente. Esta URL é a que reportadores usarão para conectar ao projeto por meio de seus aplicativos.

:::info
A URL de você enviará aos usuários deve parecer com esta: `https://seu-dominio.com/p/nome-do-seu-projeto`
:::


### Gerenciando usuários {#managing-users}

### Entendendo os papéis dos usuários {#understanding-user-roles}
Usuários são uma parte importante do uso do Tella Web. Há diferentes papéis disponíveis para os usuários:
- Reportador: este é um usuário que pode conectar-se ao projeto Tella Web por um aplicativo móvel do Tella e carregar relatórios. Um reportador precisa estar alocado em um projeto para ser capaz de de carregar relatórios.
- Observador: este é um usuário que, além de carregar relatórios a partir do Tella, pode também fazer login no Tella Web para visualizar (mas não editar ou excluir) relatórios. Um observador precisa ser alocado em um projeto específico para obter acesso.
- Editor: este é um usuário que, como os observadores, pode carregar relatórios a partir do Tella e fazer login no Tella Web, mas também pode editar e excluir relatórios. Um editor precisa ser alocado em um projeto específico para obter acesso. 
- Admin: an admin can upload reports from Tella and perform all actions on Tella Web, including managing reports, projects, resources and users. An admin has access to all projects.

Aqui está uma visão detalhada das permissões para cada papel:

| |Reportador |Observador|Editor|Administrador |
|--------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--|
|**No Tella em dispositivos móveis**|
| Criar e carregar relatórios | ✅|✅|✅|✅| 
|**No Tella Web**| 
| Fazer login no Tella Web  |❌|✅|✅|✅| 
| Visualizar relatórios  |❌|✅|✅|✅| 
| Editar relatórios (renomear) |❌|❌|✅|✅| 
| Excluir relatórios |❌|❌|✅|✅| 
| Editar projetos (criar, renomear e editar URL) |❌|❌|✅|✅| 
| Excluir projetos |❌|❌|✅|✅| 
| Gerenciar usuários (criar, editar, excluir) |❌|❌|❌|✅| 
| Alocar usuários ao projeto |❌|❌|❌|✅| 
| Create resources to the space |❌|❌|❌|✅| 
| Adicione/remova recursos para o projeto  |❌|❌|✅|✅| 
| View resources assigned a project   |❌|✅|✅|✅| 




#### Criando usuários {#creating-users}

Na barra superior, acima da lista de usuários, o administrador do servidor pode clicar no botão "Criar usuário" para criar um novo usuário no servidor. E-mail, senha, confirmação de senha e papel são exigidos para criar usuários. 

No campo de senha, um medidor de segurança da senha ajuda administradores a criar senhas seguras. Estimamos a complexidade da senha usando a biblioteca [zxcvbn](https://github.com/dropbox/zxcvbn), a qual considera:
- Caracteres (mais de 10)
- Complexidade (caixa baixa, caixa alta, números, símbolos)
- Ausência de padrões comuns como datas, repetições (aaa), sequências (abcd), padrões de teclado (qwertyuiop)
- Ausência de senhas comuns como nomes, cidades, etc.


#### Gerenciando o acesso a projetos {#managing-access-to-projects}


In the "Manage access" section of the "Project settings" screen, admins can assign existing users to the project. Click the "Add users" field. A drop-down menu will display all the users on the server. Scroll through the list or type to search for a user by username.
After selecting the users to add to the project, click the "Add" button to save the changes and grant access to the project.

:::info
The full list of users who can submit reports to the project includes the users listed on this section plus all the server administrators.
:::

### Managing resources {#managing-resources}

O Tella Web permite que as organizações disseminem com segurança recursos e materiais para seus
usuários diretamente no contêiner criptografado do Tella. Os recursos podem ser usados para enviar instruções para coleta de dados, mensagens ou guias sobre como coletar dados.

#### Creating resources to the space {#creating-resources-to-the-space}

Admins can create resources to the space by navigating to the **Resources** left hand sidebar. For the moment resources can be created by uploading PDFs. We recommend keeping those smaller than 20MB to make sure users can download those even if internet is slow.

Resources are shared within the space. Keep in mind that resources are only available to users after adding those to specific projects. 

On the same screen, space admins can manage resources. The following options are available
- Download resources individually or downloading multiple resources.
- Open each resource to view it.
- Find out on which projects each resource is added to by tapping on Preview
- Delete a resource from the space.

:::info
If your organization need other type of Resources or if you experience problems with the format or size limits please [contact us](/contact-us).
:::

#### Adding resources to projects {#adding-resources-to-projects}

Admins and editors can add resources available on the space to projects they have access to. There are two shortcuts to do so:
1. By navigating to the **Manage Access** on the **Settings** section of each project.
2. By tapping the **Resources** icon on each project's card on the Homescreen of Tella Web.

Para adicionar recursos a projetos, toque em **Adicionar recursos** botão e procure recursos disponíveis pelo nome. Um ou muitos recursos podem ser adicionados para o projeto ao mesmo tempo.

All users that connects to this project from their Tella apps will see a Resources card available and they can download this Resource to their encrypted container.

Tella Web não mantém rastreio de informações sobre recursos de transferências.




## Prepare as pessoas nos locais de atuação para começar a submeter relatórios {#get-people-on-the-ground-ready-to-start-submitting-reports}


As etapas destacadas abaixo se aplicam tanto às versões do aplicativo Tella para Android quanto para iOS. A funcionalidade de reportar está disponível:

* no Tella para Android v2.1.0 (152) e posteriores
* no Tella para iOS v1.1.0 (43) e posteriores

Relatórios ainda não estão disponíveis no [Tella-FOSS](/faq#is-tella-available-on-f-droid).

:::info
Você pode assistir a [este vídeo](/video-tutorials#tella-web) sobre como configurar e utilizar os Relatórios no Tella.
:::


#### Conectar aos Projetos do Tella Web {#connect-to-tella-web-projects}

Para conectar-se a um servidor Tella Web:

* Navegue para: ** * Configurações ⚙️** > **Conexões** > **+**
* Selecione "Tella Web" da lista de tipos de servidores disponíveis.
* Insira as informações de login (geradas e fornecidas pelos administradores)
    * A URL do projeto Tella Web. A URL deve parecer com esta: `https://seu-dominio.com/p/nome-do-seu-projeto`
    * Seu Usuário e Senha
* Habilite ou desabilite funcionalidades avançadas com base em suas necessidades: [auto-reportar](#auto-report), [auto-excluir](#auto-delete) and [submissão em plano de fundo](#background-submission).


#### Gerenciar Projetos do Tella Web {#manage-tella-web-projects}

* In **Settings ⚙️** > **Connections** >  **[Project name]** > 3-dots, you can:
    * Editar: Abre a tela "editar servidor", na qual você pode visualizar o nome do projeto, a URL e o seu nome de usuário, além de editar funcionalidades avançadas.
    * Excluir: Exclui a conexão, incluindo todas as informações do servidor e todos os rascunhos e relatórios submetidos armazenados no Tella. Isso não afetará quaisquer relatórios já submetidos ao servidor.

#### Pull Resources from your space {#pull-resources-from-your-space}

Once connected to at least one Tella Web project, a **Resources** card will appear in the "Connections" section of the homescreen. Tap on this card to view and download any guides, instructions or messages your organization admins have made available to you in any of the projects you are connected to.

On the **Available for download** section of the Resources screen you will see a card for each of the resources that have been shared with you. Tap on the **Download icon** (📥) to pull this resource from your organization's space and be able to access those on the **Downloaded** section, even offline. You can **View** each PDF by tapping on the card and you can **Remove from downloads** if you want to free up space on you Tella vault. You can always re-download those when needed.

Use the **Refresh** button on the top right to pull new resources from your organization space. 

Once you disconnect from a Tella Web project all associated resources will be removed from your Resources screen.

#### Criar um Relatório Manual {#create-a-manual-report}

* Uma vez conectado a pelo menos um projeto Tella Web, um cartão de "Relatórios" será exibido na seção "Conexões" da tela inicial. Toque nesse cartão para começar a criar relatórios.
* A tela principal de relatórios permite a navegação entre as abas Rascunhos, Caixa de Saída e Submetidos.
* Toque no botão "Novo relatório" na parte inferior da tela para criar um novo relatório.
    * Na tela "Novo relatório", você pode preencher os detalhes do relatório, incluindo título, descrição e anexos opcionais de fotos, vídeos, documentos em PDF e arquivos de áudio.
    * Se está conectado a múltiplos projetos do Tella Web, você poderá selecionar, na parte superior da tela, a qual projeto submeter o relatório.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Para ser capaz de salvar como um rascunho, você precisa ao menos inserir o título do relatório.
    * Uma mensagem será exibida na tela para confirmar que o rascunho foi salvo.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* O botão “Submeter” envia o relatório para o projeto Tella Web imediatamente.
    * Caso a submissão falhe devido a problemas de conectividade, o relatório irá para a aba “Caixa de Saída”.
    * Caso o relatório seja submetido corretamente, ele irá para a aba “Submetidos”. 


#### Rascunhos de Relatórios {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * A confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving.
* Na aba Rascunhos, você pode visualizar e gerenciar os rascunhos de relatório. Abra um rascunho de relatório para continuar trabalhando nele e submetê-lo.
* Você pode excluir um rascunho de relatório tocando em três pontos > **Excluir** ou entrando no relatório e tocando no botão Excluir. 


#### Submeter um Relatório {#submit-a-report}

* Em um relatório, toque "Submeter" para iniciar a submissão do relatório.
* Você será redirecionado para uma tela de resumo que exibirá o progresso do carregamento para cada arquivo anexado.
* Um botão "Excluir" está disponível para interromper o carregamento e excluir o relatório.
* Se o relatório estiver sendo ativamente submetido, um botão "Pausar" permite a você suspender temporariamente o carregamento, o qual pode ser retomado mais tarde com o uso do botão "Retomar".
* Sair de um relatório não afeta o status do carregamento. Se o relatório está ativamente sendo carregado, o processo continua.

:::info
Após um relatório ser carregado no Tella Web, não é possível excluí-lo no Tella Web por meio do aplicativo Tella em dispositivos móveis. Excluir um relatório submetido somente irá excluir a versão local dele, não o relatório no servidor. 
:::

:::info
Excluir um relatório durante a submissão cancelará o carregamento dos arquivos que ainda não foram carregados, mas os arquivos submetidos e os parcialmente submetidos que já estão no Tella Web não serão excluídos.
:::


#### Caixa de Saída {#outbox}

The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen.

The Outbox contains:

* Submissões pausadas
* Submissões de relatório que foram interrompidas devido a problemas de conectividade.
* Relatórios marcados como "Submeter mais tarde"


#### Relatórios Submetidos {#submitted-reports}

- A aba Submetidos exibe relatórios submetidos com sucesso no servidor Tella Web.
- Na aba Submetidos, você pode visualizar e revisar os relatórios submetidos.

:::info
Caso a conexão com a internet seja interrompida, os relatórios irão para a aba caixa de saída e você precisará retomar a submissão manualmente.
:::


### Funcionalidades avançadas {#advanced-features}

#### Auto-reportar {#auto-report}

If auto-report is enabled, Tella will create and upload reports automatically whenever you take a photo, record a video, or capture an audio recording in Tella. This ensures that your reports are seamlessly uploaded without the need for manual work. Files get uploaded to the same auto-report if they are collected within the lapse of 30 minutes.

A funcionalidade Auto-reportar pode ser habilitada pela tela Editar conexões.

:::info
A funcionalidade auto-reportar somente pode ser habilitada para um projeto por vez
:::

#### Auto-excluir {#auto-delete}

Quando a auto-reportar está habilitada, você pode habilitar a auto-excluir, a qual automaticamente exclui relatórios e os arquivos associados a eles do seu dispositivo após eles serem carregados com sucesso para o Tella Web. Isso auxilia você a gerenciar o espaço de armazenamento do seu dispositivo e assegura que dados sensíveis não estão sendo retidos involuntariamente.

O botão de alternância para a auto-excluir aparecerá abaixo do botão de alternância para a auto-reportar na tela de Editar Conexão para o projeto desejado.

#### Submissão em Plano de Fundo {#background-submission}

Background submission allows the report submission process to continue even if you switch to other tasks within Tella or if you exit Tella entirely. Background submission can work in combination to both Manual and Auto-reports, and can be enabled on the Edit Connection screen for the desired project.

When background submission is enabled, regardless of what you do in Tella or whether you close the app, the upload process will continue without interruption. It will also work if auto-reports is enabled and you close the app after collecting the information.

Ao carregar relatórios em plano de fundo, o Tella permanece desbloqueado. Ou seja: se alguém abrir o Tella, será capaz de acessar seus arquivos e relatórios. Para bloquear o Tella quando os relatórios estão sendo carregados em plano de fundo, toque no botão "Saída Rápida" na parte superior da tela inicial do Tella.

If the submission is disrupted due to a weak internet connection or other factors, Tella will send the report to the Outbox tab and automatically restart the upload as soon as the phone regains a stable internet connection. 

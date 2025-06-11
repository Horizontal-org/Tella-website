---
id: uwazi
title: Uwazi
description: A conexão com servidor Uwazi está disponível para organizações que desejam coletar dados estruturados. 
slug: /uwazi
---

# Uwazi Connection

[Uwazi](https://uwazi.io/) é uma ferramenta de documentação de código aberto desenvolvida pela [HURIDOCS](https://huridocs.org). É uma aplicação de banco de dados flexível e nativa da web projetada para defensores dos direitos humanos gerenciarem suas coleções de informação, incluindo documentos, evidências, casos e queixas. 

O Uwazi permite que organizações agreguem, em um repositório central, dados coletados por seus membros ou parceiros. Os usuários do Tella conectam-se à instância Uwazi de suas organizações, baixam formulários (chamados templates), preenchem os templates quantas vezes precisarem (mesmo que não possuam conectividade de internet) e carregam os dados. Organizações podem, então, realizar a curadoria, organizar e publicar seus dados diretamente do Uwazi.

Similarly to all other server connections([Tella Web](/tella-web), [Google Drive](/g-drive), [Nextcloud](/nextcloud), [Dropbox](/dropbox), and [Open Data Kit](/odk)), connecting to Uwazi enhances the security of data collected on Tella by:
1. Permitir aos usuários coletar dados diretamente de dentro do contêiner criptografado do Tella
2. Assegurar que os dados são enviados diretamente do Tella para o Uwazi, sem depender de ferramentas ou aplicativos de terceiros
3. Permitir que usuários realizem backup de seus dados em um servidor remoto, para diminuir o risco de os dados serem descobertos em seus dispositivos móveis
4. Assegurar que organizações possam preservar informações importantes, mesmo no caso de apreensão ou destruição de dispositivo, e possam organizá-las para processos de pesquisa, advocacia pública ou processos de responsabilização

### Testando Uwazi {#testing-uwazi}

Você pode testar o Uwazi usando [esta instância Demonstrativa](https://demo.uwazi.io/).

### Quando usar Uwazi {#when-to-use-uwazi}

Recomendamos Uwazi para organizações que precisam que usuários em seus locais de atuação coletem dados de uma maneira estruturada através de formulários. 

O Uwazi permite que gerentes de projeto facilmente organizem, analisem, visualizem e publiquem os dados coletados. É especialmente poderoso pois seu banco de dados autoriza fazer relacionamentos entre entidades, o que ajuda a conectar pontos de dados (como incidentes, agressores e vítimas) para revelar padrões. Uwazi também é ótimo para coletar dados em diversos idiomas e facilitar a colaboração entre equipes.

O Uwazi não possui um aplicativo oficial para dispositivos móveis. Então, ao integrar Uwazi e Tella, você pode usufruir da criptografia do Tella e capacidades offline e aproveitar por completo das habilidades do Uwazi em organizar, buscar, baixar, visualizar e publicar informações. 

Aqui estão algumas dicas sobre o Uwazi que podem ser adequadas ao seu caso específico:
- Você precisa tornar os dados coletados publicamente acessíveis em um website.
- Você precisa estabelecer relações entre os pontos de dados.
- Data must be contained in structured database registers.
- You need to clean up, edit, organise and curate the collected data.
- You need to quickly search, find and analyse data.
- You work in a multilingual environment.
- You work in a collaborative environment with multiple users and different profiles.
- You need to preserve information in a secure way over the long term.

Você pode aprender mais sobre o Uwazi na [documentação oficial do Uwazi](https://uwazi.readthedocs.io/en/latest/). A HURIDOCS é uma ótima aliada da Horizontal. Por isso, se tiver dúvidas sobre Uwazi ou desejar que conectemos você à equipe da HURIDOCS, [entre em contato conosco](contact-us).

:::tip
If you need help figuring out if Uwazi is best for your use-case, [read our guide](/for-organizations) or [contact us](/contact-us)!
:::

## Configure Uwazi on a server {#configure-uwazi-on-a-server}


The HURIDOCS team offers 2 alternatives on how to set up your uwazi server:

1. Self-hosted: Share this [comprehensive administrator guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) with your system's administrator for step-by-step instructions on how to install Uwazi on your server, configure backups, and set up advanced features. 
2. Hosted by HURIDOCS: HURIDOCS offer hosting packages as a service. Free hosting services  (up to a storage limit) and a trial version of Uwazi are available for human rights organizations. [Reach out to HURIDOCS](https://huridocs.org/services/) for more details about the service.  

## Modele seus Dados {#model-your-data}

An Uwazi collection is made up of Entities. An entity has Properties which are the fields that Tella users will fill to collect data. Entities can hold Primary Documents and/or Supporting Files and some properties that are defined by administrators on the Uwazi server when they create templates. A template is an empty form that can be filled as many times as needed; once a template is filled, it becomes an Entity. 

[Você pode ler aqui](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) sobre as propriedades disponíveis no servidor Uwazi e como modelar seus dados e criar seus templates. Por hora, apenas suportamos propriedades e funcionalidades marcadas como de alta prioridade pelos usuários do Uwazi. Se você precisa de outras propriedades [entre em contato conosco](/contact-us).

:::info
Se usuários do Tella baixam um template que possui propriedades não suportadas pelo Tella, tais propriedades não serão mostradas no aplicativo. No entanto, os usuários ainda poderão enviar as entidades, e os administradores poderão acessá-las, incluindo todas as propriedades que foram preenchidas, sem nenhum problema.
:::

### Propriedades Disponíveis {#available-properties}

| **Propriedade ou Funcionalidade** | **Tella para Android**| **Tella para iOS** | **Tella Android FOSS** |
|------|------|-----|-----| 
| Documentos Primários e de Suporte | ✔️ | ✔️ | ✔️ |
| Texto Simples | ✔️ | ✔️ | ✔️ |
| Numérica | ✔️ | ✔️ | ✔️ |
| Seleção Simples  | ✔️ | ✔️ | ✔️ | 
| Seleção Múltipla  | ✔️ | Não | ✔️ | 
| Relacionamento | ✔️ | ✔️ | ✔️ |
| Data Única | ✔️ | ✔️ | ✔️ |
| Múltiplas Datas | ✔️ | Não | ✔️ |
| Link Externo | ✔️ | Não | ✔️ |
| Texto Enriquecido | ✔️ | ✔️ | ✔️ |
| Intervalos de Data Únicos e Múltiplos  | ✔️ | Não | ✔️ |
| Anexar Mídia (Imagem, Vídeo ou Áudio) | ✔️| ✔️ | ✔️ |
| Geolocalização | ✔️ | Não | ✔️ |
| ID Gerada  | ✔️ | Não | ✔️ |


## Prepare as Pessoas nos Locais de Atuação para Começar a Submeter Dados {#get-people-on-the-ground-ready-to-start-submitting-data}

### Conecte-se ao Servidor  {#connect-to-the-server}

Para conectar-se a um servidor Uwazi:

* Navigate to **Settings ⚙️** > **Connections** > **+**
* Selecione "Uwazi" da lista de tipos de servidores disponíveis.
* Insira a URL do servidor Uwazi da organização (gerado e fornecido pelos administradores).
* Escolha entre:
    *  **Fazer Login:**  se um nome de usuário e uma senha foram fornecidos pelos administradores.
    *  **Acesso Público:**  se os servidores estiverem configurados para aceitar submissões anônimas.
* If the server requires two-factor authentication, enter the one-time code.
* Escolha o **Idioma** no qual deseja exibir os templates.

:::info
Você pode assistir a [este vídeo](/video-tutorials#uwazi) sobre como conectar a um servidor Uwazi por meio do Tella.
:::

### Compartilhe Informações {#send-your-information}

Uma vez que conectou com sucesso a uma instância Uwazi, você verá um novo cartão com o rótulo "Uwazi" nas seções de **Conexões** da sua tela inicial do Tella. 

To download a template, tap the **+** button at the bottom of the screen. You will see a list of templates that are available to you on all the Uwazi instances you are connected to. Tap on the **Download** button to download templates or the **Refresh** button to see if there are updates to the templates available to you on the server.

Então, retorne para a tela principal do Uwazi e toque no template desejado para usá-lo para criar uma entidade.


#### Alternativas para Submissão de Dados {#data-submission-alternatives}

| **Funcionalidade** | **Detalhes**| **Tella para Android** | **Tella para iOS** | 
|------|------|------|------|
| Submeter | Envia o formulário preenchido para o servidor conectado. | Sim | Sim |
| Salvar como rascunho | Salva um formulário incompleto.  | Sim | Sim |
| Submeter mais tarde | Mark a form as ready and send it to the Outbox tab.  | Sim | Sim |
| Aba Rascunhos | Uma aba com todos os rascunhos. Rascunhos podem ser editados ou apagados.   | Sim | Sim |
| Aba Caixa de Saída | Uma aba com os formulários prontos para submissão. Formulários na caixa de saída podem ser editados ou apagados.  | Sim | Sim |
| Aba Submetidos | Uma aba com todos os formulários enviados com sucesso para o servidor. Formulários submetidos podem ser apagados.  | Sim | Sim |
| Pausar/Retomar submissão | Usuários podem pausar manualmente uma submissão e retomá-la quando for o momento.  | Sim | Não |
| Pausa automática da submissão quando offline | Submissões serão enviadas para a aba Caixa de Saída caso ocorra uma falha por problemas de conectividade.   | Sim | Sim |



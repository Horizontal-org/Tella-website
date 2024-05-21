---
id: tella-web
title: Tella Web
description: A funcionalidade Relatórios empodera usuários a carregar fotos, vídeos, PDFs e gravações de áudio para o servidor Tella Web de sua organização de forma conveniente
slug: /tella-web
---

# Tella Web 

O Tella Web é uma ferramenta de código aberto que permite a indivíduos e organizações centralizar e gerenciar relatórios enviados por usuários do Tella, incluídos fotos, vídeos e arquivos de áudio.

O Tella Web  desenvolvido internamente pela nossa equipe na Horizontal, a mesma responsável por desenvolver os aplicativos para dispositivos móveis do Tella. É uma solução amigável ao usuário para realizar backup de arquivos de mídia para um servidor remoto de uma maneira segura e privativa. Podemos fornecer suporte para a instalação, a configuração e a manutenção da instância Tella Web caso você não conte com alguém na sua organização que possa fazê-lo.

Similarmente a todas as outras conexões ([Uwazi](/uwazi) and [Open Data Kit](/odk)), conectar-se ao Tella Web aumenta a segurança dos dados coletados no Tella por:
1. Permitir aos usuários coletar dados diretamente de dentro do contêiner criptografado do Tella.
2. Assegurar que os dados são enviados diretamente do Tella para o Tella Web, sem depender de ferramentas ou aplicativos de terceiros.
3. Permitir aos usuários realizar backup de seus dados em um servidor remoto, para diminuir o risco de os dados serem descobertos em seus dispositivos móveis. 
4. Assegurar que as organizações possam preservar informações importantes, mesmo no caso de apreensão ou destruição de dispositivo, e possam organizá-las para uso em processos de pesquisa, advocacia pública ou processos de responsabilização.

O Tella Web é uma ótima opção para coletar "relatórios" de usuários. Os Relatórios podem incluir fotos, vídeos, gravações de áudio, documentos em PDF e texto.

A configuração do Tella Web envolve três etapas, os quais são minuciosamente discutidos nesta seção:

* **Instalar o Tella Web**: esta etapa envolve instalar o servidor Tella Web e configurar o nome do domínio para assegurar seu funcionamento adequado.
* **Configurar seu(s) projeto(s) no seu servidor**: Nesta etapa, administradores decidem como se organizar para coletar dados, criar “projetos” e definir papéis e permissões para seus usuários.
* **Preparar as pessoas nos locais de atuação para começar a submeter relatórios.**: Usuários instalam o Tella no seu dispositivo Android ou iPhone. Eles, então, conectam-se ao projeto do Tella Web e iniciam a coleta de informações.


## Instale o servidor {#install-the-server}

Esta etapa consiste em instalar e configurar o Tella Web no servidor que a sua organização irá utilizar. Ela precisa ser completada pela pessoa que será responsável pela administração do sistema (um desenvolvedor ou um administrador de sistemas). Instruções técnicas podem ser encontradas em [nosso Github](https://github.com/Horizontal-org/tellaweb). 



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
- Administrador: um administrador pode carregar relatórios a partir do Tella e realizar todas as ações no Tella Web, incluindo gerenciar relatórios, projetos e usuários. Um administrador tem acesso a todos os projetos. 

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

#### Criando usuários {#creating-users}

Na barra superior, acima da lista de usuários, o administrador do servidor pode clicar no botão "Criar usuário" para criar um novo usuário no servidor. E-mail, senha, confirmação de senha e papel são exigidos para criar usuários. 

No campo de senha, um medidor de segurança da senha ajuda administradores a criar senhas seguras. Estimamos a complexidade da senha usando a biblioteca [zxcvbn](https://github.com/dropbox/zxcvbn), a qual considera:
- Caracteres (mais de 10)
- Complexidade (caixa baixa, caixa alta, números, símbolos)
- Ausência de padrões comuns como datas, repetições (aaa), sequências (abcd), padrões de teclado (qwertyuiop)
- Ausência de senhas comuns como nomes, cidades, etc.


#### Gerenciando o acesso a projetos {#managing-access-to-projects}


Na seção "Gerenciar acesso" da tela "Configurações do projeto", administradores podem alocar os usuários existentes no projeto. Clique no campo "Adicionar usuários". Um menu suspenso exibirá todos os usuários do servidor. Role a lista ou digite para procurar por um usuário pelo nome de usuário.
Após selecionar os usuários para adicionar ao projeto, clique no botão "Adicionar" para salvar as mudanças e conceder acesso ao projeto.

:::info
A lista completa de usuários que podem submeter relatórios para o projeto inclui os usuários listados nesta seção e todos os administradores
:::

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

* Navegue por **Configurações ⚙️** > **Servidores** > **+**
* Selecione "Tella Web" da lista de tipos de servidores disponíveis.
* Insira as informações de login (geradas e fornecidas pelos administradores)
    * A URL do projeto Tella Web. A URL deve parecer com esta: `https://seu-dominio.com/p/nome-do-seu-projeto`
    * Seu Usuário e Senha
* Habilite ou desabilite funcionalidades avançadas com base em suas necessidades: [auto-reportar](#auto-report), [auto-excluir](#auto-delete) and [submissão em plano de fundo](#background-submission).


#### Gerenciar Projetos do Tella Web {#manage-tella-web-projects}

* Em **Configurações ⚙️** > **Servidores** >  **[Nome do projeto]** > 3-pontos, você pode:
    * Editar: Abre a tela "editar servidor", na qual você pode visualizar o nome do projeto, a URL e o seu nome de usuário, além de editar funcionalidades avançadas.
    * Excluir: Exclui a conexão, incluindo todas as informações do servidor e todos os rascunhos e relatórios submetidos armazenados no Tella. Isso não afetará quaisquer relatórios já submetidos ao servidor.

#### Criar um Relatório Manual {#create-a-manual-report}

* Uma vez conectado a pelo menos um projeto Tella Web, um cartão de "Relatórios" será exibido na seção "Conexões" da tela inicial. Toque nesse cartão para começar a criar relatórios.
* A tela principal de relatórios permite a navegação entre as abas Rascunhos, Caixa de Saída e Submetidos.
* Toque no botão "Novo relatório" na parte inferior da tela para criar um novo relatório.
    * Na tela "Novo relatório", você pode preencher os detalhes do relatório, incluindo título, descrição e anexos opcionais de fotos, vídeos, documentos em PDF e arquivos de áudio.
    * Se está conectado a múltiplos projetos do Tella Web, você poderá selecionar, na parte superior da tela, a qual projeto submeter o relatório.
* Use o botão "Salvar rascunho" (na parte superior direita da tela) para salvar o relatório sem deixar a tela de "Novo relatório". 
    * Para ser capaz de salvar como um rascunho, você precisa ao menos inserir o título do relatório.
    * Uma mensagem será exibida na tela para confirmar que o rascunho foi salvo.
* O botão "Submeter mais tarde" salva o relatório na Caixa de Saída para submissão manual.
    * A aba caixa de saída é frequentemente usada quando os coletores de dados não possuem acesso à internet ou se a conexão não estiver estável.
* O botão “Submeter” envia o relatório para o projeto Tella Web imediatamente.
    * Caso a submissão falhe devido a problemas de conectividade, o relatório irá para a aba “Caixa de Saída”.
    * Caso o relatório seja submetido corretamente, ele irá para a aba “Submetidos”. 


#### Rascunhos de Relatórios {#draft-reports}


* Na tela "Novo relatório", toque o botão "Salvar rascunho" para salvar o relatório como um rascunho.
    * Será exibida uma mensagem de confirmação e você poderá continuar trabalhando no relatório ou sair para retornar mais tarde.
* Caso tente sair de um relatório sem salvar, será solicitado que você confirme que deseja sair sem salvar o relatório.
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

A Caixa de Saída contém relatórios salvos para submissão. Estes podem ser:

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

Se o auto-reportar estiver habilitado, o Tella criará e submeterá relatórios automaticamente sempre que você tirar uma foto, gravar um vídeo ou capturar uma gravação de áudio no Tella. Isso assegura que seus relatórios sejam corretamente carregados sem a necessidade de trabalho manual. Os arquivos são carregados para o mesmo relatório automático se eles forem coletados em um intervalo de 30 minutos.

A funcionalidade Auto-reportar pode ser habilitada pela tela Editar conexões.

:::info
A funcionalidade auto-reportar somente pode ser habilitada para um projeto por vez
:::

#### Auto-excluir {#auto-delete}

Quando a auto-reportar está habilitada, você pode habilitar a auto-excluir, a qual automaticamente exclui relatórios e os arquivos associados a eles do seu dispositivo após eles serem carregados com sucesso para o Tella Web. Isso auxilia você a gerenciar o espaço de armazenamento do seu dispositivo e assegura que dados sensíveis não estão sendo retidos involuntariamente.

O botão de alternância para a auto-excluir aparecerá abaixo do botão de alternância para a auto-reportar na tela de Editar Conexão para o projeto desejado.

#### Submissão em Plano de Fundo {#background-submission}

A submissão em plano de fundo permite que o processo de submissão de relatórios continue mesmo se você alternar para outras tarefas dentro do Tella ou sair do Tella completamente. A submissão em plano de fundo pode funcionar combinada tanto a relatórios manuais como a automáticos. E pode ser habilitada na tela de Editar Conexão para o projeto desejado.

Quando a submissão em plano de fundo está habilitada, independentemente do que você faça no Tella ou de você fechar o aplicativo, o processo de carregamento continuará sem interrupção. Também funcionará se a função auto-reportar estiver habilitada e você fechar o aplicativo após coletar as informações.

Ao carregar relatórios em plano de fundo, o Tella permanece desbloqueado. Ou seja: se alguém abrir o Tella, será capaz de acessar seus arquivos e relatórios. Para bloquear o Tella quando os relatórios estão sendo carregados em plano de fundo, toque no botão "Saída Rápida" na parte superior da tela inicial do Tella.

Caso a submissão seja interrompida devido a uma conexão fraca com a internet ou outros fatores, o Tella enviará o relatório para a Caixa de Saída e automaticamente reiniciará o carregamento assim que o telefone recuperar uma conexão estável com a internet.
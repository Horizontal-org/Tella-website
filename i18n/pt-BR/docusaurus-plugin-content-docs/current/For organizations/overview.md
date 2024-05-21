---
id: overview
title: Visão geral
description: Aprenda como organizações podem usar o Tella para pesquisa, advocacia pública, ou processos de responsabilização
slug: /for-organizations
---

# Tella para organizações - Visão Geral

Para além de manter os dados protegidos dentro do aplicativo, usuários podem também conectar-se a um servidor para fazer backup de seus dados de forma segura. Este é tipicamente um servidor mantido por organizações, nos quais elas podem centralizar os dados coletados por voluntários ou ativistas nos campos de atuação. Esses indivíduos reúnem informações usando Tella em seus telefones e, então, enviam para as organizações.

Implantações anteriores do Tella, nas quais usuários nos campos de atuação coletavam dados e enviavam para um servidor da organização, variaram entre 1 e 2.000 usuários. 📲 📡. Você pode ler histórias de usuários [aqui](/user-stories), ou entrar em contato conosco para que possamos te ajudar a encontrar a melhor forma de usar o Tella na sua organização.

Atualmente, o Tella pode ser conectado aos seguintes tipos de servidores:

* [Open Data Kit (ODK)](#open-data-kit-odk)
* [Uwazi](#uwazi)
* [Tella Web](#tella-web)

Estes são chamados [Conexões](/features#connecting-to-servers) no Tella.


## Selecionando o tipo correto de servidor {#selecting-the-right-type-of-server}

Abaixo está um esquema básico e não abrangente para ajudar a determinar qual dos três tipos de servidor é mais adequado a diferentes necessidades. Esse é um bom ponto inicial, mas você também pode assistir a [esse vídeo](/video-tutorials#connections-full-video), no qual apresentamos cada tipo de servidor. Caso precise de ajuda para decidir ou deseje solicitar uma nova Conexão (uma integração com um novo tipo de servidor), [fale conosco!](/contact-us)

```mermaid
graph TD;
    id1(Que tipo de dados os usuários precisam enviar?) --> id2("Principalmente dados estruturados (formulários), com mídias anexadas");
    id1 --> id3("Principalmente arquivos de mídia, com algum texto") ;
    id2 --> id4("De quais funcionalidades adicionais você precisa?");
    id3 --> id5("Tella Web");
    id4 --> id6("Estabelecer relações entre pontos de dados, publicar em um website")
    id4 --> id7("Adicionar lógica a formulários, coletar um grande número de formulários, criar relatórios para visualizar resultados")
    id6 --> id8("Uwazi")
    id7 --> id9("Open Data Kit (ODK)")
```

### Tella Web {#tella-web}

Tella Web é uma ferramenta de código aberto que permite a indivíduos e organizações centralizar e gerenciar relatórios enviados por usuários do Tella, incluindo fotos, vídeos, documentos em PDF e arquivos de áudio.

Não é o equivalente do aplicativo móvel; ao invés disso, é uma ferramenta especificamente projetada para a centralização e gerenciamento dos relatórios enviados via Tella da maneira mais simples possível. Com o Tella Web, você pode criar projetos, que funcionam como pastas nas quais usuários do Tella podem submeter relatórios. Por exemplo, você pode criar projetos para áreas geográficas específicas ou temas como violência policial, violência de gênero e ofensas ao meio ambiente. No Tella Web, você também pode gerenciar os usuários que podem carregar relatórios para cada projeto, designar funções diferentes e definir permissões.

Tella Web é desenvolvido internamente pela nossa equipe na Horizontal, a mesma responsável por desenvolver os aplicativos para dispositivos móveis do Tella. É  uma solução amigável ao usuário para gerenciar relatórios de maneira segura e privativa. Podemos fornecer suporte para a instalação e configuração de um servidor Tella Web caso você não conte com alguém na sua organização que possa mantê-lo.

A conexão Tella Web está disponível no Tella para Android e no Tella para iOS, mas ainda não no [Tella-FOSS](/faq#is-tella-available-on-f-droid).

Saiba mais sobre o Tella Web [aqui](/tella-web)


### Uwazi {#uwazi}

[Uwazi](/uwazi) é uma ferramenta de documentação de código aberto desenvolvida pela HURIDOCS. É uma aplicação de banco de dados flexível e nativa da web projetada para defensores dos direitos humanos gerenciarem suas coleções de informação, incluindo documentos, evidências, casos e queixas.

Organizações que utilizam Uwazi como um banco de dados podem conectar o Tella a um ou mais bancos de dados para carregar dados. As únicas exigências para conectar o Tella ao Uwazi são a URL do banco de dados Uwazi e um nome de usuário e senha. O banco de dados Uwazi já deve ter um ou mais templates configurados, os quais podem ser baixados para o Tella. Após completar o download com sucesso, os usuários podem facilmente navegar entre seus templates para inserir detalhes para cada novo registro, mesmo quando não há conexão com a internet. Quando a entrada de dados estiver completa, ela pode ser salva como um rascunho no aplicativo Tella ou imediatamente carregada para o banco de dados Uwazi conectado. Isso permite a usuários que trabalham offline coletar dados e carregá-los quando for conveniente.

Fontes para saber mais sobre Uwazi:
* vídeo demonstrativo da conexão Uwazi [aqui](/video-tutorials#uwazi).
* [Mais informações sobre como usar Tella com Uwazi](/uwazi).
* [postagem de blog da equipe do Uwazi](https://huridocs.org/2022/07/the-new-tella-app-lets-uwazi-users-document-violations-safely-and-while-offline/) sobre a conexão.
* [Website](https://uwazi.io/) e [documentação](https://uwazi.readthedocs.io/en/latest/) do Uwazi.



### Open Data Kit (ODK) {#open-data-kit-odk}

O [Open Data Kit (ODK)](https://getodk.org/) é um padrão aberto usado para criar formulários personalizados e coletar dados. Para conectar um servidor Open Data Kit, você primeiro precisa criar formulários com diferentes tipos de questões (texto, data, geolocalização, mídia, etc.) usando quaisquer das ferramentas em conformidade com o ODK.

Em nossa [página sobre a conexão do servidor Open Data Kit](/odk) explicamos como criar uma conta, onde encontrar informações sobre a criação de formulários e como conectar-se ao servidor a partir do Tella. Se está considerando usar o Open Data Kit ou precisa de ajuda para [implantar](/faq#deploying-tella) sua instância, por favor [entre em contato conosco](/contact-us).


:::info
A conexão ODK está [somente disponível no Android](/features). 
:::

:::tip
Você também pode ver uma demonstração da conexão ODK [aqui](/video-tutorials#open-data-kit).
:::


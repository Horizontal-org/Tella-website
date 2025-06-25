---
id: odk
title: Open Data Kit (ODK)
description: A conexão do servidor Open Data Kit está disponível para organizações que desejem coletar dados estruturados usando formulários. 
slug: /odk
---

# Open Data Kit (ODK) Connection

O [Open Data Kit (ODK)](https://getodk.org/) é um padrão aberto usado para criar formulários personalizados e coletar dados.

Um servidor Open Data Kit permite que organizações agreguem, em um repositório central, dados coletados por seus membros ou parceiros. Os usuários do Tella conectam-se à instância ODK de suas organizações, preenchem formulários quantas vezes precisarem (mesmo que não possuam conectividade de internet) e carregam os dados. Organizações podem baixar os dados do servidor ou analisá-los no servidor, a depender das alternativas de servidor escolhidas.

Similarly to any other server connection (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Dropbox](/dropbox), [Nextcloud](/nextcloud) or [Uwazi](/uwazi)), connecting to the ODK server enhances the security of data collected on Tella by:

1. Permitir aos usuários coletar dados diretamente de dentro do contêiner criptografado do Tella.
2. Assegurar que os dados sejam enviados diretamente do Tella para o servidor ODK, sem depender de ferramentas ou aplicativos de terceiros.
3. Permitir aos usuários realizar backup de seus dados em um servidor remoto, para diminuir o risco de os dados serem descobertos em seus dispositivos móveis. 
4. Assegurar que as organizações possam preservar informações importantes, mesmo no caso de apreensão ou destruição de dispositivo, e possam organizá-las para uso em processos de pesquisa, advocacia pública ou processos de responsabilização.

### Choosing and Installing Your ODK Server {#choosing-and-installing-your-odk-server}

Porque o ODK é um padrão aberto, o Tella pode ser usado com quaisquer ferramentas em conformidade com o ODK.

For civil society organizations and human rights defenders, we recommend using [KoboToolbox](https://www.kobotoolbox.org/) to create forms with custom questions, manage users, and aggregate the data submitted by users. Based on our experience, KoboToolbox is user-friendly and flexible, and it is also open source. KoboToolbox offers a [community plan for non-profits](https://www.kobotoolbox.org/pricing/) and offer free training resources and guidance on how to structure the data on the server (Self-serve learning base and Community Forum). It is also possible [to use a private instance of KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) or [self-host it](https://support.kobotoolbox.org/kobo_your_servers.html).

:::tip
We are work closely with the Kobotoolbox team. If you are interested in using the Tella-KoboToolbox connection and would like some support or to discuss the best hosting plan for your use case, please [contact us](/contact-us). 
:::

There are other ODK-compliant apps available, like [Ona](https://ona.io/home/) or [ODK Cloud](https://https://getodk.org/index.html). Tella works with any of these. 


### Quando Usar o ODK {#when-to-use-odk}

We recommend ODK to organizations that need on-the-ground users to collect data in a structured manner like forms. We also recommend it to organizations that don't have the technical capacity to install and maintain a server and want to use a ready-to-use cloud instance. If you use a cloud instance, remember that the organization hosting your ODK instance will be able to access your data. This is an important consideration when deciding whether to self-host or use a cloud service. 

ODK e KoboToolbox são amplamente utilizadas, bem documentadas e fáceis de usar. Há guias disponíveis e elas oferecem suporte para organizações sem fins lucrativos sobre como estruturar e manter os dados.

:::tip
If you need help figuring out if ODK is best for your use-case, [read our guide](/for-organizations) or [contact us](/contact-us)!
:::

## Modele seus Dados {#model-your-data}

KoboToolbox oferece [aqui](https://support.kobotoolbox.org/overview_of_creating_a_project.html) um guia detalhado sobre como criar seu projeto e adicionar questões aos seus formulários e como implantá-los para torná-los disponíveis para usuários em seus locais de atuação.

## Conecte o Tella a uma Instância ODK para Coletar Dados {#connect-tella-to-an-odk-instance-to-collect-data}

Nessa documentação, focamos em como coletar dados usando o Tella. Há outras alternativas de aplicativos para dispositivos móveis que podem ser usadas para coletar dados no ODK, incluindo o aplicativo para Android ODK Collect. Você pode ver uma comparação entre essas alternativas [aqui](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
A conexão ODK não está disponível no Tella para iOS.
:::

### Conecte a um Servidor ODK {#connect-to-an-odk-server}
After creating and deploying a Form using any ODK-compliant server, in Tella, go to **Settings** > **Connections** > **+** > **Open Data Kit (ODK)**. Fill the following fields:
- **Nome do Servidor**: Um nome descritivo para o seu servidor no Tella. O nome selecionado por você está apenas visível no aplicativo e não impacta a conexão ODK.
- **URL do Servidor**: A URL do seu servidor. Por exemplo, `kc.kobotoolbox.org` caso esteja usando o servidor público do KoboToolbox.
Se o servidor requerer autenticação de usuário, toque no botão **Avançado**  e entre o seu **Nome de usuário** e **Senha**. O administrador do seu servidor deve fornecer todas essas informações para você.


### Preencha formulários {#fill-forms}

Após ter se conectado com sucesso à instância ODK, você verá um novo cartão chamado "Formulários" nas seções **Conexões** na tela inicial do Tella.

After you enter the **Forms** section, you will see a list of Forms available to you on the instance(s) that you are connected to. Using the **Download** button you can download forms to Tella so that you can fill them, even if you are not connected to the internet.

Você pode tocar em cada formulário em branco para começar a preenchê-lo.


#### Submeta formulários {#submit-forms}

As you collect data and fill forms the following options are available to increase offline support on Tella:
- Submeter: enviar o formulário preenchido para o servidor ODK.
- Salvar como rascunho: salvar um formulário que não está completo para continuar a trabalhar nele depois.
- Submeter mais tarde: marque um formulário como completo para submetê-lo posteriormente. Até que seja enviado, estará disponível da aba Caixa de Saída.
- Aba Rascunhos: uma aba com a lista de todos os formulários salvos como rascunho. Rascunhos podem ser editados ou apagados.
- Caixa de Saída: uma tabela com a lista de todos os formulários a serem submetidos. Formulários da Caixa de Saída podem ser editados, apagados ou submetidos.
- Aba Submetidos: uma aba com a lista de todos os formulários que foram enviados ao servidor com sucesso. Formulários submetidos podem ser apagados. 
- Pausar/Retomar submissão: você pode pausar manualmente a submissão e retomá-la quando for o momento.
- Pausar automaticamente a submissão quando estiver offline: os fomulários serão enviados para a aba Caixa de Saída se a submissão falhar devido a problemas de conectividade.

### Tipos de Perguntas Suportadas {#supported-question-types}
Abaixo está uma visão geral dos tipos de pergunta do ODK que são suportados pelo Tella para Android. Se houver um tipo de questão que não é suportado no Tella e é crucial para o seu fluxo de trabalho, por favor [entre em contato conosco](/contact-us).

| **Tipo de pergunta** | **Tella para Android** | 
|------|------|
| Selecione Um | ✔️ |
| Selecione Muitos | ✔️ |
| Texto | ✔️ |
| Número / Decimal | ✔️ |
| Data | ✔️ |
| Hora | ✔️ |
| Data & hora | Não  |
| Ponto (calcule minha localização atual) | ✔️ |
| Ponto (mostre minha localização em um mapa) | ✔️ |
| Ponto (deixe-me escolher minha localização em um mapa) | ✔️ |
| Linha | Não |
| Área | Não |
| Foto | ✔️ |
| Assinatura por foto (escrever minha assinatura à mão) | ✔️ |
| Áudio | ✔️ |
| Vídeo | ✔️ |
| Arquivo | ✔️ |
| Nota | ✔️ |
| Código de Barras / QR Code | Não |
| Confirmação | ✔️ |
| Avaliação | ✔️ |
| Matriz de Perguntas | Não |
| Classificação | ✔️ |
| Calcular | Não |
| Oculto | Não |
| Intervalo | Não |
| XML Externo | Não |

### Funcionalidades Suportadas {#supported-features}

Abaixo está uma visão geral das funcionalidades do ODK que possuem suporte no Tella para Android. Se houver uma funcionalidade que não é suportada no Tella e é crucial para o seu fluxo de trabalho, por favor [entre em contato conosco](/contact-us).

| **Funcionalidade** | **Tella para Android** | 
|------|------|
| [Coleta de dados offline](/odk#submit-forms) | ✔️ |
| [Lógica do formulário](https://docs.getodk.org/form-logic/) | ❌ |
| [Tornando uma resposta obrigatória](https://docs.getodk.org/form-logic/#requiring-responses) | ✔️ |
| [Configurando respostas padrão](https://docs.getodk.org/form-logic/#setting-default-responses) | ❌ |
| [Acionando cálculos com mudanças de valor](https://docs.getodk.org/form-logic/#triggering-calculations-on-value-change) | ❌ |
| [Validando e restringindo respostas](https://docs.getodk.org/form-logic/#validating-and-restricting-responses) | ❌ |
| [Exibindo perguntas condicionalmente](https://docs.getodk.org/form-logic/#conditionally-showing-questions) | ✔️ |
| [Grupos de perguntas](https://docs.getodk.org/form-logic/#groups-of-questions) | ✔️ |
| [Repetindo perguntas](https://docs.getodk.org/form-logic/#repeating-questions) | ✔️ |
| [Filtrando opções em perguntas que contém seleção](https://docs.getodk.org/form-logic/#filtering-options-in-select-questions) | ✔️ |
| [Gerando perguntas do tipo "selecionar um" a partir de repetições](https://docs.getodk.org/form-logic/#generating-select-ones-from-repeats) | ❌ |
<<<<<<< odk-unsupported
| [Form metadata (background data collection)](https://docs.getodk.org/form-audit-log/) | ❌ |
=======
| Automatically collecting form metadata| ❌ |
>>>>>>> development

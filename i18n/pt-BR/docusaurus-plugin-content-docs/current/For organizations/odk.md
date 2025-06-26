---
id: odk
title: Open Data Kit (ODK)
description: A conexão do servidor Open Data Kit está disponível para organizações que desejem coletar dados estruturados usando formulários. 
slug: /odk
---

# Open Data Kit (ODK)

O [Open Data Kit (ODK)](https://getodk.org/) é um padrão aberto usado para criar formulários personalizados e coletar dados.

Um servidor Open Data Kit permite que organizações agreguem, em um repositório central, dados coletados por seus membros ou parceiros. Os usuários do Tella conectam-se à instância ODK de suas organizações, preenchem formulários quantas vezes precisarem (mesmo que não possuam conectividade de internet) e carregam os dados. Organizações podem baixar os dados do servidor ou analisá-los no servidor, a depender das alternativas de servidor escolhidas.

Similarmente a qualquer outra conexão com o servidor (como o [Tella Web](/tella-web) ou o [Uwazi](/uwazi)), conectar-se ao servidor ODK aumenta a segurança dos dados coletados no Tella por:

1. Permitir que usuários coletem dados diretamente dentro do contêiner criptografado do Tella.
2. Assegurar que os dados sejam enviados diretamente do Tella para o servidor ODK, sem depender de ferramentas ou aplicativos de terceiros.
3. Permitir que usuários realizem backup de seus dados em um servidor remoto, para diminuir o risco de os dados serem descobertos em seus dispositivos móveis.
4. Assegurar que as organizações possam preservar informações importantes, mesmo no caso de apreensão ou destruição de dispositivo, e possam organizá-las para uso em processos de pesquisa, advocacia pública ou processos de responsabilização.

### Escolhendo e Instalando o Seu Servidor Central ODK {#choosing-and-installing-your-odk-central-server}

Porque o ODK é um padrão aberto, o Tella pode ser usado com quaisquer ferramentas em conformidade com o ODK.

Para organizações da sociedade civil e defensores dos direitos humanos, recomendamos usar o [KoboToolbox](https://www.kobotoolbox.org/) para criar formulários com perguntas personalizadas, gerenciar usuários e agregar os dados submetidos pelos usuários. Baseado em nossa expriência, o KoboToolbox é amigável ao usuário e flexível, além de ser de código aberto. O KoboToolbox oferece um [servidor público gratuito](https://kf.kobotoolbox.org/accounts/login/) para organizações sem fins governamentais e oferece suporte a elas com treinamento e orientação sobre como estruturar os dados no servidor. Também é possível [usar uma instância privada do KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) ou a [auto-hospedagem](https://support.kobotoolbox.org/kobo_your_servers.html).

Existem outros aplicativos disponíveis e em conformidade com o ODK, como o [Ona](https://ona.io/home/) ou o [ODK Cloud](https://https://getodk.org/index.html). O Tella funciona com qualquer um desses. Se você precisar de ajuda, [entre em contato conosco](contact-us) para que possamos auxiliar você a selecionar o melhor servidor para o seu caso de uso.

### Quando Usar o ODK {#when-to-use-odk}

Recomendamos o ODK para organizações que precisam que usuários em seus locais de atuação coletem dados de uma maneira estruturada como através de formulários. Também o recomendamos para organizações que não possuem a capacidade técnica para instalar e manter um servidor e desejam uma instância em nuvem pronta para usar. Se você usa uma instância em nuvem, lembre-se de que a organização hospedeira da sua instância ODK terá acesso aos seus dados. Essa é uma consideração importante para quando decidir se deve auto-hospedar ou usar um serviço em nuvem. 

ODK e KoboToolbox são amplamente utilizadas, bem documentadas e fáceis de usar. Há guias disponíveis e elas oferecem suporte para organizações sem fins lucrativos sobre como estruturar e manter os dados.

## Modele seus Dados {#model-your-data}

KoboToolbox oferece [aqui](https://support.kobotoolbox.org/overview_of_creating_a_project.html) um guia detalhado sobre como criar seu projeto e adicionar questões aos seus formulários e como implantá-los para torná-los disponíveis para usuários em seus locais de atuação.

## Conecte o Tella a uma Instância ODK para Coletar Dados {#connect-tella-to-an-odk-instance-to-collect-data}

Nessa documentação, focamos em como coletar dados usando o Tella. Há outras alternativas de aplicativos para dispositivos móveis que podem ser usadas para coletar dados no ODK, incluindo o aplicativo para Android ODK Collect. Você pode ver uma comparação entre essas alternativas [aqui](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
A conexão ODK não está disponível no Tella para iOS.
:::

### Conecte a um Servidor ODK {#connect-to-an-odk-server}
Após criar e implantar um formulário usando qualquer servidor em conformidade com o ODK, no Tella, dirija-se para **Configurações** > **Servidores** > **+** > **Open Data Kit (ODK)**. Preencha os seguintes campos:
- **Nome do Servidor**: Um nome descritivo para o seu servidor no Tella. O nome selecionado por você está apenas visível no aplicativo e não impacta a conexão ODK.
- **URL do Servidor**: A URL do seu servidor. Por exemplo, `kc.kobotoolbox.org` caso esteja usando o servidor público do KoboToolbox.
Se o servidor requerer autenticação de usuário, toque no botão **Avançado**  e entre o seu **Nome de usuário** e **Senha**. O administrador do seu servidor deve fornecer todas essas informações para você.


### Preencha formulários {#fill-forms}

Após ter se conectado com sucesso à instância ODK, você verá um novo cartão chamado "Formulários" nas seções **Conexões** na tela inicial do Tella.

Após entrar na seção **Formulários**, você verá uma lista de formulários disponíveis para você na(s) instância(s) às quais está conectado. Usando o botão **Baixar**, você pode baixar formulários para o Tella para que possa preenchê-los, mesmo quando não estiver conectado à internet.

Você pode tocar em cada formulário em branco para começar a preenchê-lo.


#### Submeta formulários {#submit-forms}

Ao coletar dados e preencher formulários, as seguintes opções estão disponíveis para aumentar o suporte offline no Tella:
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
| Arquivo | Não |
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
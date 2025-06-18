---
id: odk
title: Open Data Kit (ODK)
description: La connexion au serveur Open Data Kit est disponible pour les organisations qui souhaitent recueillir des données structurées au moyen de formulaires.
slug: /odk
---

# Open Data Kit (ODK)

L'[Open Data Kit (ODK)](https://getodk.org/) est un standard ouvert utilisé pour créer des formulaires personnalisés et collecter des données.

Un serveur Open Data Kit permet aux organisations de regrouper, dans un référentiel central, les données collectées par leurs membres ou partenaires. Les utilisateurs et utilisatrices de Tella se connectent à l'instance ODK qui est propre à leur organisation, remplissent les formulaires autant de fois qu'ils le souhaitent (même s'ils n'ont pas de connexion internet) et chargent les données. En fonction des alternatives choisies, les organisations peuvent télécharger ou analyser les données à partir du serveur en question.

De la même manière que toute autre connexion au serveur (comme [Tella Web](/tella-web) ou [Uwazi](/uwazi)), la connexion au serveur ODK améliore la sécurité des données collectées sur Tella en :

1. Permettant aux utilisateurs et utilisatrices de collecter des données directement dans le conteneur crypté de Tella.
2. Garantissant que les données sont envoyées directement de Tella au serveur ODK, sans recours à un outil ou une application tiers.
3. Permettant aux utilisateurs et utilisatrices de sauvegarder leurs données sur un serveur externe, pour réduire le risque que leurs données soient découvertes sur leur appareil mobile.
4. Assurant que les organisations peuvent conserver les informations importantes même en cas de saisie ou de destruction d'appareils, et les organiser à des fins de recherche, de plaidoyer ou de processus de responsabilisation.

### Choosing and Installing Your ODK Server {#choosing-and-installing-your-odk-server}

ODK étant une norme ouverte, Tella peut être utilisée avec n'importe quel outil compatible avec ODK.

For civil society organizations and human rights defenders, we recommend using [KoboToolbox](https://www.kobotoolbox.org/) to create forms with custom questions, manage users, and aggregate the data submitted by users. Based on our experience, KoboToolbox is user-friendly and flexible, and it is also open source. KoboToolbox offers a [community plan for non-profits](https://www.kobotoolbox.org/pricing/) and offer free training resources and guidance on how to structure the data on the server (Self-serve learning base and Community Forum). It is also possible [to use a private instance of KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) or [self-host it](https://support.kobotoolbox.org/kobo_your_servers.html).

:::tip
We are work closely with the Kobotoolbox team. If you are interested in using the Tella-KoboToolbox connection and would like some support or to discuss the best hosting plan for your use case, please [contact us](/contact-us). 
:::

There are other ODK-compliant apps available, like [Ona](https://ona.io/home/) or [ODK Cloud](https://https://getodk.org/index.html). Tella works with any of these. 


### Quand utiliser ODK {#when-to-use-odk}

Nous recommandons ODK aux organisations qui ont besoin d'utilisateurs et utilisatrices sur le terrain pour collecter des données de manière structurée, comme des formulaires. Nous le recommandons également aux organisations qui n'ont pas la capacité technique d'installer et de maintenir un serveur et qui souhaitent utiliser une instance cloud prête à l'emploi. Si vous utilisez une instance cloud, n'oubliez pas que l'organisation hébergeant votre instance ODK pourra accéder à vos données. Il s’agit d’une considération importante au moment de décider s’il faut s’auto-héberger ou utiliser un service cloud.

ODK et KoboToolbox sont largement répandus, bien documentés et faciles à utiliser. Il existe des guides explicatifs et les organisations à but non lucratif peuvent bénéficier d'un soutien pour structurer et gérer leurs données.

Modélisez vos données {#model-your-data}

## Modélisez vos données {#model-your-data}

Connecter Tella à une instance ODK pour collecter des données {#connect-tella-to-an-odk-instance-to-collect-data}

## Dans cette documentation, nous nous concentrons sur la façon de collecter des données à l'aide de Tella. Il existe des applications mobiles alternatives qui peuvent être utilisées pour collecter des données sur ODK, notamment Android ODK Collect.  Nous vous proposons une comparaison de ces alternatives [ici] (/faq#how-is-tella-different-from-other-documentation-apps).

:::info
La connexion ODK n'est pas disponible pour Tella iOS.
:::

Se connecter à un serveur ODK {#connect-to-an-odk-server}

### Après avoir créé et déployé un formulaire à l'aide de n'importe quel serveur compatible ODK, dans Tella, allez dans **Paramètres** > **Serveurs** > **+** > **Open Data Kit (ODK)**. Remplissez les champs suivants:
**Nom du serveur**: un nom descriptif pour votre serveur dans Tella. Le nom que vous sélectionnez n'est visible que dans l'application et n'a aucun impact sur la connexion ODK.
- **URL du serveur** : l'URL de votre serveur. Par exemple, `kc.kobotoolbox.org` si vous utilisez le serveur public KoboToolbox.
- Si votre serveur nécessite une authentification utilisateur, appuyez sur le bouton **Avancé** et saisissez votre **Nom d'utilisateur** et votre **Mot de passe**. L'admin de votre serveur doit vous fournir toutes ces informations.
Remplir les formulaires {#fill-forms}


### Après que vous vous soyez connecté avec succès à l'instance ODK, vous verrez apparaître dans les sections **Connexions** de l'écran d'accueil de Tella une nouvelle carte appelée "Formulaires".

Après avoir accédé à la section **Formulaires**, vous verrez une liste des formulaires disponibles sur les instances auxquelles vous êtes connecté. À l'aide du bouton **Télécharger**, vous pouvez télécharger des formulaires sur Tella afin de pouvoir les remplir, même si vous n'êtes pas connecté à Internet.

Vous pouvez appuyer sur chaque formulaire vierge pour commencer à le remplir.

Soumettre les formulaires {#submit-forms}


#### Au fur et à mesure que vous collectez des données et remplissez des formulaires, les options suivantes sont disponibles pour augmenter le support hors ligne sur Tella:

Soumettre : envoyer le formulaire rempli au serveur ODK.
- Enregistrer comme brouillon: enregistrez un formulaire qui n'est pas complété afin de pouvoir continuer à travailler dessus plus tard.
- Soumettre plus tard: marquez un formulaire comme complet pour le soumettre ultérieurement. Jusqu'à son envoi, il sera disponible dans l'onglet Boîte d'envoi.
- Onglet Brouillons : un onglet avec la liste de tous les brouillons de formulaires. Les brouillons peuvent être modifiés ou supprimés.
- Onglet Boîte d'envoi: un tableau avec la liste de tous les formulaires prêts à être soumis. Les formulaires de l'onglet Boîte d'envoi peuvent être modifiés, supprimés ou soumis.
- Onglet Soumis: un onglet avec la liste de tous les formulaires qui ont été envoyés avec succès au serveur. Les formulaires soumis peuvent être supprimés.
- Suspendre/Reprendre la soumission: vous pouvez suspendre manuellement une soumission et la reprendre lorsque vous êtes prêt.
- Suspendre automatiquement la soumission en mode hors connexion: les formulaires seront envoyés vers l'onglet Boîte d'envoi si la soumission échoue en raison de problèmes de connectivité.
- Types de questions pris en charge {#supported-question-types}

### Vous trouverez ci-dessous un aperçu des types de questions ODK pris en charge dans Tella Android. S'il existe un type de question qui n'est pas pris en charge dans Tella et qui est essentiel à votre flux de travail,  [contactez-nous](/contact-us).
**Type de question**

| **Tella Android** | **Tella Android** | 
|------|------|
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| Non | Non  |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| Non | Non |
| Non | Non |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| Pour plus de commodité et de facilité d'accès, il est également possible de personnaliser l'écran d'accueil pour afficher également des raccourcis vers un ou plusieurs des éléments suivants : | ✔️ |
| Sur Tella FOSS, les PDF doivent être exportés pour être ouverts. | ✔️ |
| Non | ✔️ |
| ✔️ | ✔️ |
| Non | Non |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| Non | Non |
| ✔️ | ✔️ |
| Non | Non |
| Non | Non |
| Non | Non |
| Non | Non |

### Voici un aperçu des fonctionnalités ODK compatibles avec Tella Android. S'il existe une fonctionnalité non supportée dans Tella et qui est essentielle à votre flux de travail, [contactez-nous](/contact-us).

**Fonctionnalité**

| **Feature** | **Tella Android** | 
|------|------|
| ✔️ | ✔️ |
| ❌ | Gérer l'accès aux projets {#managing-access-to-projects} |
| ✔️ | ✔️ |
| ❌ | Gérer l'accès aux projets {#managing-access-to-projects} |
| ❌ | Gérer l'accès aux projets {#managing-access-to-projects} |
| ❌ | Gérer l'accès aux projets {#managing-access-to-projects} |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ✔️ | ✔️ |
| ❌ | Gérer l'accès aux projets {#managing-access-to-projects} |
| Automatically collecting form metadata| Gérer l'accès aux projets {#managing-access-to-projects} |

---
id: odk
title: Open Data Kit (ODK)
description: The Open Data Kit server connection is available for organizations looking to collect structured data using forms.
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

### Choisir et installer votre serveur central ODK  {#choosing-and-installing-your-odk-central-server}

ODK étant une norme ouverte, Tella peut être utilisée avec n'importe quel outil compatible avec ODK.

Pour les organisations de la société civile et les défenseurs et défenseuses des droits humains, nous recommandons d'utiliser [KoboToolbox](https://www.kobotoolbox.org/) pour créer des formulaires avec des questions personnalisées, gérer les utilisateurs et regrouper les données soumises par les utilisateurs. D'après notre expérience, l'application est conviviale et flexible, et elle est également open source. KoboToolbox propose un [serveur public gratuit](https://kf.kobotoolbox.org/accounts/login/) pour les organisations à but non lucratif et les soutient avec une formation et des conseils sur la façon de structurer les données sur le serveur. Il est également possible [d'utiliser une instance privée de KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) ou de [l'auto-héberger](https://support.kobotoolbox.org/kobo_your_servers.html).

Il existe d'autres applications compatibles avec ODK, comme [Ona] (https://ona.io/home/) ou [ODK Cloud] (https://https://getodk.org/index.html). Tella est compatible avec toutes ces applications. Si vous avez besoin d'aide, [contactez-nous](contact-us) pour que nous vous aidions à sélectionner le serveur le mieux adapté à vos besoins.

### Quand utiliser ODK {#when-to-use-odk}

Nous recommandons ODK aux organisations qui ont besoin d'utilisateurs et utilisatrices sur le terrain pour collecter des données de manière structurée, comme des formulaires. Nous le recommandons également aux organisations qui n'ont pas la capacité technique d'installer et de maintenir un serveur et qui souhaitent utiliser une instance cloud prête à l'emploi. Si vous utilisez une instance cloud, n'oubliez pas que l'organisation hébergeant votre instance ODK pourra accéder à vos données. Il s’agit d’une considération importante au moment de décider s’il faut s’auto-héberger ou utiliser un service cloud.

ODK et KoboToolbox sont largement répandus, bien documentés et faciles à utiliser. Il existe des guides explicatifs et les organisations à but non lucratif peuvent bénéficier d'un soutien pour structurer et gérer leurs données.

## Modélisez vos données {#model-your-data}

KoboToolbox propose un guide détaillé sur comment créer votre projet et ajouter des questions à vos formulaires, ainsi que sur la façon de les déployer pour les rendre accessibles aux utilisateurs et utilisatrices sur le terrain [ici](https://support.kobotoolbox.org/overview_of_creating_a_project.html).

## Connecter Tella à une instance ODK pour collecter des données {#connect-tella-to-an-odk-instance-to-collect-data}

Dans cette documentation, nous nous concentrons sur la façon de collecter des données à l'aide de Tella. Il existe des applications mobiles alternatives qui peuvent être utilisées pour collecter des données sur ODK, notamment Android ODK Collect.  Nous vous proposons une comparaison de ces alternatives [ici] (/faq#how-is-tella-different-from-other-documentation-apps).

:::info
La connexion ODK n'est pas disponible pour Tella iOS.
:::

### Se connecter à un serveur ODK {#connect-to-an-odk-server}
Après avoir créé et déployé un formulaire à l'aide de n'importe quel serveur compatible ODK, dans Tella, allez dans **Paramètres** > **Serveurs** > **+** > **Open Data Kit (ODK)**. Remplissez les champs suivants:
- **Nom du serveur**: un nom descriptif pour votre serveur dans Tella. Le nom que vous sélectionnez n'est visible que dans l'application et n'a aucun impact sur la connexion ODK.
- **URL du serveur** : l'URL de votre serveur. Par exemple, `kc.kobotoolbox.org` si vous utilisez le serveur public KoboToolbox.
Si votre serveur nécessite une authentification utilisateur, appuyez sur le bouton **Avancé** et saisissez votre **Nom d'utilisateur** et votre **Mot de passe**. L'admin de votre serveur doit vous fournir toutes ces informations.


### Remplir les formulaires {#fill-forms}

Après que vous vous soyez connecté avec succès à l'instance ODK, vous verrez apparaître dans les sections **Connexions** de l'écran d'accueil de Tella une nouvelle carte appelée "Formulaires".

Une fois dans la rubrique **Formulaires**, vous verrez une liste de formulaires disponibles sur l'instance ou les instances auxquelles vous êtes connecté(e). En utilisant le bouton **Télécharger**, vous pourrez télécharger des formulaires sur Tella afin de pouvoir les remplir, même si vous n'êtes pas connecté à Internet.

Vous pouvez appuyer sur chaque formulaire vierge pour commencer à le remplir.


#### Soumettre les formulaires {#submit-forms}

Lorsque vous collectez des données et remplissez des formulaires, les options suivantes s'offrent à vous:
- Soumettre : envoyer le formulaire rempli au serveur ODK.
- Enregistrer comme brouillon: enregistrez un formulaire qui n'est pas complété afin de pouvoir continuer à travailler dessus plus tard.
- Soumettre plus tard: marquez un formulaire comme complet pour le soumettre ultérieurement. Jusqu'à son envoi, il sera disponible dans l'onglet Boîte d'envoi.
- Onglet Brouillons : un onglet avec la liste de tous les brouillons de formulaires. Les brouillons peuvent être modifiés ou supprimés.
- Onglet Boîte d'envoi: un tableau avec la liste de tous les formulaires prêts à être soumis. Les formulaires de l'onglet Boîte d'envoi peuvent être modifiés, supprimés ou soumis.
- Onglet Soumis: un onglet avec la liste de tous les formulaires qui ont été envoyés avec succès au serveur. Les formulaires soumis peuvent être supprimés.
- Suspendre/Reprendre la soumission: vous pouvez suspendre manuellement une soumission et la reprendre lorsque vous êtes prêt.
- Suspendre automatiquement la soumission en mode hors connexion: les formulaires seront envoyés vers l'onglet Boîte d'envoi si la soumission échoue en raison de problèmes de connectivité.

### Types de questions pris en charge {#supported-question-types}
Vous trouverez ci-dessous un aperçu des types de questions ODK pris en charge dans Tella Android. S'il existe un type de question qui n'est pas pris en charge dans Tella et qui est essentiel à votre flux de travail,  [contactez-nous](/contact-us).

| **Type de question** | **Tella Android** | 
|------|------|
| Sélectionnez-en un | ✔️ |
| Sélectionnez plusieurs | ✔️ |
| Texte | ✔️ |
| Nombre / Décimal | ✔️ |
| Date | ✔️ |
| Heure | ✔️ |
| Date et heure | Non  |
| Point (calculer ma position actuelle) | ✔️ |
| Point (afficher ma position sur une carte) | ✔️ |
| Point (laissez-moi choisir ma position sur une carte) | ✔️ |
| Ligne | Non |
| Zone | Non |
| Photo | ✔️ |
| Signature photo (signature manuscrite) | ✔️ |
| Audio | ✔️ |
| Vidéo | ✔️ |
| Fichier | Non |
| Note | ✔️ |
| Code-barres / QR Code | Non |
| Reconnaître | ✔️ |
| Notation | ✔️ |
| Matrice de questions | No |
| Classement | ✔️ |
| Calculer | Non |
| Caché | Non |
| Intervalle | Non |
| XML externe | Non |

### Fonctionnalités supportées {#supported-features}

Voici un aperçu des fonctionnalités ODK compatibles avec Tella Android. S'il existe une fonctionnalité non supportée dans Tella et qui est essentielle à votre flux de travail, [contactez-nous](/contact-us).

| **Fonctionnalité** | **Tella Android** | 
|------|------|
| [Collecte de données hors ligne](/odk#submit-forms) | ✔️ |
| [Logique du formulaire](https://docs.getodk.org/form-logic/) | ❌ |
| [Réponses requises](https://docs.getodk.org/form-logic/#requiring-responses) | ✔️ |
| [Définition des réponses par défaut](https://docs.getodk.org/form-logic/#setting-default-responses) | ❌ |
| [Déclencher des calculs en cas de changement de valeur ](https://docs.getodk.org/form-logic/#triggering-calculations-on-value-change) | ❌ |
| [Valider et restreindre les réponses] (https://docs.getodk.org/form-logic/#validating-and-restricting-responses) | ❌ |
| [Affichage conditionnel des questions](https://docs.getodk.org/form-logic/#conditionally-showing-questions) | ✔️ |
| [Groupes de questions](https://docs.getodk.org/form-logic/#groups-of-questions) | ✔️ |
| [Questions répétitives](https://docs.getodk.org/form-logic/#repeating-questions) | ✔️ |
| [Options de filtrage dans certaines questions](https://docs.getodk.org/form-logic/#filtering-options-in-select-questions) | ✔️ |
| [Générer des sélections à partir de répétitions](https://docs.getodk.org/form-logic/#generating-select-ones-from-repeats) | ❌ |
---
id: uwazi
title: Uwazi
description: La connexion au serveur Uwazi est proposée aux organisations qui souhaitent collecter des données structurées.
slug: /uwazi
---

# Uwazi

[Uwazi](https://uwazi.io/) est un outil de documentation open source développé par [HURIDOCS](https://huridocs.org).. Il s'agit d'une application de base de données en ligne flexible, conçue pour permettre aux défenseurs et défenseuses des droits de l'homme de gérer leurs collections d'informations, y compris les documents, les preuves, les affaires et les plaintes.

Uwazi permet aux organisations d'agréger, dans un système central, les données collectées par leurs membres ou partenaires. Les utilisateurs et utilisatrices de Tella se connectent à l'instance Uwazi de leur organisation, téléchargent des formulaires (appelés modèles), remplissent les modèles autant de fois que nécessaire (même s'ils n'ont pas de connexion internet), et téléchargent les données. Les organisations peuvent alors conserver, organiser et publier leurs données directement à partir d'Uwazi. 

De la même manière que toute autre connexion au serveur comme [Tella Web](/tella-web) et [Open Data Kit](/odk), la connexion à Uwazi améliore la sécurité des données collectées sur Tella en :
1. Permettant aux utilisateurs et utilisatrices de collecter des données directement dans le conteneur crypté de Tella.
2. Garantissant que les données sont envoyées directement de Tella à Uwazi, sans recours à un outil ou une application tiers.
3. Permettant aux utilisateurs et utilisatrices de sauvegarder leurs données sur un serveur externe, pour réduire le risque que leurs données soient découvertes sur leur appareil mobile.
4. Assurant que les organisations peuvent conserver les informations importantes même en cas de saisie ou de destruction d'appareils, et les organiser à des fins de recherche, de plaidoyer ou de processus de responsabilisation.

### Tester Uwazi {#testing-uwazi}

Vous pouvez tester Uwazi en utilisant [cette version de démonstration] (https://demo.uwazi.io/).

### Quand utiliser Uwazi {#when-to-use-uwazi}

Nous recommandons Uwazi aux organisations qui ont besoin d'utilisateurs et utilisatrices sur le terrain pour recueillir des données de manière structurée via des formulaires.

Uwazi permet également aux chefs et cheffes de projet d'organiser, d'analyser, de visualiser et de publier facilement les données collectées. Il est particulièrement puissant car sa base de données permet d'établir des relations entre les entités, ce qui permet de connecter des points de données (tels que les incidents, les auteurs et les victimes) aux modèles émergents. Uwazi est également idéal pour collecter des données dans de nombreuses langues différentes et pour faciliter la collaboration entre les équipes.

Uwazi n'est pas doté d'une application mobile officielle. En intégrant Uwazi et Tella, vous pouvez tirer parti du cryptage et des capacités hors ligne de Tella et profiter pleinement des capacités d'Uwazi pour organiser, rechercher, télécharger, visualiser et publier des informations. 

Vous pouvez en savoir plus sur Uwazi sur [la documentation officielle d'Uwazi](https://uwazi.readthedocs.io/en/latest/). HURIDOCS sont des amis d'Horizontal, donc si vous avez des questions sur Uwazi ou si vous voulez que nous vous mettions en contact avec l'équipe d'HURIDOCS, [contactez-nous](contact-us).

## Installer Uwazi sur un serveur {#install-uwazi-on-a-server}

L'équipe HURIDOCS a créé un guide d'administrateur complet avec des instructions étape par étape pour installer Uwazi sur votre serveur, configurer les sauvegardes et configurer les fonctionnalités avancées. Nous vous recommandons de partager [ce guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) avec votre administrateur ou administratrice système.

## Modélisez vos données {#model-your-data}

Une collection Uwazi est composée d'entités. Une entité possède des propriétés qui sont les champs que les utilisateurs de Tella rempliront pour collecter des données. Les entités peuvent contenir des documents principaux et/ou des fichiers de support et certaines propriétés définies par les admins sur le serveur Uwazi lorsqu'ils créent des modèles. Un modèle est un formulaire vide qui peut être rempli autant de fois que nécessaire ; une fois qu'un modèle est rempli, il devient une entité.

[Vous pouvez consulter ici](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) les propriétés disponibles sur le serveur Uwazi et la manière de modéliser vos données et de créer vos modèles. Pour l'instant, nous ne supportons que les propriétés et les fonctionnalités signalées comme prioritaires par les utilisateurs et utilisatrices d'Uwazi. Si vous avez besoin d'autres propriétés, [contactez-nous](/contact-us).

:::info
Si les utilisateurs et utilisatrices de Tella téléchargent un modèle dont les propriétés ne sont pas prises en charge dans Tella, ces propriétés ne seront pas affichées dans l'application. Cependant, ils ou elles pourront toujours soumettre les entités et les administrateurs pourront accéder sans aucun problème à ces entités, y compris à toutes les propriétés qui ont été renseignées.
:::

### Propriétés disponibles {#available-properties}

| **Propriété ou fonctionnalité** | **Tella Android**| **Tella iOS** | **Tella Android FOSS** |
|------|------|-----|-----| 
| Documents principaux et justificatifs | ✔️ | ✔️ | ✔️ |
| Texte brut | ✔️ | ✔️ | ✔️ |
| Numérique | ✔️ | ✔️ | ✔️ |
| Sélection unique  | ✔️ | ✔️ | ✔️ | 
| Sélection multiple  | ✔️ | Non | ✔️ | 
| Les relations | Non | Non | Non |
| Date unique | ✔️ | ✔️ | ✔️ |
| Dates multiples | ✔️ | Non | ✔️ |
| Lien externe | ✔️ | Non | ✔️ |
| Texte riche | ✔️ | ✔️ | ✔️ |
| Plage de dates unique et multiple | ✔️ | Non | ✔️ |
| Joindre un média (image, vidéo ou audio) | ✔️| ✔️ | ✔️ |
| Géolocalisation | ✔️ | Non | ✔️ |
| ID généré  | ✔️ | Non | ✔️ |


## Faites en sorte que les personnes sur le terrain soient prêtes à soumettre des données {#get-people-on-the-ground-ready-to-start-submitting-data}

### Se connecter au serveur {#connect-to-a-server}

Pour vous connecter à un serveur Uwazi:

* Allez dans **Paramètres ⚙️** > **Serveurs** > **+**
* Sélectionnez "Uwazi" dans la liste des types de serveurs disponibles.
* Saisissez l'URL du serveur Uwazi de l'organisation (générée et fournie par les admins).
* Choisissez entre:
    *  **Connexion:** si un nom d'utilisateur et un mot de passe ont été fournis par les admins.
    *  **Accès public:** si le serveur est configuré pour accepter les soumissions anonymes.
* Si le serveur nécessite une authentification à deux facteurs, entrez le code à usage unique.
* Choisissez la **Langue** dans laquelle vous souhaitez afficher les modèles.

:::info
Vous pouvez visionner [cette vidéo](/video-tutorials#uwazi) qui explique comment se connecter à un serveur Uwazi depuis Tella.
:::

### Envoyez vos informations  {#send-your-information}

Après que vous vous soyez connecté avec succès à une instance Uwazi, vous verrez apparaître dans les sections **Connexions** de l'écran d'accueil de Tella une nouvelle carte intitulée "Uwazi".

Pour télécharger un modèle, appuyez sur le bouton **+** en bas de l'écran. Vous verrez une liste de modèles disponibles sur toutes les instances Uwazi auxquelles vous êtes connecté. Appuyez sur le bouton **Télécharger** pour télécharger les modèles ou sur le bouton **Actualiser** pour voir si des mises à jour des modèles sont disponibles sur le serveur.

Revenez ensuite à l'écran principal d'Uwazi et appuyez sur le modèle que vous souhaitez utiliser pour créer une entité.


#### Alternatives à la soumission de données {#data-submission-alternatives}

| **Fonctionnalité** | **Détails**| **Tella Android** | **Tella iOS** | 
|------|------|------|------|
| Soumettre | Envoyer le formulaire rempli au serveur connecté. | Oui | Oui |
| Enregistrer comme brouillon | Sauvegarder un formulaire non complété.  | Oui | Non |
| Soumettre plus tard | Marquer un formulaire comme prêt et envoyez-le vers l'onglet Boîte d'envoi,  | Oui | Non |
| Onglet Brouillons | Un onglet avec tous les brouillons. Les brouillons peuvent être modifiés ou supprimés.  | Oui | Non |
| Onglet Boîte d'envoi | Un onglet avec des formulaires prêts à être envoyés. Les formulaires de l'onglet Boîte d'envoi peuvent être modifiés ou supprimés.  | Oui | Non |
| Onglet Envoyé | Un onglet avec tous les formulaires qui ont été envoyés avec succès au serveur. Les formulaires soumis peuvent être supprimés.  | Oui | Non |
| Suspendre/Reprendre la soumission | Les utilisateurs et utilisatrices peuvent suspendre manuellement une soumission et la reprendre lorsqu'ils sont prêts.  | Oui | Non |
| Suspendre automatiquement la soumission lorsque vous êtes hors ligne | Les soumissions seront envoyées à l'onglet Boîte d'envoi si la soumission échoue en raison de problèmes de connectivité.  | Oui | Non |



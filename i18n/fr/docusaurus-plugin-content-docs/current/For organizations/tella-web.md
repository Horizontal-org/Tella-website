---
id: tella-web
title: Tella Web
description: La fonction Rapports permet aux utilisateurs et utilisatrices de charger facilement des photos, vidéos, fichiers PDF et enregistrements audio sur le serveur Web Tella de leur organisation.
slug: /tella-web
---

# Tella Web 

Tella Web est un outil open source qui permet aux individus et aux organisations de centraliser et de gérer les rapports transmis par les utilisateurs de Tella, notamment des photos, des vidéos et des fichiers audio.

Tella Web est développé en interne par notre équipe chez Horizontal, cette même équipe qui est responsable du développement des applications mobiles de Tella. Il s'agit d'une solution pratique pour sauvegarder en toute sécurité et en toute confidentialité des fichiers multimédias sur un serveur distant. Si vous n'avez personne au sein de votre organisation pour le faire, nous pouvons vous aider à installer, configurer et maintenir Tella Web.

Comme pour toutes les autres connexions ([Uwazi](/uwazi) et [Open Data Kit](/odk)), la connexion à Tella Web améliore la sécurité des données collectées sur Tella en:
1. Permettant aux utilisateurs et utilisatrices de collecter des données directement dans le conteneur crypté de Tella.
2. Garantissant que les données sont envoyées directement de Tella à Tella Web, sans recours à un outil ou une application tiers.
3. Permettant aux utilisateurs et utilisatrices de sauvegarder leurs données sur un serveur externe, pour réduire le risque que leurs données soient découvertes sur leur appareil mobile.
4. Assurant que les organisations peuvent conserver les informations importantes même en cas de saisie ou de destruction d'appareils, et les organiser à des fins de recherche, de plaidoyer ou de processus de responsabilisation.

Tella Web est une excellente option pour collecter des « rapports » auprès des utilisateurs et utilisatrices. Les rapports peuvent inclure des photos, des vidéos, des enregistrements audio, des documents PDF et du texte.

La configuration de Tella Web s'effectue en trois étapes, présentées en détail dans cette section :

* **Installer Tella Web** : Cette étape consiste à installer le serveur Tella Web et à configurer le nom de domaine pour assurer son bon fonctionnement.
* **Configurez votre (vos) projet(s) sur votre serveur**: au cours de cette étape, les admin décident comment s'organiser pour collecter des données, créer des “projets” et définir les rôles et permissions accordées à leurs utilisateurs ou utilisatrices.
* **Faire en sorte que les personnes sur le terrain soient prêtes à commencer à soumettre des rapports** : Les utilisateurs et utilisatrices installent Tella sur leur appareil Android ou iPhone. Ils ou elles se connectent ensuite au projet Web Tella et commencent à recueillir des informations.


## Installer le serveur {#install-the-server}

Cette étape consiste à installer et configurer Tella Web sur le serveur que votre organisation utilisera. Cette étape doit être complétée par la personne qui sera responsable de l'administration du système (un développeur ou un administrateur système). Les instructions techniques sont disponibles sur [notre Github](https://github.com/Horizontal-org/tellaweb).



:::Info
Notre équipe peut vous assister dans l'installation, la configuration et la maintenance de Tella Web. Si vous avez des questions ou si vous avez besoin d'aide, [contactez-nous](/contact-us/)
:::

:::tip
[Contactez-nous](/contact-us/) pour accéder à notre serveur de démonstration, et tester Tella Web avant de l'installer sur votre propre serveur.
:::


## Configurer votre projet sur votre serveur {#set-up-your-project-on-your-server}

Une fois Tella Web installé et le premier utilisateur « admin » créé, il est temps de configurer le ou les projets avec lesquels l'équipe sur le terrain partagera des informations.



:::info
Consultez [ce tutoriel vidéo](/video-tutorials#connections-full-video) pour voir comment configurer Tella Web.
:::


### Gestion des projets {#managing-projects}

Tella Web vous permet de créer et de gérer des projets, en garantissant l'organisation et l'accessibilité de vos rapports. 

Les projets fonctionnent comme des dossiers dans lesquels les utilisateurs de Tella peuvent soumettre des rapports. Par exemple, vous pouvez créer des projets pour des zones géographiques ou des thèmes spécifiques tels que la violence policière, la violence sexiste et les atteintes à l'environnement.

Chaque projet a sa propre URL, de sorte que vous pouvez être connecté à plusieurs projets Tella Web.


#### Afficher tous les projets disponibles {#view-all-available-projects}

Cliquez sur le bouton « Projets » dans le menu de navigation de gauche pour accéder à l'écran "Projets" .

L'écran "Projets" affiche sous forme de carte chaque projet existant.


#### Créer un nouveau projet {#create-a-new-project}

Dans l'écran « Projets », cliquez sur le bouton « Créer un projet ». Une fenêtre de dialogue s'affiche, vous invitant à donner un nom au nouveau projet. Saisissez le nom souhaité pour le projet et cliquez sur « Créer ». Vous serez redirigé vers l'écran « Paramètres du projet » pour le projet nouvellement créé.


#### Ouvrir un projet {#open-a-project}

Ouvrez l'écran « Projets » et cliquez sur la fiche du projet souhaitée.

Cela ouvrira le projet, où vous pourrez accéder à tous les rapports soumis.

Vous pouvez ouvrir, supprimer ou télécharger des rapports (en fonction des permissions qui vous sont accordées pour ce projet spécifique).


#### Configurer les paramètres des projets {#configure-projects-settings}

Dans l'écran "Paramètres du projet", vous pouvez configurer le projet :
* La section "Général" vous permet de renommer le projet, d'afficher ses détails du projet et de modifier son URL.
* La section « Gérer les accès » vous permet d'ajouter ou de supprimer des utilisateurs du projet. Plus d'informations sur les rôles des utilisateurs [ici](/tella-web#managing-users)
* La section "Zone de danger" vous propose des options pour supprimer le projet, y compris tous les rapports qu'il contient.


#### Supprimer un projet {#delete-a-project}

Dans l'écran "Paramètres du projet", descendez jusqu'à la section  "Zone dangereuse".

Cliquez sur l'option "Supprimer le projet".

Une fenêtre de dialogue apparaîtra, vous avertissant de la suppression permanente du projet et de tous ses rapports. Pour procéder à la suppression, saisissez correctement le nom du projet (en respectant la casse). Tapez "DELETE"  (en majuscules) pour confirmer la suppression.

Une fois confirmé, le projet et tous ses rapports associés seront définitivement supprimés.


#### Configurer l'URL du projet {#configure-the-project-url}

L'URL du projet est automatiquement générée lors de la création du projet. Pour modifier l'URL du projet, rendez-vous dans la section "Général" de l'écran "Paramètres du projet" et modifiez-la en conséquence. Cette URL est celle que les journalistes utiliseront pour se connecter au projet depuis leurs applications.

:::info
L'URL que vous devez envoyer aux utilisateurs ou utilisatrices doit ressembler à ceci : `https://your-domain.com/p/your-project-name`.
:::


### Gestion des utilisateurs {#managing-users}

### Comprendre les rôles des utilisateurs {#understanding-user-roles}
Les utilisateurs et utilisatrices constituent un élément important dans le fonctionnement de Tella Web. Il existe quatre rôles différents mis à leur disposition :
- Rapporteur ou Rapporteuse: il s'agit d'un utilisateur ou d'une utilisatrice qui peut se connecter au projet Web Tella à partir d'une application mobile Tella et charger des rapports. Un journaliste doit être affecté à un projet pour pouvoir télécharger des rapports.
- Lecteur ou lectrice: Il s'agit d'un utilisateur ou utilisatrice qui, en plus de charger des rapports à partir de Tella, peut également se connecter à Tella Web pour visualiser (mais pas pour éditer ou supprimer) des rapports. Un lecteur ou une lectrice doit être assigné à un projet spécifique pour y avoir accès.
- Éditeur ou Editrice : il s'agit d'un utilisateur ou utilisatrice qui, comme les lecteurs et lectrice, peut télécharger des rapports depuis Tella et se connecter à Tella Web, mais qui peut également modifier et supprimer des rapports. Il ou elle doit être assigné à un projet spécifique pour y avoir accès.
- Admin: il ou elle un peut télécharger des rapports depuis Tella et effectuer toutes les actions sur Tella Web, y compris la gestion des rapports, des projets et des utilisateurs. Un ou une admin a accès à tous les projets.

Voici une présentation détaillée des permissions attribuées à chaque rôle :

| |Journaliste |Lecteur ou lectrice|Éditeur ou Editrice|Admin |
|--------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--|
|**Sur Tella mobile**|
| Créer et charger des rapports | ✅|✅|✅|✅| 
|**Sur Tella Web**| 
| Connectez-vous à Tella Web  |❌|✅|✅|✅| 
| Afficher les rapports  |❌|✅|✅|✅| 
| Modifier les rapports (renommer) |❌|❌|✅|✅| 
| Supprimer les rapports |❌|❌|✅|✅| 
| Modifier des projets (créer, renommer, modifier l'URL) |❌|❌|✅|✅| 
| Supprimer des projets |❌|❌|✅|✅| 
| Gérer les utilisateurs (créer, modifier, supprimer) |❌|❌|❌|✅| 
| Attribuer des utilisateurs au projet |❌|❌|❌|✅| 

#### Création d'utilisateurs {#creating-users}

Dans la barre supérieure, au-dessus de la liste des utilisateurs, l'admin du serveur peut cliquer sur le bouton "Créer un utilisateur" pour créer un nouvel utilisateur ou une nouvelle utilisatrice sur le serveur. L'e-mail, le mot de passe, la confirmation du mot de passe et le rôle sont requis pour faire cela.

Dans le champ du mot de passe, un indicateur de sécurité du mot de passe aide les admins à créer des mots de passe sûrs. Nous estimons la complexité des mots de passe à partir de la bibliothèque [zxcvbn](https://github.com/dropbox/zxcvbn) qui tient compte des éléments suivants :
- Charactères (plus de 10)
- Complexité (minuscules, majuscules, chiffres, symboles)
- Aucun modèle commun comme les dates, répétitions (aaa), séquences (abcd), modèles de clavier (qwertyuiop)
- Pas de mots de passe courants comme les noms, les villes, etc.


#### Gérer l'accès aux projets {#managing-access-to-projects}


Dans la section « Gérer l'accès » de l'écran « Paramètres du projet », les admins peuvent attribuer des utilisateurs ou utilisatrices existants au projet. Cliquez sur le champ "Ajouter des utilisateurs". Un menu déroulant affichera tous les utilisateurs et utilisatrices sur le serveur. Faites défiler la liste ou tapez pour rechercher quelqu'un par son nom d'utilisateur.
Après avoir sélectionné les personnes à ajouter au projet, cliquez sur le bouton « Ajouter » pour enregistrer les modifications et leur accorder l'accès au projet.

:::info
La liste complète des utilisateurs et utilisatrices pouvant soumettre des rapports au projet comprend ceux et celles répertoriés dans cette section ainsi que tous les admins de serveur.
:::

## Préparez les gens sur le terrain à commencer à soumettre des rapports {#get-people-on-the-ground-ready-to-start-submitting-reports}


Les étapes décrites ci-dessous s'appliquent aux versions Android et iOS de l'application Tella. La fonctionnalité de création de rapports est disponible dans :

* Tella Android v2.1.0 (152) et versions ultérieures
* Tella iOS v1.1.0 (43) et versions ultérieures

Les rapports ne sont pas encore disponibles sur [Tella-FOSS](/faq#is-tella-available-on-f-droid).

:::info
Vous pouvez regarder [cette vidéo](/video-tutorials#tella-web) pour savoir comment configurer et utiliser les rapports dans Tella.
:::


#### Connectez-vous aux projets Tella Web {#connect-to-tella-web-projects}

Pour vous connecter à un serveur Tella Web:

* Allez dans **Paramètres ⚙️** > **Serveurs** > **+**
* Sélectionnez "Tella Web" dans la liste des types de serveurs disponibles.
* Saisissez les informations d'identification (générées et fournies par les admins).
    * :::info
L'URL du projet Tella Web. L'URL devrait ressembler à ce qui suit : `https://your-domain.com/p/your-project-name`
:::
    * Votre identifiant et votre mot de passe
* Activez ou désactivez les fonctionnalités avancées en fonction de vos besoins : [Rapport automatique](#auto-report), [auto-suppression](#auto-delete) et [soumettre arrière-plan](#background-submission).


####  Gérer les projets Tella Web {#manage-tella-web-projects}

* Dans **Paramètres ⚙️** > **Serveurs** > **[Nom du projet]** > 3 points, vous pouvez :
    * Modifier : ouvre un écran « Modifier le serveur » où vous pouvez afficher le nom du projet, l'URL et votre nom d'utilisateur, et modifier les fonctionnalités avancées.
    * Supprimer: supprime la connexion, y compris toutes les informations sur le serveur et tous les rapports brouillons et soumis stockés dans Tella. Cela n'affectera aucun rapport déjà soumis au serveur.

#### Créer un rapport manuel {#create-a-manual-report}

* Une fois connecté à au moins un projet Tella Web, une carte « Rapports » apparaîtra dans la section « Connexions » de l'écran d'accueil. Appuyez sur cette carte pour commencer à créer des rapports.
* L'écran principal des rapports permet de naviguer entre les onglets Brouillons, Boîte d'envoi et Soumis.
* Appuyez sur le bouton "Nouveau rapport" en bas de l'écran pour créer un nouveau rapport.
    * Sur l'écran "Nouveau rapport", vous pouvez renseigner les détails du rapport, notamment le titre, la description et les pièces jointes facultatives de photos, vidéos, documents PDF et enregistrements audio.
    * Si vous êtes connecté à plusieurs projets Tella Web, vous pourrez sélectionner en haut de l'écran à quel projet soumettre le rapport.
* Utilisez le bouton « Enregistrer le brouillon » (en haut à droite de l'écran) pour enregistrer le rapport en tant que brouillon sans quitter l'écran "Nouveau rapport".
    * Afin de pouvoir enregistrer le rapport en tant que brouillon, vous devez au moins saisir son titre
    * Un message apparaîtra à l’écran pour confirmer que le brouillon a bien été enregistré.
* Le bouton "Soumettre plus tard" enregistre le rapport dans la boîte d'envoi pour une soumission manuelle.
    * L’onglet Boîte d’envoi est souvent utilisé lorsque les collecteurs et collecteuses de données n’ont pas accès à Internet ou si la connexion n’est pas stable.
* Le bouton “Soumettre” envoie immédiatement le rapport au projet Tella Web.
    * Si la soumission échoue en raison de problèmes de connectivité, le rapport est dirigé vers l'onglet “Boîte d'envoi”.
    * Si le rapport est soumis correctement, il passe dans l'onglet “Soumis” .


####  Projets de rapports {#draft-reports}


* Sur l'écran "Nouveau rapport", appuyez sur le bouton "Enregistrer le brouillon" pour enregistrer le rapport en tant que brouillon.
    * Un message de confirmation s'affichera et vous pourrez continuer à travailler sur le rapport ou quitter pour y revenir plus tard.
* Si vous essayez de quitter un rapport sans sauvegarder votre travail, il vous sera demandé de confirmer si vous êtes sûr de quitter sans enregistrer le rapport.
* Dans l'onglet Brouillon, vous pouvez afficher et gérer les brouillons de rapports. Ouvrez un brouillon de rapport pour continuer à travailler dessus et soumettez-le.
* Vous pouvez supprimer un brouillon de rapport en appuyant sur les trois points > **Supprimer** ou en saisissant le rapport et en appuyant sur le bouton Supprimer.


#### Soumettre un rapport {#submit-a-report}

* Dans un rapport, appuyez sur « Soumettre » pour lancer la soumission du rapport.
* Vous serez redirigé vers un écran récapitulatif affichant la progression du chargement pour chaque pièce jointe.
* Un bouton "Supprimer" est disponible pour arrêter le téléchargement et supprimer le rapport.
* Si le rapport est en cours de chargement, un bouton « Pause » permet d'arrêter temporairement le téléchargement, qui peut être repris ultérieurement à l'aide du bouton « Reprendre ».
* Sortir d'un rapport n'affecte pas l'état du chargement. Si le rapport est en cours de chargement, le processus continue.

:::info
Une fois qu'un rapport a été chargé sur Tella Web, il n'est plus possible de le supprimer partir de l'application mobile Tella. La suppression d'un rapport soumis supprimera uniquement la version locale de celui-ci, pas le rapport sur le serveur.
:::

:::info
La suppression d'un rapport en cours de soumission annulera le chargement des fichiers qui n'ont pas encore été tchargés, mais les fichiers soumis et les fichiers partiellement soumis qui sont déjà sur Tella Web ne seront pas supprimés.
:::


#### Boîte d'envoi {#boîte d'envoi}

La boîte d'envoi contient les rapports qui ont été enregistrés pour être soumis. Ces documents pourraient être :

* Soumissions suspendues
* Envois de rapports interrompus en raison de problèmes de connectivité.
* Rapports marqués comme « Soumettre plus tard »


#### Rapports soumis {#submit-reports}

- L'onglet Soumis affiche les rapports qui ont été soumis avec succès au serveur Tella Web.
- Dans l'onglet Soumis, vous pouvez afficher et examiner les rapports soumis.

:::info
Si la connexion Internet est interrompue, les rapports seront envoyés dans l'onglet Boîte d'envoi et vous devrez reprendre manuellement la soumission.
:::


### Fonctionnalités avancées {#advanced-features}

#### Rapport automatique {#auto-report}

Si le rapport automatique est activé, Tella créera et chargera automatiquement des rapports chaque fois que vous prendrez une photo, enregistrerez une vidéo ou capturerez un enregistrement audio dans Tella. Cela garantit que vos rapports sont chargés de manière transparente sans nécessiter de travail manuel. Les fichiers sont chargés dans le même rapport automatique s'ils sont collectés dans un délai de 30 minutes.

Le rapport automatique peut être activé à partir de l’écran Modifier la connexion.

:::info
le rapport automatique ne peut être activé que pour un projet à la fois
:::

#### Suppression automatique {#auto-delete}

Lorsque le rapport automatique est activé, vous pouvez activer la suppression automatique, qui supprime automatiquement les rapports et leurs fichiers associés de votre appareil une fois qu'ils ont été téléchargés avec succès sur Tella Web. Cela vous aide à gérer l'espace de stockage de votre appareil et garantit que les données sensibles ne soient pas conservées involontairement.

Le bouton bascule de suppression automatique apparaîtra sous le bouton bascule de rapport automatique sur l’écran Modifier la connexion pour le projet souhaité.

#### Soumission en arrière-plan {#background-submission}

La soumission en arrière-plan permet au processus de soumission du rapport de continuer même si vous passez à d'autres tâches dans Tella ou si vous quittez complètement Tella. La soumission en arrière-plan peut fonctionner en combinaison avec des rapports manuels et automatiques, et peut être activée sur l'écran Modifier la connexion pour le projet souhaité.

Lorsque la soumission en arrière-plan est activée, peu importe ce que vous faites dans Tella ou si vous fermez l'application, le processus de chargement se poursuivra sans interruption. Cela fonctionnera également si les rapports automatiques sont activés et que vous fermez l'application après avoir collecté les informations.

Lors du échargement de rapports en arrière-plan, Tella reste déverrouillée. Cela signifie que si quelqu'un ouvre Tella, il ou elle pourra accéder à vos fichiers et rapports. Pour verrouiller Tella lorsque les rapports sont téléchargés en arrière-plan, appuyez sur le bouton « Sortie rapide » en haut à droite de l'écran d'accueil de Tella.

Si la soumission est interrompue en raison d'une connexion Internet faible ou d'autres facteurs, Tella enverra le rapport vers l'onglet Boîte d'envoi et redémarrera automatiquement le chargement dès que le téléphone retrouvera une connexion Internet stable.
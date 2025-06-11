---
id: features
title: Fonctionnalités de Tella
description: Une description détaillée des caractéristiques de Tella.
slug: /features
---

import FeaturesTable from '.././_features-table.md';

# Fonctionnalités de Tella

Toutes ces fonctionnalités sont accessibles à tous les utilisateurs ou utlisatrices de Tella au moment où ils téléchargent l'application. Elles ne nécessitent ni connexion à un serveur, ni installation particulière.

<FeaturesTable/>


## Verrouillage de l'application {#app-lock}

Lors de l'installation de Tella, l'utilisateur ou utilisatrice doit sélectionner un verrou 🔒 pour chiffrer et déchiffrer le contenu de l'application.


* Si vous êtes sur Android, vous pouvez sélectionner un modèle, un code PIN ou un mot de passe.
* Sur iOS, vous pouvez opter pour un code PIN ou un mot de passe.

Sans ce verroullage, il n'est pas possible d'ouvrir Tella.

:::danger
Si vous perdez ou oubliez votre moyen de verrouillage, il ne vous sera pas possible de retrouver l'accès à Tella et aux fichiers stockés dans l'application. Vous devez alors désinstaller et réinstaller Tella, et du coup tous vos fichiers seront perdus..🔒🔑🚪
:::

:::tip Video tutorial 🎥
Apprenez-en plus sur les modes de verroullages de Tella grâce à notre [tutoriel vidéo](/video-tutorials#tella-locks) 
:::

## Chiffrement en arrière-plan {#background-encryption}

Tella [chiffre](#encryption) les fichiers en arrière-plan afin que les utilisateurs puissent continuer à effectuer des actions (prendre plus de photos ou de vidéos, importer plus de fichiers, etc.) pendant que les fichiers sont chiffrés. Les utilisateurs peuvent voir les activités en cours qui se déroulent en arrière-plan dans une **barre d'activités en arrière-plan** accessible depuis l'écran d'accueil de Tella, en appuyant sur l'icône « notifications » (🔔) en haut à gauche.

Pendant le chiffrement des fichiers, Tella affiche un marqueur orange sur l'icône de notifications. Si l'utilisateur ouvre la barre d'activité en arrière-plan pendant le chiffrement de certains fichiers, il verra la liste des fichiers dans la file d'attente et la progression du chiffrement.

:::danger
Si l'utilisateur quitte Tella de manière forcée (par exemple en utilisant [Quick Exit](#quick-exit) ou en réduisant l'application) alors que des fichiers sont en cours de chiffrement en arrière-plan, ceux-ci seront perdus.
:::

:::info
Si le [mode de vérification](/features#verification-mode) est activé, le chiffrement en arrière-plan sera désactivé pour garantir que toutes les métadonnées du fichier sont capturées en même temps que la photo, la vidéo ou le fichier audio est enregistré. 
:::

## Configuration du délai du verrouillage {#lock-timeout-configuration}
Par défaut, Tella se verrouille immédiatement chaque fois que l'utilisateur quitte l'application ou que l'écran de votre téléphone s'éteint. Si vous souhaitez modifier ce paramètre, l'utilisateur peut le faire en accédant à

For the moment we support the following connections. Follow each of the links to find details and step-by-step guides on how to connect and use each of them:
* Les options disponibles sont 1 minute, 5 minutes, 30 minutes et 1 heure. ⏱️
* :::info
Veuillez utiliser cette fonctionnalité avec précaution car si Tella est déverrouillé, les données ne seront pas protégées et toute personne entrant dans Tella pourra voir toutes les informations qui s'y trouvent.
:::
* :::info
Lorsque la caméra ou l'enregistreur audio sont ouverts, Tella ne se verrouille pas
:::
* :::tip Video tutorial 🎥
Apprenez-en plus sur les modes de verroullages de Tella grâce à notre [tutoriel vidéo](/video-tutorials#additional-security-features) 
:::
* Mode silencieux de la caméra {#camera-silent-mode}
* Par défaut, le mode silencieux de l'appareil photo de Tella est désactivé. En allant dans **Paramètres ⚙️** > **Sécurité** > **Mode silencieux de l'appareil photo**, il est possible de désactiver le son de l'obturateur de l'appareil photo pour attirer moins l'attention lors de la prise de photos. 📷🔇

:::tip Video tutorial 🎥
Apprenez-en plus sur les modes de verroullages de Tella grâce à notre [tutoriel vidéo](/video-tutorials#additional-security-features) 
:::
Sécurité de l'écran {#screen-security}


Par défaut, Tella bloque les captures d'écran et les enregistrements d'écran dans Tella et masque l'aperçu de l'écran dans la liste des applications récentes 📱🔒. Il est possible de désactiver cette fonctionnalité de sécurité si les utilisateurs ont besoin de prendre des captures d'écran ou des enregistrements d'écran, ou de mettre en miroir Tella sur un ordinateur pour une présentation, en allant dans **Paramètres** ⚙️ > **Sécurité** > **Sécurité de l'écran**.



## Sur iOS, le système de sécurité garantit uniquement le blocage des enregistrements d'écran dans Tella même et empêche l'affichage de l'écran dans la liste des applications récentes, sans qu'il soit possible de désactiver les captures ou les enregistrements d'écran.

:::tip video tutorial 🎥
Apprenez-en plus sur les fonctionnalités de sécurité supplémentaires de Tella dans notre [tutoriel vidéo](/video-tutorials#additional-security-features)
:::

Restreindre les tentatives de déverrouillage {#restrict-unlocking-attempts}

En allant dans **Paramètres ⚙️** > **Sécurité** > **Supprimer après un échec de déverrouillage**, vous pouvez choisir combien de tentatives de déverrouillage échouées sont autorisées avant que tout ce qui se trouve à l'intérieur de Tella ne soit supprimé.

Ce paramètre est désactivé par défaut, ce qui signifie que les tentatives de déverrouillage sont illimitées et que les données ne se suppriment pas. Vous pouvez choisir de limiter le nombre de tentatives de déverrouillage à 5, 10 ou 20 fois. En choisissant l'une de ces options, vous pourrez également opter pour l'affichage d'un indicateur visuel sur l'écran de déverrouillage avant le nombre de tentatives spécifié (3 tentatives restantes, 2 tentatives restantes, etc.), ou alors vous pouvez choisir de ne pas afficher d'indicateur visuel du tout.

Après le nombre spécifié de tentatives infructueuses, tous les fichiers, les connexions et tout ce qui se trouve dans Tella seront supprimés, et l'application reviendra automatiquement à l'état « fraîchement installé ».

:::danger
Bien que ce paramètre de sécurité empêche les tentatives forcées de déverrouillage de Tella, il doit être utilisé avec prudence, car une fois le nombre maximum de tentatives de déverrouillage échouées atteint, il n'y a aucun moyen de restaurer le contenu sur Tella..
:::



## Modifier le média {#edit-media}

Nous sommes en train d'ajouter la possibilité de modifier des fichiers multimédias directement dans Tella. Bientôt, les utilisateurs n'auront plus besoin d'exporter leurs fichiers en dehors de Tella pour les modifier. Tella Android et Tella iOS démarrent avec des fonctionnalités de retouche photo (recadrage et rotation).

Vous pouvez modifier une image en allant dans **Plus** > **Modifier** à partir du dossier **Images** ou en appuyant sur le bouton **Modifier** en haut à droite tout en visualisant l'image que vous avez sur Tella. Sur l'écran Modifier l'image, vous pouvez utiliser le bouton **Rotation** en bas de l'écran pour faire pivoter l'image dans le sens inverse des aiguilles d'une montre ou pincer et agrandir ou contracter vos doigts pour déplacer la toile blanche afin de recadrer l'image. Une fois les modifications terminées, vous pourrez appuyer sur la coche orange en haut à droite de l'écran d'édition.


## Chiffrement {#encryption}

Tous les fichiers stockés dans Tella sont cryptés. Sans le code d'accès à l'application, il est impossible de décrypter et d'accéder à l'un ou l'autre des fichiers stockés dans Tella. 🔒🔐

Lorsque vous installez l'application, vous décidez de la méthode de verrouillage que vous souhaitez utiliser. Pour Android, un motif à six points, un code PIN ou un mot de passe peuvent être utilisés. Pour iOS, en revanche, il n'est possible que d'opter pour un code PIN ou un mot de passe. Sans la méthode de verrouillage, l'application ne peut pas être utilisée.


Sans cela, et même si l'appareil est branché sur un ordinateur et que toutes les données de l'appareil ont été extraites pour être analysées, tout le contenu et toutes les données de Tella ressembleront à du charabia et seront inutilisables. Déverrouiller l'application par la bonne méthode est le seul moyen de décrypter, et donc de lire, le contenu stocké dans Tella.

## :::danger
Si votre méthode de verrouillage est trop faible, quelqu'un pourrait la deviner et ouvrir l'application sur le téléphone ; ou bien les données pourraient être extraites et la clé de cryptage pourrait être forcée par un ordinateur et les données pourraient alors être décryptées.
:::
:::danger
Si vous oubliez comment dévérouiller Tella, il n'y a aucun moyen d'y accéder et donc de récupérer le contenu que vous avez stocké.
:::

:::tip video tutorial 🎥
Apprenez-en plus sur les modes de verroullages et sur le cryptage grâce à notre [tutoriel vidéo](/video-tutorials#tella-locks)
:::

:::info
Des informations techniques sur le cryptage sont disponibles dans la section [Sécurité et confidentialité](/security-and-privacy).
:::

Gestion des fichiers {#file-management}

Tella vous permet de gérer les fichiers et les dossiers de la même manière que sur un ordinateur. Tous les fichiers et dossiers sont **cryptés et accessibles uniquement dans Tella**. 📂📝

## Dans Tella,  vous pouvez:
Stocker n'importe quel fichier, y compris des photos 📷, des vidéos 🎥, des fichiers audio 🎧 et des documents 📝.

| Créer des dossiers et des sous-dossiers. | Déplacer les fichiers dans des dossiers et d'un dossier à un autre. | Exporter des fichiers sur votre appareil. Une fois enregistrés sur votre appareil en dehors de Tella, les fichiers ne sont plus cryptés et seront accessibles à toute personne fouillant l'appareil. | Importez des fichiers depuis leur appareil. Les fichiers sont automatiquement chiffrés lorsqu'ils sont importés dans Tella. | :::danger
L'importation de fichiers du système de fichiers de l'appareil dans Tella crée une copie des fichiers dans Tella. Tella vous demandera si vous souhaitez conserver ou supprimer le fichier original de votre téléphone lors de l'importation. Si vous choisissez de conserver le fichier original, il sera présent sur l'appareil, en dehors de Tella et non crypté. 🔒
::: |
|----------------|-------------|-------------------|---------------|----------------|
| Retour d'information {#feedback}          | Il existe plusieurs options vous permettant de [contacter l'équipe Tella] (/contact-nous) afin de suggérer des améliorations, de signaler des bogues et des problèmes et de demander de l'aide. Vous pouvez le faire de 2 manières:        | **Courriel:**                | Allez dans **Paramètres** > **À propos et aide** > **Contactez-nous** pour trouver l'adresse e-mail.            | ✔️             |
| **Formulaire de commentaires intégré:**          | Allez dans **Paramètres** > **Commentaires** pour ajouter un commentaire.      | Cela vous permetde partager leurs commentaires avec l'équipe Tella de manière anonyme.                | Pour garantir votre confidentialité anonymat, seules les données essentielles sont transmises à notre serveur de commentaires via des requêtes HTTPS POST. Les journaux contenant des informations sur l'utilisateur (adresse IP, date et heure et agent utilisateur) sont automatiquement supprimés chaque semaine.            | ✔️             |
| :::info
La seule information que nous recevrons est le contenu vous ajouterez spécifiquement sur le formulaire de commentaires. Si vous souhaitez demander de l'aide ou un suivi avec vous, vous doivent nous fournir un moyen sécurisé de vous contacter.
:::          | Importer des fichiers depuis l'appareil {#import-files-from-device}        | Grâce à la fonction d'importation, il est possible d'importer des fichiers dans Tella afin de les sécuriser. Vous pouvez importer des fichiers en cliquant sur le bouton **Ajouter ( + )** sur Tous les fichiers, Images, Vidéo, Audio ou Documents selon le type de fichier que vous souhaitez importer, puis sur **Importer depuis l'appareil** 📥. Une invite apparaît, vous demandant si vous souhaitez conserver ou supprimer le fichier d'origine de la mémoire de votre téléphone. Les fichiers importés seront conservés en toute sécurité à Tella.                | :::tip video tutorial 🎥
Apprenez-en plus sur la [collecte de preuves](video-tutorials#collecting-evidence) et le [partage de données](/video-tutorials#sharing-data-with-other-apps) dans nos tutoriels vidéo.
:::       | ✔️             |
| Dans **Paramètres** > **Sécurité**, les utilisateurs ont la possibilité de conserver ou de supprimer les métadonnées du fichier lors de l'importation de photos et de vidéos vers Tella. Les métadonnées EXIF ​​des fichiers peuvent inclure des données sur la date de création du fichier, les paramètres de l'appareil photo ou l'emplacement de l'appareil.          | Analyses préservant la confidentialité (avec consentement) {#privacy-preserving-analytics}        | Les utilisateurs d'Android peuvent choisir de partager des analyses pour améliorer Tella. Toutes les informations sont anonymes, agrégées et ne peuvent jamais être liées à des utilisateurs individuels. Pour des informations techniques sur le système que nous utilisons et les mesures que nous collectons, visitez la [section Analyses de la page Sécurité et confidentialité](/security-and-privacy#analytics).                | Ouvrir des fichiers dans Tella {#open-files-in-tella}       | ✔️        |
| Sur Tella FOSS, les PDF doivent être exportés pour être ouverts.          | Camouflage {#camouflage}        | Sur Tella Android, il est possible de masquer Tella de deux manières :       | Vous pouvez changer le nom et l'icône de l'application, pour la faire ressembler à une autre application du genre un jeu ou une application météo. 🎮🌦️          | Vous pouvez cacher Tella derrière une calculatrice entièrement fonctionnelle. Pour ouvrir Tella, vous devez saisir votre code PIN dans la calculatrice, suivi de **=**. Le camouflage de la calculatrice n'est possible que si vous utilisez un code PIN. Il n'est pas possible de camoufler Tella en calculatrice si un motif ou un mot de passe est utilisé. 🔢🔒        |
| À l'heure actuelle, en raison des restrictions imposées sur l'App Store d'Apple, Tella pour iOS ne prend pas en charge les fonctionnalités de camouflage disponibles telles que sur Tella Android.          | :::danger
Le nom « Tella » et son icône resteront visibles dans les paramètres Android. Cela signifie que le camouflage ne protégera pas contre un individu recherchant _activement_ Tella sur le téléphone ou effectuant une analyse approfondie de l'appareil. 🔒👀
:::      | :::tip video tutorial 🎥
Apprenez-en plus sur [Camouflaging Tella](/video-tutorials#camouflaging-tella) dans notre tutoriel vidéo. 
:::       | ✔️          | Par défaut, l'écran d'accueil de Tella organise les fichiers par type : 📷 images, 🎥 vidéos, 🎧 audio, 📄 documents et autres fichiers. Il fournit également une section Tous les fichiers où tous les fichiers sont accessibles. Pour plus d'informations, consultez la section Gestion des fichiers.        |
| Pour plus de commodité et de facilité d'accès, il est également possible de personnaliser l'écran d'accueil pour afficher également des raccourcis vers un ou plusieurs des éléments suivants :          | Fichiers récents, pour ouvrir rapidement les fichiers les plus récents dans Tella 💼        | Formulaires favoris,  si vous êtes connectés à un serveur ODK 📝           |  Modèles favoris, si vous êtes connectés à un serveur Uwazi 📋          | Cette configuration se trouve dans **Paramètres** > **Général**.        |

Suppression rapide {#quick-delete}
- **Rotate**:  Use the Rotate button at the bottom of the screen to rotate the image counter-clock wise. 
- Supprimer le coffre-fort : supprime tous les fichiers stockés dans Tella 🗑️
- Supprimer les brouillons et les formulaires soumis: supprime les brouillons et les formulaires soumis sur tous les serveurs connectés à l'Open Data Kit (ODK) 📝
- Supprimer les paramètres du serveur : supprime toutes les connexions au serveur et tous les formulaires ou modèles qui leur sont associés 📋

Supprimer Tella : supprime l'application et toutes les données qu'elle contient. Un message apparait vous demandant si vous souhaitez également désinstaller Tella ❌.


:::info Supprimer Tella
En raison de limitations techniques, il se peut que l'option Supprimer Tella soit indisponible sur certains téléphones Android. Nous travaillons à résoudre ce problème. Pour iOS, il est impossible par programmation de supprimer une application.
:::
- Sortie rapide {#quick-exit}
- Sur Android, il est possible de fermer et de verrouiller rapidement l'application en cas d'urgence en cliquant sur le bouton de sortie situé dans le coin supérieur droit de l'écran d'accueil de Tella. Le fait d'avoir réglé le délai de verrouillage sur « immédiatement » signifie que l'application se verrouille automatiquement lorsque vous en sortez. Ceci dit, l'utilisation du bouton de sortie rapide ajoute une couche supplémentaire de sécurité et garantit que l'application est entièrement fermée et verrouillée.🔒

Sur iOS, il n'est pas possible de fermer une application simplement à partir de l'application elle-même. C'est en tapant sur le bouton de sortie rapide que l'application se verrouille.
- **Trim**: Move the vertical orange lines to select the new start and end point of your audio or video. 
- **Rotate**: Use the Rotate button on the top right of the screen to rotate the video counter-clock wise.

Use the Play button at the bottom of the screen to listen to the audio or the Cancel button to start over. When you are done editing the file, use the orange scissors ✂️ icon in the top-right corner to save the trimmed audio or video. The edited file will be saved as a copy of the original file in the same folder.


## Dans les paramètres de Tella, vous pouvez activer le « Mode de vérification » ✅

Activée, Tella capture automatiquement des informations de vérification (métadonnées de fichier) à chaque fois que vous prenez une photo ou une vidéo, ou que vous enregistrez des données audio. Ces informations de vérification peuvent être utilisées pour corroborer les preuves, les recouper avec d'autres faits connus sur l'événement ou sur la zone où il a été capturé. Les informations de vérification seront incluses dans un fichier séparé lors de l'enregistrement du fichier sur l'appareil ou lors de son partage via des applications tierces. Le format de fichier est .CSV avec les informations de métadonnées incluses dans les colonnes. Ce fichier peut être ouvert avec n'importe quelle application de tableur (comme Excel, Google Spreadsheets ou OpenOffice). 

:::info Contactez-nous
N'hésitez pas à nous contacter, si vous avez besoin d'aide pour mieux comprendre le mode de vérification😊
:::

Vous trouverez ci-dessous une liste reprenant chaque métadonnée capturée par Tella :

**Informations sur le fichier**

Chemin du fichier: où se trouvait le fichier dans le répertoire Tella 📂

Hachage du fichier : un numéro unique pour identifier le fichier 🔍

Fichier modifié : la date et l'heure auxquelles le fichier a été modifié pour la dernière fois sur l'appareil 📅

## **Informations sur l'appareil**

Fabricant : nom du fabricant de l'appareil 📱

Matériel : modèle exact de l'appareil 💻

* Identifiant d'Appareil ou ID d'appareil : numéro unique identifiant l'appareil Android 🆔
* Taille de l'écran : taille exacte de l'écran de l'appareil 📏
    - Langue : langue dans laquelle le système d'exploitation de l'appareil est défini 🌐
    - Zone géographique : région géographique sur laquelle l'appareil est réglé 🌍
* État de la connexion : si l'appareil est connecté ou déconnecté à Internet 📶
* Type de réseau : si l'appareil est connecté à internet, précise s'il s'agit d'un réseau WiFi ou cellulaire 📲

Wi-Fi MAC : un identifiant unique au connecteur Wi-Fi de l'appareil 🔍

## IPv4 : une adresse unique identifiant la connexion internet de l'appareil 🔗

IPv6 : un identifiant plus récent à la connexion internet d'un appareil 🔗

1. **Informations sur l'environnement dans lequel le fichier a été capturé**
   - Emplacement: l'emplacement exact de l'appareil, notamment les coordonnées de latitude et de longitude, l'altitude en mètres, la précision de la mesure en mètres et l'heure 🌍
   - Fournisseur de localisation: comment la localisation de l'appareil est déterminée 📍

2. Vitesse de localisation : la vitesse à laquelle l'appareil se déplace 🚀
   - Informations cellulaires : les numéros d'identification de toutes les tours de téléphonie cellulaire auxquelles l'appareil est connecté 📡
   - Info WiFi : le nom de tous les réseaux WiFi à proximité de l'appareil 🔍


Configurer les paramètres des projets {#configure-projects-settings}

Il est possible de collecter des données directement dans Tella, de les protéger dans l'application et de se connecter à un serveur pour envoyer les données en toute sécurité. Cette fonction est fréquemment utilisée par les organisations qui centralisent les données collectées par les bénévoles ou les activistes sur le terrain. Ces personnes collectent des informations à l'aide de Tella sur leur téléphone et les envoient ensuite à leur organisation. Les déploiements précédents de Tella, où les utilisateurs et utilisatrices sur le terrain recueillaient des données et les envoyaient au serveur d'une organisation, comptaient de 1 à 2 000 utilisateurs et utilisatrices. 📲 📡


Actuellement, les serveurs pouvant être connectés à Tella sont :


## [Tella Web](/tella-web)

[Open Data Kit (ODK)](/for-organizations#open-data-kit-odk)


[Uwazi](/uwazi)

## :::tip Tutoriel Vidéo 🎥
Pour en savoir plus sur la [Connection aux Serveurs](/video-tutorials#server-connections) consultez nos tutoriels vidéo.
:::

Appareil photo (photos et vidéos) {#camera-photos-and-videos}

## Tella propose un appareil photo intégré où vous pouvez prendre des photos et des vidéos. Tous les médias collectés dans Tella ne seront pas disponibles en dehors de celui-ci, car tous les fichiers sont cryptés dès qu'ils sont récupérés. Les fichiers ne sont accessibles que dans Tella, en utilisant le verrou pour ouvrir l'application. Les photos et vidéos n'apparaîtront pas dans la galerie du téléphone. Dans Tella, les photos et vidéos auront un nom par défaut, mais vous les renommer à l'aide du bouton Renommer. Les fichiers peuvent également être organisés en dossiers. 📷
La caméra offre la possibilité de changer la résolution des vidéos avant l'enregistrement afin de gagner de la place : plus la résolution est basse, moins la vidéo prend de place, mais aussi plus la qualité de la vidéo est faible. 🎥 💾

## Dans [Tella-FOSS](/faq#is-tella-available-on-f-droid), où nous utilisons la bibliothèque CameraX entièrement open source, certaines fonctionnalités de l'appareil photo (zoom, retournement de la caméra, activation du flash, activation de la grille, changer la résolution vidéo) ne sont pas disponibles.
Sélectionner la résolution vidéo {#select-video-resolution}

## Résolution la plus élevée possible

Haute résolution (1080p)

1. Moyenne résolution (720p)
2. Basse résolution (480p)

La résolution vidéo fait référence au nombre de pixels dans chaque image de la vidéo. Des résolutions plus élevées, telles que 1080p ou 720p, permettent d'obtenir des vidéos plus nettes et plus détaillées. Cependant, gardez à l'esprit que les vidéos à haute résolution ont également des fichiers de plus grande taille, ce qui peut nécessiter plus d'espace de stockage sur votre appareil.

Il est important de noter que la sélection de la résolution vidéo n'est actuellement disponible que sur les appareils Android.

Enregistreur audio {#audio-recorder}

Tella dispose d'un enregistreur audio intégré. Tout l'audio enregistré dans Tella ne sera pas disponible en dehors de celui-ci, car tous les fichiers sont chiffrés dès leur capture. Les fichiers audio ne sont accessibles que dans Tella, en utilisant le verroullage pour ouvrir l'application. Les enregistrements n’apparaîtront pas sur l’application d’enregistrement vocal ou sur le système de fichiers du téléphone. Dans Tella, les fichiers audio auront un nom par défaut, mais les utilisateurs peuvent les renommer à l'aide du bouton Renommer. Les enregistrements audio peuvent également être organisés dans des dossiers. 🎤 🎧


## L'enregistreur audio  vous permet de mettre l'enregistrement en pause et de le redémarrer si nécessaire, en conservant toutes les informations sur le même fichier. Voous pouvez voir combien d'espace vous disposez disposent pendant l'enregistrement, pour s'assurer que vous n'en manqueront pas pendant l'opération. 📈 💾

Collecte de données hors ligne {#offline-data-collection}

Tella, une fois installée et configurée sur le téléphone, n'a pas besoin d'une connexion internet pour collecter des données. 📲 Une connexion internet n'est nécessaire que pour partager des fichiers via d'autres applications ou via Connections. 🌐 Si vous avez un serveur connecté, une fois les formulaires ou les modèles téléchargés sur le téléphone, toutes les données collectées seront stockées dans l'onglet de la boîte d'envoi et vous pourrez les télécharger sur le serveur une fois que vous vous serez connecté à Internet. 📩

* Fichiers récents, pour ouvrir rapidement les fichiers les plus récents dans Tella 💼
* Formulaires favoris,  si vous êtes connectés à un serveur ODK 📝
* Modèles favoris, si vous êtes connectés à un serveur Uwazi 📋

Cette configuration se trouve dans **Paramètres** > **Général**.


## Suppression rapide {#quick-delete}

Un bouton de suppression rapide vous permet en quelques secondes seulement, de supprimer les données sensibles de Tella. La suppression rapide peut être configurée dans **Paramètres** > **Sécurité** > **Suppression rapide**, où vous pouvez choisir d'activer un bouton coulissant sur l'écran d'accueil pour supprimer rapidement les informations de Tella dans les situations d'urgence. Si cette option est activée, vous pouvez phoisir exactement ce qui est supprimé lorsque la fonctionnalité est utilisée. Les options disponibles sont : 

* Delete files: Deletes all files stored in Tella 🗑️
* Delete draft and submitted forms: Deletes drafts and submitted forms in all Connections. [Visit the For Organizations page](/for-organizations) to  discover the available server connections 📝
* Delete server settings: Deletes all server connections and all the forms, templates or reports associated with them 📋
* Supprimer Tella : supprime l'application et toutes les données qu'elle contient. Un message apparait vous demandant si vous souhaitez également désinstaller Tella ❌.

:::info Supprimer Tella
En raison de limitations techniques, il se peut que l'option Supprimer Tella soit indisponible sur certains téléphones Android. Nous travaillons à résoudre ce problème. Pour iOS, il est impossible par programmation de supprimer une application.
:::

## Sortie rapide {#quick-exit}

Sur Android, il est possible de fermer et de verrouiller rapidement l'application en cas d'urgence en cliquant sur le bouton de sortie situé dans le coin supérieur droit de l'écran d'accueil de Tella. Le fait d'avoir réglé le délai de verrouillage sur « immédiatement » signifie que l'application se verrouille automatiquement lorsque vous en sortez. Ceci dit, l'utilisation du bouton de sortie rapide ajoute une couche supplémentaire de sécurité et garantit que l'application est entièrement fermée et verrouillée.🔒

Sur iOS, il n'est pas possible de fermer une application simplement à partir de l'application elle-même. C'est en tapant sur le bouton de sortie rapide que l'application se verrouille.

## Mode de vérification {#verification-mode}

Dans les paramètres de Tella, vous pouvez activer le « Mode de vérification » ✅

Activée, Tella capture automatiquement des informations de vérification (métadonnées de fichier) à chaque fois que vous prenez une photo ou une vidéo, ou que vous enregistrez des données audio. Ces informations de vérification peuvent être utilisées pour corroborer les preuves, les recouper avec d'autres faits connus sur l'événement ou sur la zone où il a été capturé. Les informations de vérification seront incluses dans un fichier séparé lors de l'enregistrement du fichier sur l'appareil ou lors de son partage via des applications tierces. Le format de fichier est .CSV avec les informations de métadonnées incluses dans les colonnes. Ce fichier peut être ouvert avec n'importe quelle application de tableur (comme Excel, Google Spreadsheets ou OpenOffice). 

:::info Contactez-nous
N'hésitez pas à nous contacter, si vous avez besoin d'aide pour mieux comprendre le mode de vérification😊
:::

Vous trouverez ci-dessous une liste reprenant chaque métadonnée capturée par Tella :

**Informations sur le fichier**

* Chemin du fichier: où se trouvait le fichier dans le répertoire Tella 📂
* Hachage du fichier : un numéro unique pour identifier le fichier 🔍
* Fichier modifié : la date et l'heure auxquelles le fichier a été modifié pour la dernière fois sur l'appareil 📅

**Informations sur l'appareil**

* Fabricant : nom du fabricant de l'appareil 📱
* Matériel : modèle exact de l'appareil 💻
* Identifiant d'Appareil ou ID d'appareil : numéro unique identifiant l'appareil Android 🆔
* Taille de l'écran : taille exacte de l'écran de l'appareil 📏
* Langue : langue dans laquelle le système d'exploitation de l'appareil est défini 🌐
* Zone géographique : région géographique sur laquelle l'appareil est réglé 🌍
* État de la connexion : si l'appareil est connecté ou déconnecté à Internet 📶
* Type de réseau : si l'appareil est connecté à internet, précise s'il s'agit d'un réseau WiFi ou cellulaire 📲
* Wi-Fi MAC : un identifiant unique au connecteur Wi-Fi de l'appareil 🔍
* IPv4 : une adresse unique identifiant la connexion internet de l'appareil 🔗
* IPv6 : un identifiant plus récent à la connexion internet d'un appareil 🔗

**Informations sur l'environnement dans lequel le fichier a été capturé**

* Emplacement: l'emplacement exact de l'appareil, notamment les coordonnées de latitude et de longitude, l'altitude en mètres, la précision de la mesure en mètres et l'heure 🌍
* Fournisseur de localisation: comment la localisation de l'appareil est déterminée 📍
* Vitesse de localisation : la vitesse à laquelle l'appareil se déplace 🚀
* Informations cellulaires : les numéros d'identification de toutes les tours de téléphonie cellulaire auxquelles l'appareil est connecté 📡
* Info WiFi : le nom de tous les réseaux WiFi à proximité de l'appareil 🔍

## Connexion aux serveurs {#connecting-to-servers}

Il est possible de collecter des données directement dans Tella, de les protéger dans l'application et de se connecter à un serveur pour envoyer les données en toute sécurité. Cette fonction est fréquemment utilisée par les organisations qui centralisent les données collectées par les bénévoles ou les activistes sur le terrain. Ces personnes collectent des informations à l'aide de Tella sur leur téléphone et les envoient ensuite à leur organisation. Les déploiements précédents de Tella, où les utilisateurs et utilisatrices sur le terrain recueillaient des données et les envoyaient au serveur d'une organisation, comptaient de 1 à 2 000 utilisateurs et utilisatrices. 📲 📡

Actuellement, les serveurs pouvant être connectés à Tella sont :

* [Uwazi](#uwazi)
* [Tella Web](#tella-web)
* Celles-ci sont appelées [Connexions](/features#connecting-to-servers) dans Tella.
* Sélectionner le bon type de serveur {#selecting-the-right-type-of-server}
* Voici un graphique de base non exhaustif pour vous aider à déterminer lequel des trois types de serveurs est le mieux adapté à différents besoins. C'est un bon point de départ, mais vous pouvez également regarder [cette vidéo](/video-tutorials#connections-full-video) où nous présentons chaque type de serveur. Si vous avez besoin d'aide pour décider ou si vous souhaitez demander une nouvelle connexion (une intégration à un nouveau type de serveur), [contactez-nous !](/contact-us).
* ```mermaid
graph TD;
    id1(Quel type de données les utilisateurs doivent-ils envoyer?) --> id2("Données principalement structurées (formulaires), avec des pièces jointes multimédias");
    id1 --> id3("Données principalement multimédias, avec du texte") ;
    id2 --> id4("De quelles fonctionnalités supplémentaires avez-vous besoin?");
    id3 --> id5("Tella Web");
    id4 --> id6("Établir des relations entre les points de données, publier sur un site Web")
    id4 --> id7("Ajouter une logique aux formulaires, collecter des nombres élevés pour les formulaires, créer des rapports pour visualiser les résultats")
    id4 --> id10("Envoyer des guides du serveur aux utilisateurs")
    id6 --> id8("Uwazi")
    id7 --> id9("Open Data Kit (ODK)")
    id10 -->id5
```


:::tip Tutoriel Vidéo 🎥
Pour en savoir plus sur la [Connection aux Serveurs](/video-tutorials#server-connections) consultez nos tutoriels vidéo.
:::


## Appareil photo (photos et vidéos) {#camera-photos-and-videos}

Tella propose un appareil photo intégré où vous pouvez prendre des photos et des vidéos. Tous les médias collectés dans Tella ne seront pas disponibles en dehors de celui-ci, car tous les fichiers sont cryptés dès qu'ils sont récupérés. Les fichiers ne sont accessibles que dans Tella, en utilisant le verrou pour ouvrir l'application. Les photos et vidéos n'apparaîtront pas dans la galerie du téléphone. Dans Tella, les photos et vidéos auront un nom par défaut, mais vous les renommer à l'aide du bouton Renommer. Les fichiers peuvent également être organisés en dossiers. 📷

La caméra offre la possibilité de changer la résolution des vidéos avant l'enregistrement afin de gagner de la place : plus la résolution est basse, moins la vidéo prend de place, mais aussi plus la qualité de la vidéo est faible. 🎥 💾

Dans [Tella-FOSS](/faq#is-tella-available-on-f-droid), où nous utilisons la bibliothèque CameraX entièrement open source, certaines fonctionnalités de l'appareil photo (zoom, retournement de la caméra, activation du flash, activation de la grille, changer la résolution vidéo) ne sont pas disponibles.


## Sélectionner la résolution vidéo {#select-video-resolution}
Vous pouvez facilement choisir la résolution vidéo souhaitée sur Tella en accédant à l'écran d'enregistrement vidéo et en appuyant sur le bouton Paramètres. Les options disponibles incluent : 
- Résolution la plus élevée possible
- Haute résolution (1080p)
- Moyenne résolution (720p)
- Basse résolution (480p)

La résolution vidéo fait référence au nombre de pixels dans chaque image de la vidéo. Des résolutions plus élevées, telles que 1080p ou 720p, permettent d'obtenir des vidéos plus nettes et plus détaillées. Cependant, gardez à l'esprit que les vidéos à haute résolution ont également des fichiers de plus grande taille, ce qui peut nécessiter plus d'espace de stockage sur votre appareil.

Il est important de noter que la sélection de la résolution vidéo n'est actuellement disponible que sur les appareils Android.


## Enregistreur audio {#audio-recorder}

Tella dispose d'un enregistreur audio intégré. Tout l'audio enregistré dans Tella ne sera pas disponible en dehors de celui-ci, car tous les fichiers sont chiffrés dès leur capture. Les fichiers audio ne sont accessibles que dans Tella, en utilisant le verroullage pour ouvrir l'application. Les enregistrements n’apparaîtront pas sur l’application d’enregistrement vocal ou sur le système de fichiers du téléphone. Dans Tella, les fichiers audio auront un nom par défaut, mais les utilisateurs peuvent les renommer à l'aide du bouton Renommer. Les enregistrements audio peuvent également être organisés dans des dossiers. 🎤 🎧

L'enregistreur audio  vous permet de mettre l'enregistrement en pause et de le redémarrer si nécessaire, en conservant toutes les informations sur le même fichier. Voous pouvez voir combien d'espace vous disposez disposent pendant l'enregistrement, pour s'assurer que vous n'en manqueront pas pendant l'opération. 📈 💾


## Collecte de données hors ligne {#offline-data-collection}

Tella, une fois installée et configurée sur le téléphone, n'a pas besoin d'une connexion internet pour collecter des données. 📲 Une connexion internet n'est nécessaire que pour partager des fichiers via d'autres applications ou via Connections. 🌐 Si vous avez un serveur connecté, une fois les formulaires ou les modèles téléchargés sur le téléphone, toutes les données collectées seront stockées dans l'onglet de la boîte d'envoi et vous pourrez les télécharger sur le serveur une fois que vous vous serez connecté à Internet. 📩



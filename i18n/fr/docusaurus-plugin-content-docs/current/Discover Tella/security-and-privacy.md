---
id: security-and-privacy
title: Sécurité et confidentialité
description: Informations sur la sécuritée et la confidentialité dans Tella.
slug: /security-and-privacy
sidebar_position: 2
---

# Sécurité et confidentialité

Tella a été conçue pour protéger les personnes victimes de répression physique et numérique. Toutes les fonctionnalités et les décisions relatives aux produits de Tella ont donc été élaborées en tenant compte de la protection de la vie privée et de la sécurité. Tella est régulièrement auditée par des sociétés de sécurité indépendantes, et les fonctionnalités et la documentation sont conçues avec le soutien et les conseils de professionnels de la sécurité. 


## Confidentialité {#privacy}

Nous collectons uniquement la quantité minimale de données nécessaire pour atteindre l'objectif de Tella. **Nous ne collectons jamais d'informations personnelles identifiables. Nous ne divulguons, partageons ou vendons jamais aucune de vos données à des tiers**.

En utilisant notre application, les utilisateurs et utilisatrices peuvent envoyer des données à des serveurs gérés par des personnes ou des organisations avec lesquelles ils ou elles travaillent. Nous les encourageons à interroger ces personnes ou organisations sur leurs politiques relatives à la confidentialité des données, car elles peuvent différer des nôtres. Nous offrons le même niveau de protection de la confidentialité à tous nos utilisateurs, où qu'ils se trouvent dans le monde.

Vous pouvez consulter la [Politique de confidentialité](/privacy) complète de Tella.


### Tella Android {#tella-android}

Tella Android, disponible sur le Google Play Store, comprend deux trackers, [Google CrashLytics](https://firebase.google.com/docs/crashlytics) et [Google Firebase Analytics](https://firebase.google.com/docs/analytics), qui nous aident à détecter les bugs et les crashs. Ceci est essentiel pour que l'application reste sécurisée et performante pour les utilisateurs à risque.

### Tella-FOSS {#tella-foss}

[Tella-FOSS](/faq#is-tella-available-on-f-droid), sur la [boutique F-droid](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/), ne contient aucun tracker.


### Tella iOS {#tella-ios}

[Tella for iOS](https://apps.apple.com/us/app/tella-document-protect/id1598152580) n'inclut aucun traceur.

En raison des politiques strictes d’Apple concernant les applications iOS, Tella pour iOS n’est actuellement pas disponible sur les magasins d’applications alternatifs ni pour une installation manuelle.

## Analyses {#analytics}

Dans Tella Android, Tella FOSS et [Tella Web](/tella-web), les utilisateurs peuvent choisir de partager des analyses pour améliorer Tella. Ces données nous aident à comprendre comment les gens utilisent Tella et quelles fonctionnalités sont importantes pour eux. ***Les données d'analyse ne sont collectées que si les utilisateurs choisissent de les accepter dans les paramètres de l'application***

Nous utilisons [Divvi Up](https://divviup.org/), un service de télémétrie respectueux de la vie privée. Divvi Up est mis en œuvre par le [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/), une organisation à but non lucratif qui gère également le projet [Let’s Encrypt](https://letsencrypt.org/).

Voici quelques informations sur notre approche analytique respectueuse de la vie privée:

1. **Toutes les données sont anonymes et agrégées**: la bibliothèque Divvi Up divise les données en deux partages anonymisés et cryptés et télécharge chaque partage vers différents processeurs de partage de données (un hébergé par ISRG et un hébergé par nous) qui ne partagent pas de données entre eux. De cette façon, seules des informations partielles sur les données d'origine sont révélées à l'un ou l'autre des processeurs.
2. **Même si nous le voulions, nous ne pourrions pas obtenir toutes les données**: Il n'est pas possible de construire toutes les données avec une seule part. Chaque processeur agrège ses parts de données en une somme partielle. Les sommes partielles peuvent ensuite être combinées en une agrégation finale, permettant d'obtenir des statistiques utiles sur l'ensemble des données tout en révélant un minimum d'informations sur les participants individuels. Une documentation technique complète sur le fonctionnement de Divvi Up est disponible [ici](https://docs.divviup.org/).
3. **Nous collectons le moins de données possible**: Même si toutes les données sont anonymisées, nous minimisons toujours la quantité de données que nous collectons. À partir des dernières versions de Tella, nous collectons uniquement des données sur les événements suivants (et rien de plus):

    **Tella Android and Tella FOSS**
    - Nombre d'événements de déverrouillage réussis.
    - Number of media files recorded (videos/photos taken and audio recordings captured).
    - Number of files imported from the device's gallery or file system into Tella.
    - Number of security features activated (number of times that camouflage is enabled, number of times that the quick delete action is triggered).
    - Number of new installations.
    - Number of reports uploaded to any connection (Tella Web, Uwazi, ODK, Nexcloud, Google Drive, Dropbox)
    - Time spend in Tella. 


    **Tella Web**
   The data below is only collected from Tella Web instances that have opted-in to share privacy-preserving analytics with the Tella team.
    - Nombre de visites (déclenché chaque fois que quelqu'un entre dans une instance Tella Web).
    - Nombre de téléchargements de fichiers (déclenché chaque fois que quelqu'un télécharge un fichier sur une instance tellaweb).
    - Nombre de rapports (déclenché chaque fois que quelqu'un télécharge un rapport sur une instance tellaweb).


Pour plus d'informations sur les métriques que nous ajoutons à nos applications, consultez nos [notes de publication](/releases).


## Fonctionnalités de sécurité {#security-features}

Tella dispose de plusieurs mesures de sécurité afin d'atteindre un niveau de sécurité acceptable :



1. **Chiffrement au repos**: Toutes les données sont chiffrées au repos, sur l'appareil de l'utilisateur. Cela signifie qu'à moins que l'application ne soit déverrouillée (en saisissant le mode de déverroullage de l'utilisateur ou utilisatrice), les données qu'elle contient ne sont pas du tout accessibles. les données resteront illisibles, même si quelqu'un s'empare du téléphone et en extrait toutes les données à l'aide d'un ordinateur.
2. **Cryptage en transit:** Toutes les données transférées entre Tella et les serveurs (voir [Section Connexions](/features#connecting-to-servers)) sont cryptées via[Transport Layer Security (TLS)](https://fr.wikipedia.org/wiki/Transport_Layer_Security). Tella rend impossible l'envoi de données à un serveur sans cryptage TLS.
3. **Verrouillage**: les utilisateurs et utilisatrices de Tella [choisissent une méthode de verroullage](/features#app-lock) pour l'application dès qu'ils l'installent. Ils ou elles peuvent utiliser un mot de passe, modèle et code PIN sont disponibles et chaque niveau de sécurité leur est communiqué.
4. **Délai du verrouillage :** Les utilisateurs ou utilisatrices peuvent également configurer un [délai d'expiration du verrouillage](/features#lock-timeout-configuration), pour choisir la rapidité avec laquelle Tella se verrouillera lorsqu'il n'est pas utilisé. Par défaut, le délai d'expiration du verrouillage est défini sur « immédiatement ». Ainsi, dès que l'utilisateur ou utilisatrice quitte Tella, l'application se verrouille et toutes les données sont cryptées.
5. **Camouflage**: sur Tella Android, il existe actuellement [deux modes de camouflage](features#camouflage) pour Tella : une calculatrice entièrement fonctionnelle et la possibilité de modifier le nom et l'icône de l'application pour la rendre plus difficile à trouver sur le téléphone. En raison des restrictions sur iOS, il n'est pas possible de camoufler Tella pour iOS.
6. **Bouton de suppression rapide** : les utilisateurs ou utilisatrices peuvent activer un bouton coulissant **[suppression rapide](features#quick-delete)** pour effacer rapidement les données de Tella en cas d'urgence. Ils ou elles peuvent choisir, dans les paramètres de Tella, de supprimer tous les fichiers stockés dans Tella, les formulaires brouillons et soumis, les paramètres du serveur et l'application elle-même lorsque ce bouton est déclenché. Lorsque le bouton Suppression rapide est déclenché, un compte à rebours de 5 secondes s'affich. Pendant le compte à rebours, l'utilisateur ou utilisatrice peut annuler l'action de suppression rapide en appuyant n'importe où sur l'écran. Lorsque le compte à rebours atteint 0, l'action de suppression définie est appliquée. Si l'utilisateur ou utilisatrice ou a sélectionné les options ‘supprimer Tella’, Android lui demandera de confirmer la suppression de l'application.
7. **Mode silencieux de l'appareil photo** : les utilisateurs ou utilisatrices peuvent choisir de [désactiver le son de l'obturateur de l'appareil photo](/features#camera-silent-mode) pour attirer moins d'attention lorsqu'ils ou elles prennent des photos.
8. **Sécurité de l'écran**: par défaut, Tella bloque les captures d'écran et les enregistrements d'écran dans Tella et masque l'aperçu de l'écran dans la liste des applications récentes. [Ce paramètre](/features#screen-security) peut être désactivé, par exemple pour enregistrer des tutoriels vidéo dans Tella ou mettre en miroir l'application sur un ordinateur pour une présentation.
9. **Restreindre les tentatives de déverrouillage** : Les utilisateurs et utilisatrices peuvent décider du nombre de [tentatives de déverrouillage] (features#restrict-unlocking-attempts) autorisées avant que tout ce qui se trouve dans Tella ne soit supprimé et si un indicateur visuel des tentatives de déverrouillage restantes sera visible sur l'écran de déverrouillage ou non.
10. **Offline file sharing**: Tella allows establishing a secure connection with devices that are in the same physical location and transferring files encrypted, from one Tella vault to another. [Nearby Sharing](/nearby-sharing) works fully offline, even on insecure networks or networks being surveilled.  Nearby Sharing is available cross-platform (between Android, iOS and Desktop).

:::tip Tutoriel vidéo 🎥
Apprenez-en davantage sur les fonctionnalités de sécurité grâce à notre [tutoriel vidéo](/video-tutorials#additional-security-features)
:::


## Limitations en matière de sécurité {#security-limitations}

Il n’existe pas d’application 100 % « sécurisée ». La sécurité dépend des menaces et des risques auxquels chaque utilisateur ou utilisatrice est confronté, ainsi que des capacités des adversaires. Avec Tella, nous avons fait de notre mieux pour ajouter autant de couches de sécurité que possible afin de réduire la probabilité que quelqu'un puisse détecter l'application ou accéder à ses données. Nous répertorions ici tous les risques de sécurité et limitations importants dont les utilisateurs ou utilisatrices doivent être conscients lorsqu'ils utilisent Tella :



* Camouflage:
    * Sur Android, lorsque Tella est camouflée à l'aide de l'une des deux [méthodes de camouflage disponibles](/features#camouflage), l'application peut toujours être détectée dans les paramètres Android. Cela signifie qu'une personne qui accède aux paramètres Android > Applications pourra voir qu'une application appelée “Tella” est installée sur l'appareil. Elle pourra également voir la taille de l'application. Ainsi, si l'utilisateur stocke des fichiers très volumineux, comme des vidéos, l'application peut attirer l'attention.
* Gestion des fichiers:
    * Les fichiers exportés depuis Tella vers le système de fichiers de l'appareil ne sont plus cryptés. Cela signifie que toute personne ayant accès à l'appareil et parcourant le système de fichiers ou la galerie peut trouver ces fichiers.
    * Les fichiers partagés par l'intermédiaire d'applications tierces peuvent être visibles par ces applications et enregistrés sous forme non chiffrée dans le système de fichiers de l'appareil, et une personne effectuant une recherche dans ces applications peut être en mesure de trouver les fichiers. Par exemple : une photo stockée dans Tella et partagée sur WhatsApp sera visible dans WhatsApp, ainsi que dans le système de fichiers, où sont stockées les photos WhatsApp. Cela s'explique par le fait que pour être partagé avec des applications tierces, le fichier doit être enregistré dans le système de fichiers du téléphone, qui n'est pas crypté. C'est pourquoi nous recommandons de supprimer manuellement le fichier du système de fichiers de l'appareil après l'avoir partagé.
    * Files sent to a [server connection](/for-organizations) will be stored un-encrypted on the server, unless the server has implemented disk encryption. People who have access to the server might be able to see the files. Tella makes sure that the data travels encrypted to the server but cannot guarantee the security practices of the server. If you choose to connect to a Google Drive or Dropbox instance, or work with a third party organization for hosting your data, we recommend looking into whether the organization itself can access your data.
    * L'importation d'un fichier crée une copie de ce fichier, puis l'importe et le chiffre dans Tella. Sur les versions 1.1 (iOS) et 2.1 (Android), nous avons développé une fonctionnalité permettant aux utilisateurs et utilisatrices de choisir s'ils souhaitent conserver ou supprimer le fichier d'origine lors de l'importation vers Tella. Cependant, nous vous recommandons de vérifier que le fichier original n'est pas présent dans la corbeille (Mes fichiers > Corbeille) et de supprimer le fichier de tout service de sauvegarde automatique que vous avez activé sur votre téléphone (Google Photos, Dropbox, etc.).


## Audits de sécurité {#security-audits}

Nous demandons régulièrement à des sociétés de sécurité indépendantes d’auditer notre code pour garantir qu’il est robuste et sécurisé.

| Date | Audité par | Les plateformes auditées  | Lien      |
| -----|----------|----|-----------|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| Mai 2024 | Subgraph Technologies, Inc. |  Android, iOS, Tella Web|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| Mai 2023 | Subgraph Technologies, Inc. | Android, iOS, Tella Web |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|










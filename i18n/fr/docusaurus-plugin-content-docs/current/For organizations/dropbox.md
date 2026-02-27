---
id: dropbox
title: Dropbox 
description: Tella allows users to conveniently upload photos, videos and audio recordings to Dropbox.
slug: /dropbox
---

# Dropbox Connection

[Dropbox](https://www.dropbox.com/) is commercial file hosting service that offers free and paid plans. 

Tella allows users to sign into their Dropbox account directly from Tella and upload files directly to it.

Similarly to other server connections (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Nextcloud](/nextcloud), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Dropbox server enhances the security of data collected on Tella by:

1. Permettant aux utilisateurs et utilisatrices de collecter des données directement dans le conteneur crypté de Tella.
2. Ensuring that data is sent directly from Tella to Dropbox, without needing to install the Dropbox app on the device or sending the data through a third-party app.
3. Allowing users to back up their data to a remote server, to lower the risk that data is discovered on their mobile device.
4. Assurant que les organisations peuvent conserver les informations importantes même en cas de saisie ou de destruction d'appareils, et les organiser à des fins de recherche, de plaidoyer ou de processus de responsabilisation.

Submissions to Dropbox take the form of "reports" which include a title, a text description, and files like photos, videos and audio recordings.



## When to Use Dropbox {#when-to-use-dropbox}

The Dropbox connection may be particularly well-suited for:
- Organizations that already use Dropbox.
- Organizations that cannot or don't want to self-host an app (like [Tella Web server](/tella-web)) on a server.
- Users who already have a Dropbox account and want to backup their data to the cloud.
- Projects where the privacy needs do not preclude the use of a cloud or commercial tool like Dropbox.
- Users who will be sending mostly media files, with some text and don't need structured data collection like forms or surveys.


:::tip
If you need help figuring out if Dropbox is best for your use-case, [check out this guide](/for-organizations#selecting-the-right-type-of-server) or [contact us](/contact-us)!
:::

## Connect to Dropbox {#connect-to-dropbox}

In order to connect to Dropbox:

* Utilisez le bouton **Actualiser** en haut à droite pour extraire de nouvelles ressources de l’espace de votre organisation.
* Select "Dropbox" from the list of available server types.
* A new page will automatically open in your phone's web browser and direct you to Dropbox.
* Login your Dropbox account in your web browser. 
* Grant Tella permissions to modify your Dropbox account (we need this permission to be able to upload files to your drive and create folders on your behalf).


## Manage the Dropbox connection {#manage-the-dropbox-connection}

* In **Settings ⚙️** > **Connections** >  **Dropbox** > **⫶** you can:
  - Delete the connection

For the moment it is not possible to sign into multiple Dropbox accounts at the same time. If you want to sign-in with another account, delete your Dropbox connection and create a new one.


## Submit to Dropbox {#submit-to-dropbox}

* Once connected, a "Dropbox" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Dropbox.
* The main Dropbox screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Dropbox.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos and audio recordings.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Afin de pouvoir enregistrer le rapport en tant que brouillon, vous devez au moins saisir son titre
    * Un message apparaîtra à l’écran pour confirmer que le brouillon a bien été enregistré.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button immediately sends the report to Dropbox.
    * If submission fails due to connectivity issues, the report goes to the “Outbox" tab.
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder (named after the report title you typed in) will be created in Dropbox under **Applications** >> **Tella**. All attachments will be added to the folder and the description will be added as a text file inside the folder.


## Draft Reports {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * A confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure you want to exit without saving.
* Dans l'onglet Brouillon, vous pouvez afficher et gérer les brouillons de rapports. Ouvrez un brouillon de rapport pour continuer à travailler dessus et soumettez-le.
* You can delete a draft report by tapping on **⫶** > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report to Dropbox{#submit-a-report-to-dropbos}

* Dans un rapport, appuyez sur « Soumettre » pour lancer la soumission du rapport.
* Vous serez redirigé vers un écran récapitulatif affichant la progression du chargement pour chaque pièce jointe.
* Un bouton "Supprimer" est disponible pour arrêter le téléchargement et supprimer le rapport.
* Si le rapport est en cours de chargement, un bouton « Pause » permet d'arrêter temporairement le téléchargement, qui peut être repris ultérieurement à l'aide du bouton « Reprendre ».
* Sortir d'un rapport n'affecte pas l'état du chargement. Si le rapport est en cours de chargement, le processus continue.

:::info
After a report has been uploaded to Dropbox, it is not possible to delete it on Dropbox from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Dropbox won’t be deleted.
:::


#### Boîte d'envoi {#boîte d'envoi}

The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen. 

The Outbox contains:

* Soumissions suspendues
* Envois de rapports interrompus en raison de problèmes de connectivité.
* Rapports marqués comme « Soumettre plus tard »


#### Rapports soumis {#submit-reports}

- The Submitted tab displays reports that have been successfully submitted to the Dropbox server.
- In the Submitted tab, you can view and deleted the submitted reports.

:::info
If the internet connection is interrupted, reports will go to the "Outbox" tab and you will need to manually resume the submission.
:::




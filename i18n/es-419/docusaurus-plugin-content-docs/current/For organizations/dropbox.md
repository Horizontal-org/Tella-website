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

1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Ensuring that data is sent directly from Tella to Dropbox, without needing to install the Dropbox app on the device or sending the data through a third-party app.
3. Permitir que usuaria(o)s respalden sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Asegurar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

Submissions to Dropbox take the form of "reports" which include a title, a text description, and files like photos, videos and audio recordings.



## When to Use Dropbox {#when-to-use-dropbox}

The Dropbox connection may be particularly well-suited for:
- Organizations that already use Dropbox.
- Organizaciones que no pueden o no desean autohospedar una app (como [servidor Tella Web](/tella-web)) en un servidor.
- Users who already have a Dropbox account and want to backup their data to the cloud.
- Projects where the privacy needs do not preclude the use of a cloud or commercial tool like Dropbox.
- Usuarios que enviarán mayormente archivos multimedia, con algo de texto y no necesitarán recopilación de datos estructurados como formularios o encuestas.


:::tip
If you need help figuring out if Dropbox is best for your use-case, [check out this guide](/for-organizations#selecting-the-right-type-of-server) or [contact us](/contact-us)!
:::

## Connect to Dropbox {#connect-to-dropbox}

In order to connect to Dropbox:

* Navigate to **Settings ⚙️** > **Connections** > **+**
* Select "Dropbox" from the list of available server types.
* A new page will automatically open in your phone's web browser and direct you to Dropbox.
* Login your Dropbox account in your web browser. 
* Grant Tella permissions to modify your Dropbox account (we need this permission to be able to upload files to your drive and create folders on your behalf).


## Manage the Dropbox connection {#manage-the-dropbox-connection}

* In **Settings ⚙️** > **Connections** >  **Dropbox** > **⫶** you can:
  - Eliminar la conexión

For the moment it is not possible to sign into multiple Dropbox accounts at the same time. If you want to sign-in with another account, delete your Dropbox connection and create a new one.


## Submit to Dropbox {#submit-to-dropbox}

* Once connected, a "Dropbox" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Dropbox.
* The main Dropbox screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Dropbox.
    * En la pantalla "Nuevo informe" puedes completar los detalles del informe, incluyendo el título, descripción, y adjuntos opcionales de fotos, videos y grabaciones de audio.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Para poder guardar como un borrador debes al menos introducir el título del informe.
    * Aparecerá un mensaje en la pantalla para confirmar que el borrador fue guardado.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button immediately sends the report to Dropbox.
    * Si el envío falla debido a problemas de conectividad, el informe se va a la pestaña "Bandeja de Salida".
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder (named after the report title you typed in) will be created in Dropbox under **Applications** >> **Tella**. All attachments will be added to the folder and the description will be added as a text file inside the folder.


## Draft Reports {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * A confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure you want to exit without saving.
* En la pestaña Borradores, puedes ver y administrar los borradores de informes. Abre un borrador de informe para continuar trabajando y enviarlo.
* Puedes eliminar un borrador de informe tocando en  **⫶** > **Eliminar** o entrando al informe y tocando el botón Eliminar.


#### Submit a Report to Dropbox{#submit-a-report-to-dropbos}

* En un informe, toca "Enviar" para iniciar el envío del informe.
* Se te redireccionará a una pantalla de resumen mostrando el progreso de subida de cada archivo adjunto.
* Un botón de "Eliminar" está disponible para detener la subida y eliminar el informe.
* Si el informe se está subiendo activamente, un botón de "Pausa" te permite detener temporalmente la subida, la cual puede ser reanudada luego utilizando el botón "Reanudar".
* Salir de un informe no afecta el estado de subida. Si el informe se está subiendo activamente, el proceso continúa. 

:::info
After a report has been uploaded to Dropbox, it is not possible to delete it on Dropbox from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Dropbox won’t be deleted.
:::


#### Bandeja de Salida {#outbox}

The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen. 

The Outbox contains:

* Envíos pausados
* Envíos de informes que fueron interrumpidos debido a problemas de conectividad.
* Informes que fueron marcados como "Enviar luego".


#### Informes Enviados {#submitted-reports}

- The Submitted tab displays reports that have been successfully submitted to the Dropbox server.
- In the Submitted tab, you can view and deleted the submitted reports.

:::info
Si la conexión a internet es interrumpida, los informes irán a la pestaña "Bandeja de Salida" y tendrás que reanudar el envío manualmente.
:::




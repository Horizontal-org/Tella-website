---
id: nextcloud
title: Nextcloud 
description: Tella allows users to conveniently upload photos, videos, pdfs and audio recordings to Nextcloud.
slug: /nextcloud
---

# Nextcloud Connection

[Nextcloud](https://nextcloud.com/) is a fully open source collaboration platform. You can self-host Nextcloud on your server or pay a [Nextcloud trusted provider](https://nextcloud.com/providers/) to host your Nextcloud instance. 

Tella allows users to sign in to their Nextcloud account directly from Tella and upload files directly to it.

Similarly to other server connections (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Dropbox](/dropbox), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Nextcloud server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to Nextcloud, without needing to install the Nextcloud app on the device or sending the data through a third-party app.
3. Allowing users to back up their data to a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

Submissions to Nextcloud take the form of "reports" which include a title, a text description, and files like photos, videos and audio recordings.



## When to Use Nextcloud {#when-to-use-Nextcloud}

The Nextcloud connection may be particularly well-suited for:
- Organizations that already use Nextcloud.
- Organizations that want to use open-source software.
- Organizations that have the technical capacity to self-host Nextcloud on their servers or can pay a [Nextcloud trusted provider](https://nextcloud.com/providers/) to host Nextcloud for them. If you partner with a Nextcloud provider, remember that the provider will be able to access your data. 
- Users who will be sending mostly media files, with some text and don't need structured data collection like forms or surveys.


:::tip
If you need help figuring out if Nextcloud is best for your use-case, [check out this guide](/for-organizations#selecting-the-right-type-of-server) or [contact us](/contact-us)!
:::

## Connect to Nextcloud {#connect-to-Nextcloud}

In order to connect to Nextcloud:

* Navigate to **Settings ⚙️** > **Connections** > **+**
* Select "Nextcloud" from the list of available server types.
* Type the URL of your Nextcloud server.
* Enter your Nextcloud username and password.
* Choose a name for the folder where all your Tella submissions will be saved.


## Manage the Nextcloud connection {#manage-the-Nextcloud-connection}

* In **Settings ⚙️** > **Connections** >  **Nextcloud** > **⫶** you can:
  - Delete the connection

For the moment it is not possible to sign in to multiple Nextcloud accounts at the same time. If you want to sign-in to another Nextcloud instance, delete your Nextcloud connection and create a new one.


## Submit to Nextcloud {#submit-to-Nextcloud}

* Once connected, a "Nextcloud" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Nextcloud.
* The main Nextcloud screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Nextcloud.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos and audio recordings.
* Use the "Save draft" button (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * In order to be able to save as a draft, you need to at least enter the report’s title.
    * A message will appear on the screen to confirm the draft was saved.
* The "Submit later" button saves the report to the Outbox for manual submission.
    * The outbox tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button sends the report to the Nextcloud immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox" tab.
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder will be created in Nextcloud with the title you selected. All attachments will be added to the folder and the description will be added as a text file inside the folder.

:::info
For Android, [there is a known issue with Nextcloud that prevents files larger than 20MB to be submitted to the a Nextcloud server from Android](https://help.nextcloud.com/t/cant-upload-files-langer-than-20-mb-using-nextcloud-android-app/196434). For that reason, Tella does not let users attach files that are larger than 20MB to Reports. We will monitor the development of this issue and remove the Tella file-size restriction when it is is solved.
:::

##  Draft Reports {#draft-reports}


* On the "New report" screen, tap the "Save draft" button to save the report as a draft.
    * A message confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving the report.
* In the Draft tab, you can view and manage draft reports. Open a draft report to continue working on it and submit it.
* You can delete a draft report by tapping on **⫶** > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report to Nextcloud{#submit-a-report-to-Nextcloud}

* In a report, tap "Submit" to start the submission of the report.
* You will be redirected to a summary screen displaying the upload progress for each file attachment.
* A "Delete" button is available to stop the upload and delete the report.
* If the report is actively uploading, a "Pause" button allows you to temporarily halt the upload, which can be resumed later using the "Resume" button.
* Exiting a report doesn’t affect the upload status. If the report is actively uploading, the process continues. 

:::info
After a report has been uploaded to Nexcoud, it is not possible to delete it on Nextcloud from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Nextcloud won’t be deleted.
:::


#### Outbox {#outbox}

The Outbox contains reports that have been saved for submission. This could be:

* Paused submissions
* Report submissions that were interrupted due to connectivity issues.
* Reports that were marked as "Submit later"


#### Submitted Reports {#submitted-reports}

- The Submitted tab displays reports that have been successfully submitted to the Nextcloud server.
- In the Submitted tab, you can view and review the submitted reports.

:::info
If the internet connection is interrupted, reports will go to the "Outbox" tab and you will need to manually resume the submission.
:::




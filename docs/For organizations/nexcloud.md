---
id: nexcloud
title: Nexcloud 
description: Tella allows users to conveniently upload photos, videos, pdfs and audio recordings to Nexcloud.
slug: /nexcloud
---

# Nexcloud Connection

[Nexcloud](https://nextcloud.com/) is a fully open source collaboration platform. Nexcloud offers the possibility to self-host your server or to partner with a [Nexcloud trusted provider](https://nextcloud.com/providers/). 

Tella allows users to sign in to their Nexcloud account directly from Tella and to upload files directly to it.

Similarly to any other server connection (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Nexcloud server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to Nexcloud, without needing to install the Nexcloud app on the device.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

Submissions to Nexcloud can include photos, videos, audio recordings and text (in the form of a description). 

:::info
The Nexcloud connection is [only available on iOS](/features). We are currently working for adding it to Tella Android as well.
:::


## When to Use Nexcloud {#when-to-use-nexcloud}

Nexcloud could be a good alternative if:
- The organization doing the Tella deployment already uses Nexcloud.
- The organization wants to use open source software.
- The organization can self-host Nexcloud or the organization willing partner with a [Nexcloud trusted provider](https://nextcloud.com/providers/). If you partner with a nexcloud provider , remember that the organization hosting your server will be able to access your data. 
- People on the ground will be sending mostly media files, with some text and don't need structured data collection (forms).


:::tip
If you need help figuring out if Nexcloud is best for your use-case, [read our guide](/for-organizations) or [contact us](/contact-us)!
:::

## Connect to Nexcloud {#connect-to-nexcloud}

In order to connect to Nexcloud:

* Navigate to **Settings ⚙️** > **Servers** > **+**
* Select "Nexcloud" from the list of available server types.
* Add the URL of your Nexcloud server.
* Add your Nexcloud username and password.
* Choose a name for the folder where all your Tella submissions will be saved.


## Manage the Nexcloud connection {#manage-the-nexcloud-connection}

* In **Settings ⚙️** > **Servers** >  **Nexcloud** > 3-dots, you can:
  - Delete the connection

For the moment it is not possible to sign in to multiple Nexcloud accounts at the same time. If you want to sign-in to another Nexcloud instance, delete your Nexcloud connection and create a new one.


## Submit to Nexcloud {#submit-to-nexcloud}

* Once connected, a "Nexcloud" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Nexcloud.
* The main Nexcloud screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Nexcloud.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos and audio recordings.
* Use the "Save draft" button (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * In order to be able to save as a draft, you need to at least enter the report’s title.
    * A message will appear on the screen to confirm the draft was saved.
* The "Submit later" button saves the report to the Outbox for manual submission.
    * The outbox tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button sends the report to the Nexcloud immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox tab”.
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder will be created in Nexcloud with the title you selected. All attachments will be added to the folder and the description will be added as a text file inside the folder.


##  Draft Reports {#draft-reports}


* On the "New report" screen, tap the "Save draft" button to save the report as a draft.
    * A message confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving the report.
* In the Draft tab, you can view and manage draft reports. Open a draft report to continue working on it and submit it.
* You can delete a draft report by tapping on the three dots > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report to Nexcloud{#submit-a-report-to-nexcloud}

* In a report, tap "Submit" to start the submission of the report.
* You will be redirected to a summary screen displaying the upload progress for each file attachment.
* A "Delete" button is available to stop the upload and delete the report.
* If the report is actively uploading, a "Pause" button allows you to temporarily halt the upload, which can be resumed later using the "Resume" button.
* Exiting a report doesn’t affect the upload status. If the report is actively uploading, the process continues. 

:::info
After a report has been uploaded to Nexcoud, it is not possible to delete it on Nexcloud from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Nexcloud won’t be deleted.
:::


#### Outbox {#outbox}

The Outbox contains reports that have been saved for submission. This could be:

* Paused submissions
* Report submissions that were interrupted due to connectivity issues.
* Reports that were marked as "Submit later"


#### Submitted Reports {#submitted-reports}

- The Submitted tab displays reports that have been successfully submitted to the Nexcloud server.
- In the Submitted tab, you can view and review the submitted reports.

:::info
If the internet connection is interrupted, reports will go to the outbox tab and you will need to manually resume the submission.
:::




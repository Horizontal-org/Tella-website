---
id: g-drive
title: Google Drive
description: Tella allows users to conveniently upload photos, videos, pdfs and audio recordings to their personal or organizational Google Drive.
slug: /g-drive
---

# Google Drive

Tella allows users to sign in to their Google account directly from Tella and to upload files directly to Google Drive.

Similarly to any other server connection (like [Tella Web](/tella-web), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Google Drive server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to Google Drive, without needing to install the Google Drive app on the device.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

The Google Drive is a an option to collect photos, videos and audios from users in the ground, when there is no technical capacity to install a self-hosted server(like [Tella Web server](/tella-web)) and there is no risk on using a commercial tool like Google. 

Submissions to Google Drive can include photos, videos, audio recordings, pdf documents and text (in the form of a description). 

## When to Use Google Drive {#when-to-use-google-drive}

The Google Drive could be a good alternative if:
- The organization doing the Tella deployment already uses Google Drive.
- The user already have a Google Drive account.
- The organization wants to make use of the [Shared Drive functionality](https://support.google.com/a/users/answer/7212025?hl=en) on their Google Workspace.
- There is not a particular risk giving Google control of the information collected.
- The organization cannot or don't want to self-host a server. 


## Connect to Google Drive {#connect-to-google-drive}

In order to connect to a Google Drive:

* Navigate to **Settings ⚙️** > **Servers** > **+**
* Select "Google Drive" from the list of available server types.
* Login to your Google account using the Google login flow on the web view. 
* For the moment Google haven't verified our app yet, so you'll need to press the "Advance" button and "Proceed to Tella" in order to be able to connect.
* Grant Tella permissions to modify your Google Drive (we need this permission to be able to upload files to your drive and create folders in your behalf).
* Select "Personal Drive" or "Shared Drive": Shared drives are only available to organizational accounts that has this feature enabled. If shared drives are available you will see a list of Shared Drives you have access to. Select the Shared Drive you want to submit your data to.
* Choose a name for the folder where all your Tella submissions will be saved.


## Manage the Google Drive connection {#manage-the-google-drive-connection}

* In **Settings ⚙️** > **Servers** >  **Google Drive** > 3-dots, you can:
  - Delete the connection

For the moment it is not possible to sign in to multiple Google accounts at the same time. If you want to sign-in to your Google Drive using a different email, delete your Google Drive connection and create a new one.


## Submit to Google Drive {#submit-to-google-drive}

* Once connected to  Google Drive, a "Google Drive" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Google Drive.
* The main Google Drive screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Google Drive.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos, pdf documents and audio recordings.
* Use the "Save draft" button (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * In order to be able to save as a draft, you need to at least enter the report’s title.
    * A message will appear on the screen to confirm the draft was saved.
* The "Submit later" button saves the report to the Outbox for manual submission.
    * The outbox tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button sends the report to the Google Drive immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox tab”.
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder will be created in Gooogle Drive with the title you selected and the description you entered. All attachments will be added to the folder.


##  Draft Reports {#draft-reports}


* On the "New report" screen, tap the "Save draft" button to save the report as a draft.
    * A message confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving the report.
* In the Draft tab, you can view and manage draft reports. Open a draft report to continue working on it and submit it.
* You can delete a draft report by tapping on the three dots > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report to Google Drive {#submit-a-report-to-google-drive}

* In a report, tap "Submit" to start the submission of the report.
* You will be redirected to a summary screen displaying the upload progress for each file attachment.
* A "Delete" button is available to stop the upload and delete the report.
* If the report is actively uploading, a "Pause" button allows you to temporarily halt the upload, which can be resumed later using the "Resume" button.
* Exiting a report doesn’t affect the upload status. If the report is actively uploading, the process continues. 

:::info
After a report has been uploaded to Google Drive, it is not possible to delete it on Google Drive from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Google Drive won’t be deleted.
:::


#### Outbox {#outbox}

The Outbox contains reports that have been saved for submission. This could be:

* Paused submissions
* Report submissions that were interrupted due to connectivity issues.
* Reports that were marked as "Submit later"


#### Submitted Reports {#submitted-reports}

- The Submitted tab displays reports that have been successfully submitted to the Tella Web server.
- In the Submitted tab, you can view and review the submitted reports.

:::info
If the internet connection is interrupted, reports will go to the outbox tab and you will need to manually resume the submission.
:::




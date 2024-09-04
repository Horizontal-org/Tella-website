---
id: g-drive
title: Google Drive Connection
description: Tella allows users to conveniently upload photos, videos, pdfs and audio recordings to their personal or organizational Google Drive.
slug: /g-drive
---

# Google Drive Connection

Tella allows users to sign in to their Google account directly from Tella and to upload files directly to Google Drive.

Similarly to any other server connection (like [Tella Web](/tella-web), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Google Drive server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to Google Drive, without needing to install the Google Drive app on the device.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

The Google Drive is a an option to collect photos, videos and audios from users in the ground, when there is no technical capacity to install a [Tella Web server](/tella-web) or there is no risk on using a commercial tool like Google. 

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
* For the moment Google haven't verified our app, so you'll need to accept the "Advance" button and "Proceed to Tella" in order to be able to connect.
* Grant Tella permissions to modify your Google Drive (we need this permission to be able to upload files to your drive and create folders in your behalf).
* Select "Personal Drive" or "Shared Drive": Shared drives are only available to organizational accounts that has this feature enabled. If shared drives are available you will see a list of Shared Drives you have access to. Select the Shared Drive you want to submit your data to.
* Choose a name for the folder where all your Tella submissions will be saved.


## Manage the Google Drive connection {#manage-the-google-drive-connection}

* In **Settings ⚙️** > **Servers** >  **Google Drive** > 3-dots, you can:
  - Delete the connection

For the moment it is not possible to sign in to different Google Accounts at the same time. If you want to sign-in to your Google Drive using a different email, delete your Google Drive connection and create


## Submit to Google Drive {#submit-to-google-drive}


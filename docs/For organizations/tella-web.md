---
id: tella-web
title: Tella Web
description: The Reports feature empowers users to conveniently upload photos, videos, pdfs and audio recordings to their organization's Tella Web server
slug: /tella-web
---

# Tella Web 

Tella Web is an open-source tool that enables individuals and organizations to centralize and manage reports sent by Tella users, including photos, videos, and audio files. 

Tella Web is developed internally by our team at Horizontal, the same team responsible for developing Tella's mobile apps. It is a user-friendly solution for backing up media files to a remote server in a safe and private manner. We can provide support for the installation, configuration, and maintenance of a Tella Web instance if you don't have someone within your organization who can do it.

Similarly to all other connections([Uwazi](/uwazi) and [Open Data Kit](/odk)), connecting to Tella Web enhances the security of data collected on Tella by:
1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to Tella Web, without having to rely on a third-party tool or app.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it to use for research, advocacy, or accountability processes.

Tella Web is a great option to collect "reports" from users. Reports can include photos, videos, audio recordings, pdf documents and text.

Setting up Tella Web involves three steps, which are thoroughly discussed in this section:

* **Install Tella Web**: This step entails installing the Tella Web server and configuring the domain name to ensure its proper functioning.
* **Set up your project(s) on your server**: In this step, admins decide how to organize themselves to collect data, create “projects”, and set roles and permissions for their users.
* **Get people on the ground ready to start submitting reports**: Users install Tella on their Android or iPhone device. They then connect to the Tella Web project and start collecting information.


## Install the server {#install-the-server}

This step consists of installing and configuring Tella Web on the server your organization will be using. This step needs to be completed by the person who is going to be responsible for the system administration (a developer or a system administrator). Technical instructions can be found on [our Github](https://github.com/Horizontal-org/tellaweb).



:::info
Our team can offer support with the installation, configuration, and maintenance of Tella Web. If you have any question or need support, [contact us](/contact-us/).
:::

:::tip
[Contact us](/contact-us/) to get access to our demo server, so you can test Tella Web before installing it on your own server.
:::


## Set up your project on your server {#set-up-your-project-on-your-server}

Once Tella Web is installed and the first "admin" user created, it’s time to set up the project or projects that the team in the field will share information to.



:::info
Take a look at [this video tutorial](/video-tutorials#connections-full-video) for a demo of how to set up Tella Web.
:::


### Managing Projects {#managing-projects}

Tella Web allows you to create and manage projects, ensuring your reports are organized and accessible. 

Projects function like folders where Tella users can submit reports. For instance, you can create projects for specific geographic areas or themes such as police violence, gender-based violence, and environmental abuse.

Each project has its own URL, so a Tella user can be connected to multiple Tella Web projects.


#### View all available projects {#view-all-available-projects}

Click on the "Projects" button in the left navigation menu to access the "Projects" screen.

The "Projects" screen displays each existing project as a card.


#### Create a New Project {#create-a-new-project}

On the "Projects" screen, click the "Create project" button. A modal will appear, prompting you to name the new project. Enter the desired name for the project and click "Create." You will be redirected to the "Project settings" screen for the newly created project.


#### Open a Project {#open-a-project}

Open the "Projects" screen and click on the desired project card.

This will open the project, where you can access all the reports submitted to the project.

You can open, delete, or download reports (depending on your permissions for this specific project).


#### Configure projects’ settings {#configure-projects-settings}

In the "Project settings" screen, you can configure the project:
* The "General" section allows you to rename the project, view project details, and modify the project's URL.
* The "Manage access" section enables you to add or remove users from the project. More info on user roles [here](/tella-web#managing-users) 
* The "Danger zone" section provides options to delete the project, including all the reports within it.


#### Delete a Project {#delete-a-project}

In the "Project settings" screen, scroll down to the "Danger zone" section.

Click on the "Delete project" option.

A modal will appear, warning you about the permanent deletion of the project and all its reports. To proceed with the deletion, enter the name of the project correctly (including the right case). Type "DELETE" (in capital letters) to confirm the deletion.

Once confirmed, the project and all its associated reports will be permanently deleted.


#### Configure the project URL {#configure-the-project-url}

The project URL is automatically generated when the project is created. To edit the project URL, go to the "General" section in the "Project settings" screen and modify it accordingly. This URL is the one that reporters will use to connect to the project from their apps. 

:::info
The URL that you'll need to send to the users should look like this `https://your-domain.com/p/your-project-name`
:::


### Managing users {#managing-users}

### Understanding user roles
Users are an important part of using Tella Web. There are for different roles available to users:
- Reporter: this is a user who can connect to the Tella Web project from a Tella mobile app and upload reports. A reporter needs be assigned to a project in order to be able to upload reports. 
- Viewer: this is a user who, in addition to uploading reports from Tella, can also log into Tella Web to view (but not edit or delete) reports. A viewer needs to be assigned to a specific project to have access.
- Editor: this is a user who, like viewers, can upload reports from Tella and log into Tella Web, but who can also edit and delete reports. An editor needs to be assigned to a specific project to have access.
- Admin: an admin can upload reports from Tella and perform all actions on Tella Web, including managing reports, projects, and users. An admin has access to all projects.

Here is a detailed view of each role's permission:

| |Reporter |Viewer|Editor|Admin |
|--------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--|
|**On Tella mobile**|
| Create and upload reports | ✅|✅|✅|✅| 
|**On Tella Web**| 
| Log in Tella Web  |❌|✅|✅|✅| 
| View reports  |❌|✅|✅|✅| 
| Edit reports (rename) |❌|❌|✅|✅| 
| Delete reports |❌|❌|✅|✅| 
| Edit projects (create, rename, edit URL) |❌|❌|✅|✅| 
| Delete projects |❌|❌|✅|✅| 
| Manage users (create, edit, delete) |❌|❌|❌|✅| 
| Assign users to project |❌|❌|❌|✅| 

#### Creating users {#creating-users}

On the top bar, above the list of users, server's admin can click on the "Create user" button to create a new user in the server. Email, password, password-confirmation and role are required in order to create users.

On the password field, a password-security-meter helps admins create secure passwords. We estimate password complexity using the [zxcvbn](https://github.com/dropbox/zxcvbn) library which considers:
- Characters (more than 10)
- Complexity (lowercase, uppercase, numbers, symbols)
- No common patterns like dates, repeats (aaa), sequences (abcd), keyboard patterns (qwertyuiop)
- No common passwords like names, cities, etc.


#### Managing access to projects {#managing-access-to-projects}


In the "Manage access" section of the "Project settings" screen, admins can assign existing users to the project. Click the "Add users" field. A dropdown menu will display all the users on the server. Scroll through the list or type to search for a user by username.
After selecting the users to add to the project, click the "Add" button to save the changes and grant access to the project.

:::info
The full list of users who can submit reports to the project includes the users listed on this section plus all the server administrators
:::

## Get people on the ground ready to start submitting reports {#get-people-on-the-ground-ready-to-start-submitting-reports}

 
The steps outlined below apply to both the Android and iOS versions of the Tella app. The reporting feature is available in:

* Tella Android v2.1.0 (152) and later
* Tella iOS v1.1.0 (43) and later

Reports are not yet available on [Tella-FOSS](/faq#is-tella-available-on-f-droid).

:::info
You can watch [this video](/video-tutorials#tella-web) on how to configure and use Reports in Tella.
:::


#### Connect to Tella Web Projects {#connect-to-tella-web-projects}

In order to connect to a Tella Web server:

* Navigate to **Settings ⚙️** > **Servers** > **+**
* Select "Tella Web" from the list of available server types.
* Enter the login information (generated and provided by admins)
    * The URL of the Tella Web project. The URL should look like this `https://your-domain.com/p/your-project-name`
    * Your Username and Password
* Enable or disable advanced features based on your needs: [auto-report](#auto-report), [auto-delete](#auto-delete) and [background submission](#background-submission).


####  Manage Tella Web Projects {#manage-tella-web-projects}

* In **Settings ⚙️** > **Servers** >  **[Project name]** > 3-dots, you can:
    * Edit: Opens an "edit server" screen where you can view the project's name, URL, and your username, and edit advanced features.
    * Delete: Deletes the connection, including all server information and all draft and submitted reports stored in Tella. This will not affect any report that was already submitted to the server.

#### Create a Manual Report {#create-a-manual-report}

* Once connected to at least one Tella Web project, a "Reports" card will appear in the "Connections" section of the homescreen. Tap on this card to start creating reports.
* The main reports screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos, pdf documents and audio recordings.
    * If you are connected to multiple Tella Web projects, you will be able to select at the top of the screen which project to submit the report to.
* Use the "Save draft" button (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * In order to be able to save as a draft, you need to at least enter the report’s title.
    * A message will appear on the screen to confirm the draft was saved.
* The "Submit later" button saves the report to the Outbox for manual submission.
    * The outbox tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button sends the report to the Tella Web project immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox tab”.
    * If the report is submitted correctly, it goes to the “Submitted” tab.


####  Draft Reports {#draft-reports}


* On the "New report" screen, tap the "Save draft" button to save the report as a draft.
    * A message confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving the report.
* In the Draft tab, you can view and manage draft reports. Open a draft report to continue working on it and submit it.
* You can delete a draft report by tapping on the three dots > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report {#submit-a-report}

* In a report, tap "Submit" to start the submission of the report.
* You will be redirected to a summary screen displaying the upload progress for each file attachment.
* A "Delete" button is available to stop the upload and delete the report.
* If the report is actively uploading, a "Pause" button allows you to temporarily halt the upload, which can be resumed later using the "Resume" button.
* Exiting a report doesn’t affect the upload status. If the report is actively uploading, the process continues. 

:::info
After a report has been uploaded to Tella Web, it is not possible to delete it on Tella Web from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Tella Web won’t be deleted.
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


### Advanced features {#advanced-features}

#### Auto-report {#auto-report}

If auto-report is enabled, Tella will create and upload reports automatically whenever you take a photo, record a video, or capture an audio recording in Tella. This ensures that your reports are seamlessly uploaded without the need for manual work. Files get upladed to the same auto-report if they are collected within the lapse of 30 minutes.

Auto-report can be enabled from the Edit Connection screen.

:::info
auto-report can only be enabled for one project at a time
:::

#### Auto-delete {#auto-delete}

When auto-report is enabled, you can enable auto-delete, which automatically deletes reports and their associated files from your device after they were successfully uploaded to Tella Web. This helps you manage your device's storage space and ensures that sensitive data is not unintentionally retained.

The auto-delete toggle button will appear below the auto-report toggle on the Edit Connection screen for the desired project.

#### Background Submission {#background-submission}

Background submission allows the report submission process to continue even if you switch to other tasks within Tella or if you exit Tella entirely. Backround submission can work in combination to both Manual and Auto-reports, and can be enabled on the Edit Connection screen for the desired project.

When background submission is enabled, regardless of what you do in Tella or whether you close the app, the upload process will continue without interruption. It will also work if auto-reports is enabled and you close the app after collecting the infromation.

When uploading reports in the background, Tella remains unlock. This means that if someone opens Tella, they will be able to access your files and reports. To lock Tella when reports are being uploaded in the background, tap the "Quick Exit" button on the top right of the Tella homescreen.

If the submission is disrupted due to a weak internet connection or other factors, Tella will send the report to the Outbox tab and automatically restart the upload as soon as the phone regais a stable internet connection. 
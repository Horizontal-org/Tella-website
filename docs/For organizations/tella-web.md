---
id: tella-web
title: Tella Web & Reports
description: The Reports feature empowers users to conveniently upload photos, videos, and audio recordings to their organization's Tella Web server
slug: /tella-web
---

# Tella Web & Reports

The Reports feature empowers users to conveniently upload photos, videos, and audio recordings to their organization's Tella Web server. Its primary objective is to enhance the security of files collected on Tella by offering a simple method to back them up on a remote server. By having a copy of their files stored on the server, organizations ensure the preservation of important information even in the event of device seizure or destruction. For users on the ground, it can also be safer to have their data backed up to Tella Web, because they can remove the information from their phone as soon as they get confirmation of that it was successfully submitted to Tella Web.

Implementing Tella Web involves three essential steps, which are thoroughly discussed in this section:


* **Install the server**: This step entails installing the Tella Web server and configuring the domain name to ensure its proper functioning.
* **Set up your project on your server**: In this step, the project is set up on Tella Web, user accounts are created for reporters, data analysts, and other relevant roles. Additionally, a secure configuration is established for the reporters' Tella apps, depending on their context and situation, and necessary trainings are conducted. Any questions or concerns are addressed during this phase.
* **Get people in the ground ready to start submitting reports**: Reporters install Tella on their phones, whether it's an Android or iPhone device. They then connect to the Tella Web project and start collecting information, ensuring a smooth and efficient reporting process.


## Install the server

This step consists of installing and configuring the Server your organization will be using. This step needs to be completed by the person who is going to be responsible for the system administration (a developer or a system administrator). Technical instructions can be found on [our Github](https://github.com/Horizontal-org/tellaweb).



:::info
Our team can support with the installation and answer any questions you may have. If you are planning to host a Tella Web server, [contact us](/contact-us/).
:::

:::tip
We offer a test server that you can use to test Tella Web before installing your own server. [Contact us](/contact-us/) to get access to it.
:::


## Set up your project on your server

After you have your server installed and the first administrator user created, it’s time to setup the project or project’s that the team on the field will share information to.



:::info
Take a look at [this video tutorial](/video-tutorials#connections-full-video) for a demo of how to set up Tella Web.
:::


### Managing Projects

Tella Web allows you to create and manage projects, ensuring your reports are organized and accessible.


#### View all available projects

Click on the "Projects" button in the left navigation menu to access the "Projects" screen.

The "Projects" screen displays existing projects as cards, representing each project.


#### Create a New Project

On the "Projects" screen, click the "Create project" button. A modal will appear, prompting you to name the new project. Enter the desired name for the project and click "Create." You will be redirected to the "Project settings" screen for the newly created project.


#### Open a Project

Open the "Projects" screen and click on the desired project card.

This will open the project, where you can access all the reports submitted to the project.

You can open, delete, or download reports based on your permissions within the project.


#### Configure projects’ settings

In the "Project settings" screen, you can customize various aspects of the project.

The screen is divided into three sections: General, Manage access, and Danger zone.



* The "General" section allows you to rename the project, view project details, and modify the project's URL.
* The "Danger zone" section provides options to delete the project, including all the reports within it.
* The "Manage access" section enables you to add or remove users from the project. 


:::info
User roles are general for the whole server. There are 4 roles: Admin, Editor, Viewer and Editor. Each user can only have a single role within a server. User creation is managed on the Users screen.  Each one of these users can have access to one or more projects, this is configured on the Manage Access section of each project. Admins have access to all projects on the server.
:::


#### Delete a Project

In the "Project settings" screen, scroll down to the "Danger zone" section.

Click on the "Delete project" option.

A modal will appear, cautioning you about the permanent deletion of the project and all its reports. To proceed with the deletion, enter the name of the project correctly (including the right case). Type "DELETE" (in capital letters) to confirm the deletion.

Once confirmed, the project and all its associated reports will be permanently deleted.


#### Configure the project URL

The project URL is automatically generated when the project is created. To edit the project URL, go to the "General" section in the "Project settings" screen and modify it accordingly. This URL is the one that reporters will use to connect to the project from their apps.


### Managing Users

Only the server’s Admin have access to the "Users" screen on the left bar. This screen display all the users who have access to this server. Each user on the server can have only one role:


<table>
  <tr>
   <td>Role
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Admins
   </td>
   <td>Admins have access to all projects in the server and can also manage users.
   </td>
  </tr>
  <tr>
   <td>Editors
   </td>
   <td>Editors have view and edit access to certain projects (for example, deleting reports from a projects). Go to the “Manage Access” section of a Project Screen to assign editors to projects
   </td>
  </tr>
  <tr>
   <td>Viewers
   </td>
   <td>Viewers have view-ony access to certain projects (they cannot delete reports). Go to the “Manage Access” section of a Project Screen to assign viewers to projects
   </td>
  </tr>
  <tr>
   <td>Reporters
   </td>
   <td>Reporters<strong> </strong>don’t have access to Tella Web. They can only submit reports through the apps. Give reporters access to projects on the “Manage Access” section of a Project Screen.
   </td>
  </tr>
</table>



#### Managing Access and User Roles

In the "Manage access" section of the "Project settings" screen, admins can assign exiting users to the project. Click the "Add users" field. A dropdown menu will display all the users on the server. Scroll through the list or type to search for a user by username. Click on a user to add them as a pill in the "Add users" field. To remove a user from the list, click on the cross icon next to their pill. \
Click the "Add" button to save the changes and grant access to the project to the selected users. \



:::info
The full list of users who can submit reports to the project includes the users listed on this section plus all the server administrators
:::

### Get people in the ground ready to start submitting reports

 
The steps outlined below apply to both the Android and iOS versions of the Tella app. The reporting feature has been introduced in the following versions:

* Tella Android v2.1.0 (152)
* Tella iOS v1.1.0 (43) 

To ensure you have access to the reporting feature, please verify that your Tella app version is either these versions or a more recent one.





:::info
You can watch [this video](/video-tutorials#tella-web) on how to configure and use Reports on the apps .
:::


#### Connect to Tella Web Projects


* Navigate to Settings ⚙️ > Servers > Add a server
* Select "Tella Web" from the list of available server types.
* Enter the login information (generated and provided by admins)
    * Project URL of your organization’s Tella Web server
    * Your Username and Password


####  Manage Tella Web Projects


* In Settings ⚙️ > Servers >  [Project name] > 3-dots you have the option to:
    * Edit: Opens an "edit server" screen where you can view the project's name, URL, and your username.
    * Delete: Deletes the server's URL, user credentials, and removes it from the Settings menu. All draft and submitted reports stored in your Tella app will also be deleted. This won’t delete any data that’s already submitted to the server.


#### Create a Report


* Once connected to at least one Tella Web project, a "Reports" card will appear in the "Connections" section of the home screen. Tap on this card to start creating reports.
* The main reports screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos, and audio recordings.
    * If you are connected to multiple Tella Web projects, a selector will appear on the top of the screen.
* Use the "Save draft" button (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * In order to be able to save as a draft, you need to fill the report’s title.
    * A toast message will appear on the screen to confirm the draft was saved.
* The "Submit later" button saves the report to the Outbox for manual submission.
    * The outbox tab is often used when data collectors don’t have access to internet or if the connection is not stable.
* The “Submit” button send the report to the Tella Web server immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox tab”
    * If the report is submitted correctly, it goes to the “Submitted” tab


####  Draft Reports


* On the "New report" screen, tap the "Save draft" button to save the report as a draft.
    * A toast message confirmation will be displayed, and you can continue working on the report without being redirected to the Draft tab.
* If you try to exit a report without saving, a snackbar will appear to ask if you are sure to exit without saving the report.
* In the Draft tab, you can view and manage draft reports. Open a draft report to finalize it and send it.
* You can delete a draft report by going to More > Delete or by entering the report and tapping the Delete button.


#### Submit a Report

* In a report, tap "Submit" to initiate the submission process.
* You will be redirected to a summary screen displaying the upload progress for each element in the report (title, description, attachments).
*  A "Delete" button is available to stop the upload and delete the report.
*  If the report is actively uploading, a "Pause" button allows you to temporarily halt the upload, which can be resumed later using the "Resume" button.
* Exiting a report doesn’t affect the upload status. If the report is actively uploading, the process continues. 

:::info
Once something has been uploaded to Tella Web there is no way to delete that from the app. Deleting a submitted report will only delete the local version of it, not the information on the server. \
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Tella Web won’t be deleted.
:::


#### Outbox

The Outbox contains reports that have been saved for submission. This could be:

* Paused reports
* Reports whose upload has been interrupted due to connectivity issues.


#### Submitted Reports

- The Submitted tab displays reports that have been successfully submitted to the Tella Web server.
- In the Submitted tab, you can view and review the submitted reports.

:::info
If the internet connection is interrupted, reports will go to the outbox tab and you'll need to manually resume them.
:::
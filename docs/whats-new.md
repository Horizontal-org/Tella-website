---
id: releases
title: What's new (changelog)
description: Tella changelogs
slug: /releases
---

# What's new

This page explains what changes are introduced on each release of Tella. 

## Newsletter {#newsletter}
To receive monthly updates on new features and improvements to Tella and stay up to date with Tella releases, suscribe to our newsletter [here](https://blog.wearehorizontal.org/tag/tella/#/portal/)

## Tella - Latest Versions {#tella---latest-versions}


### Android: Tella 2.7.0 (174) - Released on March 22, 2024 {#android-tella-270-174---released-on-march-22-2024}
- Added support for a content distribution feature that allow organizations to securely disseminate resources and materials from a Tella Web space to their on-the-ground users directly within Tella’s encrypted container. This includes creating PDFs on Tella Web and sharing training material, guides for data collection, or documents. Resources can be accesed offline after download. More information [here](/tella-web#managing-resources).
- Technical maintanance tasks:
  - Fixed a bug that caused a crash when using the geolocation service.
  - The navigation within the Tella Web feature has been refactored for better stability and scalability.

### iOS: Tella 1.6.0 (65) - released on March 25, 2024 {#ios-tella-160-65---released-on-march-25-2024}
- Implemented [background encryption](/features#background-encryption) so users can continue collecting data while the encryption process takes place. 
  - Added a background activity tray so users can check the progress of file's encryption.
- Updated the encryption algorithm.
- Fixed a bug that prevented big files (more than 1GB) to be saved into Tella vault.

### Android: Tella FOSS 2.0.15 (based on Android 2.0.15) - released on July 10, 2023 {#android-tella-foss-2015-based-on-android-2015---released-on-july-10-2023}

A version of Tella included for the first time on the F-droid store. This a 100% Free and Open-Source Software (FOSS) version of Tella Android. We removed all trackers, changed map and location provider and also changed the Camera library to CameraX, removed crashlytics, LoggingInterceptor and any other non-FOSS component or dependency. We removed completely all Google Play Services dependencies.



## Previous versions {#previous-versions}


### Android: Tella 2.6.0 (172) - Released on February 19, 2024 {#android-tella-260-172---released-on-february-19-2024}
- Added support for PDF files in Tella vault and as attachments on Tella Web's Reports.
- Bugfixes:
  - Editing a file inside a folder now saves the copy in the same location.
  - Fixed crash on back button on the camouflage menu.
  - Streamline the flow for renaming an audio recording.
  - Added alt text on a back button.
  - Upgraded project dependencies. Updated [documentation](/faq#what-phones-support-tella) with Android support information.


### iOS: Tella 1.5.1 (63) - released on March 8, 2024 {#ios-tella-151-63---released-on-march-8-2024}
- Fixed bug on the Uwazi server connection for private Uwazi instances.

### iOS: Tella 1.5.0 (62) - released on February 19, 2024 {#ios-tella-150-62---released-on-february-19-2024}
- **Uwazi server connection**: We added the possibility for users to connect to an Uwazi server to send the data they collect using Tella. We include Text, Numeric, Date, Rich Text, Media and Select fields. You can read more details about the new server connection and the supported features and properties on the [Uwazi documentation page.](/uwazi).
- Improved the confirmation message when deleting multiple files and folders.
- Added language support: Portuguese and Russian.


### Android: Tella 2.5.0 (170) - Released on January 10, 2024 {#android-tella-250-170---released-on-january-10-2024}
- **Accessibility Improvements:**
  - Added new settings to enable/disable text justification and adjust line spacing within the app.
  - Updated colors to ensure Tella complies with WCAG AAA guidelines for sufficient contrast.

- **Anonymous In-App Feedback:**
  - Introduced an anonymous [feedback method](/features#feedback) for users. This feature allows users to send messages to the Tella team when they are unable to [contact us](/contact-us) through other channels.

- **Bug fixes and maintenance:**
  - Addressed a crash issue on the audio recorder.
  - Resolved navigation issues related to the back button.
  - Loaded new translations.

### iOS: Tella 1.4.0 (59) - released on January 9, 2024 {#ios-tella-140-59---released-on-january-9-2024}
- **Anonymous In-App Feedback:**
  - Introduced an anonymous [feedback method](/features#feedback) for users. This feature allows users to send messages to the Tella team when they are unable to [contact us](/contact-us) through other channels.

- **Technical Improvements:**
  - Added a local database on the phone to manage the file structure and folders. This update serves as a long-term solution to the [incident involving hidden files on iOS](/incident-ios-files) that occurred in May 2023.

- **Bug fixes and maintenance:** 
  - Fixed issue with the lock timeout and some visual bugs.
  - Loaded new translations.


### Android: Tella 2.4.1 (165) - released on December 12, 2023 {#android-tella-241-165---released-on-december-12-2023}
- Fixed a bug that rested user settings when changing the language. 

### Android: Tella 2.4.0 (164) - released on November 2, 2023 {#android-tella-240-164---released-on-november-2-2023}
- Accesibility Improvements: Users can navigate sequentially through content, and all validation errors and messages to users are announced by screen readers.
- Edit media: Users can crop and rotate images whithin Tella's encrypted container. [Read more.](/features#edit-media)
- Bug fixes: Fixed % bug on Calculator Camouflage, crashes and navigation issues.
- Technical Improvements: We refactored Tella's architecture and unified the code's programming language to Kotlin, we added documentation and unit testing to the code base to improve the app sustainability and simplify maintenance.

Tella 2.4.0 hides the Delete Tella option on the Quick Delete settings for phones that do not support it. We will be working on a fix for this issue on the next release. 

### iOS: Tella 1.3.0 (54) - released on Septemeber 18, 2023 {#ios-tella-130-54---released-on-septemeber-18-2023}
- Added the ability to erase all content in Tella after a custom number of unlocking attempts. We added a security setting that allows user to choose the  number of failed unlocking attempts and whether Tella shows a visual indicator of the remaining unlocking attempts or not.
- Added the possibility to preserve metadata when importing files into Tella
- Fixed a bug that prevented videos from being deleted from the device when imported into Tella. 



### Android: Tella 2.3.0 (158) - released on September 20, 2023 {#android-tella-230-158---released-on-september-20-2023}
- Added the ability to erase all content in Tella after a custom number of unlocking attempts. We added a security setting that allows user to choose the  number of failed unlocking attempts and whether Tella shows a visual indicator of the remaining unlocking attempts or not.
- Bugfixes for the Uwazi connection on Date and Geolocation fields.

### Android 2.2.1(156) - July 14, 2023 {#android-221156---july-14-2023}
- New languages: Kurdish and Persian
- Automatically upload media files to Tella Web as soon as they are captured
- Automatically delete media files as soon as they are auto-uploaded to Tella Web
- Background submission of Reports.
- Fixed bug on with the 0 key in one of the themes of the Calculator App.
- Added the option to preserve metadata when importing files to Tella.


### iOS 1.2(49) - July 14, 2023 {#ios-1249---july-14-2023}
- New languages: Kurdish, Persian, Belarusian, Arabic, Tamil and Burmese
- Automatically upload media files to Tella Web as soon as they are captured
- Automatically delete media files as soon as they are auto-uploaded to Tella Web
- Background submission of Reports.


### iOS 1.1.2(46) - June 20, 2023 {#ios-11246---june-20-2023}
Fixed the [missing files incident](/incident-ios-files).

### Android 2.1.0(152) - May 16, 2023 {#android-210152---may-16-2023}

Lauched Reports, a quick way to back-up media files to your organization's server (if you work with an organization):
- Connect to a Tella Web project in Settings > Servers
- Quickly send reports, including media files (photos, videos and audio) and a text description

Also in this update:
- New camouflage options (calculator themes and icons).
- The possibility to delete the original file from the phone's file system after importing it into Tella.

### iOS 1.1(43) - May 17, 2023 {#ios-1143---may-17-2023}

Launched Reports, a quick way to back-up media files to your organization's server (if you work with an organization):
- Connect to a Tella Web project in Settings > Servers
- Quickly send reports, including media files (photos, videos and audio) and a text description

Also in this update:
- Delete the original file from the phone's file system after importing it into Tella.
- Configure a quick delete button to erase the content of Tella in an emergency.


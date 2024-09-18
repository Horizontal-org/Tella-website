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

### Android: Tella 2.11.0 (186) - Released on September 18, 2024 {#android-tella-2110-186---released-on-september-18-2024}
- Added new options to edit photos within Tella's encrypted container: [Zoom and Flip](/features#edit-media).
- Bug-fixing and small improvements:
    - Disabled clear-text trafic in the manifest.
    - Added missing field name into Uwazi relationship property selector's header.
    - Disabled clear-text traffic in manifest.
    - Disable button for saving a folder or file if its name is blank.
    - Fixed bug that made the sorting of files reverse order.
    - Fixed crash when pressing back from the Uwazi template summary screen before submission.
    - Added tutorial screen for data collection into Tella onboarding tutorial.
    - Show attempts selected on the "Delete after failed unlock" setting screen and fixed UI bug longer languages.
    - Solved visual bug for longer Template names in the Uwazi "Download Template" screen.
    - Solved visual bug on the report status screen for report upload progress.


### iOS: Tella 1.10.0 (79) - Released on September 11, 2024 {#ios-tella-1100-79---released-on-september-11-2024}
- Implemented the Google Drive server connection that allows Tella users to upload the data they collect directly to either their personal Google Drive folder or to any organizational shared drives they are connected to. [Read here more about the integration](/g-drive).
- Added support for Vietnamese.
- Bug-fixing and small improvements:
    - Fixed issue with primary files submission in Uwazi.
    - Fixed issue when deleting submitted entities in Uwazi (name was changed).



### Android: Tella FOSS 2.0.15 (based on Android 2.0.15) - Released on July 10, 2023 {#android-tella-foss-2015-based-on-android-2015---released-on-july-10-2023}

A version of Tella included for the first time on the F-droid store. This a 100% Free and Open-Source Software (FOSS) version of Tella Android. We removed all trackers, changed map and location provider and also changed the Camera library to CameraX, removed crashlytics, LoggingInterceptor and any other non-FOSS component or dependency. We removed completely all Google Play Services dependencies.



## Previous versions {#previous-versions}

### iOS: Tella 1.9.0 (75) - Released on June 25, 2024 {#ios-tella-190-75---released-on-june-25-2024}
- Added support for the relationship property type in the Uwazi connection.
- Added offline support for the Uwazi server connection (Drafts, Outbox and Submitted tabs). More details [here](/uwazi).
-  Bug fixing and small improvements:
    - Run all remaining database migrations on every update. This bug was causing an inconsistent database state for users who don't use Tella often.
    - Fix the strip EXIF metadata feature that had been broken since the last database migration.
    - Show a warning if the users tries to delete a file that's being used in server connection that's not submitted.
    - Hide password field in a new Tella Web server connection.
    - Make the select field on Uwazi connections scrollable.
    - Fix back button issues on the onboarding flow.
    - Fix the import functionality when no permissions has been granted.
    - Keyboard was over text fields when renaming audio, folders or files.


### Android: Tella 2.10.0 (185) - Released on Agust 5, 2024 {#android-tella-2100-185---released-on-aug-5-2024}
- Added support for the relationship property type in the Uwazi connection.
- Added Vietnamese language support and updated other languages' translations.
- Added support for [privacy preserving analytics (opt-in)](/features#privacy-preserving-analytics). 
    - Added the "number of successful unlock attempts" metric. 
    - More info about how analytics works read [here](/security-and-privacy#analytics).
- Bug-fixing and small improvements:
    - Fixed the "Contact Us" button, which now redirects to email.
    - The "Cancel" button when deleting files is now working properly.
    - The "Cancel" button for saving files to the device is now working properly.
    - Fixed a crash when recording audio directly from within a Tella Web report.
    - Solved navigation issues:
        - Refactored the Uwazi section and solved crashes on the "Back" button on the 2FA and summary screens.
        - Solved issues with the "Back" button in the Tella onboarding flow.
    - Solved visual issues:
        - Section names are now vertically aligned in the Settings screen.
        - The digit in the Quick Delete countdown is now centered.
    - In vault, the reorder bottom sheet now shows the selected option.
    - Fixed a crash when using the ODK geolocation.
    - The Verification Information CSV file is now properly attached when sharing a file that includes Verification Information.


### Android: Tella 2.9.0 (183) - Released on July 15, 2024 {#android-tella-290-183---released-on-jul-15-2024}

- **Database Migration from SQLCipher 3 to SQLCipher 4.6.0**: This migration enhances the security, performance, and compatibility of our database system.
  - **KDF Algorithm**: Upgraded from PBKDF2-HMAC-SHA1 with 4,000 iterations to PBKDF2-HMAC-SHA512 with 256,000 iterations.
  - **Page Size**: Increased from 1024 bytes to 4096 bytes.
  - **HMAC Algorithm**: Switched from HMAC-SHA1 to HMAC-SHA512.
  - **Cipher Algorithm**: Continued use of AES-256 in CBC mode with stronger key derivation and HMAC.
  - **Salt and IV Generation**: Improved randomness and security.
  - **Compatibility and Performance**: Enhanced performance and compatibility with the latest SQLite versions.
- **Added a Backup Mechanism**: In case the data migration fails. All the information inside Tella should be correctly migrated, but if you are facing any issues, please [contact us](/contact-us).

### Android: Tella 2.8.0 (178) - Released on June 21, 2024 {#android-tella-280-178---released-on-jun-17-2024}
- Implemented [background encryption](/features#background-encryption) so users can continue collecting data, taking photos, videos, and audio, and importing files while the encryption process takes place. 
- Added a background activity tray so users can check the progress of file encryption.
- Ahead of major changes in the next release, we added a warning to advise users to back-up sensitive files outside Tella, in case the migration fails and some of the files become non-accessible. See below for more information on the upcoming changes and guidance on how to back-up files.
- The top bar now automatically hides when scrolling a PDF for easier reading.
- Upgraded http protocol (okhttp3 library).
 
#### Upcoming changes and guidance to back-up files 
The next release of Tella Android will include an update to the library used to save encrypted information encrypted in the database (SQLcipher). While we are doing our best to ensure the update to the new version happens smoothly, there is a small risk that some files are lost in the process. For users who are storing sensitive files in Tella, we strongly suggest to back-up these files to a location outside of Tella. This way, if something happens when updating Tella, those files will not be lost. 

To export files outside of Tella and save them on your phone:
1. Go to **All files** (or any folder where there  are files you want to backup)
2. Tap on ☑️ in the top right of the screen to enable "select mode"
3. Tap on ☐ in the top right to select all files, or tap ☐ next to each specific file you wish to export 
4. Tap on **⫶** in the top right to open the context menu
5. Tap on **Save to device**
6. Select the destination folder to save your files. You can read more about sharing data from Tella through other apps [here](/get-started-android#share-your-information).

If you prefer sharing your files through another app:
1. Go to **All files** (or any folder where there  are files you want to backup)
2. Tap on ☑️ in the top right of the screen to enable "select mode"
3. Tap on ☐ in the top right to select all files, or tap ☐ next to each specific file you wish to export 
4. Tap on **⫶** in the top right to open the context menu
5. Tap on **Share**
6. Select the app you want to use to share your files. We recommend using an encrypted email, Signal or any other tool with robust privacy. You can read more about sharing data from Tella through other apps [here](/get-started-android#share-your-information).

If you have questions or need additional support, don't hesitate to reach out at contact@tella-app.org


### iOS: Tella 1.8.0 (70) - Released on June 3, 2024 {#ios-tella-180-70---released-on-june-3-2024}
-  Edit media: Users can crop and rotate images within Tella's encrypted container. [Read more](/features#edit-media).
- Bug fixes:
  - Placeholder with current name missing from rename file while recording.
  - Rename folder shows the label "Rename" instead of "Rename File".
  - Show attempts selected on the "Delete after failed unlock" and a handle longer languages.
  - Solved UI issue in the label when creating PIN when installing Tella (only in iOS 14).

### Android: Tella 2.7.1 (175) - Released on May 2, 2024 {#android-tella-271-175---released-on-may-2-2024}
- Fixed crash when accessing the Audio folder from the Microphone.


### iOS: Tella 1.7.0 (67) - Released on May 2, 2024 {#ios-tella-170-67---released-on-may-2-2024}
- Added support for a content distribution feature that allow organizations to securely disseminate resources and materials from a Tella Web space to their on-the-ground users directly within Tella’s encrypted container. This includes creating PDFs on Tella Web and sharing training material, guides for data collection, or documents. Resources can be accessed offline after download. More information [here](/tella-web#managing-resources).
- Technical maintenance tasks and bug-fixing:
  - Keep Tella on foreground (do not let it go to sleep) while encryption is in progress.
  - Back button right after connecting to Reports now redirects the user to the Settings screen.
  - Allow users to select  today's date on the Date field in the Uwazi connection.


### Android: Tella 2.7.0 (174) - Released on April 16, 2024 {#android-tella-270-174---released-on-march-16-2024}
- Added support for a content distribution feature that allow organizations to securely disseminate resources and materials from a Tella Web space to their on-the-ground users directly within Tella’s encrypted container. This includes creating PDFs on Tella Web and sharing training material, guides for data collection, or documents. Resources can be accesed offline after download. More information [here](/tella-web#managing-resources).
- Technical maintanance tasks:
  - Fixed a bug that caused a crash when using the geolocation service.
  - The navigation within the Tella Web feature has been refactored for better stability and scalability.

### iOS: Tella 1.6.0 (66) - Released on April 8, 2024 {#ios-tella-160-66---released-on-april-8-2024}
- Implemented [background encryption](/features#background-encryption) so users can continue collecting data while the encryption process takes place. 
  - Added a background activity tray so users can check the progress of file's encryption.
  - Moved the settings button to the bottom navigation (top right) to make space for the new notifications button, which opens the background activity tray (top left)
- Updated the encryption algorithm.
- Fixed a bug that prevented big files (more than 1GB) to be saved into Tella vault.


### Android: Tella 2.6.0 (172) - Released on February 19, 2024 {#android-tella-260-172---released-on-february-19-2024}
- Added support for PDF files in Tella vault and as attachments on Tella Web's Reports.
- Bugfixes:
  - Editing a file inside a folder now saves the copy in the same location.
  - Fixed crash on back button on the camouflage menu.
  - Streamline the flow for renaming an audio recording.
  - Added alt text on a back button.
  - Upgraded project dependencies. Updated [documentation](/faq#what-phones-support-tella) with Android support information.


### iOS: Tella 1.5.1 (63) - Released on March 8, 2024 {#ios-tella-151-63---released-on-march-8-2024}
- Fixed bug on the Uwazi server connection for private Uwazi instances.

### iOS: Tella 1.5.0 (62) - Released on February 19, 2024 {#ios-tella-150-62---released-on-february-19-2024}
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

### iOS: Tella 1.4.0 (59) - Released on January 9, 2024 {#ios-tella-140-59---released-on-january-9-2024}
- **Anonymous In-App Feedback:**
  - Introduced an anonymous [feedback method](/features#feedback) for users. This feature allows users to send messages to the Tella team when they are unable to [contact us](/contact-us) through other channels.

- **Technical Improvements:**
  - Added a local database on the phone to manage the file structure and folders. This update serves as a long-term solution to the [incident involving hidden files on iOS](/incident-ios-files) that occurred in May 2023.

- **Bug fixes and maintenance:** 
  - Fixed issue with the lock timeout and some visual bugs.
  - Loaded new translations.


### Android: Tella 2.4.1 (165) - Released on December 12, 2023 {#android-tella-241-165---released-on-december-12-2023}
- Fixed a bug that rested user settings when changing the language. 

### Android: Tella 2.4.0 (164) - Released on November 2, 2023 {#android-tella-240-164---released-on-november-2-2023}
- accessibility Improvements: Users can navigate sequentially through content, and all validation errors and messages to users are announced by screen readers.
- Edit media: Users can crop and rotate images whithin Tella's encrypted container. [Read more.](/features#edit-media)
- Bug fixes: Fixed % bug on Calculator Camouflage, crashes and navigation issues.
- Technical Improvements: We refactored Tella's architecture and unified the code's programming language to Kotlin, we added documentation and unit testing to the code base to improve the app sustainability and simplify maintenance.

Tella 2.4.0 hides the Delete Tella option on the Quick Delete settings for phones that do not support it. We will be working on a fix for this issue on the next release. 

### iOS: Tella 1.3.0 (54) - Released on Septemeber 18, 2023 {#ios-tella-130-54---released-on-septemeber-18-2023}
- Added the ability to erase all content in Tella after a custom number of unlocking attempts. We added a security setting that allows user to choose the  number of failed unlocking attempts and whether Tella shows a visual indicator of the remaining unlocking attempts or not.
- Added the possibility to preserve metadata when importing files into Tella
- Fixed a bug that prevented videos from being deleted from the device when imported into Tella. 



### Android: Tella 2.3.0 (158) - Released on September 20, 2023 {#android-tella-230-158---released-on-september-20-2023}
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


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



### Android: Tella 2.16.0 (204) - Released on May 26, 2025 {#android-tella-21160204---released-on-may-26-2025}
- Multiple visual and accessibility improvements:
    - Updated the text of the “edit media” confirmation to make it clear that the edited file is saved as a copy.
    - Resolved a bug where the password cursor appeared in the middle of the input field.
    - The image editing canvas now expands to full screen.
    - Fixed a visual bug when listening to audio whereby the navigation bar overlapped with the audio title.
    - Display the verification mode icon for audio files.
    - Fixed an issue where the permission to save files to the Phone Gallery had to be granted twice.
    - Added space at the bottom of the file list so the “+” button remains accessible even when many files are present.
- Uwazi connection improvements:
    - Added a “success” message after submitting to Uwazi.
    - Fixed a bug that required users to log in again to Uwazi after updating Tella.
    - Display favorite Uwazi templates on the home screen.
    - Fixed a submission issue when connected to multiple Uwazi servers simultaneously.
- ODK connection improvements:
    - Improved error message handling for ODK.
    - Removed auto-focus from all fields.
    - The form update button is now always visible for the ODK connection.
- New language support: Ndau.
- Improved document support:
    - Added thumbnail placeholders for document files.
    - Display all common document types in the Documents folder (e.g., TXT, ODT, DOC, DOCX, XLS, etc.).
- Maintenance and technical tasks:
    - Preparatory work for edge-to-edge UI enforcement.
    - Fixed multiple app crashes.
    - Fixed an issue where updating English-language strings didn't update translations. As a result of this fix, the translated percentage for some languages might decrease, but it will be more accurate.


### iOS: Tella 1.15.0 (96) - Released on May 20, 2025 {#ios-tella-1150-96---released-on-may-20-2025}
- New language support: Ndau.
- Implemented Rotate Video.
- Make Play button only play the selection while editing Audio or Video.
- Bug fixes and minor improvements:
    - Removed duplicated navigation bar for documents.

### Android: Tella FOSS 2.11.0 (based on Android 2.11.0) - Released on February 25, 2025 {#android-tella-foss-2110-based-on-android-2110---released-on-february-25-2025}

We updated Tella FOSS, the version of Tella published on F-Droid that is 100% Free and Open-Source Software (FOSS). This updated version includes open-source map, location provider and Camera libraries. It doesn't include crashlytics, LoggingInterceptor and any other non-FOSS component or dependency. We completely removed all Google Play Services dependencies.

This version is based on Tella Android 2.11.0 and includes the following features:
- Added support for [privacy-preserving analytics](/security-and-privacy#analytics). All analytics are disabled by default and opt-in.
- PDFs can now be opened and viewed directly inside Tella FOSS.
- Edit media: users can [edit images](/features#edit-media) within Tella's encrypted container
- Feedback: users can now share [anonymous feedback](/features#feedback), bug reports, or improvement suggestions with the Tella team directly from inside Tella.
- Added support for the [Tella Web connection](/tella-web), including the ability to download and view resources uploaded by admins.
- Implemented background encryption so users can continue collecting data, taking photos, videos, and audio, and importing files while the encryption process takes place.
- Added the possibility to delete the original file from the phone's file system after importing it into Tella.
- Added support for the relationship property type in the Uwazi connection.
- New Languages support: Kurdish, Persian and Vietnamese.
- Added new accessibility settings.
- Fixes to improve performance and security.

A detailed list of features available on each platform is [available here](/features).



## Previous versions {#previous-versions}

### iOS: Tella 1.14.0 (92) - Released on March 6, 2025 {#ios-tella-1140-92---released-on-march-6-2025}
- Fixed preview of HEIC files.
- Added Indonesian, Tsonga and Portuguese (Mozambique) language support.
- Implemented limited access to photo gallery.
- Bug fixes and minor improvements:
    - Fixed the navigation bar that got stuck on file information screen after watching a video.
    - Fixed thumbnails for recently edited images in recent files.
    - Fixed the count of remaining attempts when a user inputs the wrong lock (when the "delete after failed unlock" feature is enabled).
    - Remove the button to edit PDF files (not yet supported).
    - Solved a crash when editing a video and exiting without selected either options to discard or keep the changes.
    - Changed the text of edit media confirmation message to make it explicit that the file is saved as a copy of the original one.
    - Changed the edit media screen so that the play button only plays the selection for Edit Audio and Edit Video.
    - Fixed an issue preventing going back to the previous screen after updating the password/pin in Settings.
    - Fixed an issue on smaller phones (for example iPhone 8) where the Quick Delete confirmation screen didn't fit in the screen.
    - Fixed an issue in Reports where the Submit screen was not scrollable and the Submit button was inaccessible when many files were attached.
    - Fixed an issue where the label for password setup during Onboarding was not fully visible.
    - Fixed an issue where the + button was not tappable when Tella's folders had too many items
    - Updated the text in Quick Delete settings to say "Delete files" instead of "Delete vault".
    - Fixed an issue where the menu with the Share and Save to device options only appeared on the second attempt.
    - Fixed an issue where the back button was not working after viewing a video from the All Files folder.
    - Made all elements on the homescreen scrollable, do not keep connections and recent files fixed on the top.


### Android: Tella 2.15.1 (202) - Released on March 25, 2025 {#android-tella-2151202---released-on-march-25-2025}
- Fixed a bug that caused imports to stop working across the app when the lock timeout was set to 5 minutes.
- Fixed the favorite form shortcut on the home screen.

### Android: Tella 2.15.0 (200) - Released on March 5, 2025 {#android-tella-2150200---released-on-march-5-2025}
- Added the possibility to zoom on images in the Tella vault.
- Added Tsonga and Portuguese (Mozambique) language support.
- Fixed an issue that was preventing the photo and video previews to show at the bottom of the camera.
- Multiple improvements to the [ODK Connection](/odk):
    - Solved a bug that prevented multiple favorite Forms to be saved.
    - Added the possibility to attach all files from the Tella vault using the "select all" button on the file selection process. This applies to Photos, Audio, Files and Video questions types on ODK and Uwazi connections.
    - Added File question type to the [supported questions types](/odk#supported-question-types).
    - Solved a crash that happened when recording audio directly from within an ODK form.
    - UX improvements to ODK: unify button styles and removed empty spaces.
    - Implemented refresh button.
- Bug fixes and minor improvements:
    - Corrected the button for "Select files from Tella" in all server connections.
    - Fixed a problem that was preventing all reports in the outbox to show.
    - Fixed a layout issue that was causing the grid view to brake after going back from file information.
    - Corrected submission time of reports when uploading to Nextcloud. 
    - Solved an issue with the phone's back button from the Microphone screen.
    - Do not allow recording an audio when a name is already taken.
    - Updated the text in the Quick Delete settings to say "Delete files" instead of "Delete vault".

### Android: Tella FOSS 2.0.15 (based on Android 2.0.15) - Released on July 10, 2023 {#android-tella-foss-2015-based-on-android-2015---released-on-july-10-2023}

A version of Tella included for the first time on the F-droid store. This a 100% Free and Open-Source Software (FOSS) version of Tella Android. We removed all trackers, changed map and location provider and also changed the Camera library to CameraX, removed crashlytics, LoggingInterceptor and any other non-FOSS component or dependency. We removed completely all Google Play Services dependencies.


### Android: Tella 2.14.0 (196) - Released on January 16, 2025 {#android-tella-2140196---released-on-january-16-2025}
- Implemented the Nextcloud server connection that allows Tella users to upload the data they collect directly to Nextcloud. [Read more here about the connection](/nextcloud).
- Added Bengali language support. [See language accessibility](/accessibility)
- Bug-fixing and minor improvements:
    - Solved issue that prevented Indonesian translation to load properly.
    - Tella now shows an error when a user tries to rename a photo if the new name is already taken.
    - User is redirected to the Outbox tab after pressing "submit later" in all new Connections.
    - Added counter to Draft tab for all server connections.
    - Fixed incorrect confirmation text for deleting a report in the outbox in any of the connections.
    - Added confirmation message after a report is successfully submitted to any connections.

### iOS: Tella 1.13.0 (88) - Released on Junuary 6, 2025 {#ios-tella-1130-88---released-on-juanuary-6-2025}
- Added the possibility to trim videos directly inside Tella's encrypted container. [Read more about editing media in Tella](/features#edit-media).
- Added Bengali language support. [See language accessibility](/accessibility).
- Bug-fixing and minor improvements:
    - Fixed bug: Tella now only allows moving a file to a different folder from the All Files folder.
    - Fixed typo in the Quick Delete description.



### Android: Tella 2.13.1 (191) - Released on November 6, 2024 {#android-tella-2131-191---released-on-november-6-2024}
- Hotfix for the Dropbox connection. Previous build didn't allow connections to Dropbox.

### iOS: Tella 1.12.0 (84) - Released on November 27, 2024 {#ios-tella-1120-84---released-on-november-27-2024}
- Added support for the Dropbox connection that allows Tella users to upload the data they collect directly to their Dropbox account. [Read more here about the connection](/dropbox).
- Added the possibility to trim audios directly inside Tella's encrypted container. [Read more about editing media in Tella](/features#edit-media)
- Bug-fixing and minor improvements:
    - Fixed bug: Renaming audio while recording takes the name or last edited audio.
    - Added link to the documentation on the "Connections" screen, for instructions on how to choose a server.
    - UI fixes for all connections.
    - Updated the About and Help page linking to FAQs and to "Get started guide for iOS".
    - Fix navigation issue with Back button on "Connect to server" screens.
    - Adapted quick delete options to also delete connections data for new connections.


### iOS: Tella 1.11.0 (81) - Released on October 21, 2024 {#ios-tella-1110-81---released-on-october-21-2024}
- Implemented the Nextcloud server connection that allows Tella users to upload the data they collect directly to Nextcloud. [Read more about the Connection here](/nextcloud).
- Bug-fixing and small improvements:
    - Fixed the progress view and cancel action for large files in the Report view in all Connections.
    - Hid "use shared drive" button if not using an organizational account.
    - Unified the required/optional fields in all Connections.
    - Fixed the UI for labels on the Servers view when there is an existing connection.
    - Fixed visual bugs on entities and delete entity cards for Uwazi connections.
    - Fixed edit connection title.
    - Deleted unused WebView class that was flagged in the latest security audit.


### Android: Tella 2.13.0 (190) - Released on November 4, 2024 {#android-tella-2130-190---released-on-november-4-2024}
- Added support for the Dropbox connection that allows Tella users to upload the data they collect directly to their Dropbox account. [Read here more about the connection](/dropbox).
- Bug fixes and minor improvements:
    - Fixed a bug where "Save to device" sometimes generated duplicated files.
    - Fixed a bug where users sometimes got stuck in the recorder after recording audio inside a folder.
    - Fixed a bug where users sometimes got stuck in the recorder after going back to the audio library.
    - UI fixes for Tella Web and Google Drive connections.
    - Updated the "About & Help" screen, linking to the Android "Get Started" guide.
    - Updated Quick Delete security settings to cover new Connections (Google drive, Tella Web, Dropbox).
    - Fixed a bug for the Uwazi Connection where entities would be duplicated when uploaded when multiple relationships properties were included in the same template.
    - Solved a crash in the geolocation property for the Uwazi Connection.
    - Solved a crash when sending a file with verification information.
    - Solved some issues related to the opt-in privacy-preserving analytics to ensure that measuring time spent in Tella works properly and that some metric applies to all Connections.



### Android: Tella 2.12.0 (188) - Released on October 21, 2024 {#android-tella-2120-188---released-on-october-21-2024}
- Added support for the Google Drive Connection that allows Tella users to upload the data they collect directly to either a personal Google Drive folder or to any organizational Shared Drives they are connected to. [Read more about the Google Drive Connection here](/g-drive).
- Added more metrics to our [opt-in privacy-preserving analytics](/security-and-privacy#analytics) to better understand usage patterns of Tella.
- Bug fixes and minor improvements:
    - Fixed issues with the homescreen (sometimes showed up empty or with duplicated elements other times).
    - Implemented count indicators in the Draft, Outbox and Submitted tabs of Reports.
    - Solved a bug that constantly changed the order of the Connections cards on the homescreen, and sometimes disappear completely from the homescreen.
    - Solved an unexpected error when submitting to Uwazi a template had related multi-select fields.
    - Solved a bug that prevented Primary Document to be shared to the Uwazi server.



### Android: Tella 2.11.0 (186) - Released on September 18, 2024 {#android-tella-2110-186---released-on-september-18-2024}
- Added new options to edit photos within Tella's encrypted container: [Zoom and Flip](/features#edit-media).
- Bug-fixing and small improvements:
    - Disabled clear-text trafic in the manifest.
    - Added missing field name into Uwazi relationship property selector's header.
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


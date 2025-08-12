---
id: security-and-privacy
title: Security and privacy
description: Details about Tella security and privacy.
slug: /security-and-privacy
---

# Security and privacy

Tella was built to protect those who face physical and digital repression, so all of Tella’s features and product decisions are built with privacy and security in mind. Tella is regularly audited by independent security firms, and features and documentation are designed with the support and guidance from security professionals. 


## Privacy {#privacy}

We only collect the minimum amount of data that is necessary to fulfill the purpose of Tella. **We never collect personally identifiable information. We never disclose, share, or sell any of your data to third parties**.

Through using our app, users may send data to servers managed by individuals or organizations they're working with. We encourage users to ask these individuals or organizations about their data privacy policies, as they may differ from ours. We provide the same standard of privacy protection to all our users no matter where you are in the world.

You can read Tella's full [Privacy Policy](/privacy).


### Tella Android {#tella-android}

Tella Android, as available on the Google Play Store, includes two trackers, [Google CrashLytics](https://firebase.google.com/docs/crashlytics) and [Google Firebase Analytics](https://firebase.google.com/docs/analytics), which help us detect bugs and crashes. This is critical to keep the app secure and performant for at-risk users. 

### Tella-FOSS {#tella-foss}

[Tella-FOSS](/faq#is-tella-available-on-f-droid), published on the [F-droid store](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/), does not contain any trackers.


### Tella iOS {#tella-ios}

[Tella for iOS](https://apps.apple.com/us/app/tella-document-protect/id1598152580) does not include any trackers. 

As a result of Apple’s strict iOS app policies, Tella for iOS is currently not available on alternative app stores or for manual install.

## Analytics {#analytics}

In Tella Android, Tella FOSS and [Tella Web](/tella-web), users can choose to share analytics to improve Tella. This data helps us understand how people use Tella and which features are important to them. ***Analytics data is only collected if users opt-in in the app's settings***

We use [Divvi Up](https://divviup.org/), a privacy-respecting telemetry service. Divvi Up is implemented by the [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/), a nonprofit organization that also maintains the [Let’s Encrypt](https://letsencrypt.org/) project. 

Here are some information about our privacy-preserving analytics approach:

1. **All data is anonymous and aggregated**: the Divvi Up library splits the data into two anonymized and encrypted shares and uploads each share to different data share processors (one hosted by ISRG and one hosted by us) that do not share data with each other. This way, only partial information about the original data is revealed to either processor.
2. **Even if we wanted to, we couldn't get the whole data**: It's not possible to construct the whole data with only one share. Each processor aggregates its data shares into a partial sum. The partial sums can then be combined into a final aggregation, permitting useful statistics over the whole body of data while revealing minimal information about individual participants. Extensive technical documentation about how Divvi Up works can be found [here](https://docs.divviup.org/).
3. **We collect as little data as possible**: Even though all data is anonymized, we always minimize the amount of data we collect. As of the latest versions of Tella, we only collect data about the following events (and nothing more):

    **Tella Android and Tella FOSS**
    - Number of times Tella is successfully unlocked.
    - Number of media files recorded (videos/photos taken and audio recordings captured).
    - Number of files imported from the device's gallery or file system into Tella.
    - Number of security features activated (number of times that camouflage is enabled, number of times that the quick delete action is triggered).
    - Number of new installations.
    - Number of reports uploaded to any connection (Tella Web, Uwazi, ODK, Nexcloud, Google Drive, Dropbox)
    - Time spend in Tella. 


    **Tella Web**
   The data below is only collected from Tella Web instances that have opted-in to share privacy-preserving analytics with the Tella team.
    - Number of visits (triggered every time someone enters any Tella Web instance).
    - Number of file uploads (triggered every time someone uploads a file to any Tella Web instance).
    - Number of Report uploads (triggers every time someone uploads a report to any Tella Web instance).


   For more information about the metrics we add to our apps, check out our [release notes](/releases).


## Security features {#security-features}

Tella integrates various security measures in place to achieve an acceptable level of security:



1. **Encryption at rest**: All data is encrypted at rest, on the user's device. This means that unless the app is unlocked (by entering the user's lock), the data it contains cannot be accessed at all. Even if someone seizes the phone and extracts all the data using a computer, the data will remain unreadable.
2. **Encryption in transit:** All data being transferred between Tella and servers (see [Connections section](/features#connecting-to-servers)) is encrypted through[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). Tella makes it impossible to send data to a server without TLS encryption.
3. **Lock**: Tella users [choose a lock](/features#app-lock) for the app as soon as they install it. Password, Pattern and PIN locks are available and each level of security is communicated to the users.
4. **Lock timeout:** Users can also configure a [lock timeout](/features#lock-timeout-configuration), to choose how quick Tella will lock when not in use. By default, the lock timeout is set to ‘immediately’, so as soon as the user exits Tella, the app locks and all of the data is encrypted. 
5. **Camouflage**: On Tella Android, there are currently [two camouflage](features#camouflage) modes for Tella: a fully functional calculator and the possibility to change the app name and icon to make it harder to find on the phone. Due to iOS restrictions, it is not possible to camouflage Tella for iOS.
6. **Quick Delete button**: Users can enable a **[quick delete](features#quick-delete)** sliding button to quickly wipe data from Tella in an emergency situation. Users can choose, in the Tella settings, to delete all the files stored in Tella, draft and submitted forms, server settings and the app itself when that button is triggered. When the Quick Delete button is triggered, a 5-second countdown is displayed to the user. During the countdown, the user can cancel the Quick Delete action by tapping anywhere on the screen. When the countdown reaches 0, the delete action set by the user is applied. If the user had selected the ‘delete Tella’ options, Android will ask them to confirm the app’s deletion. 
7. **Camera silent mode**:  Users can choose to [turn off the camera shutter sound](/features#camera-silent-mode) to draw less attention when taking photos.
8. **Screen security**: By default, Tella blocks screenshots and screen recordings inside Tella and hides the screen preview in the list of recent apps. [This setting](/features#screen-security) can be disabled, for example to record tutorials inside Tella or mirror the app to a computer for a presentation.
9. **Restrict unlocking attempts**: Users can decide how many failed [unlock attempts](features#restrict-unlocking-attempts) are allowed before everything inside Tella is deleted and whether a visual indicator with the remaining unlocking attempts will be visible on the unlock screen or not.

:::tip Video tutorial 🎥
Learn more about Security Features in our [video tutorial](/video-tutorials#additional-security-features)
:::


## Security limitations {#security-limitations}

There is no such thing as an app that is 100% "secure". Security is dependent on the threats and risks faced by each user, and the capabilities of adversaries. With Tella, we did our best to add as many layers of security as possible to reduce the likelihood that someone can detect the app or access its data. Here, we list all the important security risks and limitations users should be aware of when using Tella:



* Camouflage:
    * On Android, when Tella is camouflaged using one of the two [camouflaging methods available](/features#camouflage), the app can still be detected in the Android Settings. This means that someone who navigates to the Android settings > Apps will be able to see that there is an app installed on the device that is called “Tella”. They will also be able to see the size of the app. So if the user stores very large files, like videos, the app may raise attention.
* File management:
    * Files that are exported out of Tella to the device file system are no longer encrypted. This means that anyone with access to the device who browses the file system or gallery may be able to find those files.
    * Files that are shared through third-party apps may be visible to those apps and saved unencrypted on the device’s file system, and someone searching these apps may be able to find the files. For example: a photo stored inside Tella and shared on WhatsApp will be visible inside WhatsApp, and will also be visible in the file system, where WhatsApp photos are stored. This happens because in order to share with third-party apps the file needs to be saved on the phone file system, which is not encrypted. This is why we recommend manually deleting the file from the device’s file system after sharing it.
    * Importing a file creates a copy of this file, and then imports and encrypts it into Tella. On version 1.1(iOS) and 2.1(Android) we developed a feature for users to select if they want to keep or delete the original file when importing to Tella. However, we recomend to verify the original file is not present on the Trash bin (My files > Trash) and to delete the file from any automatic backup services you have enabled on your phone (Google Photos, Dropbox, etc).


## Security audits {#security-audits}

We regularly ask independent security firms to audit our code to ensure it is robust and secure.

| Дата | Audited by | Platforms audited  | Ссылка      |
| -----|----------|----|-----------|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| May 2024 | Subgraph Technologies, Inc. |  Android, iOS, Tella Web|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| May 2023 | Subgraph Technologies, Inc. | Android, iOS, Tella Web |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|


This is the summary from the latest audit and the status of the vulnerabilities identified:

| Заголовок                                               | Степень важности    | Платформа | Статус      |
|-----------------------------------------------------|-------------|-------------|-------------|
| Require re-authentication for changing key security settings | Moderate      | Общие | Planning |
| Improve webview implementation                      |  Moderate   | iOS       | Resolved |
| Improve GitHub practices (merging to main and tags) | Низкий         | Android, Android FOSS | Resolved (pending re-test) |
| Increase PBKDF2 iteration counts.                   | Низкий         | Android, Android FOSS | Soon |
| Do not allow clear-text traffic in Android manifest.| Низкий         | Android, Android FOSS | Resolved |
| Outdated 3rd-party dependencies                     | Неизвестно         | Android, Android FOSS | Resolved |










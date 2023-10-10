---
id: releases
title: What's new
description: Tella changelogs
slug: /releases
---

# What's new

This page explains what changes are introduced on each release of Tella. 

## Newsletter
To receive monthly updates on new features and improvements to Tella and stay up to date with Tella releases, suscribe to our newsletter [here](https://blog.wearehorizontal.org/tag/tella/#/portal/)

## Tella - Latest Versions 

### Android: Tella 1.4.0 (162) - released on XX
- Technical Improvements: 
    - We refactored Tella's architecture to MVVM (mainly by refactoring the Vault, ODK Forms modules and the Photo, Video and Audio activities).
    - We also unified the code's programming language to Kotlin and added documentation and unit testing to the code base to improve the app sustainability and simplify maintenance. 
- Accesibility Improvements:
    - We ensured that when users navigate sequentially through content, they encounter information in an order that is consistent with the meaning of the content and can be operated from the keyboard.
    - Make sure all validation errors and messages to users are announced by screen readers.
- Bug fixes: Fixed % bug on Calculator Camouflage, crashes and navigation issues.     

### iOS: Tella 1.3.0 (54) - released on Septemeber 18, 2023
- Added the ability to erase all content in Tella after a custom number of unlocking attempts. We added a security setting that allows user to choose the  number of failed unlocking attempts and whether Tella shows a visual indicator of the remaining unlocking attempts or not.
- Added the possibility to preserve metadata when importing files into Tella
- Fixed a bug that prevented videos from being deleted from the device when imported into Tella. 


### Android: Tella FOSS 2.0.15 (based on Android 2.0.15) - released on July 10, 2023

A version of Tella included for the first time on the F-droid store. This a 100% Free and Open-Source Software (FOSS) version of Tella Android. We removed all trackers, changed map and location provider and also changed the Camera library to CameraX, removed crashlytics, LoggingInterceptor and any other non-FOSS component or dependency. We removed completely all Google Play Services dependencies.



## Previous versions

### Andoid: Tella 2.3.0 (158) - released on September 20, 2023
- Added the ability to erase all content in Tella after a custom number of unlocking attempts. We added a security setting that allows user to choose the  number of failed unlocking attempts and whether Tella shows a visual indicator of the remaining unlocking attempts or not.
- Bugfixes for the Uwazi connection on Date and Geolocation fields.

### Android 2.2.1(156) - July 14, 2023
- New languages: Kurdish and Persian
- Automatically upload media files to Tella Web as soon as they are captured
- Automatically delete media files as soon as they are auto-uploaded to Tella Web
- Background submission of Reports.
- Fixed bug on with the 0 key in one of the themes of the Calculator App.
- Added the option to preserve metadata when importing files to Tella.


### iOS 1.2(49) - July 14, 2023
- New languages: Kurdish, Persian, Belarusian, Arabic, Tamil and Burmese
- Automatically upload media files to Tella Web as soon as they are captured
- Automatically delete media files as soon as they are auto-uploaded to Tella Web
- Background submission of Reports.


### iOS 1.1.2(46) - June 20, 2023
Fixed the [missing files incident](/incident-ios-files).

### Android 2.1.0(152) - May 16, 2023

Lauched Reports, a quick way to back-up media files to your organization's server (if you work with an organization):
- Connect to a Tella Web project in Settings > Servers
- Quickly send reports, including media files (photos, videos and audio) and a text description

Also in this update:
- New camouflage options (calculator themes and icons).
- The possibility to delete the original file from the phone's file system after importing it into Tella.

### iOS 1.1(43) - May 17, 2023

Launched Reports, a quick way to back-up media files to your organization's server (if you work with an organization):
- Connect to a Tella Web project in Settings > Servers
- Quickly send reports, including media files (photos, videos and audio) and a text description

Also in this update:
- Delete the original file from the phone's file system after importing it into Tella.
- Configure a quick delete button to erase the content of Tella in an emergency.


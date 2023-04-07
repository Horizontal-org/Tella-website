---
id: tella-features
title: Features
description: A detailed description of Tella features.
slug: /features
sidebar_position: 3
---
import FeaturesTable from './_features-table.mdx';


# Tella features

All of the following features are available to all users as soon as they download Tella. They do not require any connection to a server or any special set up. 

<FeaturesTable/>


## App lock

When installing Tella, the user has to select a lock to encrypt and decrypt the content of the app.



* On Android, the user can select a pattern, PIN, or password.
* On iOS, the user can select a PIN or password.

Without this lock, it is not possible to open Tella.

:::danger
If the user loses their lock, it is not possible to regain access to Tella and the files stored inside the app. The user has to uninstall and reinstall Tella, and all files will be lost.
:::

## Lock timeout configuration

By default Tella will lock immediately every time the user exits the app or your phone’s screen turns off. If you’d like to change this setting, the user  can do so by going to 

Settings ⚙️ > Security > Lock Timeout.  

The available options are 1 minute, 5 minutes, 30 minutes and 1 hour.  

:::info
Please use this feature carefully as if Tella is unlocked the data would be unprotected and anyone who enters Tella will be able to see all information there.  \
:::
:::info
When the camera or the audio recorder are open, Tella won’t lock
:::



## Camera silent mode

By default Tella has camera silent mode disabled. By going to **Settings ⚙️** > **Security** > **Camera silent mode**, it is possible to  turn off the camera shutter sound to draw less attention when taking photos. 


## Screen security

By default Tella blocks screenshots, screen recordings inside Tella and hides the screen preview in the list of recent apps. It is possible to  disable this security feature if the users need to take screenshots or screen recordings, or to mirror Tella to a computer for a presentation, by going to **Settings** ⚙️ > **Security** > **Screen security**.


## Encryption

All files stored inside Tella are encrypted. Without the app lock, it is impossible to decrypt and access any of the files stored in Tella.

Upon installing the app, the user decides which lock method they would like to use. For Android, the user can use a six-point pattern, a PIN, or a password. For iOS, they can use a PIN or a password. The app cannot be opened without the lock.

Even if the device is plugged into a computer and all the device's data is extracted to be analyzed, all Tella content and data will look like gibberish and will be useless. Unlocking the app by entering the correct lock is the only way to decrypt, and therefore read, the content stored in Tella.

:::danger
If the user’s lock is too weak, an adversary may be able to guess it and open the app on the phone; or the data could be extracted and a computer could brute-force the encryption key and decrypt the data.
:::

:::danger
If the user forgets their lock, there is no way of gaining access to the app and retrieving its content
:::


## File management

Tella allows users to manage files and folders in a similar way they would do on a computer. All files and folders are **encrypted and only accessible within Tella**.

In Tella, users can:



* Store any file, including photos, videos, audio files, and documents.
* Create folders and subfolders.
* Move files into folders and from one folder to another.
* Export files to their device. Once saved on their device outside of Tella, files are no longer encrypted and can be accessed by anyone searching the device.
* Import files from their device. Files are automatically encrypted when imported into Tella.

:::danger
Importing files from the device file system into Tella makes a copy of the files into Tella. This means that the original files are still present on the device, outside of Tella and unencrypted. To import the files into Tella without leaving a copy on the device file system, users must first import the files into Tella and then manually delete the original files in the device file system.
:::



## Import files from device

The user can import files into Tella to keep them secured by using the import feature. They can import files by going to the **Add ( + )** button on either All files, Images, Video, Audio or Documents depending on the type of file they wish to import and then **Import from device**. The files will be kept secured at Tella, but to make sure the files cannot be found outside of Tella, the user will need to manually delete those from your device.

## Open files in Tella

On Tella Android only images, videos and audios can be visualized inside Tella. Other files, like PDFs, must be exported to be opened. For iOS it is possible to visualize images, videos, audios and PDF files.


## Camouflage

On Tella Android, it is possible to camouflage Tella in two ways:



1. Users can change the name and icon of the app, to make it look like another app like a game or weather app.
2. Users can hide Tella behind a fully functional calculator. In order to open Tella, the user must input their PIN into the calculator followed by **=** . The Calculator camouflage is only possible if the user uses a PIN lock. It is not possible to camouflage Tella as a Calculator if pattern or password is used.

At this time, due to restrictions on the Apple App Store, Tella for iOS does not support the camouflaging features that are available on Tella Android.

:::danger
The name "Tella" and its icon will remain visible in the Android settings. This means that camouflage will not protect against an individual _actively_ looking for Tella on the phone or conducting an in-depth analysis of the device.
:::



## Homescreen customization

By default Tella's home screen organizes files by type: images, videos, audio, documents and other files. It also provides an All files section where all files can be accessed. For more information see File Management section.

For convenience and ease of access, it is also possible to customize the home screen to also show shortcuts to one or more of the following:



* Recent files, to quickly open the newest files in Tella
* Favorite forms, for users connected to an ODK server
* Favorite templates, for users connected to an Uwazi server

This configuration can be found in **Settings** > **General**. 


## Quick delete

A Quick Delete button allows users, in just a few seconds, to delete sensitive data within Tella. Quick delete can be configured on **Settings** > **Security** > **Quick delete**, where the user can choose to enable a sliding button on the homescreen to quickly delete information from Tella in emergency situations. If enabled, the user can choose exactly what gets deleted when the feature is used. The available options are:



* Delete vault: Deletes all files stored in Tella.
* Delete draft and submitted forms: Deletes drafts and submitted forms in all Open Data Kit (ODK) connected servers.
* Delete server settings: Deletes all server connections and all the forms or templates associated with them.
* Delete Tella: Deletes the app and all the data it contains. It triggers a message asking if the user wants to uninstall Tella as well.


## Quick exit

By clicking the exit button on the Tella’s home screen right top corner, users can quickly close and lock the app in case of emergency. While having the lock timeout set to “immediately” means that the app already locks when the user exits, using the Quick Exit button adds an extra layer of security and assurance that the app will be fully closed and locked.


## Verification mode

In the Tella settings, users can activate "Verification Mode". 

When activated, every time a user takes a photo or a video, or records audio, Tella automatically captures verification information (file metadata). This verification information can be used to corroborate evidence, cross-check with other facts known about the event or about the area where it was captured. The verification information will be included as a separated file when saving the file to the device or when sharing it through third-party apps.

Below is a list of each piece of metadata captured by Tella:

**Information about the file**



* File path: where the file was located in the Tella directory
* File hash: a unique number to identify the file
* File modified: the date and time the file was last modified on the device

**Information about the device**



* Manufacturer: the name of the device manufacturer
* Hardware: the exact model of the device
* Device ID: a unique number identifying the Android device
* Screen size: the exact screen size of the device
* Language: the language the device's operating system is set to
* Locale: the geographic region the device is set to
* Connection status: whether the device is connected or disconnected to the internet
* Network type: if the device is connected to the internet, specifies whether it is to a WiFi network or to a cellular network
* Wi-Fi MAC: a unique identifier to the device's Wi-Fi connector
* IPv4: a unique address identifying the device's internet connection
* IPv6: a more recent identifier to a device's internet connection

**Information about the environment where the file was captured**



* Location: the exact location of the device, include latitude and longitude coordinates, altitude in meters, the accuracy of the measurement in meters, and the time
* Location provider: how device location is determined
* Location speed: the speed at which the device is traveling
* Cell info: the identifying numbers of all the cell towers the device is connected to
* WiFi info: the name of all WiFi networks in the vincinity of the device


## Connecting to servers

Users can collect data directly in Tella, keep the data protected within the app, and connect to a server to securely send the data to a server. This feature is frequently used by organizations who centralize the data collected by volunteers or activist on the ground. These people collect information using Tella on their phones and then send it to their organizations. Previous Tella deployments where on-the-ground users collect data and send it to an organization's server have ranged from 1 to 2,000 users. \
 \
Currently the servers that can be connected to Tella are:



* Open Data Kit (ODK)
* Uwazi


## Camera (photos and videos)

Tella offers a built-in camera where you can take photos and videos. All media collected inside Tella will not be available outside of it, as all files get encrypted as soon as they are taken. Files can only be accessed inside Tella, using the lock to open the app. Photos and videos won’t appear on the phone Gallery. In Tella, photos and videos will have a default name, but users can rename those using the Rename button. Files can also be organized in folders.

The camera offers the possibility to change the resolution of videos before recording in order to save space: the lower the resolution, the less space the video takes, but also the lower the quality of the video.


## Audio Recorder

Tella has a built-in audio recorder.  All audio recorded inside Tella will not be available outside of it, as all files get encrypted as soon as they are taken. Audio files can only be accessed inside Tella, using the lock to open the app. Recordings will not appear on the phone’s Voice Recording app or file system. In Tella, audio files will have a default name, but users can rename those using the Rename button. Audio recordings can also be organized in folders. 

The audio recorder allows users to pause the recording and restart it as needed, keeping all the information on the same file. Users  see how much space they have available while recording, to ensure they will not be out of space while recording.


## Offline data collection

Once Tella is installed and configured on the phone, it doesn't need an internet connection to collect data. An internet connection is only needed to share files through other apps or through Connections. If users have a server connected, once the forms or templates are downloaded to the phone, all data collected will be stored on the outbox tab and they can upload it to the server once they connect to the internet.


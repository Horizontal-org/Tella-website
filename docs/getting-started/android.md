---
id: getting-started-android
title: Android
description: Quick start guide for Tella users on Android
slug: /getting-started-android
---

# Getting started on Tella on Android

## Download and install Tella

You have several options to download Tella:
- Follow [this link](https://play.google.com/store/apps/details?id=org.hzontal.tella&hl=en&gl=US&pli=1) to find Tella on the Google Play Store or open the Google Play Store and search for “Tella”.
- Download and install it manually as an .apk file [in this folder](https://web.tresorit.com/l/JgMjK#FV9IoIZdDxwAUPqtupJzsQ) or from our Telegram channel: https://t.me/tellaapp. 

If you need help to install the app manually, you can [follow this guide](https://todo.com) or contact us at contact@tella-app.org.

![gif that shows how to download Tella from the Play Store](/img/getting-started/android/find-tella.gif "find and download gif")


## Create your lock 

The first time you open Tella you’ll see a guided tour of the app functionalities: Camera, Recorder and Encrypted files & folders. You’ll also be asked to choose how you will lock Tella. Without this lock, it is not possible to open Tella and access any of the files stored in Tella. 
- Password: an alphanumeric password is the most secure way to lock your App.
- PIN: a numeric sequence of more than six (6) digits.
- Pattern: a numeric pattern of at least six(6) dots.

Avoid using your name, date of birth, or anything that is easy to guess (like “Password”, “123456”, or “000000”).

Keep in mind that if you forget this lock, there is no way to access the app or its content.
 








## Grant permissions to Tella
The first time you use each functionality, you will be asked to grant Tella some permissions:
- To take photos, record videos, or record audio, you will need to grant permission to access your phone’s camera and microphone.
- To import files into Tella or export files from Tella to your phone, you will need to grant access to your device file system.
- To use “verification mode” or send your location, you will need to grant access to your device location. You can do this by going into Tella’s settings and then General > Verification Mode.

If you decline granting Tella these permissions, you can grant permissions later by going to your Android settings and navigating to Settings > Apps > Tella > App permissions.

![gif that shows how to grant Tella permissions](/img/getting-started/android/permissions.gif "grating permission gif")


![gif that shows how to chage granted permissions on Tella)](/img/getting-started/android/permissions-change.gif "change the granted permission")



## Protect your files
After granting permissions, you’re ready to start collecting documentation. We recommend you to explore the following features:

**Use the Camera to take pictures or videos and the Audio Recorder to record audio.** All media taken by Tella will be encrypted instantly, which means that the file will not be accessible outside of Tella. All media collected inside Tella will not show on your phone gallery or phone files. There is no particular storage limit for Tella, the available space will depend on the space available on your device. 

![gif that shows how to take a picture in Tella](/img/getting-started/android/picture.gif "take a picture in Tella")

![gif that shows how to record a video in Tella](/img/getting-started/android/video.gif "video recording in Tella")

![gif that shows how to record audio in Tella](/img/getting-started/android/audio.gif "audio recording in Tella")



**Import your files to Tella.** Go to any of the folders inside Tella and tap the + Button > Import from device. Choose the file you’d like to keep inside Tella and a copy of the file will be stored encrypted and hidden on Tella. Keep in mind that the original file on your phone will not be deleted automatically, you will need to manually delete it. Tella will be unlocked while you choose your files for a maximum of three (3) minutes.

![gif that shows how to import files in Tella](/img/getting-started/android/import.gif "import files in Tella")





**Create folders.** To make it easier to find your files, you can organize files into folders. Go to All files > + Button > Create a new folder and type a descriptive name for the folder. Then use the Select multiple button at the top of the screen, choose the files you want to move to the new folder, then click the three (3) dots button and Move to a different folder, navigate the file structure to find the folder and then press Move here. 

![gif that shows how to organize your info in Tella](/img/getting-started/android/folders-rename.gif "organize files in Tella")









## Camouflage Tella.
It is possible to camouflage Tella to hide it on your device in two ways:
- You can change the name and icon of the app, to make it look like another app (like a game or weather app).
- You can hide Tella behind a fully functional calculator. In order to open Tella, the user must input their PIN into the calculator followed by =. The Calculator camouflage is only possible if the user uses a PIN lock. It is not possible to camouflage Tella as a Calculator if pattern or password is used.

![gif that shows how camouflage Tella behind a calculator](/img/getting-started/android/camouflage-calc.gif "camouflage Tella with a calculator")

![gif that shows how camouflage Tella by changing its name and icon](/img/getting-started/android/camouflage-icon.gif "camouflage Tella changing its icon")


## Share your information. 
To share information using Tella you can use the Share button. Just select the file or files you want to share, press Share and choose the app you want to share the files with. 

Take into account that Tella will share the files unencrypted, so make sure to use disappearing messages (for example on WhatsApp or Signal) or delete the messages after the other person receives them.

![gif that shows how to share information](/img/getting-started/android/share.gif "share information with third party apps")



## Go Further
### Connect to a server
Tella can be connected to a variety of back-end services. This is used by organizations to allow their members or partners to submit data and files to a secure remote location. If you are considering connecting to a server and have doubts about what server to choose or how to connect to it we are here to help: please write to contact@tella-app.org.



### Open Data Kit

The [Open Data Kit (ODK)](https://getodk.org/) is an open standard used to create custom forms and collect data. Because ODK is an open standard, Tella can be used with any of the tools that are ODK-compliant, like [Ona](https://ona.io/home/) or [KoboToolbox](https://www.kobotoolbox.org/), to create forms with custom questions, manage users, and aggregate the data submitted by users. We recommend using [KoboToolbox](https://www.kobotoolbox.org/) because it is open-source and is user-friendly. Kobotoolbox has a free, publicly available server [here](https://kf.kobotoolbox.org/) or it can be self-hosted. [Here you can read more about Kobotoolbox and the features we support](https://tella.slite.com/app/docs/r7vxebjDQ3TAWE).

If you are using Kobotoolbox, [first create an account here](https://kf.kobotoolbox.org/accounts/login/), and then create and deploy a Form. In Tella go to Settings > Servers > Add Server > Open Data Kit (ODK). Give your server a name and type kc.kobotoolbox.org as the server URL field.  Enter your username and password on the Advanced section in order to load your Forms.

![gif that shows ODK connection](/img/getting-started/android/kobo.gif "ODK connection")

### Uwazi
[Uwazi](https://uwazi.io/) is an open-source app made by HURIDOCS with powerful features to collect, organize, and visualize human rights data. Uwazi must be installed on a server. Uwazi does not have a user facing public instance, but you can try Uwazi functionality using the [Uwazi Demo server](https://demo.uwazi.io/). If you decide to use Uwazi and need help to deploy your instance, please contact us contact@tella-app.org.

![gif that shows Uwazi connection](/img/getting-started/android/uwazi.gif "Uwazi connection")






## Read more about Tella
- [Features and security:](/security-and-privacy) Learn more about how Tella can keep you safe and the threats that Tella does not protect you from.
- [Connections:](/getting-started-android#connect-to-a-server) Learn about how you can connect to a server to collect data or backup files.
- [Privacy policy](https://docs.tella-app.org/p/U-EOn57whEMiwr/Tella-Privacy-Policy): We only collect the minimum amount of data necessary and never collect any personally identifiable information. Read the full privacy policy here.

### Contact us if you need help
If you need help to understand Tella’s technical details and security considerations to decide if it’s right for you and your team, we are here to help. Just reach out via email at contact@tella-app.org so we can answer your questions or plan to host a training or a live Q&A session for your team.

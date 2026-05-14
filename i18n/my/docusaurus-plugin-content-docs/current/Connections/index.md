---
id: connections
title: ချိတ်ဆက်မှုများ
description: Overview about how to share data with others using Tella Connections - Server Connections (Google Drive, Dropbox, Uwazi, ODK, Tella Web and Nextcloud) and Nearby Sharing (offline sharing)
slug: /connections
sidebar_position: 4
---

import ConnectionsTable from '.././_connections-table.md';
import Button from '@site/src/components/Button';




# Tella Connections – Overview

In addition to keeping their data protected within the app, users can use **Connections** to securely share data with others. Depending on the type of connection, some possible use cases include:
- Volunteers or activists on the ground submitting forms directly to their organization from Tella.
- A group of people connecting to a drive, cloud, or shared space to send files.
- A group of journalists sharing encrypted data with each other during an internet shutdown.
- An individual backing up selected files to their personal computer.


There are two main types of connections:
- [**Nearby Sharing**](#nearby-sharing): Share encrypted files with another Tella device in physical proximity. This feature does **not** require an internet connection and is typically used during internet shutdowns.
- [**Upload to a server**](#server-connections): Connect to a server and upload files over the internet so that others can access them. This feature is commonly used by organizations running data collection processes.

Connections can be configured on **Settings** → **Connections**. The Tella home screen will display a shortcut to all connected servers. Nearby Sharing is turned on by default, but it can be disabled as well.


## Nearby Sharing {#nearby-sharing}

Nearby Sharing can be used to transfer files directly between Tella vaults. It is available on Tella Android, Tella iOS, and Tella Desktop. Transfers are encrypted, use the Wi-Fi protocol, and work with or without an internet connection, even on insecure or monitored networks.

We designed this connection type with a strong focus on security, especially for use in repressive environments, and it has been [audited by an independent security firm](/security-and-privacy#security-audits).

<Button label="Continue reading about Nearby Sharing" link="/nearby-sharing"/>


## ဆာဗာ ချိတ်ဆက်မှုများ {#server-connections}

Server Connections are useful for organizations leading data collection processes. Organizations can choose, configure, and manage a server to centralize data collected by volunteers or activists in the field. These individuals gather information using Tella on their devices and then send it to their organization.

Previous Tella deployments, where on-the-ground users collected data and sent it to an organization's server, have ranged from 1 to 2,000 users. You can read user stories [here](/user-stories), or [contact us](/contact-us) for assistance in finding the best way to use Tella for your organization.

Currently, Tella can connect to the following types of servers:

* [Uwazi](#uwazi)
* [Tella ဝဘ်](#tella-web)
* ၎င်းတို့ကို Tella တွင် [ချိတ်ဆက်မှုများ](/features#connecting-to-servers) ဟု ခေါ်သည်။
* မှန်ကန်သော ဆာဗာအမျိုးအစားကို ရွေးချယ်ခြင်း {#selecting-the-right-type-of-server}
* အောက်တွင် လိုအပ်ချက်အမျိုးမျိုးအတွက် ဆာဗာအမျိုးအစားသုံးမျိုးအနက်မှ မည်သည့် ဆာဗာအမျိုးအစားက အသင့်လျော်ဆုံးဖြစ်ကြောင်း ဆုံးဖြတ်ရာတွင် အထောက်အကူဖြစ်စေရန် အခြေခံကျ၍ အကြမ်းဖျင်းဖော်ပြထားသော ဂရပ်တစ်ခုကို ပြသထားပါသည်။ ၎င်းကို ကြည့်ရှု၍ စတင်လေ့လာနိုင်သော်လည်း ကျွန်ုပ်တို့၏ ဆာဗာအမျိုးအစားတစ်ခုစီကို [ဤဗီဒီယို](/video-tutorials#connections-full-video) တွင်လည်း ကြည့်ရှုလေ့လာနိုင်ပါသည်။ ဆုံးဖြတ်ရာတွင် အကူအညီလိုအပ်ပါက သို့မဟုတ် ချိတ်ဆက်မှုအသစ် (ဆာဗာအမျိုးအစားအသစ်သို့ ပေါင်းစပ်မှုတစ်ခု) တောင်းဆိုလိုပါက [ကျွန်ုပ်တို့ထံ ဆက်သွယ်ပါ။](/contact-us)
* ```mermaid
graph TD;
    id1(အသုံးပြုသူများ ပေးပို့ရမည့် ဒေတာအမျိုးအစား။) --> id2("အများအားဖြင့် မီဒီယာ ပူးတွဲပါဖိုင်များနှင့် ဖွဲ့စည်းတည်ဆောက်ထားသော ဒေတာ (ပုံစံများ)");
    id1 --> id3("အများအားဖြင့် စာသားပါသော မီဒီယာဖိုင်များ") ;
    id2 --> id4("နောက်ထပ် မည်သည့်အင်္ဂါရပ်များ လိုအပ်ပါသနည်း။");
    id3 --> id5("Tella ဝဘ်");
    id4 --> id6("ဒေတာပွိုင့်များကြား ဆက်နွှယ်မှုများကို တည်ဆောက်ပါ၊ ဝဘ်ဆိုက်တစ်ခုသို့ လွှင့်တင်ပါ")
    id4 --> id7("ဖောင်များသို့ လော့ဂျစ်ကို ထည့်ပါ၊ ဖောင်များအတွက် နံပါတ်အများအပြား စုဆောင်းပါ၊ ရလဒ်များကို ရုပ်ပုံဖြင့်ဖော်ပြနိုင်သော အစီရင်ခံစာများအဖြစ် ဖန်တီးပါ")
    id4 --> id10("ဆာဗာမှ အသုံးပြုသူများထံ လမ်းညွှန်ချက်များ ပို့ပါ")
    id6 --> id8("Uwazi")
    id7 --> id9("Open Data Kit (ODK)")
    id10 -->id5
```

Feature availability by platform:
Tella ဝဘ် အကြောင်း [ဤနေရာတွင်](/tella-web) ပိုမိုလေ့လာပါ၊

Some individuals use commercial clouds (Google Drive, Dropbox, Nextcloud) as a backup system for their Tella data. However, we advise using this feature with caution:
- Automatic backups to any server are **not** currently available. They need to be made manually as submissions to each of the servers.
- Files on the server will be accessible to anyone with server access.

[Read more about backups in Tella](/features#backup-files)

:::info
All server connections are **offline first**, with built-in mechanisms to pause and resume uploads when the internet is unreliable. Learn more about [offline data collection here](/features#offline-data-collection).
:::

:::danger
Even though data is transferred to the server securely (SSL), files stored on the server are **not** encrypted. Anyone with access to the server can view them.
:::

<Button label="Continue reading about Server Connections and how organizations use Tella" link="/for-organizations"/>


:::tip
The [Share](/features#share-button) feature is also available for sharing files directly with other apps installed on the device.
:::

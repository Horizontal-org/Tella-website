---
id: nearby-sharing
title: Nearby Sharing
description: Learn about Tella's encrypted, cross-platform, fully offline feature for sharing files between Tella vaults in physical proximity. Available for Android, iOS and Desktop.
slug: /nearby-sharing
---

# Nearby Sharing

Nearby Sharing lets users securely share files, fully offline, across platforms and devices, assuring end-to-end encryption. 

This feature is designed centering the needs of people living in internet shutdowns, where privacy, security and reliability are crucial to keep connected. It's also helpful in rural areas, or for protests or large events where mobile networks are saturated or unavailable.

Nearby Sharing in Tella is:
- *Independent of internet*: Transfers work with or without an internet connection, even on surveilled or insecure Wi-Fi networks, by establishing a direct connection between devices instead of routing through the internet.
- *Cross platform*: Available on iOS, Android and Desktop (Computer): there isn't any restrictions on which model of phone, brand or operative system you use. Nearby Sharing is designed to be accessible to any device able to install Tella.
- *Encrypted*: Files move directly from one Tella vault to another, encrypted and secure.
- *Anonymous*: Connection happens locally, without trace of who you shared with, when or where.


Nearby Sharing will only work in physical proximity, for users connected to the same Wi-Fi network (either a local Wi-Fi or a Hotspot).


## When to Use Nearby Sharing {#when-to-use-nearby-sharing}

Nearby Sharing may be particularly well-suited for:
- Sharing files during an internet shutdown.
- High risk scenarios where internet is censored and cannot be trusted as a communication channel
- During protests, to quickly back up evidence on another person's phone.
- To increase redundancy of data, by backing up files to a personal computer or another device.
- To migrate to a new phone.


:::tip
If you need help figuring out if Nearby Sharing is best for your use-case, [contact us](/contact-us)!
:::

:::tip
If you are trying to share files to the organization you are working with, or if you are not in the same physical location as the person you want to exchange files with, [Tella's server connections](/for-organizations) could be helpful:
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
:::

## How to use Nearby Sharing {#how-to-use}

Tap the Nearby Sharing button under the **Connections** section on the Tella Homescreen to get started.

In order to use the feature, the sender and receiver need to join the same Wi-Fi network. You can connect to mobile devices using Tella (Android or iOS) or connect a mobile device to a computer. There are 2 ways to connect your devices though Wi-Fi:
1. Using a local network, such as the Wi-Fi at your home or work, or a public Wi-Fi network.
2. Setting up a Hotspot on a device, and make sure both the sender and receiver have joined it. One of the devices can act as Hotspot and the other one could connect to it.

Nearby Sharing will show a tutorial that will guide users in every step of the connection process.

:::note
Some public Wi-Fi networks might not work due to their configuration preventing direct transfers. 
:::

:::tip
Nearby Sharing does not work if either of the devices is connected to a VPN.
:::


## Platform availability {#platform-availability}

Nearby Sharing is available for [Tella Android](/faq#is-tella-available-on-android), [Tella iOS](/faq#is-tella-available-on-ios) and [Tella Desktop](/faq#is-tella-available-on-desktop).










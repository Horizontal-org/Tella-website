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
* [Tella Web](#tella-web)
* Chúng được gọi là [Kết nối](/features#connecting-to-servers) trong Tella.
* Lựa chọn loại máy chủ phù hợp {#selecting-the-right-type-of-server}
* Sau đây là biểu đồ cơ bản, không đầy đủ để xác định xem loại nào trong ba loại máy chủ phù hợp nhất với các nhu cầu khác nhau. Đây là điểm bắt đầu tốt, nhưng bạn cũng có thể xem [video này](/video-tutorials#connections-full-video) để tìm hiểu chi tiết về từng loại máy chủ. Nếu bạn cần trợ giúp trong việc lựa chọn hoặc muốn yêu cầu một Kết Nối mới (tích hợp với loại máy chủ mới), [hãy liên hệ với chúng tôi!](/contact-us)
* ```mermaid
graph TD;
    id1(Loại dữ liệu nào mà người dùng cần gửi?) --> id2("Chủ yếu là dữ liệu có cấu trúc (mẫu), kèm theo tập tin đính kèm");
    id1 --> id3("Chủ yếu là tệp media, kèm theo một số văn bản") ;
    id2 --> id4("Bạn cần thêm tính năng gì?");
    id3 --> id5("Tella Web");
    id4 --> id6("Thiết lập mối quan hệ giữa các điểm dữ liệu, xuất bản tới một trang web")
    id4 --> id7("Thêm logic vào các biểu mẫu, thu thập số lượng lớn dữ liệu từ các biểu mẫu, tạo báo cáo để trực quan hóa kết quả")
    id6 --> id8("Uwazi")
    id7 --> id9("Bộ Dụng cụ Dữ Liệu Mở (ODK)")
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










---
id: nextcloud
title: Nextcloud 
description: Tella allows users to conveniently upload photos, videos, pdfs and audio recordings to Nextcloud.
slug: /nextcloud
---

# Nextcloud Connection

[Nextcloud](https://nextcloud.com/) is a fully open source collaboration platform. You can self-host Nextcloud on your server or pay a [Nextcloud trusted provider](https://nextcloud.com/providers/) to host your Nextcloud instance. 

Tella allows users to sign in to their Nextcloud account directly from Tella and upload files directly to it.

Similarly to other server connections (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Dropbox](/dropbox), [Uwazi](/uwazi) or [Open Data Kit](/odk)), connecting to a Nextcloud server enhances the security of data collected on Tella by:

1. Cho phép người dùng thu thập dữ liệu trực tiếp trong kho lưu trữ được mã hóa của Tella.
2. Ensuring that data is sent directly from Tella to Nextcloud, without needing to install the Nextcloud app on the device or sending the data through a third-party app.
3. Allowing users to back up their data to a remote server, to lower the risk that data is discovered on their mobile device.
4. Đảm bảo rằng các tổ chức có thể lưu giữ thông tin quan trọng ngay cả trong trường hợp thiết bị bị thu giữ hoặc phá hủy và có thể sắp xếp dữ liệu đó cho quá trình nghiên cứu, vận động hoặc giải trình trách nhiệm.

Submissions to Nextcloud take the form of "reports" which include a title, a text description, and files like photos, videos and audio recordings.

:::danger
Even though data is transferred to the server securely (SSL), anyone with access to the Nexctloud account can view the files. If you need encrypted file transfers, explore [Nearby Sharing](/nearby-sharing).
:::

## When to Use Nextcloud {#when-to-use-Nextcloud}

The Nextcloud connection may be particularly well-suited for:
- Organizations that already use Nextcloud.
- Organizations that want to use open-source software.
- Organizations that have the technical capacity to self-host Nextcloud on their servers or can pay a [Nextcloud trusted provider](https://nextcloud.com/providers/) to host Nextcloud for them. If you partner with a Nextcloud provider, remember that the provider will be able to access your data. 
- Users who will be sending mostly media files, with some text and don't need structured data collection like forms or surveys.


:::tip
If you need help figuring out if Nextcloud is best for your use-case, [check out this guide](/for-organizations#selecting-the-right-type-of-server) or [contact us](/contact-us)!
:::

:::tip
For now, we don't support two-factor authentication (2FA) for Nextcloud connections on Tella Android and iOS. If this is a pressing need of yours, please [let us know](/contact-us)!
:::


## Connect to Nextcloud {#connect-to-Nextcloud}

In order to connect to Nextcloud:

* Khi chế độ tự động báo cáo được bật, bạn có thể bật tính năng xóa tự động, tính năng này sẽ tự động xóa các báo cáo và các tệp liên quan khỏi thiết bị của bạn sau khi chúng được tải lên thành công trên Tella Web. Điều này giúp bạn quản lý dung lượng lưu trữ của thiết bị và đảm bảo rằng dữ liệu nhạy cảm không bị giữ lại một cách vô tình.
* Select "Nextcloud" from the list of available server types.
* Type the URL of your Nextcloud server.
* Enter your Nextcloud username and password.
* Choose a name for the folder where all your Tella submissions will be saved.


## Manage the Nextcloud connection {#manage-the-Nextcloud-connection}

* In **Settings ⚙️** > **Connections** >  **Nextcloud** > **⫶** you can:
  - Delete the connection

For the moment it is not possible to sign in to multiple Nextcloud accounts at the same time. If you want to sign-in to another Nextcloud instance, delete your Nextcloud connection and create a new one.


## Submit to Nextcloud {#submit-to-Nextcloud}

* Once connected, a "Nextcloud" card will appear in the "Connections" section of the homescreen. Tap on this card to start submitting to Nextcloud.
* The main Nextcloud screen allows navigation between the Drafts, Outbox, and Submitted tabs.
* Tap the "New report" button at the bottom of the screen to create a new report to Nextcloud.
    * On the "New report" screen you can fill in the report's details, including title, description, and optional attachments of photos, videos and audio recordings.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Để có thể lưu dưới dạng bản nháp, ít nhất bạn phải nhập tiêu đề của báo cáo.
    * Một thông báo sẽ xuất hiện trên màn hình để xác nhận bản nháp đã được lưu.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* The “Submit” button sends the report to the Nextcloud immediately.
    * If submission fails due to connectivity issues, the report goes to the “Outbox" tab.
    * If the report is submitted correctly, it goes to the “Submitted” tab and a new folder will be created in Nextcloud with the title you selected. All attachments will be added to the folder and the description will be added as a text file inside the folder.

:::info
On Android, [a known Nextcloud issue](https://help.Nextcloud.com/t/cant-upload-files-langer-than-20-mb-using-Nextcloud-android-app/196434) prevents files larger than 20MB from being submitted to a Nextcloud server. For that reason, Tella users cannot attach files larger than 20MB to Reports uploaded to a Nextcloud connection. We are monitoring the status of this issue and will remove Tella's file-size restriction as soon as it is solved by Nextcloud.
:::

##  Bản báo cáo nháp {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * Một thông báo xác nhận sẽ được hiển thị, và bạn có thể tiếp tục làm việc trên báo cáo hoặc thoát ra để quay lại sau.
* Nếu bạn cố gắng thoát khỏi một báo cáo mà không lưu, bạn sẽ được hỏi xác nhận liệu bạn có chắc chắn muốn thoát mà không lưu báo cáo hay không.
* Trong tab Bản nháp, bạn có thể xem và quản lý các báo cáo nháp. Mở một báo cáo nháp để tiếp tục làm việc và gửi báo cáo đó.
* You can delete a draft report by tapping on **⫶** > **Delete** or by entering the report and tapping the Delete button.


#### Submit a Report to Nextcloud{#submit-a-report-to-Nextcloud}

* Trong báo cáo, hãy nhấn vào "Gửi" để bắt đầu gửi báo cáo.
* Bạn sẽ được chuyển hướng đến màn hình tóm tắt hiển thị quá trình tải lên cho từng tệp tin đính kèm.
* Nút "Xóa" có sẵn để dừng tải lên và xóa báo cáo.
* Nếu báo cáo đang được tải lên, nút "Tạm dừng" cho phép bạn tạm thời dừng việc tải lên, có thể tiếp tục tải lại sau bằng cách sử dụng nút "Tiếp tục".
* Việc thoát một báo cáo không ảnh hưởng đến trạng thái tải lên.  Nếu báo cáo đang được tải lên thì quá trình này vẫn tiếp tục.

:::info
After a report has been uploaded to Nexcoud, it is not possible to delete it on Nextcloud from the Tella mobile app. Deleting a submitted report will only delete the local version of it, not the report on the server. 
:::

:::info
Deleting a report in the middle of submission will cancel the upload of the files that haven’t been uploaded yet, but submitted files and partially submitted files that are already on Nextcloud won’t be deleted.
:::


#### Hộp thư đi {#outbox}
The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen.

The Outbox contains:

* Tạm dừng gửi
* Các báo cáo đang gửi bị gián đoạn do vấn đề kết nối.
* Các báo cáo được đánh dấu là "Gửi sau".

:::tip
If you need a fully offline way to share files with others, consider exploring [Nearby Sharing](/nearby-sharing).
:::


#### Gửi báo cáo {#submitted-reports}

- The Submitted tab displays reports that have been successfully submitted to the Nextcloud server.
- Trong tab "Đã gửi", bạn có thể xem và đánh giá lại các báo cáo đã được gửi.

:::info
If the internet connection is interrupted, reports will go to the "Outbox" tab and you will need to manually resume the submission.
:::




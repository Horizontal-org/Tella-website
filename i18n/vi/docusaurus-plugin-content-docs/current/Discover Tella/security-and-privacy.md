---
id: security-and-privacy
title: Bảo mật và quyền riêng tư
description: Chi tiết về bảo mật và quyền riêng tư của Tella
slug: /security-and-privacy
---

# Bảo mật và quyền riêng tư

Tella được xây dựng để bảo vệ những người phải đối mặt với sự đàn áp cả về vật lý và kỹ thuật số, vì vậy tất cả các tính năng và sản phẩm của Tella đều được xây dựng theo hướng đảm bảo quyền riêng tư và bảo mật.  Tella thường xuyên được kiểm tra bởi các công ty bảo mật độc lập và các tính năng cũng như tài liệu được thiết kế với sự hỗ trợ và hướng dẫn từ các chuyên gia bảo mật.


## Quyền riêng tư {#privacy}

Chúng tôi chỉ thu thập lượng dữ liệu tối thiểu cần thiết để thực hiện mục đích của Tella.  **Chúng tôi không bao giờ thu thập thông tin nhận dạng cá nhân.  Chúng tôi không bao giờ tiết lộ, chia sẻ hoặc bán bất kỳ dữ liệu nào của bạn cho bên thứ ba**.

Thông qua việc sử dụng ứng dụng của chúng tôi, người dùng có thể gửi dữ liệu đến các máy chủ được quản lý bởi cá nhân hoặc tổ chức mà họ đang làm việc. Chúng tôi khuyến khích người dùng hỏi rõ về chính sách bảo mật dữ liệu của tổ chức mình làm việc, vì chúng có thể khác với chính sách của chúng tôi. Chúng tôi cung cấp cùng một tiêu chuẩn bảo vệ quyền riêng tư cho tất cả người dùng của mình, cho dù bạn ở đâu trên thế giới.

Bạn có thể đọc toàn bộ [Chính sách Bảo mật của Tella](/privacy).


### Tella Android {#tella-android}

Tella Android, hiện có trên Cửa hàng Google Play, bao gồm hai trình theo dõi, [Google CrashLytics](https://firebase.google.com/docs/crashlytics) và [Google Firebase Analytics](https://firebase.google.com/docs/analytics), giúp chúng tôi phát hiện lỗi và sự cố.  Điều này rất quan trọng để giữ cho ứng dụng an toàn và hoạt động hiệu quả đối với những người dùng gặp rủi ro.

### Tella-FOSS {#tella-foss}

[Tella-FOSS](/faq#is-tella-available-on-f-droid), được phát hành trên [Cửa hàng F-droid](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/), không chứa bất kỳ trình theo dõi nào.


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


## Tính năng bảo mật {#security-features}

Tella tích hợp nhiều biện pháp bảo mật khác nhau để đạt được mức độ bảo mật tiêu chuẩn:



1. **Mã hóa khi lưu trữ**: Tất cả dữ liệu đều được mã hóa ở trạng thái lưu trữ trên thiết bị của người dùng.  Điều này có nghĩa là trừ khi ứng dụng được mở khóa (bằng cách nhập mã khóa của người dùng), dữ liệu trong đó không thể truy cập được. Ngay cả khi ai đó tịch thu điện thoại và trích xuất tất cả dữ liệu bằng máy tính, vẫn không thể đọc được dữ liệu.
2. **Mã hóa khi truyền tải:** Tất cả dữ liệu được chuyển giữa Talla và máy chủ (xem [phần Kết nối](/features#connecting-to-servers)) đều được  mã hóa bằng [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). Tella không cho phép gửi dữ liệu đến máy chủ mà không có mã hóa TLS.
3. **Khóa**: Người dùng Tella [chọn khóa](/features#app-lock) cho ứng dụng ngay khi cài đặt. Các loại khóa như Mật khẩu, Hình vẽ và Mã PIN đều có sẵn và mỗi mức độ bảo mật sẽ được thông báo cho người dùng.
4. **Thời gian tự động khóa:** Người dùng có thể cài đặt [thời gian tự động khóa](/features#lock-timeout-configuration),để chọn thời gian Tella sẽ khóa khi không sử dụng. Theo mặc định, thời gian chờ khóa được cài đặt 'ngay lập tức', vì vậy ngay khi người dùng thoát khỏi Tella, ứng dụng sẽ khóa và tất cả dữ liệu sẽ được mã hóa.
5. **Ngụy trang**: Trên Tella Android, hiện có [hai chế độ ngụy trang](features#camouflage) cho Tella: một giao diện máy tính có đầy đủ chức năng và khả năng thay đổi tên và biểu tượng ứng dụng để khó bị phát hiện hơn trên điện thoại.  Do các hạn chế của iOS, không thể ngụy trang Tella trên iOS.
6. **Nút Xóa nhanh**: Người dùng có thể bật nút trượt **[xóa nhanh](features#quick-delete)** để xóa nhanh dữ liệu khỏi Tella trong trường hợp khẩn cấp. Người dùng có thể chọn, trong cài đặt của Tella, để xóa tất cả các tệp được lưu trữ trong Tella, các biểu mẫu nháp và đã gửi, cài đặt máy chủ và chính ứng dụng khi nút đó được kích hoạt. Khi nút Xóa nhanh được kích hoạt, một đếm ngược 5 giây sẽ hiển thị cho người dùng. Trong quá trình đếm ngược, người dùng có thể hủy hành động Xóa nhanh bằng cách chạm vào bất kỳ đâu trên màn hình. Khi đếm ngược về 0, hành động xóa do người dùng đặt sẽ được thực hiện. Nếu người dùng đã chọn tùy chọn ‘xóa Tella’, Android sẽ yêu cầu họ xác nhận việc xóa ứng dụng.
7. **Chế độ im lặng cho máy ảnh**:  người dùng có thể chọn [tắt âm thanh máy ảnh](/features#camera-silent-mode) để ít bị chú ý hơn khi chụp ảnh.
8. **Bảo mật màn hình**: Theo mặc định, Tella chặn chụp ảnh màn hình, bản ghi màn hình bên trong Tella và ẩn bản xem trước màn hình trong danh sách các ứng dụng gần đây. [Cài đặt này](/features#screen-security) có thể bị tắt, ví dụ như để ghi lại hướng dẫn bên trong Tella hoặc chiếu ứng dụng sang máy tính khi thuyết trình.
9. **Giới hạn số lần mở khóa**: Người dùng có thể quyết định số lần [mở khóa không thành công](features#restrict-unlocking-attempts) được cho phép trước khi mọi thứ bên trong Tella bị xóa và có cho phép thông báo trực quan số lần mở khóa còn lại hiển thị trên màn hình mở khóa hay không.

:::tip Video tutorial 🎥
Tìm hiểu thêm về Tính năng Bảo mật trong [video hướng dẫn của chúng tôi](/video-tutorials#additional-security-features)
:::


## Giới hạn bảo mật {#security-limitations}

Không có ứng dụng nào hoàn toàn "bảo mật" 100%. Bảo mật phụ thuộc vào các mối đe dọa và rủi ro mà mỗi người dùng phải đối mặt, cũng như khả năng của đối thủ. Với Tella, chúng tôi đã cố gắng hết sức để thêm nhiều lớp bảo mật nhất có thể nhằm giảm khả năng ai đó có thể phát hiện ứng dụng hoặc truy cập dữ liệu của nó. Dưới đây, chúng tôi liệt kê tất cả các rủi ro và hạn chế bảo mật quan trọng mà người dùng nên biết khi sử dụng Tella:



* Ngụy trang:
    * On Android, when Tella is camouflaged using one of the two [camouflaging methods available](/features#camouflage), the app can still be detected in the Android Settings. This means that someone who navigates to the Android settings > Apps will be able to see that there is an app installed on the device that is called “Tella”. They will also be able to see the size of the app. So if the user stores very large files, like videos, the app may raise attention.
* Quản lý tệp tin:
    * Các tệp được xuất ra khỏi Tella vào hệ thống tệp của thiết bị sẽ không còn được mã hóa. Điều này có nghĩa là bất kỳ ai có quyền truy cập vào thiết bị và duyệt hệ thống tệp hoặc thư viện ảnh đều có thể tìm thấy các tệp đó.
    * Các tệp được chia sẻ qua các ứng dụng bên thứ ba có thể hiển thị với các ứng dụng đó và được lưu không mã hóa trên hệ thống tệp của thiết bị, và ai đó tìm kiếm trong các ứng dụng này có thể tìm thấy các tệp đó. Ví dụ: một bức ảnh được lưu trữ bên trong Tella và chia sẻ trên WhatsApp sẽ hiển thị trong WhatsApp, và cũng sẽ hiển thị trong hệ thống tệp, nơi lưu trữ ảnh WhatsApp. Điều này xảy ra vì để chia sẻ với các ứng dụng bên thứ ba, tệp cần phải được lưu trên hệ thống tệp của điện thoại, hệ thống này không được mã hóa. Đây là lý do chúng tôi khuyến nghị xóa thủ công tệp khỏi hệ thống tệp của thiết bị sau khi chia sẻ.
    * Việc nhập tệp sẽ tạo một bản sao của tệp này, sau đó nhập và mã hóa nó vào Tella. Trên phiên bản 1.1 (iOS) và 2.1 (Android), chúng tôi đã phát triển một tính năng cho phép người dùng chọn xem họ muốn giữ hay xóa tệp gốc khi nhập vào Tella. Tuy nhiên, chúng tôi khuyến nghị kiểm tra xem tệp gốc có còn trong Thùng rác (Tệp của tôi > Thùng rác) hay không và xóa tệp khỏi bất kỳ dịch vụ sao lưu tự động nào mà bạn đã kích hoạt trên điện thoại (Google Photos, Dropbox, v.v.).


## Kiểm tra bảo mật {#security-audits}

We regularly ask independent security firms to audit our code to ensure it is robust and secure.

| Ngày | Audited by | Platforms audited  | Liên kết      |
| -----|----------|----|-----------|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| May 2024 | Subgraph Technologies, Inc. |  Android, iOS, Tella Web|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| May 2023 | Subgraph Technologies, Inc. | Android, iOS, Tella Web |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|


This is the summary from the latest audit and the status of the vulnerabilities identified:

| Tiêu đề                                               | Mức độ nghiêm trọng    | Nền | Trạng thái      |
|-----------------------------------------------------|-------------|-------------|-------------|
| Require re-authentication for changing key security settings | Moderate      | Tổng quát | Planning |
| Improve webview implementation                      |  Moderate   | iOS       | Đã giải quyết |
| Improve GitHub practices (merging to main and tags) | Thấp         | Android, Android FOSS | Resolved (pending re-test) |
| Increase PBKDF2 iteration counts.                   | Thấp         | Android, Android FOSS | Xóa nhanh {#quick-delete} |
| Do not allow clear-text traffic in Android manifest.| Thấp         | Android, Android FOSS | Đã giải quyết |
| Outdated 3rd-party dependencies                     | Không rõ         | Android, Android FOSS | Đã giải quyết |










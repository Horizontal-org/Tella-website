---
id: uwazi
title: Uwazi
description: Kết nối máy chủ Uwazi có sẵn dành cho các tổ chức muốn thu thập dữ liệu có cấu trúc.
slug: /uwazi
---

# Uwazi

[Uwazi](https://uwazi.io/) là một công cụ tài liệu mã nguồn mở được phát triển bởi [HURIDOCS](https://huridocs.org). Đây là một ứng dụng cơ sở dữ liệu trên nền tảng web được thiết kế linh hoạt dành cho nhà bảo vệ nhân quyền trong việc quản lý bộ sưu tập thông tin, bao gồm tài liệu, bằng chứng, các vụ án và những khiếu nại. 

Uwazi cho phép các tổ chức tập hợp dữ liệu do các thành viên hoặc đối tác của họ thu thập vào một kho lưu trữ trung tâm. Người dùng Tella kết nối với phiên bản Uwazi của tổ chức mình, tải xuống các biểu mẫu (gọi là Mẫu), điền các mẫu này nhiều lần khi cần (ngay cả khi không có kết nối internet) và tải dữ liệu lên. Các tổ chức sau đó có thể chọn lọc, tổ chức và công bố dữ liệu của họ trực tiếp từ Uwazi.

Tương tự như các kết nối khác ([Tella Web](/tella-web) và [Bộ Công cụ Dữ liệu mở](/odk), kết nối với Uwazi nâng cao bảo mật cho dữ liệu thu thập trên Tella bằng cách:
1. Cho phép người dùng thu thập dữ liệu trực tiếp ngay bên trong không gian được mã hóa của Tella.
2. Đảm bảo dữ liệu được gửi trực tiếp từ Tella đến Uwazi mà không cần phải dựa vào công cụ hoặc ứng dụng của bên thứ ba.
3. Cho phép người dùng sao lưu dữ liệu của họ trên máy chủ từ xa, giảm thiểu rủi ro dữ liệu bị phát hiện trên thiết bị di động của họ.
4. Đảm bảo rằng các tổ chức có thể lưu giữ thông tin quan trọng ngay cả trong trường hợp thiết bị bị tịch thu hoặc phá hủy, và có thể tổ chức thông tin này để sử dụng cho nghiên cứu, vận động hoặc các quy trình chịu trách nhiệm.

### Kiểm tra Uwazi {#testing-uwazi}

Bạn có thể thử nghiệm Uwazi bằng cách sử dụng [phiên bản Demo này](https://demo.uwazi.io/).

### Khi nào nên sử dụng Uwazi {#when-to-use-uwazi}

Chúng tôi khuyến nghị sử dụng Uwazi cho các tổ chức cần người dùng tại hiện trường thu thập dữ liệu một cách có cấu trúc thông qua các biểu mẫu.

Uwazi cũng cho phép các quản lý dự án dễ dàng tổ chức, phân tích, trực quan hóa và công bố dữ liệu đã thu thập. Sức mạnh đặc biệt của Uwazi nằm ở khả năng tạo mối quan hệ giữa các thực thể trong cơ sở dữ liệu, giúp kết nối các điểm dữ liệu (như sự cố, thủ phạm và nạn nhân) để phát hiện các mẫu hình. Uwazi cũng rất tốt trong việc thu thập dữ liệu bằng nhiều ngôn ngữ khác nhau và tạo điều kiện cho sự hợp tác giữa các nhóm.

Uwazi không có ứng dụng di động chính thức, vì vậy bằng cách tích hợp Uwazi và Tella, bạn có thể tận dụng khả năng mã hóa và làm việc ngoại tuyến của Tella, và tận dụng toàn bộ khả năng của Uwazi để tổ chức, tìm kiếm, tải xuống, trực quan hóa và công bố thông tin.

Bạn có thể tìm hiểu thêm về Uwazi trên [Tài liệu chính thức của Uwazi](https://uwazi.readthedocs.io/en/latest/). HURIDOCS là một đối tác thân thiết của Horizontal, vì vậy nếu bạn có thắc mắc về Uwazi hoặc muốn chúng tôi kết nối bạn với nhóm HURIDOCS, [liên hệ với chúng tôi](contact-us).
- Cài đặt Uwazi trên máy chủ {#install-uwazi-on-a-server}
- Đội ngũ HURIDOCS đã tạo ra một hướng dẫn quản trị viên toàn diện với các hướng dẫn từng bước để cài đặt Uwazi trên máy chủ của bạn, cấu hình sao lưu và thiết lập các tính năng nâng cao. Chúng tôi khuyến nghị bạn chia sẻ [hướng dẫn này](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) với quản trị viên hệ thống của bạn.
- Mô hình hóa dữ liệu của bạn {#model-your-data}
- Một bộ sưu tập Uwazi bao gồm các Thực thể. Mỗi thực thể có các Thuộc tính là các ô thông tin mà người dùng Tella sẽ điền vào để thu thập dữ liệu. Các Thực thể có thể chứa Tài liệu Chính và/hoặc Tệp Hỗ trợ và một số thuộc tính được định nghĩa bởi các quản trị viên trên máy chủ Uwazi khi họ tạo Mẫu. Một Mẫu là một biểu mẫu trống có thể được điền nhiều lần khi cần; khi một Mẫu được điền, nó trở thành một Thực thể.
- [Bạn có thể đọc tại đây](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) về các thuộc tính có sẵn trên máy chủ Uwazi cũng như cách lập mô hình dữ liệu và tạo mẫu của bạn. Hiện tại, chúng tôi chỉ hỗ trợ các thuộc tính và chức năng được người dùng Uwazi đánh dấu là ưu tiên cao. Nếu bạn cần thuộc tính khác, [liên hệ với chúng tôi](/contact-us).
- :::info
Nếu người dùng Tella tải xuống mẫu có các thuộc tính không được hỗ trợ trong Tella thì các thuộc tính đó sẽ không được hiển thị trong ứng dụng. Tuy nhiên, người dùng vẫn có thể gửi các thực thể và quản trị viên sẽ có thể truy cập vào các thực thể này, bao gồm tất cả các thuộc tính đã được điền mà không gặp bất kỳ sự cố nào.
:::
- Các thuộc tính có sẵn {#available-properties}
- **Thuộc tính hoặc Tính năng**

**Tella Android**

**Tella iOS**

## **Tella Android FOSS**


Tài liệu chính và tài liệu hỗ trợ

1. ✔️
2. ✔️

## ✔️

Văn bản Không định dạng

✔️

✔️

### ✔️

| Số | ✔️| ✔️ | ✔️ |
|------|------|-----|-----| 
| Lựa chọn Đơn | ✔️ | ✔️ | ✔️ |
| Lựa chọn nhiều | ✔️ | Không | ✔️ |
| Mối quan hệ | Không | Không | Không |
| Chọn Một ngày  | ✔️ | ✔️ | ✔️ | 
| Chọn Nhiều Ngày  | ✔️ | Không | ✔️ | 
| Liên kết ngoài | ✔️ | Không | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Văn bản Đa định dạng | ✔️ | ✔️ | ✔️ |
| Phạm vi Ngày đơn và Nhiều ngày | ✔️ | Không | ✔️ |
| Đính kèm Phương tiện (Hình ảnh, Video, hoặc Âm thanh) | ✔️ | ✔️ | ✔️ |
| Định vị địa lý | ✔️ | Không | ✔️ |
| ID Đã được tạo | ✔️ | Không | ✔️ |
| Chuẩn bị Người Dùng Tại Hiện Trường để Bắt Đầu Nộp Dữ Liệu {#get-people-on-the-ground-ready-to-start-submitting-data} | Kết nối với Máy chủ {#connect-to-the-server}| Để kết nối đến máy chủ Uwazi: | Đến **Cài đặt ⚙️** > **Máy chủ** > **+** |
| Chọn "Uwazi" từ danh sách các loại máy chủ có sẵn. | Nhập URL máy chủ Uwazi của tổ chức (được tạo và cung cấp bởi quản trị viên). | Chọn giữa: | **Đăng nhập:**  nếu quản trị viên đã cung cấp tên người dùng và mật khẩu. |
| **Truy cập công khai:** nếu máy chủ được cấu hình để chấp nhận các bài gửi ẩn danh.  | Nếu máy chủ yêu cầu xác thực hai yếu tố, hãy nhập mã dùng một lần. | Chọn **Ngôn ngữ** mà bạn muốn hiển thị các mẫu biểu. | :::info
Bạn có thể xem [video hướng dẫn này](/video-tutorials#uwazi) về cách kết nối một máy chủ Uwazi từ Tella.
::: |


## Gửi Thông Tin Của Bạn {#send-your-information}

### Khi bạn kết nối thành công với một phiên bản Uwazi, bạn sẽ thấy một thẻ mới với nhãn "Uwazi" trong phần **Kết nối** trên màn hình chính của Tella.

Để tải xuống một Biểu mẫu, hãy nhấn vào nút **+** ở phía dưới màn hình. Bạn sẽ thấy danh sách các mẫu biểu có sẵn cho bạn trên tất cả các phiên bản Uwazi mà bạn đã kết nối. Nhấn vào nút **Tải xuống** để tải xuống các mẫu hoặc nút **Làm mới** để kiểm tra xem có cập nhật nào cho các mẫu biểu trên máy chủ hay không.

* Sau đó quay lại màn hình chính của Uwazi và nhấn vào mẫu bạn muốn sử dụng để tạo một thực thể.
* Các Phương Thức Nộp Dữ Liệu Khác {#data-submission-alternatives}
* **Tính năng**
* **Chi tiết**
    *  **Tella Android**
    *  **Tella iOS**
* Nộp
* Gửi biểu mẫu đã điền đến máy chủ đã kết nối.

Đồng ý

### Đồng ý

Lưu dưới dạng bản nháp

Lưu biểu mẫu chưa hoàn thành.

Đồng ý


#### Không

| Nộp sau | Đánh dấu biểu mẫu là đã sẵn sàng và gửi nó tới tab Hộp thư đi| Đồng ý | Không | 
|------|------|------|------|
| Tap Bản nháp | Một tab chứa tất cả các bản nháp.  Bản nháp có thể được chỉnh sửa hoặc xóa. | Đồng ý | Không |
| Tap Hộp thư đi | Một tab chứa các biểu mẫu sẵn sàng để nộp.  Các biểu mẫu trên tab hộp thư đi có thể được chỉnh sửa hoặc xóa.  | Đồng ý | Không |
| Tap Đã gửi | Một tab chứa danh sách tất cả các biểu mẫu đã được gửi thành công đến máy chủ. Các biểu mẫu đã nộp có thể được xóa.  | Đồng ý | Không |
| Tạm dừng/Tiếp tục gửi | Người dùng có thể bấm tạm dừng và tiếp tục gửi khi sẵn sàng.  | Đồng ý | Không |
| Tự động tạm dừng gửi khi ngoại tuyến | Các bài nộp sẽ được chuyển vào tab Hộp Thư Đi nếu quá trình gửi thất bại do vấn đề kết nối.  | Đồng ý | Không |
| Tap Đã gửi | Một tab chứa danh sách tất cả các biểu mẫu đã được gửi thành công đến máy chủ. Các biểu mẫu đã nộp có thể được xóa.  | Đồng ý | Đồng ý |
| Tạm dừng/Tiếp tục gửi | Người dùng có thể bấm tạm dừng và tiếp tục gửi khi sẵn sàng.  | Đồng ý | Không |
| Tự động tạm dừng gửi khi ngoại tuyến | Các bài nộp sẽ được chuyển vào tab Hộp Thư Đi nếu quá trình gửi thất bại do vấn đề kết nối.  | Đồng ý | Đồng ý |



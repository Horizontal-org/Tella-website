---
id: odk
title: Bộ Công cụ Dữ liệu mở (ODK)
description: Việc kết nối máy chủ Bộ Công cụ Dữ liệu mở hiện có sẵn cho các tổ chức muốn thu thập dữ liệu có cấu trúc bằng các biểu mẫu.
slug: /odk
---

# Bộ Công cụ Dữ liệu mở (ODK)

[Bộ Công cụ Dữ liệu mở (ODK)](https://getodk.org/) là một tiêu chuẩn mở được sử dụng để tạo các biểu mẫu tùy chỉnh và thu thập dữ liệu.

Máy chủ của Bộ Công cụ Dữ liệu mở cho phép các tổ chức tổng hợp dữ liệu được thu thập bởi các thành viên hoặc đối tác của họ vào một kho lưu trữ trung tâm.  Người dùng Tella kết nối với phiên bản ODK của tổ chức mình, điền vào biểu mẫu bao nhiêu lần tùy ý (ngay cả khi họ không có kết nối Internet) và tải dữ liệu lên.  Các tổ chức có thể tải dữ liệu từ máy chủ xuống hoặc phân tích dữ liệu trực tiếp trên máy chủ, tùy thuộc vào việc thiết lập máy chủ mà họ đã chọn.

Tương tự như bất kỳ kết nối máy chủ nào khác (như [Tella Web](/tella-web) hoặc [Uwazi](/uwazi)), việc kết nối với máy chủ ODK sẽ tăng cường tính bảo mật của dữ liệu được thu thập trên Tella bằng cách:

1. Cho phép người dùng thu thập dữ liệu trực tiếp trong kho lưu trữ được mã hóa của Tella.
2. Đảm bảo rằng dữ liệu được gửi trực tiếp từ Tella đến máy chủ ODK mà không cần dựa vào công cụ hoặc ứng dụng của bên thứ ba.
3. Đảm bảo rằng các tổ chức có thể lưu giữ thông tin quan trọng ngay cả trong trường hợp thiết bị bị thu giữ hoặc bị phá hủy, và có thể sắp xếp dữ liệu cho quá trình nghiên cứu, vận động hoặc giải trình trách nhiệm.
4. Đảm bảo rằng các tổ chức có thể lưu giữ thông tin quan trọng ngay cả trong trường hợp thiết bị bị thu giữ hoặc phá hủy và có thể sắp xếp dữ liệu đó cho quá trình nghiên cứu, vận động hoặc giải trình trách nhiệm.

### Choosing and Installing Your ODK Server {#choosing-and-installing-your-odk-server}

Vì ODK là một tiêu chuẩn mở nên Tella có thể được sử dụng với bất kỳ công cụ nào tương thích với ODK.

For civil society organizations and human rights defenders, we recommend using [KoboToolbox](https://www.kobotoolbox.org/) to create forms with custom questions, manage users, and aggregate the data submitted by users. Based on our experience, KoboToolbox is user-friendly and flexible, and it is also open source. KoboToolbox offers a [community plan for non-profits](https://www.kobotoolbox.org/pricing/) and offer free training resources and guidance on how to structure the data on the server (Self-serve learning base and Community Forum). It is also possible [to use a private instance of KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) or [self-host it](https://support.kobotoolbox.org/kobo_your_servers.html).

:::tip
We are work closely with the Kobotoolbox team. If you are interested in using the Tella-KoboToolbox connection and would like some support or to discuss the best hosting plan for your use case, please [contact us](/contact-us). 
:::

There are other ODK-compliant apps available, like [Ona](https://ona.io/home/) or [ODK Cloud](https://https://getodk.org/index.html). Tella works with any of these. 


### Khi nào nên sử dụng ODK {#when-to-use-odk}

Chúng tôi khuyến nghị dùng ODK cho những tổ chức cần người dùng thu thập dữ liệu tại thực địa một cách có cấu trúc như điền biểu mẫu. Chúng tôi cũng khuyến nghị cho các tổ chức không có khả năng kỹ thuật để cài đặt và duy trì máy chủ, và muốn sử dụng phiên bản đám mây sẵn có. Nếu bạn sử dụng phiên bản đám mây, hãy nhớ rằng tổ chức lưu trữ phiên bản ODK của bạn sẽ có quyền truy cập vào dữ liệu của bạn. Đây là một yếu tố quan trọng cần xem xét khi quyết định tự lưu trữ hoặc sử dụng dịch vụ đám mây.

ODK và KoboToolbox được sử dụng rộng rãi, có tài liệu hướng dẫn đầy đủ và dễ sử dụng. Có các hướng dẫn sẵn có và họ cung cấp hỗ trợ cho các tổ chức phi lợi nhuận về cách cấu trúc và duy trì dữ liệu của mình.

Mô hình dữ liệu của bạn {#model-your-data}

## KoboToolbox cung cấp hướng dẫn chi tiết về cách tạo dự án và thêm câu hỏi vào biểu mẫu của bạn cũng như cách triển khai chúng để người dùng tại thực địa có thể sử dụng [tại đây](https://support.kobotoolbox.org/overview_of_creating_a_project.html).

Kết nối Tella với phiên bản ODK để Thu thập Dữ liệu {#connect-tella-to-an-odk-instance-to-collect-data}

## Trong tài liệu này, chúng tôi tập trung vào cách thu thập dữ liệu bằng Tella.  Có những ứng dụng di động thay thế có thể sử dụng để thu thập dữ liệu trên ODK, bao gồm cả ứng dụng ODK Collect Android.  Bạn có thể so sánh các lựa chọn thay thế này [tại đây](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
Kết nối ODK không có sẵn cho Tella iOS.
:::

Kết nối với Máy chủ ODK {#connect-to-an-odk-server}

### Sau khi tạo và triển khai Biểu mẫu bằng  bất kỳ máy chủ nào tương thích với ODK, trong Tella, hãy vào **Cài đặt** > **Máy chủ** > **+** > **Bộ Công cụ Dữ liệu mở (ODK)**.  Điền vào các thông tin sau:
**Tên máy chủ**: Một cái tên mô tả cho máy chủ của bạn trong Tella. Tên mà bạn lựa chọn chỉ hiển thị trong ứng dụng và không ảnh hưởng đến kết nối ODK.
- **URL máy chủ**: URL máy chủ của bạn.  Ví dụ, `kc.kobotoolbox.org` nếu bạn đang sử dụng máy chủ công cộng KoboToolbox.
- Nếu máy chủ của bạn yêu cầu xác thực người dùng, hãy nhấn vào nút **Nâng cao** và nhập **Tên người dùng** và **Mật khẩu** của bạn.  Quản trị viên máy chủ của bạn sẽ cung cấp tất cả thông tin này cho bạn.
Điền biểu mẫu {#fill-forms}


### Sau khi kết nối thành công với phiên bản ODK, bạn sẽ thấy một thẻ mới có tên "Biểu mẫu" trong phần **Kết nối** trên màn hình chính của Tella.

Sau khi vào phần **Biểu mẫu**, bạn sẽ thấy danh sách Biểu mẫu có sẵn trên (các) phiên bản mà bạn đã kết nối.  Sử dụng nút **Tải xuống** để tải các biểu mẫu xuống Tella, điều này giúp bạn có thể điền chúng ngay cả khi không kết nối với Internet.

Bạn có thể nhấn vào mỗi biểu mẫu trống để bắt đầu điền vào.

Gửi biểu mẫu {#submit-forms}


#### Khi bạn thu thập dữ liệu và điền vào biểu mẫu, bạn sẽ có các tùy chọn sau:

Gửi: gửi biểu mẫu đã điền đến máy chủ ODK.
- Lưu dưới dạng bản nháp: lưu một biểu mẫu chưa hoàn thành để bạn có thể làm tiếp vào lúc khác.
- Nộp sau: đánh dấu biểu mẫu là đã hoàn thành để gửi vào một thời điểm khác. Cho đến khi được gửi, nó sẽ có sẵn trong thanh Hộp thư đi.
- Tab bản nháp: một tap chứa danh sách tất cả các biểu mẫu nháp. Các bản nháp có thể được chỉnh sửa hoặc xóa.
- Tap Hộp thư đi: một bảng chứa danh sách tất cả các biểu mẫu đã sẵn sàng để gửi. Các biểu mẫu trong tab Hộp thư đi có thể được chỉnh sửa, xóa hoặc gửi.
- Tab đã gửi: một tab chứa danh sách tất cả các biểu mẫu đã được gửi thành công đến máy chủ. Các biểu mẫu đã gửi có thể được xóa.
- Tạm dừng/Tiếp tục gửi: bạn có thể bấm tạm dừng và tiếp tục gửi khi sẵn sàng.
- Tự động tạm dừng gửi khi ngoại tuyến: các biểu mẫu sẽ được gửi đến tab Hộp thư đi nếu quá trình gửi không thành công do sự cố kết nối.
- Các Loại Câu hỏi được Hỗ trợ {#supported-question-types}

### Dưới đây là tổng quan về các loại câu hỏi ODK được hỗ trợ trong Tella Android.  Nếu có loại câu hỏi nào không được Tella hỗ trợ  mà điều đó lại quan trọng đối với quy trình làm việc của bạn, vui lòng [liên hệ với chúng tôi](/contact-us).
**Question type**

| **Tella Android** | **Email:** | 
|------|------|
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Ngày | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | Không  |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | Không |
| Không | Không |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Xóa kho lưu trữ: Xóa toàn bộ dữ liệu lưu bên trong Tella 🗑️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Các biểu mẫu yêu thích, dành cho người dùng được kết nối với máy chủ ODK 📝 | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | Không |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | Không |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| Không | Không |
| Không | Không |
| Không | Không |
| Không | Không |

### Dưới đây là tổng quan các tính năng ODK được hỗ trợ trong Tella Android. Nếu có một tính năng nào đó quan trọng đối với quy trình làm việc của bạn mà chưa được Tella hỗ trợ, vui lòng [liên hệ với chúng tôi](/contact-us).

**Feature**

| **Tính năng** | **Email:** | 
|------|------|
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ❌ | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ❌ | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |
| ❌ | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |
| ❌ | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ✔️ | :::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
::: |
| ❌ | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |
| [Form metadata (background data collection)](https://docs.getodk.org/form-audit-log/) | Quản lý quyền truy cập vào dự án {#managing-access-to-projects} |

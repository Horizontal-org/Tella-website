---
id: tella-web
title: Tella Web
description: Tính năng Báo cáo cho phép người dùng thuận tiện tải ảnh, video, tệp pdf và bản ghi âm lên máy chủ Tella Web của tổ chức họ
slug: /tella-web
---

# Kết Nối Tella Web 

Tella Web là một công cụ mã nguồn mở cho phép các cá nhân và tổ chức tổng hợp và quản lý các báo cáo do người dùng Tella gửi, bao gồm ảnh, video, tài liệu pdf và tệp âm thanh.

Tella Web được phát triển nội bộ bởi đội ngũ của chúng tôi tại Horizontal, đội ngũ này cũng phụ trách việc phát triển ứng dụng di động của Tella. Đây là một giải pháp thân thiện với người dùng để sao lưu các tệp phương tiện lên máy chủ từ xa một cách an toàn và riêng tư. Chúng tôi có thể cung cấp hỗ trợ cho việc cài đặt, cấu hình và bảo trì một phiên bản Tella Web nếu tổ chức của bạn không có ai có thể thực hiện điều này.

Tương tự như tất cả những kết nối khác ([Uwazi](/uwazi) và [Bộ Công cụ Dữ liệu mở](/odk)), kết nối với Tella Web tăng cường tính bảo mật của dữ liệu được thu thập trên Tella bằng cách:

Cho phép người dùng thu thập dữ liệu trực tiếp trong kho lưu trữ được mã hóa của Tella.
1. Cho phép người dùng thu thập dữ liệu trực tiếp trong kho lưu trữ được mã hóa của Tella.
2. Đảm bảo dữ liệu được gửi trực tiếp từ Tella đến Tella Web mà không cần phải dựa vào công cụ hoặc ứng dụng của bên thứ ba.
3. Cho phép người dùng sao lưu dữ liệu của họ trên máy chủ từ xa, để giảm nguy cơ dữ liệu bị phát hiện trên thiết bị di động của họ.
4. Đảm bảo rằng các tổ chức có thể lưu giữ thông tin quan trọng ngay cả trong trường hợp thiết bị bị thu giữ hoặc bị phá hủy, và có thể sắp xếp dữ liệu cho quá trình nghiên cứu, vận động hoặc giải trình trách nhiệm.

Thiết lập Tella Web bao gồm ba bước được thảo luận kỹ lưỡng trong phần này:

Thiết lập Tella Web bao gồm ba bước được thảo luận kỹ lưỡng trong phần này:

* **Cài đặt Tella Web**: Bước này yêu cầu cài đặt máy chủ Web Tella và cấu hình tên miền để đảm bảo nó hoạt động bình thường.
* **Chuẩn bị nhân viên tại hiện trường sẵn sàng gửi báo cáo**: Người dùng cài đặt Tella trên thiết bị Android hoặc iPhone của họ. Sau đó, họ kết nối với dự án Tella Web và bắt đầu thu thập thông tin.
* **Chuẩn bị nhân viên tại hiện trường sẵn sàng gửi báo cáo**: Người dùng cài đặt Tella trên thiết bị Android hoặc iPhone của họ. Sau đó, họ kết nối với dự án Tella Web và bắt đầu thu thập thông tin.

## Bước này bao gồm cài đặt và cấu hình Tella Web trên máy chủ mà tổ chức của bạn sẽ sử dụng. Bước này cần được hoàn thành bởi người sẽ chịu trách nhiệm quản trị hệ thống (nhà phát triển hoặc quản trị viên hệ thống). Hướng dẫn kỹ thuật có thể được tìm thấy trên [Github của chúng tôi](https://github.com/Horizontal-org/tellaweb).

:::info
Đội ngũ của chúng tôi có thể hỗ trợ cài đặt, cấu hình và bảo trì Tella Web. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, [liên hệ với chúng tôi](/contact-us/).
:::
- :::tip
[Liên hệ với chúng tôi](/contact-us/) để truy cập vào máy chủ demo của chúng tôi, để bạn có thể kiểm tra Tella Web trước khi cài đặt nó trên máy chủ của riêng bạn.
:::
- Tạo dự án trên máy chủ của bạn {#set-up-your-project-on-your-server}
- Khi Tella Web đã được cài đặt và người dùng "quản trị viên" đầu tiên được tạo, đây là lúc để thiết lập dự án hoặc các dự án mà đội ngũ tại hiện trường sẽ chia sẻ thông tin.


:::info
Hãy xem [video hướng dẫn này](/video-tutorials#connections-full-video) để xem bản demo về cách thiết lập Tella Web.
:::


## Cài đặt máy chủ {#install-the-server}

Bước này bao gồm cài đặt và cấu hình Tella Web trên máy chủ mà tổ chức của bạn sẽ sử dụng. Bước này cần được hoàn thành bởi người sẽ chịu trách nhiệm quản trị hệ thống (nhà phát triển hoặc quản trị viên hệ thống). Hướng dẫn kỹ thuật có thể được tìm thấy trên [Github của chúng tôi](https://github.com/Horizontal-org/tellaweb).

Các dự án hoạt động như các thư mục nơi người dùng Tella có thể nộp báo cáo. Ví dụ, bạn có thể tạo các dự án cho các khu vực địa lý cụ thể hoặc theo các chủ đề như bạo lực của cảnh sát, bạo lực giới, và xâm hại môi trường.


:::info
Đội ngũ của chúng tôi có thể hỗ trợ cài đặt, cấu hình và bảo trì Tella Web. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, [liên hệ với chúng tôi](/contact-us/).
:::

:::tip
[Liên hệ với chúng tôi](/contact-us/) để truy cập vào máy chủ demo của chúng tôi, để bạn có thể kiểm tra Tella Web trước khi cài đặt nó trên máy chủ của riêng bạn.
:::


## Tạo dự án trên máy chủ của bạn {#set-up-your-project-on-your-server}

Khi Tella Web đã được cài đặt và người dùng "quản trị viên" đầu tiên được tạo, đây là lúc để thiết lập dự án hoặc các dự án mà đội ngũ tại hiện trường sẽ chia sẻ thông tin.



:::info
Hãy xem [video hướng dẫn này](/video-tutorials#connections-full-video) để xem bản demo về cách thiết lập Tella Web.
:::

### Trên màn hình "Dự án", nhấn nút "Tạo dự án". Một cửa sổ sẽ xuất hiện, yêu cầu bạn đặt tên cho dự án mới. Nhập tên mong muốn cho dự án và nhấp vào "Tạo". Bạn sẽ được chuyển hướng đến màn hình "Cài đặt dự án" cho dự án vừa tạo.


#### Configure spaces’ settings {#configure-spaces-settings}
Mở một Dự án {#open-a-project}
- Mở màn hình "Dự án" và nhấn vào thẻ dự án mà bạn muốn.
- Thao tác này sẽ mở dự án, nơi bạn có thể truy cập tất cả các báo cáo được gửi về cho dự án.
    - Bạn có thể mở, xóa hoặc tải xuống báo cáo (tùy thuộc vào quyền của bạn đối với dự án cụ thể này).
    - Cài đặt cấu hình của dự án {#configure-projects-settings}
    - Trong màn hình "Cài đặt dự án", bạn có thể thiết lập tùy chỉnh dự án:
    - Phần "Chung" cho phép bạn đổi tên dự án, xem chi tiết dự án và sửa đổi URL của dự án.
- Phần "Quản lý quyền truy cập" cho phép bạn thêm hoặc xóa người dùng khỏi dự án. Thông tin thêm về vai trò của người dùng [tại đây](/tella-web#managing-users) 
    - Phần "Vùng nguy hiểm" cung cấp các tùy chọn để xóa dự án, bao gồm tất cả các báo cáo trong đó.
    - Xóa một Dự án {#delete-a-project}
    - Trong màn hình "Cài đặt dự án", cuộn xuống phần "Vùng nguy hiểm".

#### Backup your space {#backup-your-space}

Admins of the Tella Web instance can export all data out of Tella Web by generating a backup. Backups can be used to port the data to another location, including a computer, a USB flash drive, an external disk or a remote server.  The action to generate the backup runs in the background and, if triggered, an email notification will be sent to the person who generated the backup when it is ready to download. However, all backups are accessible in the Admin Center to all users with admin access.

The backup is a full export everything in the space: including all Projects, Reports, Users and Resources, plus all metadata. The export is a zip file including a collection of CSVs and folders with with the uploaded media. For now, there is no way to import the backup back into a Tella Web instance from the Admin Center, but each backup includes a .sql file that advanced users can use to import the data to the database directly. 

:::warning
The information included in the backup is highly sensitive, it not only contains all the data (unencrypted) but also information about the Tella Web users. Please proceed with caution when generating the backup.
:::


### Nhấn vào tùy chọn "Xóa dự án".

Một cửa sổ sẽ xuất hiện, cảnh báo bạn về việc xóa vĩnh viễn dự án và tất cả các báo cáo của nó. Để tiến hành xóa, hãy nhập chính xác tên dự án (bao gồm cả chữ thường). Gõ "DELETE" (bằng chữ in hoa) để xác nhận xóa.

Khi được xác nhận, dự án và tất cả các báo cáo liên quan sẽ bị xóa vĩnh viễn.

Cấu hình URL của dự án {#configure-the-project-url}


#### URL của dự án được tạo tự động khi tạo dự án. Để chỉnh sửa URL của dự án, hãy đến phần "Chung" trong màn hình "Cài đặt dự án" và thay đổi theo ý muốn. URL này là URL mà các báo cáo viên sẽ sử dụng để kết nối với dự án từ ứng dụng của họ.

:::info
URL mà bạn cần gửi cho người dùng sẽ giống như thế này `https://your-domain.com/p/your-project-name`
:::

Quản lý người dùng {#managing-users}


#### Hiểu vai trò của người dùng {#understanding-user-roles}

Người dùng là một phần quan trọng khi sử dụng Tella Web. Có nhiều vai trò khác nhau cho người dùng:


#### Báo cáo viên: đây là người dùng được kết nối với dự án Tella Web từ ứng dụng di động Tella và tải lên các báo cáo. Một báo cáo viên cần được chỉ định vào một dự án để có thể tải lên các báo cáo.

Người xem: đây là người dùng, ngoài việc tải lên báo cáo từ Tella, còn có thể đăng nhập vào Tella Web để xem (nhưng không thể chỉnh sửa hoặc xóa) báo cáo. Người xem cần được chỉ định vào một dự án cụ thể để có quyền truy cập.

Biên tập viên: vai trò này cũng giống như người xem, có thể tải báo cáo lên từ Tella và đăng nhập vào Tella Web nhưng đồng thời có thể chỉnh sửa và xóa báo cáo. Một biên tập viên cần được chỉ định cho một dự án cụ thể để có quyền truy cập.

Quản trị viên: quản trị viên có thể tải lên các báo cáo từ Tella và thực hiện mọi hành động trên Tella Web, bao gồm quản lý báo cáo, quản lý dự án và quản lý người dùng. Một quản trị viên có quyền truy cập vào tất cả các dự án.


#### Dưới đây là cái nhìn chi tiết về nhiệm vụ của từng vai trò:

Báo cáo viên
* Người xem
* Biên tập viên
* Quản trị viên


#### **Trên điện thoại di động Tella**

Tạo và tải lên báo cáo

✅

✅

✅


#### ✅

**Trên Tella Web**

Đăng nhập Tella Web


### ❌

### ✅
✅
- ✅
- Xem báo cáo
- ❌
- ✅

✅

| |✅ |Chỉnh sửa báo cáo (đổi tên)|❌|❌ |
|--------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--|
|✅|
| ✅ | :::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|✅|✅| 
|✅| 
| Chỉnh sửa báo cáo (tạo, đổi tên, chỉnh sửa URL)  |❌|✅|✅|✅| 
| Xóa dự án  |❌|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|✅|✅| 
| Quản lý người dùng (tạo, chỉnh sửa, xóa) |❌|❌|✅|✅| 
| Chỉ định người dùng cho dự án |❌|❌|✅|✅| 
| Tạo người dùng {#creating-users} |❌|❌|✅|✅| 
| Không có mẫu phổ biến như ngày tháng, lặp lại (aaa), chuỗi (abcd), mẫu bàn phím (qwertyuiop) |❌|❌|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|✅| 
| Chuẩn bị cho người dùng tại hiện trường sẵn sàng gửi báo cáo {#get-people-on-the-ground-ready-to-start-submitting-reports} |❌|❌|❌|✅| 
| :::info
Bạn có thể xem [video hướng dẫn này](/video-tutorials#tella-web) về cách cài đặt và sử dụng Báo cáo trong Tella.
::: |❌|❌|❌|✅| 
| Nhập thông tin đăng nhập (do quản trị viên tạo và cung cấp) |❌|❌|Quản lý quyền truy cập vào dự án {#managing-access-to-projects}|✅| 
| Trong **Cài đặt ⚙️** > **Máy chủ** >  **[Tên Dự án]** > 3-chấm, bạn có thể:  |❌|Quản lý quyền truy cập vào dự án {#managing-access-to-projects}|✅|✅| 
| Màn hình báo cáo chính cho phép điều hướng giữa các tab Thư nháp, Hộp thư đi và Đã gửi.   |Quản lý quyền truy cập vào dự án {#managing-access-to-projects}|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::|:::info
Danh sách tất cả người dùng có thể gửi báo cáo về dự án bao gồm những người dùng được liệt kê trong phần này cộng với tất cả quản trị viên máy chủ
:::| 




#### Để có thể lưu dưới dạng bản nháp, ít nhất bạn phải nhập tiêu đề của báo cáo.

Một thông báo sẽ xuất hiện trên màn hình để xác nhận bản nháp đã được lưu.

Nút "Gửi sau" lưu báo cáo vào Hộp thư đi để gửi thủ công.
- Tab hộp thư đi thường được sử dụng khi người thu thập dữ liệu không có  kết nối Internet hoặc nếu kết nối không ổn định.
- Nút “Gửi” sẽ gửi báo cáo đến dự án Tella Web ngay lập tức.
- Nếu gửi không thành công do sự cố kết nối, báo cáo sẽ chuyển đến “tab Hộp thư đi”.
- Nếu báo cáo được gửi thành công, nó sẽ được chuyển đến tab “Đã gửi”.


####  Bản báo cáo nháp {#draft-reports}


Trên màn hình "Báo cáo mới", hãy nhấn vào nút "Lưu bản nháp" để lưu báo cáo dưới dạng bản nháp.

Một thông báo xác nhận sẽ được hiển thị, và bạn có thể tiếp tục làm việc trên báo cáo hoặc thoát ra để quay lại sau.

### Nếu bạn cố gắng thoát khỏi một báo cáo mà không lưu, bạn sẽ được hỏi xác nhận liệu bạn có chắc chắn muốn thoát mà không lưu báo cáo hay không.

Trong tab Bản nháp, bạn có thể xem và quản lý các báo cáo nháp. Mở một báo cáo nháp để tiếp tục làm việc và gửi báo cáo đó.

#### Bạn có thể xóa một báo cáo nháp bằng cách nhấn vào ba dấu chấm > **Xóa** hoặc bằng cách vào báo cáo và nhấn nút Xóa.

Gửi Báo cáo {#submit-a-report}

Trong báo cáo, hãy nhấn vào "Gửi" để bắt đầu gửi báo cáo.

Bạn sẽ được chuyển hướng đến màn hình tóm tắt hiển thị quá trình tải lên cho từng tệp tin đính kèm.
- Nút "Xóa" có sẵn để dừng tải lên và xóa báo cáo.
- Nếu báo cáo đang được tải lên, nút "Tạm dừng" cho phép bạn tạm thời dừng việc tải lên, có thể tiếp tục tải lại sau bằng cách sử dụng nút "Tiếp tục".
- Việc thoát một báo cáo không ảnh hưởng đến trạng thái tải lên.  Nếu báo cáo đang được tải lên thì quá trình này vẫn tiếp tục.
- :::info
Sau khi báo cáo đã được tải lên Tella Web, bạn không thể xóa báo cáo đó khỏi Tella Web từ ứng dụng di động Tella. Việc xóa một báo cáo đã gửi chỉ xóa phiên bản cục bộ của nó, chứ không xóa báo cáo trên máy chủ. 
:::

:::info
Việc xóa một báo cáo đang gửi sẽ hủy quá trình tải lên của các tệp chưa được tải, nhưng các tệp đã được gửi và các tệp gửi một phần đã có trên Tella Web sẽ không bị xóa.
:::

#### Hộp thư đi {#outbox}

Hộp thư đi chứa các báo cáo đã được lưu để gửi.  Đây có thể là:
1. Tạm dừng gửi
2. Các báo cáo đang gửi bị gián đoạn do vấn đề kết nối.

Các báo cáo được đánh dấu là "Gửi sau".

Gửi báo cáo {#submitted-reports}

Tab "Đã gửi" hiển thị các báo cáo đã được gửi thành công đến máy chủ Tella Web.




## Trong tab "Đã gửi", bạn có thể xem và đánh giá lại các báo cáo đã được gửi.


:::info
Nếu kết nối internet bị gián đoạn, các báo cáo sẽ được chuyển vào tab hộp thư đi và bạn sẽ cần tự tay tiếp tục việc gửi báo cáo.
:::

* Các Tính năng Nâng cao {#advanced-features}
* Tự động báo cáo {#auto-report}

Nếu tính năng tự động báo cáo được bật, Tella sẽ tự động tạo và tải lên báo cáo mỗi khi bạn chụp ảnh, quay video hoặc ghi âm trong Tella. Điều này đảm bảo rằng báo cáo của bạn được tải lên một cách liền mạch mà không cần thao tác thủ công. Các tệp sẽ được tải lên cùng một báo cáo tự động nếu chúng được thu thập trong khoảng thời gian 30 phút.

Chế độ tự động báo cáo có thể được bật từ màn hình Chỉnh sửa Kết nối.


#### :::info
Chế độ tự động báo cáo chỉ có thể được bật cho một dự án tại một thời điểm.
:::

Xóa tự động {#auto-delete}

* Khi chế độ tự động báo cáo được bật, bạn có thể bật tính năng xóa tự động, tính năng này sẽ tự động xóa các báo cáo và các tệp liên quan khỏi thiết bị của bạn sau khi chúng được tải lên thành công trên Tella Web. Điều này giúp bạn quản lý dung lượng lưu trữ của thiết bị và đảm bảo rằng dữ liệu nhạy cảm không bị giữ lại một cách vô tình.
* Nút chuyển đổi xóa tự động sẽ xuất hiện bên dưới nút chuyển đổi tự động báo cáo trên màn hình Chỉnh sửa Kết nối cho dự án mong muốn.
* Gửi Ở Chế Độ Nền {#background-submission}
    * Gửi ở chế độ nền cho phép quá trình gửi báo cáo tiếp tục ngay cả khi bạn chuyển sang các tác vụ khác trong Tella hoặc khi bạn thoát hoàn toàn khỏi Tella. Gửi ở chế độ nền có thể hoạt động kết hợp với cả báo cáo thủ công và tự động, và có thể được bật trên màn hình Chỉnh sửa Kết nối cho dự án mong muốn.
    * Khi gửi ở chế độ nền được bật, bất kể bạn làm gì trong Tella hay liệu bạn có đóng ứng dụng hay không, quá trình tải lên sẽ tiếp tục mà không bị gián đoạn. Tính năng này cũng sẽ hoạt động nếu chế độ tự động báo cáo được bật và bạn đóng ứng dụng sau khi thu thập thông tin.
* Khi tải lên báo cáo ở chế độ nền, Tella vẫn ở trạng thái mở khóa. Điều này có nghĩa là nếu ai đó mở Tella, họ sẽ có thể truy cập vào các tệp và báo cáo của bạn. Để khóa Tella khi báo cáo đang được tải lên ở chế độ nền, hãy nhấn vào nút "Thoát nhanh" ở góc trên bên phải của màn hình chính Tella.


#### Nếu việc gửi báo cáo bị gián đoạn do kết nối internet yếu hoặc các yếu tố khác, Tella sẽ chuyển báo cáo vào tab Hộp thư đi và tự động khởi động lại quá trình tải lên ngay khi điện thoại có kết nối internet ổn định trở lại.

* In **Settings ⚙️** > **Connections** >  **[Project name]** > 3-dots, you can:
    * Chỉnh sửa: Mở màn hình "chỉnh sửa máy chủ" nơi bạn có thể xem tên, URL và tên người dùng của dự án, và chỉnh sửa các tính năng nâng cao.
    * Xóa: Xóa kết nối, bao gồm tất cả thông tin máy chủ và tất cả các báo cáo nháp và đã gửi được lưu trữ trong Tella. Việc này sẽ không ảnh hưởng đến bất kỳ báo cáo nào đã được gửi lên máy chủ.

#### Pull Resources from your space {#pull-resources-from-your-space}

Once connected to at least one Tella Web project, a **Resources** card will appear in the "Connections" section of the homescreen. Tap on this card to view and download any guides, instructions or messages your organization admins have made available to you in any of the projects you are connected to.

On the **Available for download** section of the Resources screen you will see a card for each of the resources that have been shared with you. Tap on the **Download icon** (📥) to pull this resource from your organization's space and be able to access those on the **Downloaded** section, even offline. You can **View** each PDF by tapping on the card and you can **Remove from downloads** if you want to free up space on you Tella vault. You can always re-download those when needed.

Use the **Refresh** button on the top right to pull new resources from your organization space. 

Once you disconnect from a Tella Web project all associated resources will be removed from your Resources screen.

#### Tạo Báo cáo Thủ công {#create-a-manual-report}

* Khi đã kết nối với ít nhất một dự án Tella Web, một thẻ "Báo cáo" sẽ xuất hiện trong mục "Kết nối" trên màn hình chính. Nhấn vào thẻ này để bắt đầu tạo báo cáo.
* Màn hình báo cáo chính cho phép điều hướng giữa các tab Thư nháp, Hộp thư đi và Đã gửi.
* Nhấn vào nút "Báo cáo mới" ở cuối màn hình để tạo báo cáo mới.
    * Trên màn hình "Báo cáo mới", bạn có thể điền thông tin chi tiết của báo cáo, bao gồm tiêu đề, mô tả và tệp đính kèm tùy chọn gồm ảnh, video, tài liệu pdf và bản ghi âm.
    * Nếu bạn kết nối với nhiều dự án Tella Web, bạn sẽ có thể chọn ở đầu màn hình dự án nào để gửi báo cáo đến.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Để có thể lưu dưới dạng bản nháp, ít nhất bạn phải nhập tiêu đề của báo cáo.
    * Một thông báo sẽ xuất hiện trên màn hình để xác nhận bản nháp đã được lưu.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* Nút “Gửi” sẽ gửi báo cáo đến dự án Tella Web ngay lập tức.
    * Nếu gửi không thành công do sự cố kết nối, báo cáo sẽ chuyển đến “tab Hộp thư đi”.
    * Nếu báo cáo được gửi thành công, nó sẽ được chuyển đến tab “Đã gửi”.


####  Bản báo cáo nháp {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * A confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving.
* Trong tab Bản nháp, bạn có thể xem và quản lý các báo cáo nháp. Mở một báo cáo nháp để tiếp tục làm việc và gửi báo cáo đó.
* Bạn có thể xóa một báo cáo nháp bằng cách nhấn vào ba dấu chấm > **Xóa** hoặc bằng cách vào báo cáo và nhấn nút Xóa.


#### Gửi Báo cáo {#submit-a-report}

* Trong báo cáo, hãy nhấn vào "Gửi" để bắt đầu gửi báo cáo.
* Bạn sẽ được chuyển hướng đến màn hình tóm tắt hiển thị quá trình tải lên cho từng tệp tin đính kèm.
* Nút "Xóa" có sẵn để dừng tải lên và xóa báo cáo.
* Nếu báo cáo đang được tải lên, nút "Tạm dừng" cho phép bạn tạm thời dừng việc tải lên, có thể tiếp tục tải lại sau bằng cách sử dụng nút "Tiếp tục".
* Việc thoát một báo cáo không ảnh hưởng đến trạng thái tải lên.  Nếu báo cáo đang được tải lên thì quá trình này vẫn tiếp tục.

:::info
Sau khi báo cáo đã được tải lên Tella Web, bạn không thể xóa báo cáo đó khỏi Tella Web từ ứng dụng di động Tella. Việc xóa một báo cáo đã gửi chỉ xóa phiên bản cục bộ của nó, chứ không xóa báo cáo trên máy chủ. 
:::

:::info
Việc xóa một báo cáo đang gửi sẽ hủy quá trình tải lên của các tệp chưa được tải, nhưng các tệp đã được gửi và các tệp gửi một phần đã có trên Tella Web sẽ không bị xóa.
:::


#### Hộp thư đi {#outbox}

The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen.

The Outbox contains:

* Tạm dừng gửi
* Các báo cáo đang gửi bị gián đoạn do vấn đề kết nối.
* Các báo cáo được đánh dấu là "Gửi sau".


#### Gửi báo cáo {#submitted-reports}

- Tab "Đã gửi" hiển thị các báo cáo đã được gửi thành công đến máy chủ Tella Web.
- Trong tab "Đã gửi", bạn có thể xem và đánh giá lại các báo cáo đã được gửi.

:::info
Nếu kết nối internet bị gián đoạn, các báo cáo sẽ được chuyển vào tab hộp thư đi và bạn sẽ cần tự tay tiếp tục việc gửi báo cáo.
:::


### Các Tính năng Nâng cao {#advanced-features}

#### Tự động báo cáo {#auto-report}

If auto-report is enabled, Tella will create and upload reports automatically whenever you take a photo, record a video, or capture an audio recording in Tella. This ensures that your reports are seamlessly uploaded without the need for manual work. Files get uploaded to the same auto-report if they are collected within the lapse of 30 minutes.

Chế độ tự động báo cáo có thể được bật từ màn hình Chỉnh sửa Kết nối.

:::info
Chế độ tự động báo cáo chỉ có thể được bật cho một dự án tại một thời điểm.
:::

#### Xóa tự động {#auto-delete}

Khi chế độ tự động báo cáo được bật, bạn có thể bật tính năng xóa tự động, tính năng này sẽ tự động xóa các báo cáo và các tệp liên quan khỏi thiết bị của bạn sau khi chúng được tải lên thành công trên Tella Web. Điều này giúp bạn quản lý dung lượng lưu trữ của thiết bị và đảm bảo rằng dữ liệu nhạy cảm không bị giữ lại một cách vô tình.

Nút chuyển đổi xóa tự động sẽ xuất hiện bên dưới nút chuyển đổi tự động báo cáo trên màn hình Chỉnh sửa Kết nối cho dự án mong muốn.

#### Gửi Ở Chế Độ Nền {#background-submission}

Background submission allows the report submission process to continue even if you switch to other tasks within Tella or if you exit Tella entirely. Background submission can work in combination to both Manual and Auto-reports, and can be enabled on the Edit Connection screen for the desired project.

When background submission is enabled, regardless of what you do in Tella or whether you close the app, the upload process will continue without interruption. It will also work if auto-reports is enabled and you close the app after collecting the information.

Khi tải lên báo cáo ở chế độ nền, Tella vẫn ở trạng thái mở khóa. Điều này có nghĩa là nếu ai đó mở Tella, họ sẽ có thể truy cập vào các tệp và báo cáo của bạn. Để khóa Tella khi báo cáo đang được tải lên ở chế độ nền, hãy nhấn vào nút "Thoát nhanh" ở góc trên bên phải của màn hình chính Tella.

If the submission is disrupted due to a weak internet connection or other factors, Tella will send the report to the Outbox tab and automatically restart the upload as soon as the phone regains a stable internet connection. 

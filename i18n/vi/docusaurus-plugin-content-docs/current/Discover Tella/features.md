---
id: features
title: các tính năng của Tella
description: Mô tả chi tiết về các tính năng của Tella.
slug: /features
---
import FeaturesTable from '.././_features-table.md';


# các tính năng của Tella

Tất cả các tính năng sau đây đều có sẵn cho tất cả người dùng ngay khi họ tải xuống Tella.. Chúng không yêu cầu bất kỳ kết nối nào với máy chủ hoặc bất kỳ thiết lập đặc biệt nào.

<FeaturesTable/>


## Khóa ứng dụng {#app-lock}

Khi cài đặt Tella, người dùng phải chọn khóa 🔒 để mã hóa và giải mã nội dung của ứng dụng.


* Đối với Android, người dùng có thể lựa chọn một mẫu hình khóa, mã PIN, hoặc mật khẩu.
* Đối với iOS, người dùng có thể lựa chọn một mã PIN, hoặc mật khẩu.

Không có khóa này sẽ không thể mở Tella.

:::danger
Nếu người dùng quên mật khẩu, sẽ không thể vào lại được Tella và các tệp tin được lưu giữ trong ứng dụng. Người dùng phải gỡ cài đặt và cài đặt lại Tella, và tất cả các tệp tin sẽ bị mất. 🔒🔑🚪
:::

:::tip Video tutorial 🎥
Tìm hiểu về khóa Tella trong [video hướng dẫn] của chúng tôi (/video-tutorials#tella-locks) 
:::

## Cài đặt thời gian khóa tự động {#lock-timeout-configuration}

Theo cài đặt mặc định, Tella sẽ khóa ngay lập tức mỗi khi người dùng thoát khỏi ứng dụng hoặc khi màn hình điện thoại tắt. Nếu muốn thay đổi cài đặt này, người dùng có thể thực hiện bằng cách vào

Cài đặt ⚙️ > Bảo mật > Tự động khóa.

Các tùy chọn có sẵn là 1 phút, 5 phút, 30 phút và 1 tiếng.  ⏱️

:::info
Xin sử dụng tính năng này một cách cẩn thận vì nếu Tella được mở khóa, thì dữ liệu sẽ không được bảo vệ và bất kỳ ai vào Tella cũng có thể xem tất cả thông tin ở đó.  
:::

:::info
Khi camera hoặc máy ghi âm được mở, Tella sẽ không khóa
:::

:::tip Video tutorial 🎥
Tìm hiểu thêm về các Tính Năng Bảo Mật Bổ Sung của Tella trong [video hướng dẫn] của chúng tôi (/video-tutorials#additional-security-features)
:::



## Chế độ tắt âm thanh camera {#camera-silent-mode}

Theo mặc định, Tella không bật chế độ im lặng của máy ảnh. Bạn có thể tắt âm thanh khi chụp hình để giảm sự chú ý bằng cách vào **Cài đặt ⚙️** > **Bảo mật** > **Chế độ im lặng của máy ảnh** 📷🔇

:::tip Video tutorial 🎥
Tìm hiểu thêm về các Tính Năng Bảo Mật Bổ Sung của Tella trong [video hướng dẫn] của chúng tôi (/video-tutorials#additional-security-features)
:::


## Bảo mật màn hình {#screen-security}

Theo mặc định, Tella chặn việc chụp màn hình và quay video lại màn hình bên trong Tella cũng như ẩn bản xem trước màn hình trong danh sách các ứng dụng gần đây 📱🔒. Người dùng có thể tắt tính năng bảo mật này nếu cần chụp màn hình hoặc ghi lại màn hình, hay kết nối Tella sang máy tính để thuyết trình bằng cách vào **Cài đặt** ⚙️ > **Bảo mật** > **Bảo mật Màn hình**.

Trên iOS, bảo mật màn hình chỉ chặn việc ghi màn hình bên trong Tella và ẩn màn hình trong danh sách các ứng dụng gần đây, nhưng không thể tắt tính năng chụp màn hình hoặc ghi màn hình.


:::tip Video tutorial 🎥
Tìm hiểu thêm về các Tính Năng Bảo Mật Bổ Sung của Tella trong [video hướng dẫn] của chúng tôi (/video-tutorials#additional-security-features)
:::

## Giới hạn số lần mở khóa {#restrict-unlocking-attempts}
Bằng cách vào **Cài đặt ⚙️** > **Bảo mật** > **Xóa sau khi Mở khóa thất bại**, người dùng có thể quyết định số lần được phép mở khóa không thành trước khi tất cả dữ liệu trong Tella bị xóa.

Theo mặc định, cài đặt này được Tắt, có nghĩa là không hạn chế số lần thử mở khóa và dữ liệu sẽ không bị xóa.  Người dùng có thể chọn giới hạn số lần thử mở khóa ở 5, 10 hoặc 20. Nếu chọn một trong những tùy chọn này, người dùng cũng có thể chọn có hiển thị thông báo mở khóa hay không khi còn 3 lần thử trước số lần đã chỉ định (ví dụ còn lại 3 lần, còn 2 lần, v.v.), hoặc không hiển thị thông báo nào cả.

Sau số lần thử mở khóa thất bại đã chỉ định, tất cả các tệp tin, kết nối và mọi thứ trong Tella sẽ bị xóa và người dùng sẽ quay lại trạng thái ứng dụng " vừa mới được cài đặt".

:::danger
Mặc dù cài đặt bảo mật này ngăn chặn các nỗ lực phá khóa để xâm nhập vào Tella, nhưng nó nên được sử dụng một cách thận trọng vì không có cách nào để khôi phục được nội dung của Tella một khi đã chạm đến số lần thử mở khóa thất bại tối đa.
:::

## Chỉnh sửa Phương tiện {#edit-media}
Chúng tôi đang trong quá trình bổ sung khả năng chỉnh sửa tệp phương tiện trực tiếp trong Tella. Sắp tới, người dùng sẽ không cần xuất tệp tin ra ngoài Tella để chỉnh sửa nữa. Tella 2.4.0 dành cho Android sẽ bắt đầu với các tính năng chỉnh sửa ảnh (cắt và xoay). 

Người dùng có thể chỉnh sửa ảnh bằng cách vào phần **Thêm** > **Chỉnh sửa** từ thư mục **Hình ảnh** hoặc bằng cách nhấn vào nút **Chỉnh sửa** ở góc phải trên cùng khi xem hình ảnh bạn có trong Tella. Trên màn hình Chỉnh sửa hình ảnh, người dùng có thể sử dụng nút **Xoay** ở cuối màn hình để xoay ảnh ngược chiều kim đồng hồ hoặc sử dụng các ngón tay để kéo giãn hoặc thu nhỏ và di chuyển khung trắng để cắt ảnh. Khi chỉnh sửa xong, người dùng có thể nhấn nút kiểm tra màu cam ở phía trên góc phải của màn hình chỉnh sửa.

## Mã hóa {#encryption}

Tất cả các tệp tin được lưu trữ bên trong Tella đều được mã hóa. Nếu không có khóa ứng dụng thì không thể giải mã và truy cập vào bất kỳ tệp nào được lưu trữ trong Tella. 🔒🔐

Khi cài đặt ứng dụng, người dùng sẽ quyết định phương pháp khóa nào họ muốn sử dụng. Đối với Android, người dùng có thể sử dụng mẫu hình khóa sáu điểm, mã PIN hoặc mật khẩu. Đối với iOS, người dùng có thể sử dụng mã PIN hoặc mật khẩu. Ứng dụng sẽ không thể mở được nếu không có mật khẩu.

Ngay cả khi thiết bị được cắm vào máy tính và tất cả dữ liệu của thiết bị được trích xuất để phân tích, tất cả nội dung và dữ liệu của Tella sẽ trông như những ký tự vô nghĩa và vô dụng. Việc mở khóa ứng dụng bằng cách nhập đúng mật khẩu là cách duy nhất để giải mã và đọc nội dung được lưu trữ trong Tella.

:::danger
Nếu mật khẩu của người dùng quá yếu, kẻ xâm nhập có thể đoán được nó và mở ứng dụng trên điện thoại; hoặc dữ liệu có thể được trích xuất và một máy tính có thể cưỡng phá được khóa mã hóa và giải mã dữ liệu.
:::

:::danger
Nếu người dùng quên mật khẩu của mình thì không có cách nào để truy cập vào ứng dụng và lấy lại nội dung của nó:::

:::tip Video  tutorial 🎥
Tìm hiểu thêm về Mật khẩu và Mã hóa trong [video hướng dẫn] của chúng tôi (/video-tutorials#tella-locks)
:::

:::info 
Chi tiết kỹ thuật về mã hóa có thể được tìm thấy trong phần [Bảo mật và Quyền riêng tư](/security-and-privacy).
:::

## Quản lý tệp tin {#file-management}

Tella cho phép người dùng quản lý các tập tin và thư mục theo cách tương tự như trên máy tính. Tất cả các tệp tin và thư mục được **mã hóa và chỉ có thể truy cập được trong Tella**. 📂📝

Trong Tella, người dùng có thể:

* Lưu trữ bất kỳ tệp tin nào, bao gồm cả ảnh 📷, video 🎥, bản ghi âm 🎧, và tài liệu 📝.
* Tạo thư mục và thư mục con.
* Di chuyển tệp tin vào các thư mục và từ thư mục này sang thư mục khác.
* Xuất tập tin sang thiết bị. Sau khi được lưu trữ bên ngoài Tella, các tệp tin sẽ không còn được mã hóa và có thể bị bất kỳ ai tìm kiếm trên thiết bị truy cập được.
* Nhập tệp tin từ thiết bị. Các tệp tin được tự động mã hóa khi nhập vào Tella.

:::danger
Việc nhập tài liệu từ hệ thống dữ liệu của thiết bị vào Tella sẽ tạo một bản sao của tệp tin đó vào Tella. Tella sẽ hỏi bạn muốn giữ hay xóa tệp tin gốc khỏi điện thoại khi nhập không. Nếu bạn chọn giữ lại tệp gốc, chúng sẽ tồn tại trên thiết bị, nằm bên ngoài Tella và không được mã hóa.  🔒
:::

## Góp ý {#feedback}

Có nhiều lựa chọn để người dùng Tella [Liên hệ với đội ngũ Tella](/contact-us) để đề xuất cải tiến, báo cáo lỗi và sự cố, hoặc yêu cầu hỗ trợ. Trong Tella có 2 tùy chọn:

1. **Email:**
   - Đi đến **Cài đặt** > **Giới thiệu và Trợ giúp** > **Liên hệ với chúng tôi** để tìm địa chỉ email.
   - Người dùng có thể gửi email cho đội ngũ Tella bằng ứng dụng email yêu thích của mình.

2. **In-App Feedback Form:**
   - Đến **Cài đặt** > **Phản hồi** để kích hoạt mẫu phản hồi trong ứng dụng.
   - Điều này cho phép người dùng chia sẻ phản hồi với đội ngũ Tella một cách ẩn danh.


Để đảm bảo quyền riêng tư và ẩn danh của người dùng, chỉ những dữ liệu thiết yếu mới được truyền đến máy chủ Phản hồi của chúng tôi thông qua các yêu cầu HTTPS POST. Nhật ký chứa thông tin người dùng (địa chỉ IP, ngày giờ và tác nhân người dùng) sẽ tự động bị xóa hàng tuần.

Trên cơ sở dữ liệu máy chủ Phản hồi, chúng tôi chỉ lưu trữ một bản sao văn bản do người dùng gửi trong biểu mẫu phản hồi và hệ điều hành mà nó sử dụng (Android hoặc iOS).


:::info 
Thông tin duy nhất mà chúng tôi sẽ nhận là nội dung cụ thể mà người dùng điền vào biểu mẫu phản hồi. Nếu người dùng đang yêu cầu hỗ trợ hoặc muốn chúng tôi liên hệ lại, họ nên cung cấp một phương thức an toàn để chúng tôi có thể liên hệ với họ.
:::


## Nhập tệp tin từ thiết bị {#import-files-from-device}

Người dùng có thể nhập các tệp vào Tella để bảo mật chúng bằng cách sử dụng tính năng nhập. Họ có thể nhập tệp tin bằng cách vào nút **Thêm (+ )** ở mục Tất cả tệp, Hình ảnh, Video, Âm thanh hoặc Tài liệu tùy theo loại tệp họ muốn nhập và sau đó chọn **Nhập từ thiết bị** 📥. Một thông báo sẽ xuất hiện để hỏi người dùng xem họ muốn giữ hay xóa tệp tin gốc khỏi bộ nhớ điện thoại của mình. Các tệp tin đã nhập sẽ được bảo mật tại Tella.


:::tip Video  tutorial 🎥
Tìm hiểu thêm về [Thu thập Chứng cứ](video-tutorials#collecting-evidence) và [Chia sẻ dữ liệu](/video-tutorials#sharing-data-with-other-apps) trong video hướng dẫn của chúng tôi.
:::

## Bảo toàn siêu dữ liệu khi nhập {#preserve-metadata-when-importing}

Trong **Cài đặt** > **Bảo mật**, người dùng có thể lựa chọn Bảo toàn hoặc xóa siêu dữ liệu của tệp tin khi nhập Ảnh và Video vào Tella. Siêu dữ liệu EXIF ​​của các tệp có thể bao gồm dữ liệu về thời điểm tạo tệp, cài đặt Máy ảnh hoặc vị trí của thiết bị.

## Mở tập tin trong Tella {#open-files-in-tella}
Hình ảnh, video, PDF và âm thanh có thể được hiển thị bên trong Tella. 📱📄

Trên Tella FOSS, các tệp PDF phải được xuất để mở.

## Ngụy trang {#camouflage}

Trên Tella Android, có thể ngụy trang Tella theo hai cách:

1. Người dùng có thể thay đổi tên và biểu tượng của ứng dụng để làm cho nó nhìn giống một ứng dụng khác như một ứng dụng trò chơi hoặc thời tiết. 🎮🌦️
2. Người dùng có thể ẩn Tella dưới hình thức một cái máy tính thông thường. Khi mở Tella, người dùng phải nhập mã PIN vào máy tính, sau đó nhấn **=**. Việc ngụy trang Máy tính chỉ có thể thực hiện được nếu người dùng sử dụng mã PIN. Hình thức ngụy trang này không áp dụng được đối với mẫu hình khóa hoặc mật khẩu.

Ở thời điểm hiện tại, Tella trên hệ điều hành iOS không hỗ trợ những tính năng ngụy trang có sẵn như trên Android vì còn sự hạn chế trên kho ứng dụng của Apple. 

:::danger
Tên "Tella" và biểu tượng của nó sẽ vẫn hiển thị trong cài đặt Android. Điều này có nghĩa là việc ngụy trang sẽ không bảo vệ bạn khỏi một cá nhân _có chủ đích_ tìm kiếm Tella trên điện thoại hoặc tiến hành kiểm tra kỹ lưỡng thiết bị của bạn. 🔒👀
:::

:::tip Video  tutorial 🎥
Tìm hiểu thêm về [Ngụy trang Tella](/video-tutorials#camouflaging-tella) trong video hướng dẫn của chúng tôi. 
:::


## Tùy chỉnh màn hình chính {#homescreen-customization}

Theo mặc định, màn hình chính của Tella sắp xếp các tệp theo loại: 📷 hình ảnh, 🎥 video, 🎧 âm thanh, 📄 tài liệu và các tệp tin khác. Nó cũng cung cấp mục Tất cả các tệp, nơi có thể truy cập tất cả các tệp. Để biết thêm thông tin, hãy xem phần Quản lý tệp tin.

Để thuận tiện và dễ dàng truy cập, bạn cũng có thể tùy chỉnh màn hình chính để hiển thị các phím tắt đến một hoặc nhiều mục sau:

* Các tệp tin gần đây, để nhanh chóng mở các tệp tin mới nhất trong Tella 💼
* Các biểu mẫu yêu thích, dành cho người dùng được kết nối với máy chủ ODK 📝
* Các mẫu yêu thích, dành cho người dùng được kết nối với máy chủ Uwazi 📋

Cấu hình này có thể được tìm thấy trong **Cài đặt** > **Cài đặt chung**. 


## Xóa nhanh {#quick-delete}

Nút Xóa Nhanh cho phép người dùng xóa dữ liệu nhạy cảm trong Tella chỉ trong tích tắc. Chức năng này có thể thiết lập ở phần**Cài đặt** > **Bảo mật** > **Xóa nhanh**, nơi người dùng có thể chọn bật nút trượt trên màn hình chính để xóa nhanh thông tin khỏi Tella trong những tình huống khẩn cấp. Nếu được kích hoạt, người dùng có thể chọn chính xác những gì sẽ bị xóa khi tính năng này được sử dụng. Các tùy chọn có sẵn là:

* Xóa kho lưu trữ: Xóa toàn bộ dữ liệu lưu bên trong Tella 🗑️
* Xóa bản nháp và biểu mẫu đã gửi: Xóa các bản nháp và biểu mẫu đã gửi trong tất cả các máy chủ được kết nối với Bộ Công cụ Dữ liệu mở (ODK) 📝
* Xóa cài đặt máy chủ: Xóa tất cả các kết nối máy chủ và tất cả các biểu mẫu hoặc mẫu liên quan đến chúng 📋
* Xóa Tella: Xóa ứng dụng và tất cả dữ liệu bên trong. Điều này kích hoạt một thông báo hỏi xem người dùng có muốn gỡ cài đặt Tella không ❌. 

:::info Delete Tella
Tùy chọn Xóa Tella có thể không khả dụng trên một số điện thoại Android do hạn chế về mặt kỹ thuật. Chúng tôi đang tìm cách khắc phục sự cố này. Còn đối với iOS, không thể xóa ứng dụng bằng các lệnh lập trình. 
:::

## Thoát nhanh {#quick-exit}

Bằng cách ấn vào nút thoát ở góc trên cùng bên phải màn hình chính của Tella, người dùng Android có thể nhanh chóng đóng và khóa ứng dụng trong trường hợp khẩn cấp. Khi cài đặt thời gian khóa tự động là “ngay lập tức", ứng dụng sẽ tự động khóa ngay khi người dùng thoát ra. Tuy nhiên, việc sử dụng nút Thoát nhanh sẽ tăng thêm một lớp bảo mật và đảm bảo việc ứng dụng sẽ đóng và khóa hoàn toàn 🔒

Trên iOS, bạn không thể tắt ứng dụng từ bên trong chính ứng dụng đó. Thay vào đó, hãy nhấn nút thoát nhanh để khóa ứng dụng.

## Chế độ xác thực {#verification-mode}

Trong cài đặt Tella, người dùng có thể kich hoạt "Chế độ Xác thực" ✅

Khi được kích hoạt, mỗi khi người dùng chụp ảnh, quay video hay ghi âm, Tella sẽ tự động ghi lại thông tin xác minh (siêu dữ liệu của tệp). Thông tin này có thể được sử dụng để xác thực bằng chứng, kiểm tra chéo với các dữ kiện khác về sự kiện hoặc về khu vực nơi tệp được tạo ra. Thông tin xác minh sẽ được lưu dưới dạng tệp tin riêng khi bạn lưu vào thiết bị hoặc khi chia sẻ qua các ứng dụng của bên thứ ba. Định dạng tệp là .CSV, với thông tin siêu dữ liệu được sắp xếp theo cột. Bạn có thể mở tệp này bằng bất kỳ ứng dụng bảng tính nào (như Excel, Bảng tính Google hoặc OpenOffice).

:::info Contact us
Nếu bạn cần trợ giúp để hiểu rõ hơn về Chế độ xác minh, vui lòng liên hệ với chúng tôi 😊
:::

Dưới đây là danh sách các thông tin siêu dữ liệu được Tella thu thập:

**Thông tin về tệp tin**

* Đường dẫn tệp: vị trị của tệp trong thư mục Tella 📂
* Tệp hàm băm: một số duy nhất để xác định tệp 🔍
* Thời điểm chỉnh sửa tệp: ngày và giờ tệp được chỉnh sửa lần cuối trên thiết bị 📅

**Thông tin về thiết bị**

* Nhà sản xuất: tên của nhà sản xuất thiết bị 📱
* Ổ cứng: mẫu mã chính xác của thiết bị 💻
* ID thiết bị: một số duy nhất để nhận diện thiết bị Android 🆔
* Kích thước màn hình: kích thước chính xác của màn hình thiết bị 📏
* Ngôn ngữ: ngôn ngữ được thiết lập cho hệ điều hành của thiết bị. 🌐
* Vị trí: vùng khu vực địa lý mà thiết bị được cài đặt 🌍
* Trạng thái kết nối: Liệu thiết bị có được kết nối hay không kết nối với internet 📶
* Loại mạng: nếu thiết bị được kết nối với internet, xác định xem đó là mạng WiFi hay mạng di động 📲
* Wi-Fi MAC: một định danh duy nhất cho đầu nối Wi-Fi của thiết bị 🔍
* IPv4: một địa chỉ duy nhất nhận dạng kết nối internet của thiết bị 🔗
* IPv6: một định danh mới hơn cho kết nối internet của thiết bị 🔗

**Thông tin về môi trường nơi nơi tệp tin được thu thập**

* Vị trí: vị trí chính xác của thiết bị, bao gồm tọa độ vĩ độ và kinh độ, độ cao tính bằng mét, độ chính xác của phép đo tính bằng mét và thời gian 🌍
* Nhà cung cấp vị trí: cách xác định vị trí của thiết bị 📍
* Tốc độ vị trí: tốc độ mà thiết bị đang di chuyển 🚀
* Thông tin trạm phát sóng: số nhận dạng của tất cả các cột sóng mà thiết bị được kết nối 📡
* Thông tin WiFi: tên của tất cả các mạng WiFi xung quanh thiết bị 🔍

## Kết nối với máy chủ {#connecting-to-servers}

Người dùng có thể thu thập dữ liệu trực tiếp trong Tella, giữ bảo mật dữ liệu trong ứng dụng và kết nối với máy chủ để gửi dữ liệu một cách an toàn. Tính năng này thường được sử dụng bởi các tổ chức tập trung dữ liệu được thu thập bởi các tình nguyện viên hoặc nhà hoạt động tại thực địa. Những người này thu thập thông tin bằng Tella trên điện thoại của họ và sau đó gửi về cho tổ chức của mình. Các triển khai Tella trước đây, nơi người dùng tại hiện trường thu thập dữ liệu và gửi về máy chủ của tổ chức đã dao động từ 1 đến 2.000 người dùng. 📲 📡

Hiện tại các máy chủ có thể kết nối với Tella là:

* [Tella Web](/tella-web)
* [Bộ Công cụ Dữ liệu Mở (ODK)](/for-organizations#open-data-kit-odk)
* [Uwazi](/uwazi)

:::tip Video tutorial 🎥
Tìm hiểu thêm về [Kết nối với Máy chủ](/video-tutorials#server-connections) trong video hướng dẫn của chúng tôi. 
:::


## Máy ảnh (hình ảnh and video) {#camera-photos-and-videos}

Tella cung cấp một camera tích hợp để bạn có thể chụp ảnh và quay video. Tất cả phương tiện được thu thập trong Tella sẽ không thể truy cập bên ngoài, vì tất cả các tệp sẽ được mã hóa ngay khi chúng được ghi lại. Các tệp chỉ có thể truy cập bên trong Tella, sử dụng mật khẩu để mở ứng dụng. Hình ảnh và video sẽ không xuất hiện trong Thư viện của điện thoại. Trong Tella, hình ảnh và video sẽ có tên mặc định, nhưng người dùng có thể đổi tên chúng bằng nút Đổi tên. Các tệp tin cũng có thể được sắp xếp trong các thư mục. 🎤 🎧

Camera cho phép thay đổi độ phân giải của video trước khi quay để tiết kiệm dung lượng: độ phân giải càng thấp thì video sẽ chiếm ít dung lượng hơn, nhưng chất lượng video cũng thấp hơn. 🎥 💾

Trong [Tella-FOSS](/faq#is-tella-available-on-f-droid), nơi chúng tôi sử dụng thư viện CameraX mã nguồn mở hoàn toàn, một số tính năng của Máy ảnh (thu phóng, lật camera, bật đèn flash, bật lưới, thay đổi độ phân giải video) không khả dụng.


## Chọn độ phân giải video {#select-video-resolution}
Bạn có thể dễ dàng chọn độ phân giải video mong muốn trên Tella bằng cách truy cập màn hình quay video và nhấn vào nút Cài đặt. Các lựa chọn có sẵn bao gồm:
- Độ phân giải cao nhất
- Độ phân giải cao (1080p)
- Độ phân giải trung bình (720p)
- Độ phân giải thấp (420p)

Độ phân giải video đề cập đến số lượng pixel trong mỗi khung hình của video. Độ phân giải cao hơn, chẳng hạn như 1080p hoặc 720p, mang lại video sắc nét và chi tiết hơn. Tuy nhiên, hãy nhớ rằng video có độ phân giải cao hơn cũng có kích thước tệp lớn hơn, điều này yêu cầu nhiều dung lượng lưu trữ trên thiết bị của bạn.

Điều quan trọng cần lưu ý là việc chọn độ phân giải video hiện chỉ được hỗ trợ trên thiết bị Android.


## Ghi Âm {#audio-recorder}

Tella có tích hợp sẵn một máy ghi âm. Tất cả âm thanh được ghi lại trong Tella sẽ không thể try cập từ bên ngoài, vì tất cả các tệp sẽ được mã hóa ngay khi được ghi.Các tệp âm thanh chỉ có thể được truy cập bên trong Tella, sử dụng mã khóa để mở ứng dụng. Các bản ghi sẽ không xuất hiện trong ứng dụng Ghi Âm của điện thoại hoặc hệ thống tệp. Trong Tella, các tệp âm thanh sẽ có tên mặc định, nhưng người dùng có thể đổi tên chúng bằng nút Đổi tên. Các bản ghi âm cũng có thể được tổ chức trong các thư mục.🎤 🎧

Máy ghi âm cho phép người dùng tạm dừng và tiếp tục ghi âm khi cần thiết, giữ tất cả thông tin trong cùng một tệp. Người dùng có thể thấy mức dung lượng khả dụng trong khi ghi âm, đảm bảo họ sẽ không bị hết dung lượng giữa chừng trong quá trình ghi. 📈 💾


## Thu thập dữ liệu ngoại tuyến {#offline-data-collection}

Sau khi Tella được cài đặt và thiết lập trên điện thoại, nó không cần kết nối internet để thu thập dữ liệu. 📲 Kết nối Internet chỉ cần thiết khi chia sẻ tệp tin qua các ứng dụng hoặc Kết nối khác. 🌐 Nếu người dùng kết nối máy chủ, sau khi tải biểu mẫu hoặc mẫu xuống điện thoại, tất cả dữ liệu được thu thập sẽ được lưu trữ trên thanh hộp thư đi và họ có thể tải dữ liệu lên máy chủ sau khi kết nối Internet. 📩



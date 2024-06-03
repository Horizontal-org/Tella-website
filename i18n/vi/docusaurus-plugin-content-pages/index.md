import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Tài liệu & bảo vệ</h2>
        <p>Trong các môi trường khó khăn, với kết nối internet hạn chế hoặc không có, hoặc đối mặt với sự đàn áp, Tella giúp dễ dàng và an toàn hơn để tài liệu hóa các vi phạm nhân quyền và thu thập dữ liệu.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Tải Tella trên Google Play"/>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Tải Tella trên App Store"/>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Tải Tella trên F-Droid" />
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="Ảnh chụp màn hình của ứng dụng Tella trên Android. Hiển thị kết nối với Tella Web Uwazi và cấu trúc thư mục cho thấy trong Tella người dùng có thể ghi và lưu trữ hình ảnh, video và âm thanh một cách an toàn và mã hóa."
            className="screen"
            sources={{
                light: 'img/home-black.svg',
                dark: 'img/home-white.svg',
              }}/>
    </div>
</div>

<hr></hr>

<div className="section">
    <h2>Tại sao chọn Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Minh họa Tại sao chọn Tella" />
        </div>
        <div className="column" id="section-column2">
            <p>Nếu bạn là một nhà hoạt động, nhà báo, người bảo vệ nhân quyền hoặc bất kỳ ai tài liệu hóa sự bất công, bạn có thể sử dụng Tella để:</p>
            <ul>
                <li><span className="emphasis">Bảo vệ bản thân</span> khỏi sự đàn áp về thể chất và kỹ thuật số trong khi thu thập và lưu trữ thông tin nhạy cảm.</li>
                <li><span className="emphasis">Bảo vệ dữ liệu bạn thu thập</span> khỏi sự kiểm duyệt, can thiệp, chặn và phá hủy.</li>
                <li><span className="emphasis">Dễ dàng tạo ra tài liệu chất lượng cao</span> có thể sử dụng cho nghiên cứu, vận động hoặc công lý chuyển tiếp.</li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Bảo vệ dữ liệu của bạn</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Mã hóa tệp tin của bạn:</span> Tella tự động mã hóa ảnh, video và ghi âm của bạn ngay khi chúng được chụp.</li>
                <li><span className="emphasis">Ẩn tệp tin của bạn trong thiết bị:</span> tệp tin của bạn không thể truy cập từ thư viện ảnh hoặc trình khám phá tệp thông thường của điện thoại. Bạn chỉ có thể truy cập chúng trong ứng dụng.</li>
                <li><span className="emphasis">Khóa tệp tin của bạn:</span> đặt mã PIN hoặc mật khẩu để bảo vệ tệp tin của bạn. Nhập đúng khóa là cách duy nhất để giải mã tệp tin lưu trữ trong Tella.</li>
                <li><span className="emphasis">Ngụy trang ứng dụng:</span> thay đổi giao diện của Tella để ẩn nó khỏi những người tìm kiếm trong điện thoại của bạn.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Minh họa kho lưu trữ" />
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> Tìm hiểu về các tính năng của Tella </a>  
</div>

<div className="section">
    <h3>2. Thu thập bằng chứng về các vi phạm nhân quyền</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Minh họa ghi chú"/>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li><span className="emphasis">Máy ảnh và ghi âm bên trong Tella:</span> chụp ảnh, quay video và ghi âm trực tiếp trong Tella để tệp tin của bạn được mã hóa và ẩn ngay lập tức trong ứng dụng.</li>
                <li><span className="emphasis">Tella tích hợp</span> với <a href="for-organizations#uwazi">Uwazi</a>, <a href="for-organizations#open-data-kit-odk">Kobotoolbox</a> và <a href="for-organizations#tella-web">Tella Web</a>. Chọn nền tảng phù hợp nhất với nhu cầu của bạn và thu thập dữ liệu trực tiếp trong Tella.</li>
                <li><span className="emphasis">Chế độ ngoại tuyến:</span> ở những khu vực có kết nối internet hạn chế hoặc không có, bạn có thể lưu dữ liệu và gửi khi bạn có kết nối internet đáng tin cậy.</li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Đọc về cách các tổ chức đang sử dụng Tella </a>    
</div>

<div className="section">
    <h3>3. Tella miễn phí, đa ngôn ngữ và mã nguồn mở</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li><span className="emphasis">Miễn phí mãi mãi:</span> Tella được thiết kế cho những người có nguy cơ bị nguy hiểm. Nó miễn phí để tải về và sử dụng, và sẽ luôn luôn miễn phí.</li>
                <li><span className="emphasis">Chọn ngôn ngữ của bạn:</span> Tella hiện <a href="faq#what-languages-is-tella-available-in">có sẵn</a> bằng tiếng Ả Rập, Belarus, Miến Điện, Anh, Indonesia, Jingpho, Kannada, Karen Sgaw, Kurd, Malayalam, Ba Tư, Bồ Đào Nha, Nga, Tây Ban Nha (Mỹ Latinh) và Tamil.</li>
                <li><span className="emphasis">Tin tưởng vào mã nguồn:</span> mã nguồn của Tella là mã nguồn mở và <a href="open-source">công khai</a> để các nhà nghiên cứu, nhà phân tích bảo mật và nhà phát triển có thể tự do kiểm tra và tái sử dụng.</li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Minh họa mã nguồn mở" />
        </div>
    </div>
</div>
import ThemedImage from '@theme/ThemedImage';

<div id="intro">
    <div className="intro-column" id="intro-column1">
        <h1>Tella</h1>
        <h2>Tài liệu &amp; bảo vệ</h2>
        <p>In challenging environments, with limited or no internet connectivity or in the face of repression, Tella makes it easier and safer to collect, protect and hide sensitive data.</p>
        <div className="download">
            <a href="https://play.google.com/store/apps/details?id=org.hzontal.tella" target="_blank">
                <img className="badge" src="img/google-play-badge.png" alt="Get Tella on Google Play"></img>
            </a>
            <a href="https://apps.apple.com/us/app/tella-document-protect/id1598152580" target="_blank">
                <img className="badge" src="img/app-store-badge.svg" id="apple-store-badge" alt="Get Tella on App Store"></img>
            </a>
            <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                <img className="badge" src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get Tella on F-Droid"></img>
            </a>
        </div>
    </div>
    <div className="intro-column" id="intro-column2">
        <ThemedImage
            alt="Screenshot of the Tella app on Android. Showing Connections to Tella Web Uwazi and the folder structure showing that within Tella users can record and save Images, Videos and Audios securely and encripted."
            className="screen"
            sources={{
                light: 'img/home-black.svg',
                dark: 'img/home-white.svg',
            }}/>
    </div>
</div>

<hr></hr>

<div className="section">
    <h2>Tại sao nên chọn Tella?</h2>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/why-tella.png" alt="Why Tella illustration"></img>
        </div>
        <div className="column" id="section-column2">
            <p>Nếu bạn là một nhà hoạt động, nhà báo, người bảo vệ nhân quyền hoặc bất kỳ ai ghi lại sự bất công, bạn có thể sử dụng Tella để:</p>
            <ul>
                <li>
                    <span className="emphasis">Bảo vệ bản thân</span> khỏi sự đàn áp về thể chất và kỹ thuật số trong khi thu thập và lưu trữ thông tin nhạy cảm.
                </li>
                <li>
                    <span className="emphasis">Bảo vệ dữ liệu bạn thu thập</span> khỏi kiểm duyệt, can thiệp, ngăn chặn và phá hủy.
                </li>
                <li>
                    <span className="emphasis">Dễ dàng tạo ra tài liệu chất lượng cao</span> có thể sử dụng cho nghiên cứu, vận động hoặc thúc đẩy công lý chuyển tiếp.
                </li>
            </ul>
        </div>
    </div>
</div>

<div className="section">
    <h3>1. Bảo vệ dữ liệu của bạn</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li>
                    <span className="emphasis">Mã hóa tệp tin của bạn:</span> Tella tự động mã hóa ảnh, video và ghi âm của bạn ngay khi chúng được chụp hoặc ghi lại.
                </li>
                <li>
                    <span className="emphasis">Ẩn tệp tin của bạn trong thiết bị:</span> tệp tin của bạn không thể truy cập từ thư viện ảnh hoặc trình duyệt thông thường của điện thoại. Bạn chỉ có thể truy cập chúng thông qua ứng dụng.
                </li>
                <li>
                    <span className="emphasis">Khóa tệp tin của bạn:</span> đặt mã PIN hoặc mật khẩu để bảo vệ tệp tin của bạn. Nhập đúng mã khóa là cách duy nhất để giải mã các tệp tin được lưu trữ trong Tella.
                </li>
                <li>
                    <span className="emphasis">Ngụy trang ứng dụng:</span> thay đổi giao diện của Tella để ẩn giấu nó khỏi những người kiểm tra điện thoại của bạn.
                </li>
                <li><span className="emphasis">Share your files:</span> choose one of the secure methods to share your files with other Tella vault or to a server.</li> 
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/vault.png" alt="Vault illustration"></img>
        </div>
    </div>
    <a type="button" href="features" className="clean-btn center button button--primary"> Tìm hiểu về các tính năng của Tella </a>  
</div>
<div className="section">
    <h3>2. Thu thập bằng chứng về các vi phạm nhân quyền</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <img className="home-illustrations" src="img/data.png" alt="Notepad illustration"></img>
        </div>
        <div className="column" id="section-column2">
            <ul>
                <li>
                    <span className="emphasis">Máy ảnh và ghi âm bên trong Tella:</span> chụp ảnh, quay video và ghi âm trực tiếp trong Tella để tệp tin của bạn được mã hóa tức thì và ẩn bên trong ứng dụng.
                </li>
                <li>
                    <span className="emphasis">Tella tích hợp</span> với <a href="uwazi">Uwazi</a>, <a href="odk">Open Data Kit</a>, <a href="tella-web">Tella Web</a>, <a href="g-drive">Google Drive</a>, <a href="dropbox">Dropbox</a> và <a href="nextcloud">Nextcloud</a>. <a href="connections">Chọn nền tảng</a> phù hợp nhất với nhu cầu của bạn và share data directly from Tella.
                </li>
                <li>
                    <span className="emphasis">Chế độ ngoại tuyến:</span> trong những khu vực có kết nối internet bị hạn chế hoặc không có, bạn có thể lưu lại dữ liệu của mình và gửi khi bạn có kết nối internet ổn định. Tella also offers a <a href="nearby-sharing">fully offline feature to transfer files to nearby devices</a> using Tella.
                </li>
            </ul>
        </div>
    </div> 
    <a type="button" href="user-stories" className="clean-btn center button button--primary"> Tìm hiểu cách các tổ chức đang sử dụng Tella </a>    
</div>

<div className="section">
    <h3>3. Tella miễn phí, đa ngôn ngữ và mã nguồn mở</h3>
    <div className="columns">
        <div className="column" id="section-column1">
            <ul>
                <li>
                    <span className="emphasis">Miễn phí mãi mãi:</span> Tella được thiết kế cho những người gặp rủi ro về an ninh. Ứng dụng này được tải xuống và sử dụng miễn phí, và sẽ luôn luôn miễn phí.
                </li>
                <li>
                    <span className="emphasis">Chọn ngôn ngữ của bạn:</span> Tella hiện <a href="faq#what-languages-is-tella-available-in">có sẵn</a> in 25 languages.
                </li>
                <li>
                    <span className="emphasis">Tin tưởng vào mã nguồn:</span> mã nguồn của Tella là mã nguồn mở và <a href="open-source">công khai</a> để các nhà nghiên cứu, nhà phân tích bảo mật và nhà phát triển có thể tự do kiểm tra và tái sử dụng.
                </li>
            </ul>
        </div>
        <div className="column" id="section-column2">
            <img className="home-illustrations" src="img/open-source.png" alt="Open source illustration"></img>
        </div>
    </div>
</div>
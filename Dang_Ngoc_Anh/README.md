---------------------HƯỚNG DẪN TẢI FILE REACT FRONTEND VỀ MÁY VÀ SỬ DỤNG TRONG FRAMEWORK LARAVEL-----------------------
- Công cụ cần có: 
    + VS Code + Các Extension trong đó hỗ trợ code Fullstack
    + Môi trường NodeJS (Xem Ytb họ hướng dẫn) tải từ trình duyệt Chrome
    + GitHub Desktop (Git nếu biết dùng lệnh!)
    + Composer để tạo project Laravel (Xem Ytb đã gửi trong nhóm Project) (Ngoài ra có thể dùng cái khác để tạo project Laravel..)
    + XamPP để chạy Laravel trong đấy

- Các bước tiến hành:
    + B1: Nếu đã cài đặt GitHub Desktop thì đăng nhập đầy đủ rồi nhấn vào 
          Clone Repository > URL > Dán link Github được ghim ở trong nhóm > Clone (Trong quá trình bị lỗi chỗ nào thì liên hệ ae trong nhóm hoặc nhóm trưởng để được xử lý kịp thời!)

    + B2: Cài đặt môi trường NodeJS, XamPP, Composer đầy đủ rồi tạo 1 thư mục trong thư mục "htdocs" của XamPP để chạy trong XamPP và mở lên bằng VS Code
    
    + B3: Bắt đầu tạo Laravel bằng Composer:
          
          Mở terminal trong VS Code bằng cách nhấn vào dấu "..." trên thanh công cụ góc trên cùng bên trái, chọn terminal, chọn new terminal
          
          Chạy lệnh: composer create-project laravel/laravel Tên framework
                VD: composer create-project laravel/laravel myLaravel
                (Trong quá trình bị lỗi chỗ nào thì liên hệ ae trong nhóm hoặc nhóm trưởng để được xử lý kịp thời!)
          
          Kiểm tra thành công bằng cách chạy lệnh:

                    cd myLaravel
                    php artisan serve
                
                Nếu có hiện đường link URL thì click vào chạy được là thành công!
    
    + B4: Sau khi đã tạo thành công framework Laravel rồi thì bạn sẽ cấu hình frontend vào trong framework:
          
          Chuyển toàn bộ file frontend trong thư mục Dang_Ngoc_Anh đã clone về máy 
          sang thư mục resources của framework Laravel

          Copy nội dung trong file package.json và file vite.config trong thư mục Dang_Ngoc_Anh vào 2 file trong framework

          Sau khi copy xong rồi thì bật terminal của framework lên và chạy lệnh:

                        npm i
                        npm run build
                        npm run dev
          
                Nếu có hiện đường link URL sau khi chạy xong 3 lệnh trên và không có
                lỗi màu đỏ (vàng) thì là thành công!

          Ở thư mục views của framework, bạn sẽ tạo 1 file mới có đuôi .blade.php (welcome.blade.php) để chạy frontend sau khi cấu hình lại vite

          Sau đó vào thư mục routes của framework, chọn file web.php để sửa lại đường dẫn (chỗ return của hàm ban đầu là welcome thì bạn sẽ thay bằng tên file .blade.php bạn đã đặt. VD: bạn đặt file app.blade.php thì sửa welcome -> app!)

          Xong rồi chạy terminal của framework và chạy lệnh:

                php artisan serve. Chọn link trong term này để chạy frontend. Nếu hiện ra thì tức là đã thành công!
        
=> Đây là toàn bộ quy trình để chạy frontend trong framework Laravel. Nếu làm theo không được và có thắc mắc hãy liên hệ ae trong nhóm hoặc nhóm trưởng để được xử lý nhé! Chúc ae may mắn!

-----------------------------------------------------------------------------------------------------------------------
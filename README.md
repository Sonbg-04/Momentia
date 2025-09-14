-----------------------------------------------------------------------------------------------------------------
# 📘 HƯỚNG DẪN MỌI NGƯỜI CLONE FRAMEWORK LARAVEL VỀ MÁY VÀ SỬ DỤNG NÓ

![Laravel](https://img.shields.io/badge/Laravel-12-red?logo=laravel)

---

## 📖 Giới thiệu
Hướng dẫn cách **clone framework Laravel 12** từ GitHub về máy tính, cấu hình và chạy dự án trên môi trường local.  
Mục tiêu là giúp mọi người làm quen nhanh với Laravel.

---

## ⚡ Yêu cầu hệ thống  
- **Composer** mới nhất  
- **XAMPP** mới nhất 
- **Môi trường Node.js & NPM** (dùng cho frontend build)  
- **Git**
- **GitHub Desktop**
---

## ⚙️ Cài đặt
Làm lần lượt các bước sau:
- B1: Clone framework từ GitHub về máy bằng Git hoặc GitHub Desktop.
Với ae dùng GitHub Desktop, chọn **file > clone repository > URL** dán đường link github của nhóm trưởng vào đó và nhấn clone.
- B2: Mở VS Code cái framework đã clone về máy. Lúc này đây có thể sẽ thiếu 1 số file mà máy không clone được hết cụ thể thiếu các file liên quan đến cơ sở dữ liệu
(.env và database.sqlite, ...)
- B3: Tạo thủ công file .env và copy nội dung dưới đây
```bash
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:SHNX+kKXH1eTHdI+rqrNB5CXXDIOeICDJeionTNkr5s=
APP_DEBUG=true
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_SCHEME=null
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"
```
- B4: Sau khi tạo xong file .env thì chạy các lệnh dưới đây:
```bash
# Tải lại composer để máy biết framework clone đó là laravel
composer i
# Lúc composer có bị lỗi fail download thì liên hệ nhóm trưởng để được xử lý!
```
```bash
# Rồi bắt đầu tạo file database.sqlite
php artisan migrate --seed
```
```bash
# Sau đó chạy lệnh để đọc frontend trong laravel
npm i
```
```bash
# Build frontend
npm run build
# Khi build mà không phát sinh ra lỗi đỏ thì là thành công!
```
```bash
# Sau khi xong tất cả câu lệnh trên thì chạy câu lệnh này là xong
php artisan serve
# Nếu hiện link URL để hiển thị trang web tức là đã thành công!
```
## 🤌 Hướng dẫn đồng bộ database của mysql trong xampp với database trong framework Laravel
Làm theo các bước dưới đây:
- B1: Bật xampp chạy mysql và apache. Xong truy cập đường dẫn "localhost/phpmyadmin" để tạo database rỗng!
- B2: Sau khi tạo thì chọn database đã tạo và import dữ liệu từ file momentia.sql được lưu ở thư mục Database của framework Laravel (Nếu chưa có thì pull lại)
- B3: Sửa file .env trong framework:
```bash
# Tìm đến DB_CONNECTION, bỏ hết dấu thăng và sửa như dưới đây
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=momentia
# VD: database name của tôi là momentia!
DB_USERNAME=root
DB_PASSWORD=

SESSION_DRIVER=file
```
Còn lại mọi người nhờ chatGPT để xử lý nhé! Xin cảm ơn.


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 13, 2025 lúc 05:36 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `momentia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buoi_chup`
--

CREATE TABLE `buoi_chup` (
  `Ma_BC` varchar(20) NOT NULL,
  `Ma_NAG` varchar(20) DEFAULT NULL,
  `Ma_KH` varchar(20) DEFAULT NULL,
  `Ngay_Tao` datetime NOT NULL DEFAULT current_timestamp(),
  `Tong_Tien` decimal(12,2) NOT NULL,
  `Bat_Dau_Chup` datetime NOT NULL,
  `Ket_Thuc_Chup` datetime NOT NULL,
  `Dia_Diem` varchar(255) DEFAULT NULL,
  `Loai_Chup` varchar(100) DEFAULT NULL,
  `Ghi_Chu` text DEFAULT NULL,
  `Trang_Thai` enum('Chờ xác nhận','Chờ đặt cọc','Đang diễn ra','Chờ thanh toán','Chờ xử lý ảnh','Đã xử lý ảnh','Đã hoàn thành','Đã hủy','Thay đổi') DEFAULT 'Chờ xác nhận',
  `Ti_Le_Coc` decimal(5,2) DEFAULT NULL,
  `Ly_Do_Huy` text DEFAULT NULL,
  `Ly_Do_Thay_Doi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danh_gia`
--

CREATE TABLE `danh_gia` (
  `Ma_ĐG` varchar(20) NOT NULL,
  `Ma_BC` varchar(20) NOT NULL,
  `Ma_KH` varchar(20) NOT NULL,
  `Ma_NAG` varchar(20) NOT NULL,
  `So_Sao` int(11) NOT NULL CHECK (`So_Sao` between 1 and 5),
  `Noi_Dung` text DEFAULT NULL,
  `Ngay_ĐG` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khach_hang`
--

CREATE TABLE `khach_hang` (
  `Ma_KH` varchar(20) NOT NULL,
  `Ma_TK` varchar(20) DEFAULT NULL,
  `Dia_Chi` varchar(255) DEFAULT NULL,
  `Ngay_Sinh` date DEFAULT NULL,
  `Gioi_Tinh` enum('Nam','Nữ') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhiep_anh_gia`
--

CREATE TABLE `nhiep_anh_gia` (
  `Ma_NAG` varchar(20) NOT NULL,
  `Ma_TK` varchar(20) DEFAULT NULL,
  `Dia_Diem_Hoat_Dong` varchar(100) DEFAULT NULL,
  `Kinh_Nghiem` int(11) DEFAULT NULL,
  `Gia_Trung_Binh` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tai_khoan`
--

CREATE TABLE `tai_khoan` (
  `Ma_TK` varchar(20) NOT NULL,
  `Ho_Ten` varchar(50) NOT NULL,
  `So_ĐT` varchar(15) DEFAULT NULL,
  `Email_TK` varchar(255) DEFAULT NULL,
  `Mat_Khau` varchar(255) NOT NULL,
  `Loai_TK` enum('Nhiếp ảnh gia','Khách hàng') NOT NULL,
  `Hinh_Thuc_Dang_Nhap` enum('User-registered','Facebook','Google') NOT NULL,
  `Thoi_Diem_Tao_TK` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thanh_toan`
--

CREATE TABLE `thanh_toan` (
  `Ma_TT` varchar(20) NOT NULL,
  `Ma_BC` varchar(20) NOT NULL,
  `So_Tien` decimal(12,2) NOT NULL,
  `Hinh_Thuc` enum('Tiền mặt','Chuyển khoản') NOT NULL,
  `Trang_Thai` enum('Chờ xác nhận','Thành công','Thất bại','Hoàn tiền') DEFAULT 'Chờ xác nhận',
  `Ngay_TT` datetime NOT NULL DEFAULT current_timestamp(),
  `Ghi_Chu` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tin_nhan`
--

CREATE TABLE `tin_nhan` (
  `Ma_TN` varchar(20) NOT NULL,
  `Ma_BC` varchar(20) NOT NULL,
  `Ma_KH` varchar(20) DEFAULT NULL,
  `Ma_NAG` varchar(20) DEFAULT NULL,
  `Noi_Dung` text NOT NULL,
  `Gui_Luc` datetime NOT NULL DEFAULT current_timestamp(),
  `Trang_Thai` enum('Đã gửi','Đã đọc') DEFAULT 'Đã gửi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `buoi_chup`
--
ALTER TABLE `buoi_chup`
  ADD PRIMARY KEY (`Ma_BC`),
  ADD KEY `Ma_NAG` (`Ma_NAG`),
  ADD KEY `Ma_KH` (`Ma_KH`);

--
-- Chỉ mục cho bảng `danh_gia`
--
ALTER TABLE `danh_gia`
  ADD PRIMARY KEY (`Ma_ĐG`),
  ADD KEY `Ma_BC` (`Ma_BC`),
  ADD KEY `Ma_KH` (`Ma_KH`),
  ADD KEY `Ma_NAG` (`Ma_NAG`);

--
-- Chỉ mục cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`Ma_KH`),
  ADD KEY `Ma_TK` (`Ma_TK`);

--
-- Chỉ mục cho bảng `nhiep_anh_gia`
--
ALTER TABLE `nhiep_anh_gia`
  ADD PRIMARY KEY (`Ma_NAG`),
  ADD KEY `Ma_TK` (`Ma_TK`);

--
-- Chỉ mục cho bảng `tai_khoan`
--
ALTER TABLE `tai_khoan`
  ADD PRIMARY KEY (`Ma_TK`),
  ADD UNIQUE KEY `So_DT` (`So_ĐT`),
  ADD UNIQUE KEY `Email_TK` (`Email_TK`);

--
-- Chỉ mục cho bảng `thanh_toan`
--
ALTER TABLE `thanh_toan`
  ADD PRIMARY KEY (`Ma_TT`),
  ADD KEY `Ma_BC` (`Ma_BC`);

--
-- Chỉ mục cho bảng `tin_nhan`
--
ALTER TABLE `tin_nhan`
  ADD PRIMARY KEY (`Ma_TN`),
  ADD KEY `Ma_BC` (`Ma_BC`),
  ADD KEY `Ma_KH` (`Ma_KH`),
  ADD KEY `Ma_NAG` (`Ma_NAG`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `buoi_chup`
--
ALTER TABLE `buoi_chup`
  ADD CONSTRAINT `buoi_chup_ibfk_1` FOREIGN KEY (`Ma_NAG`) REFERENCES `nhiep_anh_gia` (`Ma_NAG`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `buoi_chup_ibfk_2` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hang` (`Ma_KH`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `danh_gia`
--
ALTER TABLE `danh_gia`
  ADD CONSTRAINT `danh_gia_ibfk_1` FOREIGN KEY (`Ma_BC`) REFERENCES `buoi_chup` (`Ma_BC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `danh_gia_ibfk_2` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hang` (`Ma_KH`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `danh_gia_ibfk_3` FOREIGN KEY (`Ma_NAG`) REFERENCES `nhiep_anh_gia` (`Ma_NAG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD CONSTRAINT `khach_hang_ibfk_1` FOREIGN KEY (`Ma_TK`) REFERENCES `tai_khoan` (`Ma_TK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `nhiep_anh_gia`
--
ALTER TABLE `nhiep_anh_gia`
  ADD CONSTRAINT `nhiep_anh_gia_ibfk_1` FOREIGN KEY (`Ma_TK`) REFERENCES `tai_khoan` (`Ma_TK`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `thanh_toan`
--
ALTER TABLE `thanh_toan`
  ADD CONSTRAINT `thanh_toan_ibfk_1` FOREIGN KEY (`Ma_BC`) REFERENCES `buoi_chup` (`Ma_BC`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `tin_nhan`
--
ALTER TABLE `tin_nhan`
  ADD CONSTRAINT `tin_nhan_ibfk_1` FOREIGN KEY (`Ma_BC`) REFERENCES `buoi_chup` (`Ma_BC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tin_nhan_ibfk_2` FOREIGN KEY (`Ma_KH`) REFERENCES `khach_hang` (`Ma_KH`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tin_nhan_ibfk_3` FOREIGN KEY (`Ma_NAG`) REFERENCES `nhiep_anh_gia` (`Ma_NAG`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

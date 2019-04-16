-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 12, 2019 lúc 10:36 AM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sanbong`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `name` varchar(10) NOT NULL,
  `pass` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`name`, `pass`) VALUES
('admin', 'admin'),
('admin1', 'tai123'),
('dangtai', '123456'),
('dangtai070', '123456');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `datsan`
--

CREATE TABLE `datsan` (
  `madatsan` int(11) NOT NULL,
  `masanbong` varchar(10) NOT NULL,
  `tennguoidat` varchar(30) NOT NULL,
  `ngay` date NOT NULL,
  `batdau` varchar(30) NOT NULL,
  `lienhe` varchar(30) NOT NULL,
  `ghichu` varchar(100) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `datsan`
--

INSERT INTO `datsan` (`madatsan`, `masanbong`, `tennguoidat`, `ngay`, `batdau`, `lienhe`, `ghichu`, `created_at`) VALUES
(136, 'SB0', 'abc', '2019-04-12', '14h-15h', '789789', '', '2019-04-12'),
(137, 'SB0', 'abc', '2019-04-12', '8h-9h', '789789', '', '2019-04-12'),
(138, 'SB0', 'abc', '2019-04-12', '17h-18h', '789789', '', '2019-04-12'),
(139, 'SB0', 'abc', '2019-04-12', '17h-18h', '789789', '', '2019-04-12'),
(140, 'SB0', 'abc', '2019-04-12', '16h-17h', '789789', '', '2019-04-12'),
(141, 'SB0', 'abc', '2019-04-12', '16h-17h', '789789', '', '2019-04-12'),
(142, 'SB0', 'abc', '2019-04-12', '16h-17h', '789789', '', '2019-04-12'),
(143, 'SB0', 'abc', '2019-04-12', '16h-17h', '789789', '', '2019-04-12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `doibong`
--

CREATE TABLE `doibong` (
  `madoibong` varchar(30) NOT NULL,
  `mataikhoan` int(12) NOT NULL,
  `tendoi` varchar(50) NOT NULL,
  `trinhdo` varchar(30) NOT NULL,
  `anh` varchar(100) NOT NULL,
  `timdoi` int(11) NOT NULL,
  `cosan` int(11) NOT NULL,
  `thoigianthuongda` varchar(200) NOT NULL,
  `gioithieu` varchar(200) NOT NULL,
  `khuvuc` varchar(200) NOT NULL,
  `trangthai` int(11) NOT NULL,
  `created_at` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `doibong`
--

INSERT INTO `doibong` (`madoibong`, `mataikhoan`, `tendoi`, `trinhdo`, `anh`, `timdoi`, `cosan`, `thoigianthuongda`, `gioithieu`, `khuvuc`, `trangthai`, `created_at`) VALUES
('DB0', 456456, 'trung anh FC', 'Mới chơi', 'dfg', 1, 0, 'dfg', 'dfg', 'dfg', 1, '2019-04-11 17:36:22.051');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanbong`
--

CREATE TABLE `sanbong` (
  `masanbong` varchar(10) NOT NULL,
  `mataikhoan` int(12) NOT NULL,
  `loaisan` varchar(20) NOT NULL,
  `tensan` varchar(50) NOT NULL,
  `anh` varchar(100) NOT NULL,
  `thongtin` text NOT NULL,
  `khuvuc` varchar(50) NOT NULL,
  `sosan` int(11) NOT NULL,
  `gia1` int(11) NOT NULL,
  `gia2` int(11) NOT NULL,
  `gia3` int(11) NOT NULL,
  `trangthai` int(20) NOT NULL,
  `created_at` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sanbong`
--

INSERT INTO `sanbong` (`masanbong`, `mataikhoan`, `loaisan`, `tensan`, `anh`, `thongtin`, `khuvuc`, `sosan`, `gia1`, `gia2`, `gia3`, `trangthai`, `created_at`) VALUES
('SB0', 456456, 'Sân cỏ nhân tạo', 'admin@admin.com', 'assets/images/team/sport.png', '2jhhjkhjk', 'vinh', 4, 4, 5, 6, 1, '2019-04-11 17:14:11.291');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `sodienthoai` int(12) NOT NULL,
  `ten` varchar(50) NOT NULL,
  `anh` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `matkhau` varchar(200) NOT NULL,
  `created_at` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`sodienthoai`, `ten`, `anh`, `email`, `matkhau`, `created_at`) VALUES
(456456, 'fdgdfg', '', '', '$2a$10$NvoSCKo.lSzqBeb7H.AaKunlOBm1iAiGYT9SDvRE/b/WLHwjnx3Cy', '2019-04-11 17:13:45.286'),
(789789, '789789', '', '', '$2a$10$/SwbSyFnqqP4qEG/IZlv8.wCY8rx6sVlc81Q4fTA6nuL6cvDYUqAe', '2019-04-12 14:49:08.128');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongbao`
--

CREATE TABLE `thongbao` (
  `mataikhoan` int(12) NOT NULL,
  `mathongbao` varchar(20) NOT NULL,
  `created_at` varchar(30) NOT NULL,
  `noidung` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trandau`
--

CREATE TABLE `trandau` (
  `thoigian` varchar(30) NOT NULL,
  `ngay` date NOT NULL,
  `diadiem` varchar(50) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `mataikhoan` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `trandau`
--

INSERT INTO `trandau` (`thoigian`, `ngay`, `diadiem`, `noidung`, `created_at`, `mataikhoan`, `id`) VALUES
('tyu', '2019-04-12', 'tyu', 'tyutyu', '2019-04-12 09:30:31.696', 456456, 23);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`name`);

--
-- Chỉ mục cho bảng `datsan`
--
ALTER TABLE `datsan`
  ADD PRIMARY KEY (`madatsan`,`lienhe`,`batdau`,`ngay`),
  ADD KEY `masanbong` (`masanbong`);

--
-- Chỉ mục cho bảng `doibong`
--
ALTER TABLE `doibong`
  ADD PRIMARY KEY (`madoibong`),
  ADD KEY `mataikhoan` (`mataikhoan`);

--
-- Chỉ mục cho bảng `sanbong`
--
ALTER TABLE `sanbong`
  ADD PRIMARY KEY (`masanbong`),
  ADD KEY `mataikhoan` (`mataikhoan`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`sodienthoai`);

--
-- Chỉ mục cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`mathongbao`);

--
-- Chỉ mục cho bảng `trandau`
--
ALTER TABLE `trandau`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `datsan`
--
ALTER TABLE `datsan`
  MODIFY `madatsan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT cho bảng `trandau`
--
ALTER TABLE `trandau`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `datsan`
--
ALTER TABLE `datsan`
  ADD CONSTRAINT `datsan_ibfk_1` FOREIGN KEY (`masanbong`) REFERENCES `sanbong` (`masanbong`);

--
-- Các ràng buộc cho bảng `doibong`
--
ALTER TABLE `doibong`
  ADD CONSTRAINT `doibong_ibfk_1` FOREIGN KEY (`mataikhoan`) REFERENCES `taikhoan` (`sodienthoai`);

--
-- Các ràng buộc cho bảng `sanbong`
--
ALTER TABLE `sanbong`
  ADD CONSTRAINT `sanbong_ibfk_1` FOREIGN KEY (`mataikhoan`) REFERENCES `taikhoan` (`sodienthoai`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

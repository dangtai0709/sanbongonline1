-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 28, 2019 lúc 10:35 AM
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
(1, 'SB0', 'Vinh', '2019-04-28', '9h-10h', '34423', 'x', '2019-04-28');

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
('DB0', 976464922, 'FC Sông Lam', 'Trung bình', 'https://res.givator.com/pictures/11017/500/2017_02/original/image_635799873620032848_1.jpeg', 1, 0, 'Chủ Nhật hàng tuần', 'Anh em công ty ACB', ' Km2- Đường Lênin, TP Vinh – Nghệ An', 1, '2019-04-28 14:59:44.093'),
('DB1', 94948985, 'FC Xóm Liều', 'Rất mềm', 'https://www.sporta.vn/assets/default_venue_1_thumb-a447956d615cc7958aad7fdf48447dc77cafa2caccbf8fb7a', 1, 1, 'thứ 3, thứ 4, thứ 5 hàng tuần', 'Biết nhậu thì tham gia', 'Số 10 đường Kim Đồng, phường Hưng Phúc, Tp Vinh, Tỉnh Nghệ An', 1, '2019-04-28 15:03:33.449'),
('DB2', 944555504, 'CLB Hiến Máu', 'Phủi', 'http://baovinhlong.com.vn/dataimages/201904/original/images2198830_BVL_DTHU__Bong_da_HT_CNVCLD_TPVL_', 1, 1, 'Tối Chủ Nhật', 'Tình nguyện hiến máu', 'Đại Học VInh', 1, '2019-04-28 15:07:26.749'),
('DB3', 962707018, 'Kim Đồng', 'Khá', 'https://www.uef.edu.vn/newsimg/hoat-dong/Hoi%20thao/bemachoithao-2016/27.3-bemac%20(7).jpg', 1, 1, 'Chủ Nhật hàng tuần', 'đội mới thành lập', 'số 68 kim đồng', 1, '2019-04-28 15:09:21.776'),
('DB4', 1644045899, 'FC Hà Huy Tập', 'Trung bình yếu', 'https://lh5.googleusercontent.com/p/AF1QipPKpxWYypEIt9n2CcaTCLqPCskGSfltw7DJJdD5=w120-h160-k-no', 1, 1, 'Các ngày trong tuần', '', '80 Đường Hà Huy Tập, Hà Huy Tập, Thành phố Vinh, Nghệ An', 1, '2019-04-28 15:14:42.584'),
('DB5', 238, 'FC ĐàmLiêu', 'Khá mạnh', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGBcXGBcYGBgXGBYXFxcXFxcdF', 1, 1, 'Chủ Nhật hàng tuần', '', 'Hưng Bình, Thành phố Vinh, Nghệ An', 1, '2019-04-28 15:17:40.492'),
('DB6', 966022589, 'FC  Hernnman', 'Trung bình yếu', 'https://graph.facebook.com/319614798229940/picture?type=large&redirect=true', 1, 1, 'Chủ Nhật hàng tuần', '', 'Ngõ số 2, đường Hernnman Vinh', 1, '2019-04-28 15:24:36.009'),
('DB7', 911456456, 'FC tòa án', 'Trung bình', 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/17309641_10155115531589419_471390823176190627_n.jpg?', 1, 1, 'Th]ứ 5 hàng tuần', '', ' Đường Phú Yên Vinh', 1, '2019-04-28 15:33:18.643');

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
('SB0', 976464922, 'Sân cỏ nhân tạo', 'Sân CLB', 'https://res.givator.com/pictures/11017/500/2017_02/original/image_635799873620032848_1.jpeg', 'Sân mới thành lập', ' Km2- Đường Lênin, TP Vinh – Nghệ An', 4, 150, 200, 300, 1, '2019-04-28 14:58:13.081'),
('SB1', 94948985, 'Sân cỏ tự nhiên', 'Sân bóng Hưng Phúc', 'https://www.sporta.vn/assets/default_venue_1_thumb-a447956d615cc7958aad7fdf48447dc77cafa2caccbf8fb7a', 'Sân phía sau chợ Hưng Dũng', 'Số 10 đường Kim Đồng, phường Hưng Phúc, Tp Vinh, T', 4, 150, 200, 200, 1, '2019-04-28 15:02:15.563'),
('SB2', 944555504, 'Sân cỏ nhân tạo', 'Sân Đại Học Vinh', 'http://baovinhlong.com.vn/dataimages/201904/original/images2198830_BVL_DTHU__Bong_da_HT_CNVCLD_TPVL_', 'Sân dành cho sinh viên', 'Đại Học Vinh', 4, 200, 200, 200, 1, '2019-04-28 15:06:35.193'),
('SB3', 962707018, 'Sân cát', 'Kim Đồng(Quân đội)', 'https://www.uef.edu.vn/newsimg/hoat-dong/Hoi%20thao/bemachoithao-2016/27.3-bemac%20(7).jpg', 'Sân bóng nằm trong doanh trại quân đội', 'Số 68 Kim Đồng', 4, 250, 250, 250, 1, '2019-04-28 15:11:03.723'),
('SB4', 1644045899, 'Sân cỏ tự nhiên', 'Trang Bùi', 'https://lh5.googleusercontent.com/p/AF1QipPKpxWYypEIt9n2CcaTCLqPCskGSfltw7DJJdD5=w120-h160-k-no', '', '80 Đường Hà Huy Tập, Hà Huy Tập, Thành phố Vinh, N', 4, 200, 200, 200, 1, '2019-04-28 15:13:29.331'),
('SB5', 238, 'Sân cỏ nhân tạo', 'Hưng Bình', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXGBcXGBcYGBgXGBYXFxcXFxcdF', '', 'Hưng Bình, Thành phố Vinh, Nghệ An', 2, 200, 200, 200, 1, '2019-04-28 15:16:46.856'),
('SB6', 946671268, 'Sân cỏ nhân tạo', 'SÂN BÓNG ĐÁ HANDICO VINH TÂN', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMSFRUVFxcYFxYWFRcZGBgYGBcXGBgdG', '', 'Đặng Nguyên Cẩn ,Vinh Tân ', 2, 300, 300, 300, 1, '2019-04-28 15:20:25.241'),
('SB7', 966022589, 'Sân cỏ tự nhiên', 'H83', 'https://graph.facebook.com/319614798229940/picture?type=large&redirect=true', '', 'Ngõ số 2, đường Hernnman Vinh', 2, 250, 200, 200, 1, '2019-04-28 15:23:57.110'),
('SB8', 911456456, 'Sân cỏ tự nhiên', 'Sân tòa án', 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/17309641_10155115531589419_471390823176190627_n.jpg?', '', 'Đường Phú Yên Vinh', 2, 200, 200, 180, 1, '2019-04-28 15:32:40.235');

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
(238, 'Nguyễn Cảnh Hưng', '', '', '$2a$10$rHj5K3IgK3jpoSO.btXmeuBLxH2um4Z7irmK96cNRCnhDwNoiuxj.', '2019-04-28 15:15:41.703'),
(94948985, 'Hồ Văn Bảo Anh', '', '', '$2a$10$9t8S/3zIwOaV87oGZ5P6DuoL9qj7c3H.J7ii/o6DvjrXcpBkRwjvy', '2019-04-28 15:01:05.431'),
(911456456, 'Trần Văn Tùng', '', '', '$2a$10$kR8t8acPdeNxU6XiwgDrEu8odXDwlxujP3Uyblx.mBPyYp.ZyqmJ6', '2019-04-28 15:31:17.318'),
(944555504, 'Vy Thị Quỳnh', '', '', '$2a$10$AlUmcn47wxSSYJ0Vg8ggZ.dcT7qek7O3RaNWefNMI1zk/o1/M6NAy', '2019-04-28 15:04:57.237'),
(946671268, 'Phan Quốc Huy', '', '', '$2a$10$Js8XG0UUyuLlFIRzfXoRgej1wWLvzf3jj59HO9gQSMrSJbY/3tvkq', '2019-04-28 15:19:20.165'),
(962707018, 'Kim Văn Quang', '', '', '$2a$10$zqIa7UZd0/FJe2TTQHsy8eQcUFA4YLmx/cGOCIvu6pcDq2jKU2XFS', '2019-04-28 15:08:07.684'),
(966022589, 'Nguyễn Bích Tân', '', '', '$2a$10$o2OOfTcWrgbu1.Phd3kmqecdRremE4.NswEW8hfxS.Y0ion/jbadG', '2019-04-28 15:23:16.989'),
(976464922, 'Hồ Quốc Anh', '', '', '$2a$10$VFP6YMr.Z6t9usomCdtJ.OE012g6aL34Oj1mcqmOx7lFLzI2ClbBy', '2019-04-28 14:55:39.750'),
(1644045899, 'Bùi văn Trang', '', '', '$2a$10$zUrDUCKbEcAS3cwc2Wz2cOY5QdGbIEkBcNKecc/E.xFiGZ1GGCEy6', '2019-04-28 15:12:28.957');

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

--
-- Đang đổ dữ liệu cho bảng `thongbao`
--

INSERT INTO `thongbao` (`mataikhoan`, `mathongbao`, `created_at`, `noidung`) VALUES
(0, 'TB0', '2019-4-28', 'Chào mừng các bạn đến với Sân Bóng Vinh'),
(0, 'TB1', '2019-4-28', 'Giải bóng đá trẻ U15 khu vực Vinh sẽ tổ chức vào 1/6  liên hệ 0966022589 để đăng ký');

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
('4h', '2019-04-28', 'dfsdf', 'fghfgh', '2019-04-28 15:29:12.769', 0, 1),
('sf', '2019-04-28', '4', 'sdfsdf', '2019-04-28 15:33:27.899', 911456456, 2);

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
  MODIFY `madatsan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `trandau`
--
ALTER TABLE `trandau`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

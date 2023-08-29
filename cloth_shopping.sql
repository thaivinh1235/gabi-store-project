-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2023 at 08:19 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloth_shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_users`
--

CREATE TABLE `account_users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account_users`
--

INSERT INTO `account_users` (`id`, `full_name`, `phone`, `email`, `user_name`, `password`, `role`) VALUES
(23, 'Huy Trần', '0934198400', 'trandoquanghuy123@gmail.com', 'cindy123', '$2b$10$RrgW.KaXeVI43xFpTUoWyeWC.SMPOo/DYZq.vXnYILr7x8a1pZbg2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `shortDescribtion` varchar(255) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `img`, `title`, `shortDescribtion`, `date`) VALUES
(1, '//bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/style-nam-don-gian-yodyvn.jpg?v=1688526840737', 'Gợi ý 15 cách phối đồ style nam đơn giản mà HÚT MẮT', 'Đối với những người không thích diện đồ phức tạp, cầu kỳ thì phong cách basic chính là lựa chọn hoàn hảo nhất. Tuy đơn giản nhưng style này không bao giờ lỗi mốt. Dưới đây,...', '2023-08-08'),
(2, '//bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/dong-ho-nam-cao-cap-yody-vn.jpg?v=1685757921870', '15 thương hiệu đồng hồ nam cao cấp - đẳng cấp phái mạnh', 'Bạn đang tìm kiếm những thương hiệu đồng hồ nam cao cấp nhưng không biết đâu là địa chỉ tin cậy. Cùng GABI theo dõi bài viết chi tiết dưới đây để có thêm thật nhiều...', '0000-00-00'),
(3, 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2021/chang-trai-co-dien10.jpg', '20 phong cách phối đồ cực lịch lãm dành cho Nam', ' Những khi được mời đi dự tiệc cưới thì câu hỏi đầu tiên mà các chàng trai luôn đặt ra đó là “đi đám cưới mặc gì”. Trong bài viết này, Coolmate sẽ cùng các chàng trai tìm hiểu nhé\r\n                ', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quanity` int(11) NOT NULL,
  `sub_total` int(11) NOT NULL,
  `shipping` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `id_product_detail` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `name`) VALUES
(1, 'shirts'),
(2, 'polos'),
(3, 'pants');

-- --------------------------------------------------------

--
-- Table structure for table `deliver_info`
--

CREATE TABLE `deliver_info` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `id_cart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `method_paying`
--

CREATE TABLE `method_paying` (
  `id` int(11) NOT NULL,
  `method` varchar(255) NOT NULL,
  `id_deliver_info` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` float(10,3) NOT NULL DEFAULT 0.000,
  `buy` int(11) NOT NULL DEFAULT 0,
  `new` int(1) NOT NULL DEFAULT 0,
  `type` varchar(255) NOT NULL,
  `mainDescription` varchar(255) NOT NULL,
  `subDescription` varchar(255) NOT NULL,
  `fromTo` varchar(255) NOT NULL,
  `id_danhmuc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `img`, `img2`, `name`, `price`, `buy`, `new`, `type`, `mainDescription`, `subDescription`, `fromTo`, `id_danhmuc`) VALUES
(1, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/July2023/HN-TU_HAO-3.jpg', NULL, 'Áo thun Cotton Care & Share The Moments', 249.000, 10, 0, 'Áo thun', 'Cập nhật xu hướng hiện đại với áo phối tay từ GABI STORE, với kiểu dáng phối tay bằng chất liệu phản quang, giúp tạo điểm nhấn cho chiếc áo trở nên nổi bật hơn. Cùng chất vải cotton thoáng mát, tạo nên sự thoải mái trong hoạt động thường ngày', '.Chất liệu: 100% Cotton\r\n.Định lượng vải 220gsm dày dặn\r\n.Vải được xử lí hoàn thiện giúp bề mặt vải ít xù lông, mềm mịn và bền màu hơn\r\n.Độ dày vải vừa phải, thoải mái, thoáng mát\r\n.Phù hợp mặc hàng ngày\r\n', 'Việt Nam', 1),
(2, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Quan_lot_Gym_Powerfit-listing-26.jpg', 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Drop_Arm_Gym_Powerfit_Xanh_ngoc_2.jpg', 'Áo thun gym Powerfit - Xám đậm', 299.000, 30, 1, 'Áo thun', 'Đa dạng kiểu dáng hơn cho tủ đồ thường ngày, phiên bản áo thun rã phối màu GABI STORE trẻ trung, năng động. Chất liệu Cotton tự nhiên, nhẹ, mát, co giãn linh hoạt thích hợp cho ngày dài thật bận rộn.\r\n', 'Chất liệu: 86% Poly + 14% Spandex.\r\nCo giãn 4 chiều mang lại sự thoải mái để bạn vận động hết mình.\r\nChất liệu thấm mồ hôi và khô nhanh, thoáng khí mang lại khả năng khô thoáng vượt trội.\r\nKiểu dáng áo: Form Slim fit.\r\n**Hạn chế giặt máy ở các chế độ mạnh', 'Việt Nam', 1),
(3, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Ao_thun_Cotton_Summer_Coolwaves-23-5.jpg', 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/_CMM1374.jpg', 'Áo thun Cotton Summor Coolwaves', 199.000, 50, 1, 'Áo thun', 'Ra mắt dòng Áo thun tay raglan cotton mới nhất từ GABI STORE với 3 gam màu trung tín. Form dáng Regular thoải mái cùng kiểu dáng basic thoả sức sáng tạo outfits hằng ngày.', 'Chất liệu: 100% Cotton.\r\nXử lí hoàn thiện giúp bề mặt vải ít xù lông, mềm mịn và bền màu hơn.\r\nKiểu dệt Pique giúp áo thoáng mát.\r\nĐộ dày vải vừa phải giúp áo tôn dáng.\r\nPhù hợp với đi làm, đi chơi.', 'Việt Nam', 1),
(4, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/10krun-front.jpg', NULL, 'Áo thun chạy bộ Quick Dry in Graphic', 129.000, 122, 0, 'Áo thun', 'Đây là chiếc áo rất nhẹ, gọn, đẹp và mặc rất thoải mái. Áo mặc rất mát, nhanh khô vì nhờ bề mặt có nhiều lỗ thoát khí. Giúp bạn nhanh nhẹn, năng động mỗi ngày', 'Chất liệu: 97% Polyester Quick-Dry + 3% Spandex.\r\nXử lý hoàn thiện vải: Quick-Dry + Wicking + Stretch.\r\nCông nghệ Chafe-Free hạn chế tối đa ma sát trong quá trình vận động từ các đường may tối giản hoá.\r\nSản phẩm được đánh giá phù hợp với hoạt động chạy b', 'Việt Nam', 1),
(5, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2023/zzCotton_100_-_Xanh_2D_-_Front_1.jpg', NULL, 'Áo thun nam Cotton Basics - Xanh đậm', 149.000, 210, 0, 'Áo thun', 'Từ những đường may cơ bản tối giản hóa, hạn chế sự ma sát các đường may trong quá trình vận động. Giúp người mặc tập trung vào những hoạt động của mình. Tà thân sau dài hơn thân trước để tăng độ che chắn', 'Chất liệu: 100% Polyester.\r\nXử lý hoàn thiện vải: Quick-Dry + Wicking + Stretch.\r\nCông nghệ Chafe-Free hạn chế tối đa ma sát trong quá trình vận động từ các đường may tối giản hoá\r\nTrọng lượng áo chỉ 76 gam.\r\nSản phẩm được đánh giá phù hợp với hoạt động c', 'Việt Nam', 1),
(6, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/Ao_thun_chay_bo_nam_Essential_Fast__Free_Run5.jpg', 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/thumbDSC05568_copy.jpg', 'Áo thun chạy bộ nam', 159.000, 22, 1, 'Áo thun', 'Từ những đường may cơ bản tối giản hóa, hạn chế sự ma sát các đường may trong quá trình vận động. Giúp người mặc tập trung vào những hoạt động của mình. Tà thân sau dài hơn thân trước để tăng độ che chắn', 'Chất liệu: 100% Polyester.\r\nXử lý hoàn thiện vải: Quick-Dry + Wicking + Stretch.\r\nCông nghệ Chafe-Free hạn chế tối đa ma sát khi vận động nhờ các đường may tối giản.\r\nSản phẩm được đánh giá phù hợp với hoạt động chạy bộ bởi các Runner chuyên nghiệp.', 'Việt Nam', 1),
(7, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/May2023/sat-nach-aqua.jpg.png', NULL, 'Áo sát nách thể thao Dri-Breathe', 189.000, 39, 0, 'Áo thun', '\"Để những ngày hè nắng nóng luôn tràn đầy năng lượng thì áo Tanktop siêu thoáng khí sẽ là lựa chọn hoàn hảo. Khoẻ khoắn bên ngoài, mát lạnh bên trong nhờ chất vải Cotton mềm mại, mỏng nhẹ cùng kiểu dáng áo ba lỗ đầy năng động, thoải mái khi vận động\"', 'Chất liệu: 86% Poly + 14% Spandex. Co giãn 4 chiều mang lại sự thoải mái để bạn vận động hết mình. Chất liệu thấm mồ hôi và khô nhanh, thoáng khí mang lại khả năng khô thoáng vượt trội. Kiểu dáng áo: Form Slim fit.', 'Việt Nam', 1),
(8, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Drop_Arm_Gym_Powerfit_Xanh_ngoc_2.jpg', NULL, 'Áo Drop Arm Gym Powerfit - Xanh ngọc', 199.000, 102, 0, 'Áo thun', 'Form áo tôn dáng. Nách không xẻ sâu, làm áo ôm ngực hơn và khoe cơ ngực. Co giãn 4 chiều, thoải mái vận động hết mình', 'Chất liệu: 86% Poly + 14% Spandex\r\nCo giãn 4 chiều mang lại sự thoải mái để bạn vận động hết mình\r\nChất liệu thấm mồ hôi và khô nhanh, thoáng khí mang lại khả năng khô thoáng vượt trội\r\nKiểu dáng áo: Form Slim fit', 'Việt Nam', 1),
(9, 'https://pos.nvncdn.net/d0f3ca-7136/ps/20230606_bC3OElfm.jpg', NULL, 'Áo thun ba lỗ nam - GABI STORE - ANY WHERE', 216.000, 131, 0, 'Áo thun', '\"Để những ngày hè nắng nóng luôn tràn đầy năng lượng thì áo Tanktop siêu thoáng khí sẽ là lựa chọn hoàn hảo. Khoẻ khoắn bên ngoài, mát lạnh bên trong nhờ chất vải Cotton mềm mại, mỏng nhẹ cùng kiểu dáng áo ba lỗ đầy năng động, thoải mái khi vận động\"', 'Chất liệu: 86% Poly + 14% Spandex.\r\nCo giãn 4 chiều mang lại sự thoải mái để bạn vận động hết mình.\r\nChất liệu thấm mồ hôi và khô nhanh, thoáng khí mang lại khả năng khô thoáng vượt trội.\r\nKiểu dáng áo: Form Slim fit.', 'Việt Nam', 1),
(10, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2021/IMG_64714.jpg', NULL, 'Áo Polo thể thao Promax thoáng khí', 239.000, 302, 0, 'Polo', 'Bề mặt vải nhiều lỗ nhỏ gia tăng sự thoát ẩm, giúp chiếc áo nhanh khô. Được xử lí hoàn thiện tính năng Quick-dry và Wicking cho bạn luôn thoáng mát và dễ chịu , tăng khả năng khử mùi', 'Chất liệu: 100% Poly, định lượng vải 155gsm siêu nhẹ.\r\nXử lý hoàn thiện vải: Quick-Dry và Wicking.\r\nPhù hợp với: đi làm, đi chơi, mặc ở nhà.\r\nKiểu dáng: Regular fit dáng suông.', 'Việt Nam', 2),
(11, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2022/DSC00703_copy.jpg', NULL, 'Áo Polo Woven Excool - Xám', 299.000, 120, 0, 'Polo', 'Nếu bạn đang tìm một chiếc áo sơ mi nam trẻ trung mà khó hãy đến ngay GABI STORE để trải nghiệm chiếc áo sơ mi Excool đầu tiên đem đến sự thoải mái, mới mẻ.', 'Chất liệu: 53% Polyester PET high stretch + 47% Polyester PTT Sorona.\r\nPhù hợp với: đi chơi, đi làm, tham gia hoạt động lịch sự.\r\nKiểu dáng: regularfit dáng suông.\r\nTự hào sản xuất tại Việt Nam.', 'Việt Nam', 2),
(12, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Ao_Cuban_Collar_Shirt_Coolwaves_-_mau_Xanh_Navy-9.jpg', NULL, 'Áo Polo Collar - Màu xanh Navy', 399.000, 450, 0, 'Polo', 'Vẫn giống như chiếc áo polo nam hàng hiệu ProMax-S1, những thiết kế ở chiếc áo polo nam ProMax-S2 vẫn được Coolmate thiết kế rất là tỉ mỉ và chỉnh chu từ viển cổ và chất vải không bị nhăn.\r\n', 'Chất liệu: 100% Polyester hoàn thiện vải bằng công nghệ Wicking (thấm hút nhanh).\r\nPhù hợp với: đi làm, đi chơi, mặc ở nhà.\r\nKiểu dáng: Slight slim fit.\r\nVải dệt kiểu Mesh và nhuộm theo quy trình không nước thải của nhà máy đạt tiêu chuẩn quốc tế.', 'Việt Nam', 2),
(13, 'https://media.coolmate.me/cdn-cgi/image/quality=80/image/June2023/random-banner-ao_nam-2.jpg', NULL, 'Áo Polo thoáng mát - Xanh ngọc', 209.000, 305, 0, 'Polo', 'Bề mặt vải nhiều lỗ nhỏ gia tăng sự thoát ẩm, giúp chiếc áo nhanh khô. Được xử lí hoàn thiện tính năng Quick-dry và Wicking cho bạn luôn thoáng mát và dễ chịu , tăng khả năng khử mùi', 'Chất liệu: 97% Cotton USA + 3% Spandex, co giãn 4 chiều\r\nPhù hợp với: đi làm, đi chơi\r\nTự hào sản xuất tại Việt Nam', 'Việt Nam', 2),
(14, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/2anh-mau-polo-graphene-den-4.jpg', 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2022/ao-polo-graphene-xanh-aqua-8.jpg', 'Áo Polo Nam co dãn công nghệ Grephene', 449.000, 499, 1, 'Polo', 'Chắc chắn đây sẽ là chiếc áo polo nam xứng đáng có trong tủ đồ của các chàng. Áo Polo nam co giãn công nghệ Graphene với chất liệu vải 100% Polyester PTT và nhiều tính năng công nghệ tuyệt vời sẽ đem đến trải nghiệm mặc \"có 1 không 2\". Hãy cùng tìm hiểu x', 'Sản phẩm áo đầu tiên của Coolmate ứng dụng vật liệu mới Graphene vào công đoạn hoàn tất.\r\nChất liệu 100% Polyester PTT, nhẹ, thoáng khí, co giãn tuyệt vời.\r\nChiếc áo đầu tiên có 6 tính năng: Mát mẻ, Khử mùi, Chống UV, Chống tĩnh điện, Kháng khuẩn và nấm, ', 'Việt Nam', 2),
(15, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/Polo_v2_navy_3.jpg', NULL, 'Áo Polo thể thao Nam active V2', 449.000, 694, 0, 'Polo', 'Kiểu tay áo Reglan nối theo đường chéo từ cổ áo xuống nách giúp phần nách không bị cộm vì vải thừa, thoải mái vận động, vui tươi cả ngày', 'Chất liệu: 100% Recycled Polyester\r\nĐịnh lượng vải 140gsm siêu nhẹ\r\nCông nghệ ứng dụng: Wicking & Quick-Dry\r\nKiểu dáng: áo Polo thể thao vừa vặn\r\nNhà cung cấp vải lĩnh vực đồ thể thao hàng đầu: Promax', 'Việt Nam', 2),
(16, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/DSC05220_copy.jpg', NULL, 'Áo Polo nam thể thao nhuộm sạch Cleandye', 449.000, 594, 0, 'Polo', '100% Polyster được xử lí hoàn thiện tính năng Quick-dry và Wicking cho bạn thoát mát và dễ chịu. Bên cạnh đó, Cleandye là công nghệ nhuộm vải KHÔNG SỬ DỤNG NƯỚC và HÓA CHẤT đầu tiên tại Việt Nam', 'Chất liệu: 100% Polyester.\r\nXử lý hoàn thiện vải: Wicking & Quick Dry.\r\nPhù hợp với: đi làm, đi chơi, mặc ở nhà.\r\nKiểu dáng: áo hơi ôm eo để mang đến sự vừa vặn\r\nClean Dye - Công nghệ nhuộm vải KHÔNG SỬ DỤNG NƯỚC và hoá chất đầu tiên trên thế giới với nhà', 'Việt Nam', 2),
(17, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2021/uBT5A9094_copy.jpg', NULL, 'Áo polo excool', 449.000, 410, 0, 'Polo', 'Bề mặt vải mềm mịn hơn sợi Cotton, thấm hút, nhanh khô, co giãn 4 chiều, chống tia UV, siêu nhẹ và mềm mại', 'Chất liệu: 56% Polyester PET + 44% Polyester PTT Sorona\r\nPhù hợp với: đi làm, đi chơi, mặc ở nhà\r\nSản xuất trực tiếp tại Quận 12, Hồ Chí Minh, Việt Nam', 'Việt Nam', 2),
(18, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/February2023/Polo_v1_recy_xam_dam.jpg', NULL, 'Áo Polo thể thao nam Active V1', 449.000, 500, 0, 'Polo', '100% Polyster được xử lí hoàn thiện tính năng Quick-dry và Wicking cho bạn thoát mát và dễ chịu. Bên cạnh đó, Cleandye là công nghệ nhuộm vải KHÔNG SỬ DỤNG NƯỚC và HÓA CHẤT đầu tiên tại Việt Nam', 'Chất liệu: 100% Recycled Polyester.\r\nĐịnh lượng vải 130gsm siêu nhẹ.\r\nCông nghệ ứng dụng: Wicking & Quick-Dry.\r\nKiểu dáng: áo Polo thể thao vừa vặn.\r\nNhà cung cấp vải lĩnh vực đồ thể thao hàng đầu: Promax', 'Việt Nam', 2),
(19, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/sDSC04326-copy1_54.jpg', NULL, 'Quần short nam thể thao thoáng khí - Xám xanh', 149.000, 41, 0, 'Quần short', 'Công nghệ Ultrasonic sử dụng các tia laser để cắt vải giúp cho vải không bị lộ các tua rua, tối giản hóa các đường may, tăng tính thời trang, giúp bạn luôn thoải mái trong quá trình vận động', 'Chất liệu: 89% Recycled Polyester - 11% Spandex.\r\nXử lý hoàn thiện vải: Quick-Dry + Wicking + Stretch.\r\nCông nghệ Chafe-Free hạn chế tối đa ma sát trong quá trình vận động từ các đường may tối giản hoá\r\nSản phẩm được đánh giá phù hợp với hoạt động chạy bộ', 'Việt Nam', 3),
(20, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/xam-nhat-1.jpg', NULL, 'Quần short nam thể thao', 115.000, 492, 0, 'Quần short', 'Quần Shorts Nam được GABI nghiên cứu và phát triển rất nhiều dòng sản phẩm từ kiểu dáng quần thể thao đến quần casual cùng các chất liệu đa dạng. Và nếu bạn đã sở hữu những chiếc quần short khác của GABI thì không thể bỏ lỡ chiếc quần version \"ra đời sau\"', 'Chất liệu: 80% Cotton + 17% Polyester + 3% Spandex.\r\nChất liệu vải cứng cáp, không nhăn, có độ co giãn.\r\nKiểu dệt French Terry mang lại sự mát mẻ khi tiếp xúc với da.\r\nPhù hợp với: mặc nhà, đi dạo.\r\nĐộ dài quần: 8 inch.', 'Việt Nam', 3),
(21, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/daily-shorts-xam-2.jpg', NULL, 'Quần short nam Daily Short (có túi sau)', 189.000, 75, 0, 'Quần short', 'Thiết kế hiện đại, tôn dáng, khoe được phần đùi khỏe khoắn. Co giãn 4 chiều thoải mái vận động. Chất liệu thấm hút nhanh, giúp bạn khô thoáng, thoải mái vận động trong 1 ngày', 'Chất liệu: 100% Polyester.\r\nVải xử lí tính năng: Wicking (Thấm hút nhanh), 4-way Mechanical stretch (Co giãn 4 chiều) và Quick-Dry (Nhanh khô).\r\nVải được dệt kiểu Double Weaving và nhuộm bằng công nghệ Zero Water Discharge (Không nước thải) theo đuổi xu h', '', 3),
(22, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2022/graphene_111.jpg', 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/_CMM0295.jpg', 'Quần short nam thể thao co dãn Graphene', 179.000, 84, 1, 'Quần short', 'Thiết kế hiện đại, tôn dáng, khoe được phần đùi khỏe khoắn. Co giãn 4 chiều thoải mái vận động. Chất liệu thấm hút nhanh, giúp bạn khô thoáng, thoải mái vận động trong 1 ngày', 'Vải chính: 100% Polyester.\r\nVải lót: 86% Poly + 14% Spandex.\r\nCo giãn 4 chiều mang lại sự thoải mái để bạn vận động hết mình.\r\nChất liệu thấm mồ hôi và khô nhanh, thoáng khí. mang lại khả năng khô thoáng vượt trội.\r\nĐộ dài quần: 5 \"', 'Việt Nam', 3),
(23, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/DSC01693-copymovexanh.jpg', NULL, 'Quần short nam Movement co giãn - Xanh rêu', 167.000, 694, 0, 'Quần short', 'Ứng dụng Công nghệ Graphene vào hoàn tất vải mang lại 6 tính năng ưu việt: Thấm hút, Nhanh khô, Kháng khuẩn, Chống UV, Cooling, Khử mùi.\r\nCó thể giặt máy với nước lạnh, không nên sấy và sử dụng chất tẩy, lộn ngược khi giặt để bền hơn\r\nCo giãn tốt nhờ nhờ ', 'Chất liệu 100% sợi Polyester PTT mang lại độ co giãn tốt\r\nCông nghệ ứng dụng Graphene vào hoàn tất vải mang lại 6 tính năng ưu việt: Thấm hút, Nhanh khô, Kháng khuẩn, Chống UV, Cooling, Khử mùi.\r\nPhù hợp với: vận động thể thao\r\nĐộ dài quần: 7 inch', 'Việt Nam', 3),
(24, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2022/DSC07211_copy.jpg', NULL, 'Quần short thể thao Function', 99.000, 784, 0, '', 'Chiếc quần short chạy bộ mà bạn chọn ra đầu tiên trong tủ đồ. Chất liệu vải nhẹ, thấm hút mồ hôi nhanh để bạn luôn cảm thấy khô ráo, thoải mái giúp bạn tự tin trên mọi đường chạy', 'hất liệu: 100% Polyester.\r\nXử lý hoàn thiện vải: Quick-Dry + Wicking + Stretch.\r\nCông nghệ Chafe-Free hạn chế tối đa ma sát trong quá trình vận động từ các đường may tối giản hoá\r\nPhù hợp với: chơi thể thao, chạy bộ. Được đánh giá bởi các Runner chuyên ng', 'Việt Nam', 3),
(25, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/Quan_short_nam_the_thao_722_New_Ultra_xam_nhat.jpg', NULL, 'Quần short nam thể thao New Ultra', 129.000, 421, 0, 'Quần short', 'Chất liệu 60% Cotton mềm mại cùng kiểu dệt CVC tạo độ thoáng hơn giữa các sợi, đem đến cho bạn trải nghiệm thoáng hơn và mát hơn khi mặc. Lưng quần chun êm ái, có dây co rút để bạn thoải mái điều chỉnh độ ôm', 'Là sản phẩm của sự hợp tác giữa Coolmate và Disney - đơn vị sở hữu bản quyền Marvel.\r\nChất liệu: 60% Cotton + 35% Polyester + 5% Spandex đem đến bề mặt vải cứng cáp, không nhăn\r\nKiểu dệt French Terry mang lại sự Cooling khi tiếp xúc với da.\r\nPhù hợp với: ', 'Việt Nam', 3),
(26, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2022/quan-short-promax-s1-xanh-navy-4.jpg', NULL, 'Quần short nam ProMax thoáng khí - Xanh Navy', 189.000, 210, 0, '', '', '', '', 3),
(27, 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/s1DSC04215-copy12_90.jpg', NULL, 'Quần short nam thể thao thoáng khí - Xám chỉ', 216.000, 102, 0, '', '', '', '', 3);

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `id` int(11) NOT NULL,
  `name_detail` varchar(255) NOT NULL,
  `price_detail` int(11) NOT NULL,
  `img_detail` varchar(255) NOT NULL,
  `quanity_detail` int(11) NOT NULL,
  `id_products` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_users`
--
ALTER TABLE `account_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connect_cart_detail` (`id_product_detail`);

--
-- Indexes for table `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliver_info`
--
ALTER TABLE `deliver_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connect_deliver_cart` (`id_cart`);

--
-- Indexes for table `method_paying`
--
ALTER TABLE `method_paying`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connect_method_deliver` (`id_deliver_info`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connet_products_danhmuc` (`id_danhmuc`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connect_product-detail_products` (`id_products`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_users`
--
ALTER TABLE `account_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `deliver_info`
--
ALTER TABLE `deliver_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `method_paying`
--
ALTER TABLE `method_paying`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `product_detail`
--
ALTER TABLE `product_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `connect_cart_detail` FOREIGN KEY (`id_product_detail`) REFERENCES `product_detail` (`id`);

--
-- Constraints for table `deliver_info`
--
ALTER TABLE `deliver_info`
  ADD CONSTRAINT `connect_deliver_cart` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id`);

--
-- Constraints for table `method_paying`
--
ALTER TABLE `method_paying`
  ADD CONSTRAINT `connect_method_deliver` FOREIGN KEY (`id_deliver_info`) REFERENCES `deliver_info` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `connet_products_danhmuc` FOREIGN KEY (`id_danhmuc`) REFERENCES `danhmuc` (`id`);

--
-- Constraints for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD CONSTRAINT `connect_product-detail_products` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

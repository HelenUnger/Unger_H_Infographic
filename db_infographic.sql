-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 01, 2018 at 10:18 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_planet`
--

DROP TABLE IF EXISTS `tbl_planet`;
CREATE TABLE IF NOT EXISTS `tbl_planet` (
  `planet_id` int(11) NOT NULL AUTO_INCREMENT,
  `planet_name` varchar(20) NOT NULL,
  `planet_tag` varchar(50) NOT NULL,
  `planet_year` varchar(20) NOT NULL,
  `planet_distance` varchar(30) NOT NULL,
  `planet_moons` int(4) NOT NULL,
  `planet_type` varchar(20) NOT NULL,
  PRIMARY KEY (`planet_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_planet`
--

INSERT INTO `tbl_planet` (`planet_id`, `planet_name`, `planet_tag`, `planet_year`, `planet_distance`, `planet_moons`, `planet_type`) VALUES
(1, 'Mercury', 'The Swiftest Planet', '87.96 Earth days', '57.9 million km', 0, 'Terrestrial'),
(2, 'Venus', 'Planetary Hot Spot', '224.68 Earth days', '108.2 million km', 0, 'Terrestrial'),
(3, 'Earth', 'Our Home Planet', '365.26 days', '149.6 million km', 1, 'Terrestrial'),
(4, 'Mars', 'The Red Planet', '686.98 Earth days', '227.9 million km', 2, 'Terrestrial'),
(5, 'Jupiter', 'Twice as massive as all the other planets combined', '11.862 Earth years', '778.3 million km', 67, 'Gas Giant'),
(6, 'Saturn', 'Jewel of Our Solar System', '29.456 Earth years', '1,427.0 million km', 62, 'Gas Giant'),
(7, 'Uranus', 'The Sideways Planet', '84.07 Earth years', '2,871.0 million km', 27, 'Ice Giant'),
(8, 'Neptune', 'The Windiest Planet', '164.81 Earth years', '4,497.1 million km', 13, 'Ice Giant');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

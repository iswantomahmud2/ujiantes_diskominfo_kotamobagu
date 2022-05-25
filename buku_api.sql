-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Bulan Mei 2022 pada 10.24
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `buku_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_buku`
--

CREATE TABLE `tb_buku` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `tahun` varchar(255) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data untuk tabel `tb_buku`
--

INSERT INTO `tb_buku` (`id`, `judul`, `pengarang`, `penerbit`, `tahun`, `isbn`) VALUES
(1, 'Future story', 'David Christian ; penerjemah, Zia Anshor ; editor, Siti Gretiani', 'PT. Gramedia Pustaka Utama', '2010', '978-602-06-6260-2 '),
(2, 'Gelap-terang hidup Kartini', 'tim penyusun, Leila S. Chudori, ', 'Kepustakaan Populer Gramedia (KPG)', '2011', '978-602-481-842-5 '),
(3, 'Para pencemas', 'Fredrik Backman ; alih bahasa, Eka Budiarti ; editor, Bayu Anangga', 'PT. Gramedia Pustaka Utama', '2010', '978-602-06-6250-3 '),
(4, 'Jendela informatika', 'Subhan Maulana ; editor, Dwi Maryana', 'CV Arya Duta', '2010', '978-623-273-340-4 ');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_member`
--

CREATE TABLE `tb_member` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `no_hp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data untuk tabel `tb_member`
--

INSERT INTO `tb_member` (`id`, `nama`, `alamat`, `no_hp`) VALUES
(1, 'Jonshon Frederick', 'Jl.xxx', '08xxx'),
(2, 'Albert Manson', 'Jl.xxx', '08xxx'),
(3, 'William Farmer', 'Jl.xxx', '08xxx');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `id` int(11) NOT NULL,
  `id_member` varchar(255) DEFAULT NULL,
  `id_buku` varchar(255) DEFAULT NULL,
  `status` enum('pinjam','kembali') DEFAULT NULL,
  `tanggal_pinjam` date DEFAULT NULL,
  `tanggal_kembali` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data untuk tabel `tb_transaksi`
--

INSERT INTO `tb_transaksi` (`id`, `id_member`, `id_buku`, `status`, `tanggal_pinjam`, `tanggal_kembali`) VALUES
(3, '1', '1', 'pinjam', '2022-05-25', '2022-06-01'),
(4, '2', '4', 'pinjam', '2022-05-25', '2022-06-01'),
(5, '2', '4', 'pinjam', '2022-05-25', '2022-06-01');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_buku`
--
ALTER TABLE `tb_buku`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indeks untuk tabel `tb_member`
--
ALTER TABLE `tb_member`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indeks untuk tabel `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_buku`
--
ALTER TABLE `tb_buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tb_member`
--
ALTER TABLE `tb_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

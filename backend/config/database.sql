-- Create Database
CREATE DATABASE IF NOT EXISTS beasiswa_db;
USE beasiswa_db;

-- Create Users Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Beasiswa Table
CREATE TABLE beasiswa (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(255) NOT NULL,
  deskripsi LONGTEXT NOT NULL,
  syarat LONGTEXT,
  benefit LONGTEXT,
  deadline DATE NOT NULL,
  kategori VARCHAR(100),
  jenis_beasiswa ENUM('swasta', 'negeri', 'luar_negeri') NOT NULL,
  link_pendaftaran VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Notifications Table
CREATE TABLE notifications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create Kategori Table (Optional)
CREATE TABLE kategori (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert dummy data
INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@beasiswa.com', '$2a$10$YourHashedPasswordHere', 'admin'),
('John Doe', 'john@example.com', '$2a$10$YourHashedPasswordHere', 'user'),
('Jane Smith', 'jane@example.com', '$2a$10$YourHashedPasswordHere', 'user');

INSERT INTO kategori (nama) VALUES
('Akademik'),
('Olahraga'),
('Seni'),
('Sosial'),
('Prestasi');

INSERT INTO beasiswa (nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran) VALUES
('Beasiswa Penuh S1 Swasta', 'Beasiswa penuh untuk program S1 dari perusahaan swasta terkemuka', 'IPK minimal 3.5, belum menikah, surat rekomendasi', 'Biaya kuliah penuh, asuransi, tunjangan bulanan Rp 2 juta', '2026-12-31', 'Akademik', 'swasta', 'https://example.com/apply1'),
('Beasiswa LPDP Luar Negeri', 'Beasiswa untuk melanjutkan pendidikan ke luar negeri', 'IPK minimal 3.0, TOEFL minimal 500, esai motivasi', 'Tuition fee, living allowance, airfare', '2026-11-30', 'Akademik', 'luar_negeri', 'https://example.com/apply2'),
('Beasiswa Putra Negeri', 'Program beasiswa dari pemerintah untuk mahasiswa berprestasi', 'IPK minimal 3.2, aktif dalam organisasi, surat pernyataan tidak mampu', 'Biaya pendidikan, biaya hidup bulanan', '2026-10-31', 'Prestasi', 'negeri', 'https://example.com/apply3'),
('Beasiswa Olahraga Indomarco', 'Beasiswa untuk atlet muda berbakat', 'Surat rekomendasi pelatih, prestasi minimal juara 3 tingkat provinsi', 'Biaya pendidikan, asuransi, peralatan olahraga', '2026-11-15', 'Olahraga', 'swasta', 'https://example.com/apply4'),
('Beasiswa Seni Budaya', 'Beasiswa untuk seniman dan penari berbakat', 'Portofolio seni, pengalaman pertunjukan, surat rekomendasi', 'Biaya pendidikan, akomodasi, perlengkapan seni', '2026-12-15', 'Seni', 'negeri', 'https://example.com/apply5'),
('Beasiswa Sosial Kemasyarakatan', 'Untuk mahasiswa dengan kontribusi sosial tinggi', 'Sertifikat kegiatan sosial, surat rekomendasi, esai', 'Biaya kuliah 50%, tunjangan bulanan', '2026-11-20', 'Sosial', 'swasta', 'https://example.com/apply6');

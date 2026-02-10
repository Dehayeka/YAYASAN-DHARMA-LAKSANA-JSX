-- Yayasan Dharma Laksana Database Schema for Supabase
-- PostgreSQL version of the MySQL schema

-- Table: kegiatan (Activities/Events)
CREATE TABLE kegiatan (
  id_kegiatan SERIAL PRIMARY KEY,
  judul_kegiatan VARCHAR(255),
  tanggal_kegiatan DATE NOT NULL,
  deskripsi_kegiatan TEXT,
  foto_kegiatan VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: pencapaian (Achievements)
CREATE TABLE pencapaian (
  id_pencapaian SERIAL PRIMARY KEY,
  judul_pencapaian VARCHAR(100),
  deskripsi_pencapaian TEXT,
  foto_pencapaian VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: pendidik (Teachers/Educators)
CREATE TABLE pendidik (
  id_pendidik SERIAL PRIMARY KEY,
  nama_pendidik VARCHAR(100),
  jabatan_pendidik VARCHAR(100),
  deskripsi_pendidik TEXT,
  foto_pendidik VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: pengurus (Management/Board Members)
CREATE TABLE pengurus (
  id_pengurus SERIAL PRIMARY KEY,
  nama_pengurus VARCHAR(100),
  jabatan_pengurus VARCHAR(100),
  deskripsi_pengurus TEXT,
  foto_pengurus VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sample data from existing MySQL database

-- Insert kegiatan
INSERT INTO kegiatan (id_kegiatan, tanggal_kegiatan, judul_kegiatan, deskripsi_kegiatan, foto_kegiatan) VALUES
(2, '2025-06-11', 'Gotong Royong Lingkungan', 'Gotong royong membersihkan lingkungan sekitar balai', 'uploads/aura_bg.png'),
(3, '2025-06-11', 'Kegiatan Tes', 'ini tes kegiatan', 'uploads/aura_bg.png');

-- Insert pencapaian
INSERT INTO pencapaian (id_pencapaian, judul_pencapaian, deskripsi_pencapaian, foto_pencapaian) VALUES
(1, 'Juara 1 Lomba Sains Nasional', 'Berhasil membawa siswa meraih juara 1 lomba sains tingkat nasional. udah sy edit wkkwkwk', 'uploads_pencapaian/aura_bg.png'),
(2, 'Menang Tournament', 'kemarin saya menang yeyyyyy', 'uploads_pencapaian/aura_bg.png');

-- Insert pendidik
INSERT INTO pendidik (id_pendidik, nama_pendidik, jabatan_pendidik, deskripsi_pendidik, foto_pendidik) VALUES
(1, 'Siti Aminah', 'Guru Bahasa', 'Mengajar Bahasa Indonesia untuk siswa kelas atas. aww;;fja e', 'uploads_pendidik/Screenshot 2023-11-09 135936.png'),
(2, 'Guts', 'Jungle', 'harus on point', 'uploads_pendidik/b5f15aae-2993-4ac9-b5cf-faea1431ae4d.jpg');

-- Insert pengurus
INSERT INTO pengurus (id_pengurus, nama_pengurus, jabatan_pengurus, deskripsi_pengurus, foto_pengurus) VALUES
(1, 'Budi Santosi', 'Ketua Umum', 'Bertanggung jawab atas seluruh kegiatan organisasi.', 'uploads_pengurus/Screenshot 2023-11-09 135936.png'),
(2, 'Aryakrs', 'Presiden', 'Aryakrs dengan nama asli Made Arya Ganteng bgt', 'uploads_pengurus/Screenshot 2023-11-09 135936.png');

-- Update sequences to continue from current max IDs
SELECT setval('kegiatan_id_kegiatan_seq', (SELECT MAX(id_kegiatan) FROM kegiatan));
SELECT setval('pencapaian_id_pencapaian_seq', (SELECT MAX(id_pencapaian) FROM pencapaian));
SELECT setval('pendidik_id_pendidik_seq', (SELECT MAX(id_pendidik) FROM pendidik));
SELECT setval('pengurus_id_pengurus_seq', (SELECT MAX(id_pengurus) FROM pengurus));

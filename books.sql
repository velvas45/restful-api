-- membuat database
CREATE DATABASE tugas_helmi;
-- membuat table
CREATE TABLE books(id INTEGER PRIMARY KEY, isbn VARCHAR(50) NOT NULL, judul VARCHAR(30), sinopsi TEXT, penulis VARCHAR(30), genre VARCHAR(30));
-- Menghapus Table maupun Database
DROP DATABASE tugas_helmi;
DROP TABLE books;
-- melihat seluruh isi table
SELECT * FROM books;
-- melihat isi table dengan beberapa pilihan
SELECT id,isbn,judul FROM books;
-- melihat isi table dengan menggunakan kondisi
SELECT * FROM books WHERE id = 1;
-- Memasukan data ke table 
INSERT INTO books (id, isbn, judul, sinopsi, penulis, genre) VALUES(1, '12399819', 'Belajar POSTGRESQL', 'Belajar tentang database postgresql','Helmi','Programming');
-- Mengupdate data di table
UPDATE books SET judul = 'Belajar Javascript' WHERE id = 1;
-- Menghapus data di table
DELETE FROM books WHERE id = 1;
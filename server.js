
const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Koneksi database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mbg_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database gagal terhubung:", err.message);
        return;
    }

    console.log("Database berhasil terhubung!");
});

// Menampilkan halaman utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Menyimpan data BahanMakanan
app.post("/api/bahan", (req, res) => {

    const {
        nama_bahan,
        kategori,
        satuan,
        harga_per_satuan
    } = req.body;

    // Validasi input
    if (
        !nama_bahan ||
        !nama_bahan.trim() ||
        !kategori ||
        !satuan ||
        harga_per_satuan === "" ||
        harga_per_satuan === undefined ||
        !Number.isFinite(Number(harga_per_satuan)) ||
        Number(harga_per_satuan) < 0
    ) {
        return res.status(400).json({
            message: "Data tidak valid!"
        });
    }

    // Query sesuai struktur tabel bagian A
    const sql = `
        INSERT INTO BahanMakanan
        (nama_bahan, kategori, satuan, harga_per_satuan)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            nama_bahan.trim(),
            kategori,
            satuan,
            Number(harga_per_satuan)
        ],
        (err, result) => {

            if (err) {
                console.log("SQL Error:", err.message);

                return res.status(500).json({
                    message: "Gagal menyimpan data: " + err.message
                });
            }

            res.status(201).json({
                message: "Data berhasil disimpan!",
                id_bahan: result.insertId
            });
        }
    );
});

// Menjalankan server
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});

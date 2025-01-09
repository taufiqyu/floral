const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Lokasi file data ucapan
const dataFilePath = path.join(__dirname, 'ucapan.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Melayani file statis
app.use(express.static(__dirname));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

// Fungsi untuk membaca data dari file JSON
function readUcapanData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading data file:', error);
  }
  return [];
}

// Fungsi untuk menulis data ke file JSON
function writeUcapanData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to data file:', error);
  }
}

// Rute untuk root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API untuk menambahkan ucapan
app.post('/api/ucapan', (req, res) => {
  const { nama_ucapan, ucapan_doa } = req.body;

  if (!nama_ucapan || !ucapan_doa || !nama_ucapan.trim() || !ucapan_doa.trim()) {
    return res.status(400).json({ message: 'Nama dan ucapan wajib diisi dan tidak boleh kosong!' });
  }

  if (nama_ucapan.length > 50 || ucapan_doa.length > 500) {
    return res.status(400).json({ message: 'Nama atau ucapan terlalu panjang!' });
  }

  const waktu = new Date();
  const newUcapan = { nama: nama_ucapan.trim(), ucapan: ucapan_doa.trim(), waktu };

  const ucapanList = readUcapanData();
  ucapanList.push(newUcapan);
  writeUcapanData(ucapanList);

  res.status(201).json({ message: 'Ucapan terkirim!', data: newUcapan });
});

// API untuk mengambil semua ucapan
app.get('/api/ucapan', (req, res) => {
  const ucapanList = readUcapanData();
  res.json(ucapanList);
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const nama1 = document.querySelector('#nama1');
const nama2 = document.querySelector('#nama2');
const nama3 = document.querySelector('#nama3');

const namaPa = document.querySelector('#namaPa');
const ayahPa = document.querySelector('#ayahPa');
const ibuPa = document.querySelector('#ibuPa');
const igPa = document.querySelector('#igPa'); // change href
const igPaName = document.querySelector('#igPaName');

const namaPi = document.querySelector('#namaPi');
const ayahPi = document.querySelector('#ayahPi');
const ibuPi = document.querySelector('#ibuPi');
const igPi = document.querySelector('#igPi'); // change href
const igPiName = document.querySelector('#igPiName');

const tanggalResepsi1 = document.querySelector('#tanggalResepsi1');
const tanggalResepsi2 = document.querySelector('#tanggalResepsi2');
const jamResepsi = document.querySelector('#jamResepsi');
const lokasiResepsi = document.querySelector('#lokasiResepsi');
const linkResepsi = document.querySelector('#linkResepsi');

const tanggalAkad = document.querySelector('#tanggalAkad');
const jamAkad = document.querySelector('#jamAkad');
const lokasiAkad = document.querySelector('#lokasiAkad');
const linkAkad = document.querySelector('#linkAkad'); // change href

const noWa = document.querySelector('#sendButton'); // change data-nomor
const live = document.querySelector('#live') // change href

const bankName = document.querySelector('#bankName');
const bankNo = document.querySelector('#bankNo'); // = bankNoData
const bankNoData = document.querySelector('#accountNumber'); //data-account
const atasNama = document.querySelector('#atasNama');
const alamat = document.querySelector('#alamatnya'); // = alamatData
const alamatCopy = document.querySelector('#shippingAddress'); // change data-adress
const confir = document.querySelector('#confirm');

const judulCerita1 = document.querySelector('#judulCerita1');
const judulCerita2 = document.querySelector('#judulCerita2');
const judulCerita3 = document.querySelector('#judulCerita3');
const judulCerita4 = document.querySelector('#judulCerita4');

const cerita1 = document.querySelector('#cerita1');
const cerita2 = document.querySelector('#cerita2');
const cerita3 = document.querySelector('#cerita3');
const cerita4 = document.querySelector('#cerita4');

document.addEventListener('DOMContentLoaded', () => {
// Mengambil data JSON menggunakan fetch
fetch('./js/panel.json')
  .then(response => response.json()) // Parsing JSON
  .then(data => {
    // Eksekusi data
    nama1.textContent = data.general.mempelai;
    nama2.textContent = data.general.mempelai;
    nama3.textContent = data.general.mempelai;
    
    namaPa.textContent = data.pria.nama;
    ayahPa.textContent = data.pria.ayah;
    ibuPa.textContent = data.pria.ibu;
    igPaName.textContent = data.pria.akunIg;
    igPa.href = data.pria.linkIg;
    
    namaPi.textContent = data.wanita.nama;
    ayahPi.textContent = data.wanita.ayah;
    ibuPi.textContent = data.wanita.ibu;
    igPiName.textContent = data.wanita.akunIg;
    igPi.href = data.wanita.linkIg;
    
    tanggalResepsi1.textContent = data.resepsi.tanggal;
    tanggalResepsi2.textContent = data.resepsi.tanggal;
    jamResepsi.textContent = data.resepsi.jam;
    lokasiResepsi.textContent = data.resepsi.lokasi;
    linkResepsi.href = data.resepsi.peta;
   
    tanggalAkad.textContent = data.akad.tanggal;
    jamAkad.textContent = data.akad.jam;
    lokasiAkad.textContent = data.akad.lokasi;
    linkAkad.href = data.akad.peta;
    
    noWa.setAttribute('data-nomor', data.general.wa);
    live.href = data.general.streaming;
    confir.setAttribute('data-nomor', data.general.wa);
    
    bankName.textContent = data.gift.namaBank;
    bankNoData.setAttribute('data-account', data.gift.norek);
    bankNo.textContent = data.gift.norek;
    atasNama.textContent = data.gift.atasNama;
    alamat.textContent = data.gift.alamat;
    alamatCopy.setAttribute('data-address', data.gift.alamat);
    
    judulCerita1.textContent = data.loveStory.judul1;
    judulCerita2.textContent = data.loveStory.judul2;
    judulCerita3.textContent = data.loveStory.judul3;
    judulCerita4.textContent = data.loveStory.judul4;
    
    cerita1.textContent = data.loveStory.cerita1;
    cerita2.textContent = data.loveStory.cerita2;
    cerita3.textContent = data.loveStory.cerita3;
    cerita4.textContent = data.loveStory.cerita4;
    
  })
  .catch((error) => console.error('Error fetching JSON:', error));
});
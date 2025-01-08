// Fungsi untuk membuka undangan dan memulai audio
function buka() {
  document.getElementById('utama').classList.toggle('is-hidden'); // Tampilkan undangan
  document.getElementById('sampul').classList.toggle('is-hidden'); // Sembunyikan sampul
  const audio = document.getElementById('audio');
  audio.play(); // Mulai memutar audio
}

// Fungsi untuk toggle audio play/pause
function playPauseButton() {
  const audio = document.getElementById('audio');
  const icon = document.querySelector('#iconPlay');
  const button = document.getElementById('buttonAudio');

  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play'); // Hapus kelas 'fa-play'
    icon.classList.add('fa-pause');  // Tambahkan kelas 'fa-pause'
    button.classList.add('animate__animated', 'animate__heartBeat', 'animate__infinite');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause'); // Hapus kelas 'fa-pause'
    icon.classList.add('fa-play');    // Tambahkan kelas 'fa-play'
    button.classList.remove('animate__animated', 'animate__heartBeat', 'animate__infinite');
  }
}
// simply-countdown
simplyCountdown("#mycountdown", {
  year: 2025,
  month: 2,
  day: 14,
});

// RSVP
document.getElementById("sendButton").addEventListener("click", function () {
  const nama = document.getElementById("nama").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const kehadiran = document.getElementById("kehadiran").value.trim();
  const jumlah = document.getElementById("jumlah").value.trim();

  const namaError = document.getElementById("namaError");
  const alamatError = document.getElementById("alamatError");
  const kehadiranError = document.getElementById("kehadiranError");
  const jumlahError = document.getElementById("jumlahError");

  // Reset pesan error
  namaError.classList.remove("visible");
  alamatError.classList.remove("visible");
  kehadiranError.classList.remove("visible");
  jumlahError.classList.remove("visible");

  let isValid = true;

  // Validasi manual
  if (!nama) {
    namaError.textContent = "Nama wajib diisi!";
    namaError.classList.add("visible");
    isValid = false;
  }

  if (!alamat) {
    alamatError.textContent = "Alamat wajib diisi!";
    alamatError.classList.add("visible");
    isValid = false;
  }

  if (!kehadiran) {
    kehadiranError.textContent = "Pilih konfirmasi kehadiran!";
    kehadiranError.classList.add("visible");
    isValid = false;
  }

  if (!jumlah) {
    jumlahError.textContent = "Pilih jumlah orang!";
    jumlahError.classList.add("visible");
    isValid = false;
  }

  if (!isValid) return;

  const pesan = `Halo, saya ingin mengonfirmasi kehadiran:\n\n` +
                `Nama: ${nama}\n` +
                `Alamat: ${alamat}\n` +
                `Kehadiran: ${kehadiran}\n` +
                `Jumlah Orang: ${jumlah}\n\n` +
                `Terima kasih!`;

  const nomorWA = this.dataset.nomor;
  const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(waLink, "_blank");
});
  
  // Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    // Ubah tooltip menjadi "Tersalin"
    button.setAttribute('data-tooltip', 'Tersalin');
    setTimeout(() => {
      button.setAttribute('data-tooltip', 'Salin'); // Kembalikan ke "Salin" setelah 2 detik
    }, 2000);
  });
}

// Event listener untuk tombol salin nomor rekening
document.getElementById('copyAccount').addEventListener('click', (e) => {
  const accountText = document.getElementById('accountNumber').dataset.account;
  copyToClipboard(accountText, e.target);
});

// Event listener untuk tombol salin alamat
document.getElementById('copyAddress').addEventListener('click', (e) => {
  const addressText = document.getElementById('shippingAddress').dataset.address;
  copyToClipboard(addressText, e.target);
});

// Event listener untuk membuka modal
document.getElementById('showGiftModal').addEventListener('click', () => {
  document.getElementById('giftModal').classList.add('is-active');
});

// Event listener untuk menutup modal
document.querySelectorAll('#closeGiftModal, #closeGiftModalFooter').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById('giftModal').classList.remove('is-active');
  });
});


  
  // Fungsi Slideshow dengan Animasi Fade
  document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;

    function showNextSlide() {
      slides[currentSlide].classList.remove("active"); // Hilangkan kelas aktif dari slide saat ini
      currentSlide = (currentSlide + 1) % slides.length; // Pindah ke slide berikutnya (loop)
      slides[currentSlide].classList.add("active"); // Tambahkan kelas aktif ke slide baru
    }

    // Ganti slide setiap 3 detik
    setInterval(showNextSlide, 3000);
  });
  
// Pilih elemen yang akan diamati
const elements = document.querySelectorAll('.gerak');

// Buat IntersectionObserver dengan threshold 50%
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const animationClass = entry.target.dataset.animate;

    if (entry.isIntersecting) {
      // Elemen terlihat setidaknya 50%
      if (animationClass) {
        entry.target.classList.remove('gerak');
        entry.target.classList.add('animate__animated', animationClass, 'animate__slow');
      }
    } 
  });
}, {
  threshold: 0.5 // Tetapkan threshold ke 50%
});

// Pastikan elemen hanya diamati satu kali
elements.forEach((el) => observer.observe(el));

// nama tamu
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('nama')?.trim() || "Tamu Undangan"; // Hilangkan spasi ekstra
document.querySelector('#tamu').textContent = namaTamu;

//tombol konfirmasi di modal gift
const nomorWA = sendButton.dataset.nomor;
const teks = `Halo, saya ingin mengonfirmasi pengiriman hadiah:`;
const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teks)}`;
document.getElementById('konfirmasi').href = waLink;

const form = document.getElementById('ucapanForm');
const responseMessage = document.getElementById('responseMessage');

// Fungsi untuk menambahkan ucapan
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const nama_ucapan = formData.get('nama_ucapan');
  const ucapan_doa = formData.get('ucapan_doa');

  try {
    const response = await fetch('/api/ucapan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama_ucapan, ucapan_doa })
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      form.reset();
      loadUcapan(); // Refresh daftar ucapan
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Fungsi untuk menampilkan ucapan
async function loadUcapan() {
  try {
    const response = await fetch('/api/ucapan');
    const ucapanList = await response.json();

    // Daftar ikon Font Awesome
    const icons = [
      'fas fa-user-circle',
      'fas fa-heart',
      'fas fa-smile',
      'fas fa-user',
      'fas fa-user-tie'
    ];

    responseMessage.innerHTML = ucapanList
      .map(ucapan => {
        // Pilih ikon acak dari daftar icons
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];

        return `
          <div class="ucapan">
            <div class="icon-container">
              <i class="${randomIcon}"></i>
            </div>
            <p><strong>${ucapan.nama}</strong></p>
            <p>${ucapan.ucapan}</p>
            <p><em>${new Date(ucapan.waktu).toLocaleString()}</em></p>
          </div>
        `;
      })
      .join('');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Load ucapan saat halaman dimuat
loadUcapan();
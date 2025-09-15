// Logika Dark/Light Mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Cek preferensi dari local storage saat halaman dimuat
const savedMode = localStorage.getItem('mode') || 'light';
body.classList.add(savedMode + '-mode');

if (savedMode === 'dark') {
    modeToggle.textContent = '🌙';
}

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌙';
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeToggle.textContent = '☀️';
        localStorage.setItem('mode', 'light');
    }
});

// Logika Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Logika Form Kontak dengan EmailJS
document.getElementById('kontak-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const params = {
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        pesan: document.getElementById('pesan').value,
        waktu: new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    // Ini adalah kode yang benar
    emailjs.send("service_4qp7e8f", "template_1ugetxg", params)
    .then(function(response) {
        alert('Pesan berhasil dikirim!');
        document.getElementById('kontak-form').reset();
    }, function(error) {
        alert('Gagal mengirim pesan. Silakan coba lagi.');
    });
});

// Logika Jam & Tanggal
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    timeElement.textContent = `${dateString} | ${timeString}`;
}

// Perbarui waktu setiap detik
setInterval(updateTime, 1000);

// Panggil fungsi sekali saat halaman dimuat
updateTime();

// Logika untuk menampilkan tahun saat ini di footer
const yearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
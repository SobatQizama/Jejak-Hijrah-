// =========================
// HAMBURGER MENU
// =========================

// Mengambil elemen tombol hamburger
const hamburger = document.getElementById("hamburger");

// Mengambil menu navbar
const navMenu = document.getElementById("navMenu");

// Saat tombol hamburger diklik
hamburger.addEventListener("click", () => {

  // Tambahkan / hapus class active
  navMenu.classList.toggle("active");

});


// =========================
// SMOOTH SCROLL
// =========================

// Mengambil semua link navbar
const navLinks = document.querySelectorAll('.nav-menu a');

// Loop setiap link
navLinks.forEach(link => {

  link.addEventListener('click', function(e) {

    // Mencegah pindah halaman langsung
    e.preventDefault();

    // Ambil target section
    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    // Scroll halus
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

    // Tutup menu mobile setelah klik
    navMenu.classList.remove('active');

  });

});


// =========================
// ANIMASI SCROLL
// =========================

// Mengambil semua elemen fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Observer animasi
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    // Jika elemen terlihat
    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

// Mengamati semua elemen
fadeElements.forEach(element => {
  observer.observe(element);
});


// =========================
// FALLBACK GAMBAR
// =========================

// Mengambil semua gambar
const images = document.querySelectorAll("img");

// Jika gambar gagal dimuat
images.forEach(img => {

  img.onerror = function() {

    // Gambar fallback sederhana
    this.src = "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

  };

});
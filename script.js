// script.js

// --- Inisialisasi AOS ---
AOS.init({ 
    offset: 0, 
    duration: 1000, 
    once: true, 
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Fungsi untuk Typed.js ---
    var typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        var typed = new Typed('.typed-text', {
            strings: [
                'Data Analyst',
                'Data Integrator',
                'Insight Catalyst'
            ],
            typeSpeed: 30,
            backSpeed: 10,
            backDelay: 500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            loopCount: false,
            smartBackspace: true
        });
    }

    // --- Fungsi untuk Tabs di Section Skills ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            const parentTabContainer = button.closest('.tabs-container');
            
            if (parentTabContainer) {
                parentTabContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                parentTabContainer.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            } else {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
            }

            button.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // --- Vanilla JavaScript untuk fungsionalitas toggle di Education & Experience ---
    const entryTitles = document.querySelectorAll('.entry-title');

    entryTitles.forEach(title => {
        title.addEventListener('click', function() {
            const parentEntry = this.closest('.entry');
            const details = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            if (parentEntry && details && icon) {
                parentEntry.classList.toggle('open'); 
                if (icon.textContent.trim() === '+') {
                    icon.textContent = '-';
                } else {
                    icon.textContent = '+';
                }
            }
        });
    });

    // --- Vanilla JavaScript untuk Hamburger/Cancel Menu (Diubah menjadi event listener) ---
    const hamburgIcon = document.getElementById("hamburg-icon");
    const cancelIcon = document.getElementById("cancel-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownLinks = document.querySelectorAll("#dropdown-menu .dropdown-links a"); // Pilih semua link di dropdown

    // Event listener untuk membuka menu
    if (hamburgIcon) {
        hamburgIcon.addEventListener('click', () => {
            dropdownMenu.classList.add('open'); // Tambahkan kelas 'open'
            hamburgIcon.style.display = 'none'; // Sembunyikan ikon hamburger
            cancelIcon.style.display = 'block'; // Tampilkan ikon silang
            document.body.style.overflow = 'hidden'; // Mencegah scrolling body saat menu terbuka
        });
    }

    // Event listener untuk menutup menu (ikon silang)
    if (cancelIcon) {
        cancelIcon.addEventListener('click', () => {
            dropdownMenu.classList.remove('open'); // Hapus kelas 'open'
            hamburgIcon.style.display = 'block'; // Tampilkan ikon hamburger
            cancelIcon.style.display = 'none'; // Sembunyikan ikon silang
            document.body.style.overflow = ''; // Izinkan scrolling body lagi
        });
    }

    // Event listener untuk menutup menu ketika salah satu link di dropdown diklik
    if (dropdownLinks) {
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.classList.remove('open'); // Tutup menu
                hamburgIcon.style.display = 'block'; // Tampilkan ikon hamburger
                cancelIcon.style.display = 'none'; // Sembunyikan ikon silang
                document.body.style.overflow = ''; // Izinkan scrolling body lagi
            });
        });
    }
});
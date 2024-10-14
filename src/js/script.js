document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');
    const scrollContainer = document.getElementById('noScrollbar'); // Ambil elemen yang membungkus

    // Event listener untuk klik dot (untuk scroll smooth)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            setActiveDot(index);
        });
    });

    // Fungsi untuk mengatur dot yang aktif
    function setActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Deteksi section yang aktif saat scrolling dan update dots
    scrollContainer.addEventListener('scroll', () => {
        let currentIndex = -1;
        const windowHeight = scrollContainer.clientHeight; // Ganti ke clientHeight

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();

            // Cek apakah section terlihat di viewport dari scrollContainer
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                currentIndex = index;
            }
        });

        // Setel dot aktif untuk section yang sedang terlihat
        if (currentIndex !== -1) {
            setActiveDot(currentIndex);
        }
    });

    // -----------------------------------
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Handle cursor movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Tambahkan partikel ketika kursor bergerak
        createParticle(e.clientX, e.clientY);
    });

    // Membuat partikel
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        document.body.appendChild(particle);

        // Hapus partikel setelah animasi selesai
        setTimeout(() => {
            particle.remove();
        }, 600);
    }

    // Toggle Dark Mode
    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {

        // If set via local storage previously
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }

        // If NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    });
});

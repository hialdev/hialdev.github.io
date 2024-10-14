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

    // Animasi teks mengetik untuk job titles
    const typedTextSpan = document.getElementById('typed-text');
    const cursorSpan = document.getElementById('cursor');
    const jobTextArray = ["Web Developer", "Data Analyst", "UI Designer", "UX Researcher", "Mobile Developer", "System Analyst"];

    // Animasi teks mengetik untuk analyzing
    const analyzingTextSpan = document.getElementById('analyzing-text');
    const analyzingTextArray = ["Emphatizing...", "Analyzing...", "Defining...", "Designing...", "Validating...", "Developing...", "Testing...", "Drinking :D"];

    const typingDelay = 150; // Delay antara setiap karakter
    const erasingDelay = 100; // Delay antara setiap karakter saat menghapus
    const newTextDelay = 2000; // Delay antara teks saat berpindah
    let jobTextIndex = 0;
    let analyzingTextIndex = 0;

    // Fungsi untuk mengatur pengindeksan karakter
    let jobCharIndex = 0;
    let analyzingCharIndex = 0;

    function typeJobText() {
        if (jobCharIndex < jobTextArray[jobTextIndex].length) {
            typedTextSpan.textContent += jobTextArray[jobTextIndex].charAt(jobCharIndex);
            jobCharIndex++;
            setTimeout(typeJobText, typingDelay);
        } else {
            setTimeout(eraseJobText, newTextDelay);
        }
    }

    function eraseJobText() {
        if (jobCharIndex > 0) {
            typedTextSpan.textContent = jobTextArray[jobTextIndex].substring(0, jobCharIndex - 1);
            jobCharIndex--;
            setTimeout(eraseJobText, erasingDelay);
        } else {
            jobTextIndex++;
            if (jobTextIndex >= jobTextArray.length) jobTextIndex = 0;
            jobCharIndex = 0; // Reset karakter index
            setTimeout(typeJobText, typingDelay + 1100); // Tunggu sebelum mulai mengetik teks berikutnya
        }
    }

    function typeAnalyzingText() {
        if (analyzingCharIndex < analyzingTextArray[analyzingTextIndex].length) {
            analyzingTextSpan.textContent += analyzingTextArray[analyzingTextIndex].charAt(analyzingCharIndex);
            analyzingCharIndex++;
            setTimeout(typeAnalyzingText, typingDelay);
        } else {
            setTimeout(eraseAnalyzingText, newTextDelay);
        }
    }

    function eraseAnalyzingText() {
        if (analyzingCharIndex > 0) {
            analyzingTextSpan.textContent = analyzingTextArray[analyzingTextIndex].substring(0, analyzingCharIndex - 1);
            analyzingCharIndex--;
            setTimeout(eraseAnalyzingText, erasingDelay);
        } else {
            analyzingTextIndex++;
            if (analyzingTextIndex >= analyzingTextArray.length) analyzingTextIndex = 0;
            analyzingCharIndex = 0; // Reset karakter index
            setTimeout(typeAnalyzingText, typingDelay + 1100); // Tunggu sebelum mulai mengetik teks berikutnya
        }
    }

    // Mulai animasi teks setelah halaman dimuat
    if (jobTextArray.length) setTimeout(typeJobText, newTextDelay + 250);
    if (analyzingTextArray.length) setTimeout(typeAnalyzingText, newTextDelay + 250);

    // -----------------------------
    const seeProjectsBtn = document.getElementById('seeProjectsBtn');
    const introBox = document.getElementById('introBox');
    const itemProjects = document.getElementById('itemProjects');
    const backBtn = document.getElementById('backBtn');

    seeProjectsBtn.addEventListener('click', () => {
        introBox.classList.add('hide'); // Menyembunyikan intro box
        itemProjects.classList.add('show'); // Menampilkan item projects
    });

    backBtn.addEventListener('click', () => {
        introBox.classList.remove('hide'); // Menampilkan kembali intro box
        itemProjects.classList.remove('show'); // Menyembunyikan item projects
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

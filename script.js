document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('weddingMusic');
    
    // Countdown Target
    const weddingDate = new Date("Dec 28, 2025 08:00:00").getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const dist = weddingDate - now;

        document.getElementById("days").innerText = Math.floor(dist / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((dist % (1000 * 60)) / 1000);

        if (dist < 0) {
            clearInterval(timer);
            document.querySelector(".countdown-elegant").innerHTML = "HARI BAHAGIA TELAH TIBA";
        }
    }, 1000);

    // Buka Undangan
    openBtn.addEventListener('click', () => {
        overlay.classList.add('exit');
        mainContent.classList.remove('hidden-content');
        music.play();
        document.getElementById('music-control').classList.remove('hidden-element');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('appear');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-scroll').forEach(el => observer.observe(el));
        
        setTimeout(() => overlay.style.display = 'none', 1500);
    });

    // Musik Toggle
    document.getElementById('music-control').addEventListener('click', function() {
        if (music.paused) {
            music.play();
            this.querySelector('.music-icon').innerText = '🎵';
        } else {
            music.pause();
            this.querySelector('.music-icon').innerText = '🔇';
        }
    });
});
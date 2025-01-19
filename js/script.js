document.addEventListener('DOMContentLoaded', () => {
    const navLogo = document.querySelector('.nav-logo');
    let lastScroll = 0;

    document.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Throttle: hanya jalankan setiap 100ms
        if (currentScroll > 627 && currentScroll !== lastScroll) {
            navLogo.classList.remove('nav-filter');
        } else if (currentScroll <= 627 && currentScroll !== lastScroll) {
            navLogo.classList.add('nav-filter');
        }

        lastScroll = currentScroll;
    });
});

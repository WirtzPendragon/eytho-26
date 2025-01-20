document.addEventListener('scroll', () => {
    const navLogo = document.querySelector('.nav-logo');

    if (window.scrollY > 627){
        navLogo.classList.remove('nav-filter');
    } else {
        navLogo.classList.add('nav-filter');
    }
});
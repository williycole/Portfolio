//Mobile Nav
function toggleNav() {
    let hamburger = document.querySelector('.hamburger');
    let nav = document.querySelector('.nav-menu');

    if (nav.style.display === "none") {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

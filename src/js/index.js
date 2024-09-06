/* import SmoothScroll from 'smooth-scroll'; */

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
/* const slider2text = document.getElementById('slider2-text'); */


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Toggle Language Menu
const languageToggle = document.getElementById('language-toggle');
const languageMenu = document.getElementById('language-menu');

languageToggle.addEventListener('click', () => {
    languageMenu.classList.toggle('hidden');
});

// Mobile Language Menu Toggle
/* const languageToggleMobile = document.getElementById('language-toggle-mobile');
languageToggleMobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
 */



/* ******************************************************** */

document.getElementById('playButton').addEventListener('click', function() {
    const youtubePopup = document.getElementById('youtubePopup');
    const youtubeIframe = document.getElementById('youtubeIframe');

    // YouTube video URL'sini ekle
    const youtubeVideoUrl = 'https://www.youtube.com/embed/Nqqc2FHf9Ug?si=Sw7YZUMQFt7Qcdlx';
    youtubeIframe.src = youtubeVideoUrl;

    youtubePopup.style.display = 'flex'; // Popup'u göster
});

document.getElementById('closeButton').addEventListener('click', function() {
    const youtubePopup = document.getElementById('youtubePopup');
    const youtubeIframe = document.getElementById('youtubeIframe');

    youtubePopup.style.display = 'none';
    youtubeIframe.src = ''; 
});






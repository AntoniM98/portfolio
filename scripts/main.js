const hamburger = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.hamburger-nav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    hamburgerNav.classList.toggle('active');
})

const navLink = document.querySelectorAll(".navigation-link");

navLink.forEach(n => n.addEventListener('click', function() {
    hamburger.classList.remove('active');
    hamburgerNav.classList.remove('active');
}))

document.querySelectorAll(".result-images img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = 'block';
        document.querySelector(".popup-image img").src = image.getAttribute('src');
    }
})

document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = 'none'; 
}
const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.nav-bar');

// Toggle the navbar visibility on click (hamburger menu)
toggleButton.addEventListener('click', function () {
    navbar.classList.toggle('active'); // Toggle active class on nav-bar
});

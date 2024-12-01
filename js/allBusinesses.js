// Global variables for handling pagination and business data
const cardsPerPage = 8;
let currentPage = 1;
let businessData = [];
let filteredData = [];

const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

//business lists
if (window.location.pathname.includes("allBusinesses.html")) {
    // Check if business data is in localStorage
    if (localStorage.getItem('businessData')) {
        businessData = JSON.parse(localStorage.getItem('businessData'));
        filteredData = businessData;
        displayCards(currentPage);
        updatePagination();
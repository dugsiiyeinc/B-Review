// // JavaScript for toggle functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle the navigation menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const signinBtn = document.getElementById("signinBtn");

// siginbtn
signinBtn.addEventListener("click", () => {
    window.location.href = "./html/login.html";
});



const reviews = [
    {
        username: "Jaamac",
        business: "SILVER COFFE &RESTAURANT",
        rating: 5,
        opinion: "Amazing coffee and and hotel great ambiance! Will definitely visit again.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Siham",
        business: "AKRAM SWEETS",
        rating: 4,
        opinion: "Delicious pastries, but the service could be better.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Ali",
        business: "ABDIWAHID BOOKSHOP",
        rating: 2,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Hanan",
        business: "KALKAAL",
        rating: 3,
        opinion: "Nice hospital of the city, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Faatima",
        business: "SOMCITY STORE",
        rating: 1,
        opinion: "Nice shop of of shopping, but the service could be better.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Isma'il",
        business: "Bookstore",
        rating: 1,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },

    {
        username: "Saadak",
        business: "BEYDAN COFFE",
        rating: 5,
        opinion: "Best coffe of the city, and better service.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    },
    {
        username: "Anisa",
        business: "ABDIWAHID BOOKSHOP",
        rating: 2,
        opinion: "Nice selection of books, but the prices are a bit high.",
        image: "https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.webp?a=1&b=1&s=612x612&w=0&k=20&c=ljAXrxoZFwNvTsBgHXNqiD4-AL-SA9pEEqEzOKiCXQY="
    }
];

//the feedback dynamically
function displayTestimonials() {
    const testimonialContainer = document.querySelector(".testimonial-container");

    reviews.forEach((review) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");

        // testimonial card
        testimonialCard.innerHTML = `
            <div class="testimonial-img">
                <img src="${review.image}" alt="${review.username}">
            </div>
            <div class="testimonial-content">
                <h3>${review.username}</h3>
                <p class="testimonial-business">${review.business}</p>
                <p class="testimonial-opinion">${review.opinion}</p>
                <div class="testimonial-rating">
                    <div class="star-rating">${getStarRating(review.rating)}</div>
                </div>
            </div>
        `;

        // add the card to container
        testimonialContainer.appendChild(testimonialCard);
    });
}

//star rating generating
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>'; // Filled star
        } else {
            stars += '<i class="far fa-star"></i>'; // Empty star
        }
    }
    return stars;
}

// Calling testimonial display 
window.onload = displayTestimonials;























































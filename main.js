
//form-validation
const userRegistrationForm = document.querySelector('#userRegistrationForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const error = document.querySelector('#error');
const success = document.querySelector('#success');

//==============User Registration======================
userRegistrationForm.addEventListener('submit', function(event){
    event.preventDefault(); 
   
    error.textContent = ''
    success.textContent = ''

    const isValidUserName = validUsername();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isvalidConfirmPassword = validateConfirmPassword();
 
    if(!isValidUserName){
        username.focus();
        return;
    }
    else if(!isValidEmail){
        email.focus();
        return;
    } 

    else if(!isValidPassword){
        password.focus();
        return ;
    }

    else if(!isvalidConfirmPassword){
        confirmPassword.focus() ; 
        return;
    }
        
    
    // If all fields are valid
    success.textContent = 'Registration successfull!';

    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingEmail = users.find(currentUser => currentUser.username === username.value);
    if(existingEmail){
        alert(`Email ${email.value} already exists`);
        return ;
    }
    users.push(user);
   
    localStorage.setItem('users', JSON.stringify(users)); 
    window.location.href ='login.html';
}); 


//username validate
function validUsername(){
    if(username.value.trim() === ''){
        //error
        setError(username, 'Username is required');
        return false
    }
    else{
        //success
        setSuccess(username);
        return true
    } 
}

//email
function validateEmail(){
   
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.value.match(emailPattern)) {
       setError(email, "please enter a valid email address")
        return false
    }
    else{
        setSuccess(email)
        return true;
    }
}

//password
function validatePassword(){
    if(password.value.length < 8){
        setError(password, "password must be at least 8 character")
        return false;
    }
    else{
        setSuccess(password)
        return true;
    }
}


//confirmpassword
function validateConfirmPassword(){
    if(password.value.trim() === '' || confirmPassword.value.trim() === ''){
        setError(confirmPassword, "password not match")
        return false
    }
        
    if(confirmPassword.value !== password.value){
        setError(confirmPassword, "password not match!")
        return false;
    }
    else{
        setSuccess(confirmPassword)
        return true;
    }
};


//error 
function setError(element, message){
    element.classList.add('invalid');
    element.classList.remove('valid');
    error.textContent = message
};

//success
function setSuccess(element, message){
    element.classList.add('valid');
    element.classList.remove('invalid');
    // success.textContent = message
};


//==========User Login==============

const loginForm = document.querySelector('#loginForm');
const logInUsername = document.querySelector('#email');
const loginPassword = document.querySelector('#password');

//add login form eventListener
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((usr) => usr.email === email.value && usr.password === password.value);

    if(!user){
        alert("invalid");
        return;
    }
    else{
        alert("You'r now login")
    }

    //currentUse
    localStorage.setItem('currentUser', JSON.stringify(user));
    // window.location.href =''
});

//===============All Bsinesses================
const cardsPerPage = 8; // Number of cards to display per page, my page will display 8 at once
let currentPage = 1; // Current page number
let businessData = []; // Array to hold fetched data from data,json file

const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');

// Fetch data from JSON file
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Theres Response error' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        businessData = data; // Store fetched data
        displayCards(currentPage); // Display the first page
        updatePagination(); // Update pagination controls
    })
    .catch(error => console.error('Error fetching data:', error));


// Function to display cards
function displayCards(page) {
    // Clear existing cards
    cardContainer.innerHTML = '';

    // Calculate the start and end indices of the cards to be displayed
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, businessData.length);

    // Create card elements for the current page
    for (let i = startIndex; i < endIndex; i++) {
        const business = businessData[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${business.photo}" alt="${business.name}">
            <h2>${business.name}</h2>
            <p>${business.details}</p>
            <button>Review</button>
        `;
        cardContainer.appendChild(card);
    }
}

// Function to update paginations
function updatePagination() {
    // Clear existing pagination
    paginationContainer.innerHTML = '';

    // Calculate the total number of pages
    const totalPages = Math.ceil(businessData.length / cardsPerPage);

    // Create "Previous" button
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.disabled = currentPage === 1; // Disable if on the first page
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards(currentPage);
            updatePagination();
        }
    };
    paginationContainer.appendChild(prevButton);

    // Create buttons for each page
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.className = (i === currentPage) ? 'active' : ''; // Highlight the active page
        pageButton.onclick = () => {
            currentPage = i;
            displayCards(currentPage);
            updatePagination();
        };
        paginationContainer.appendChild(pageButton);
    }

    // Create "Next" button
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.disabled = currentPage === totalPages; // Disable if on the last page
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayCards(currentPage);
            updatePagination();
        }
    };
    paginationContainer.appendChild(nextButton);
}




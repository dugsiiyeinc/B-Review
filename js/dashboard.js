
document.addEventListener('DOMContentLoaded', () => {
    // Load user data from local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Redirect to login if not logged in
    if (!currentUser) {
        window.location.href = 'login.html';
    }

     // total user
     const totalUsers = 100; 
     //total business
     const totalBusinesses = 50; 

     
    // Set total users and businesses
    document.getElementById('totalUsers').innerText = totalUsers;
    document.getElementById('totalBusinesses').innerText = totalBusinesses;
 
  // Weather API integration for Mogadishu
  const weatherApiKey = '4b5bb59e90d6c180fd66d3662994faaf'; // Provided weather API key
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mogadishu,SO&appid=${weatherApiKey}&units=metric`;
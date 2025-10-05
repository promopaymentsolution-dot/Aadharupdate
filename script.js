// Hardcoded Credentials (Aap yeh ID/Password set kar sakte hain)
const CORRECT_USERNAME = "RT9008266";
const CORRECT_PASSWORD = "Pass@1234";

const loginPage = document.getElementById('login-page');
const homePage = document.getElementById('home-page');
const loginForm = document.getElementById('login-form');
const logoutButton = document.getElementById('logout-button');
const loginMessage = document.getElementById('login-message');

// Check karti hai ki user pehle se logged in hai ya nahi (simple way)
function checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showHomePage();
    } else {
        showLoginPage();
    }
}

// Login form submit hone par yeh function chalta hai
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Default form submission ko roka

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true'); // Login status save kiya
        loginMessage.textContent = "";
        showHomePage();
    } else {
        // Failed login
        loginMessage.textContent = "Invalid Username or Password.";
    }
});

// Logout button click hone par yeh chalta hai
logoutButton.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn'); // Login status remove kiya
    showLoginPage();
});

// Home Page dikhata hai
function showHomePage() {
    loginPage.style.display = 'none';
    homePage.style.display = 'block';
}

// Login Page dikhata hai aur form reset karta hai
function showLoginPage() {
    loginPage.style.display = 'block';
    homePage.style.display = 'none';
    loginForm.reset(); // Form fields clear kiye
    loginMessage.textContent = "";
}

// Page load hote hi status check karo
checkLoginStatus();
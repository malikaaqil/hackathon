import { logoutUser } from './auth.js';

const logoutButton = document.querySelector('.logout-btn');

logoutButton.addEventListener('click', function () {
    logoutUser();
    window.location.href = './login.html'; // Redirect to the login page after logout
});

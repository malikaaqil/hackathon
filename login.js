import { loginUser } from './auth.js';

const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    const user = loginUser(email, password);

    if (user) {
        // Set the current user in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));

        alert('Login successful!');
        window.location.href = './dashboard.html'; // Redirect to the dashboard
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

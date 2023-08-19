const userData = JSON.parse(localStorage.getItem('userData')) || [];

function loginUser(email, password) {
    const user = userData.find(u => u.email === email && u.password === password);
    return user;
}

function logoutUser() {
    // Clear the user session
    localStorage.removeItem('currentUser');
}

export { loginUser, logoutUser };

// Redirect user to registration page from home page
document.getElementById('registerButton')?.addEventListener('click', function() {
    window.location.href = 'register.html'; // Redirect to registration page
});

// Redirect user to registration page from login page
document.getElementById('registerButton')?.addEventListener('click', function() {
    window.location.href = 'register.html'; // Redirect to registration page
});

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login logic here, e.g., validate credentials, redirect to dashboard
    alert('Logged in successfully!');
});

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple password match check
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Registration logic here
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page after registration
});

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/; // Alphanumeric, 3-15 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, letters and numbers

    // Event listeners for real-time validation
    usernameInput.addEventListener('input', () => {
        if (!usernameRegex.test(usernameInput.value)) {
            usernameError.textContent = 'Username must be 3-15 characters long and alphanumeric.';
            usernameError.style.display = 'block';
        } else {
            usernameError.style.display = 'none';
        }
    });

    emailInput.addEventListener('input', () => {
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 6 characters long and contain letters and numbers.';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    // Form submission
    document.getElementById('dynamicForm').addEventListener('submit', (event) => {
        if (usernameError.style.display === 'block' || emailError.style.display === 'block' || passwordError.style.display === 'block') {
            event.preventDefault(); // Prevent form submission if there are errors
            alert('Please fix the errors before submitting the form.');
        }
    });
});
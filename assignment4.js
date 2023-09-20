const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const submitButton = document.getElementById('submitButton');

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    usernameError.textContent = '';
    passwordError.textContent = '';
    submitButton.disabled = true;

    if (username === '') {
        usernameError.textContent = 'Username is required';
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
    } else if (password.length <= 4) {
        passwordError.textContent = 'Password must be more than 4 characters long';
    }

    if (username !== '' && password !== '' && password.length > 4) {
        submitButton.disabled = false;
    }
}
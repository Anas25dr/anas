document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the email and password to your server for authentication
    // For demonstration purposes, we'll just log them to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate a successful sign-in
    document.getElementById('message').textContent = 'Sign-in successful!'; // Display a success message
});
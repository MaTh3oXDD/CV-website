// Initialize EmailJS with your User ID
emailjs.init('');

// Toggle navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Handle form submission (SEND button)
document.querySelector('.send').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var message = document.querySelector('textarea').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send('', '', {
            from_name: name,        // Must match the placeholder in your template
            from_email: email,      // Must match the placeholder in your template
            message: message,       // Must match the placeholder in your template
            to_email: 'matekk.jedrzejczak@gmail.com' // If you have a placeholder for this, it must match
        }).then(function(response) {
            alert('Email sent successfully!');
            document.querySelector('.custom-form').reset(); // Clear the form after submission
        }, function(error) {
            console.error('Error:', error); // Log the error to the console
            alert('Failed to send email. Please try again.');
        });
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Handle form cancellation (CANCEL button)
document.querySelector('.cancel').addEventListener('click', function() {
    document.querySelector('.custom-form').reset(); // Clear the form fields
});

// Toggle navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

emailjs.init('your_user_id');

// Handle form submission (SEND button)
document.querySelector('.send').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var message = document.querySelector('textarea').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send('your_service_id', 'your_template_id', {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'matekk.jedzrzejczak@gmail.com'
        }).then(function(response) {
            alert('Email sent successfully!');
            document.querySelector('.custom-form').reset(); // Clear the form after submission
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
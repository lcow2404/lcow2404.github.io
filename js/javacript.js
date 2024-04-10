//Check whether the email entered is correct or not
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');

    contactForm.addEventListener('submit', function (event) {
        if (!emailInput.checkValidity()) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Form submitted successfully!');
        }
    });
});

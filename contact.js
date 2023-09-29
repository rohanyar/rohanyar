document.addEventListener("DOMContentLoaded", function () {
    emailjs.init('PjbqcBiztWP62X0yo');

    const form = document.getElementById('contact-form');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorElement.innerHTML = "";

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

        const email = document.getElementById('user_email').value;
        const phone = document.getElementById('user_phone').value;

        const validationErrors = [];

        if (!emailRegex.test(email)) {
            validationErrors.push("You have not entered a valid email address!");
        }
        if (!document.getElementById('user_lname').value.trim()) {
            validationErrors.push("You have not entered a last name!");
        }
        if (!document.getElementById('user_fname').value.trim()) {
            validationErrors.push("You have not entered a first name!");
        }
        if (!phoneRegex.test(phone)) {
            validationErrors.push("You have not entered a valid phone number! Please enter it in the 123-456-7890 format.");
        }
        if (!document.getElementById('user_message').value.trim()) {
            validationErrors.push("You have not entered a message!");
        }

        if (validationErrors.length > 0) {
            errorElement.innerHTML = validationErrors.join("<br>");
        } else {
            emailjs.sendForm('contact_service', 'contact_form', this);
        }
    });
});
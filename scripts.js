document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Here you would typically send the form data to a server
        // For this example, we will just display the confirmation message

        form.reset(); // Reset the form fields

        // Show the confirmation message
        confirmationMessage.classList.remove('hidden');
    });
});

// add product

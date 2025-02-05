document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get user input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate form submission (could be replaced with backend functionality)
        console.log(`Message from ${name} (${email}): ${message}`);

        // Show confirmation message
        confirmationMessage.style.display = "block";

        // Reset the form
        contactForm.reset();
    });
});

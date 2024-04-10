// JavaScript code for handling contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form data
    let formData = new FormData(this);

    // Convert form data to JSON
    let jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // Example: Send form data to server using fetch API
    fetch("submit_form.php", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from server
        console.log(data);
        alert("Your message has been submitted. We will get back to you soon.");
        document.getElementById("contactForm").reset(); // Reset form fields
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});

// Function to show the modal
function openModal() {
    document.getElementById("adminModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("adminModal").style.display = "none";
}
// Function to check credentials
function checkCredentials(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your server-side request here to validate credentials
    // You can use Fetch API to send the username and password to the server

    if (localStorage.getItem('username') !== null || localStorage.getItem('password') !== null) {
        closeModal();
    }
    // Example Fetch API request
    fetch("https://grand-school-d7e43eab69dc.herokuapp.com/admin", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + btoa(username + ":" + password) // Base64 encode the username and password
        }
    })
    .then(response => {
        if (response.status === 200) {
            localStorage.setItem("username", username); // Store the username in localStorage
            localStorage.setItem("password", password); // Store the password in localStorage
            closeModal(); // Close the modal after successful login
        } else {
            localStorage.clear(); // Clear localStorage if login is unsuccessful
        }
    })
    .catch(() => localStorage.clear());
}

openModal();
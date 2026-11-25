
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (email === "" || password === "") {
        message.textContent = "Please fill all fields.";
        message.style.color = "red";
    } else {
        message.textContent =
            "Login page ready! Firebase authentication will be connected next.";

        message.style.color = "green";
    }
});

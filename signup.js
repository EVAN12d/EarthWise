document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    localStorage.setItem("earthwiseName", name);
    localStorage.setItem("earthwiseEmail", email);
    let profile = {
        name: name,
        email: email,
        phone: "",
        description: ""
    };
    localStorage.setItem("profile", JSON.stringify(profile));
    window.location.href = "login.html";
});

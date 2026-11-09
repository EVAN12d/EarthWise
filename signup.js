document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    localStorage.setItem("earthwiseName", name);
    localStorage.setItem("earthwiseEmail", email);

    window.location.href = "login.html";
});

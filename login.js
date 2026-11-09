document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let savedEmail = localStorage.getItem("earthwiseEmail");

    if (!savedEmail || email !== savedEmail) {
        alert("Account not found. Please sign up first.");
        return;
    }

    sessionStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html";
});

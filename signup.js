document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
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

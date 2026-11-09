document.querySelectorAll(".login-required").forEach(function(link) {
    link.addEventListener("click", function(event) {
        let loggedIn = sessionStorage.getItem("loggedIn");

        if (loggedIn !== "true") {
            event.preventDefault();

            let modal = new bootstrap.Modal(
                document.getElementById("loginRequiredModal")
            );

            modal.show();
        }
    });
});

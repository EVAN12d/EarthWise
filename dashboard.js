let points = Number(localStorage.getItem("points")) || 0;
let quizCount = Number(localStorage.getItem("quizCount")) || 0;
let donationCount = Number(localStorage.getItem("donationCount")) || 0;
let postCount = Number(localStorage.getItem("postCount")) || 0;

let records = JSON.parse(localStorage.getItem("records") || "[]");
let goals = JSON.parse(localStorage.getItem("goals") || "[]");
let scores = JSON.parse(localStorage.getItem("scores") || "{}");
let posts = JSON.parse(localStorage.getItem("posts") || "[]");

function saveData() {
    localStorage.setItem("points", points);
    localStorage.setItem("quizCount", quizCount);
    localStorage.setItem("donationCount", donationCount);
    localStorage.setItem("postCount", postCount);
    localStorage.setItem("records", JSON.stringify(records));
    localStorage.setItem("goals", JSON.stringify(goals));
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("posts", JSON.stringify(posts));
}

function updateProfile() {
    document.getElementById("totalPoints").textContent = points;
    document.getElementById("quizCount").textContent = quizCount;
    document.getElementById("donationCount").textContent = donationCount;
    document.getElementById("postCount").textContent = postCount;

    let recordBox = document.getElementById("activityRecord");
    recordBox.innerHTML = "";
    if (records.length === 0) {
        recordBox.textContent = "No activity yet";
    } else {
        records.forEach(function(record) {
            let item = document.createElement("div");
            item.className = "activity-item";

            let dot = document.createElement("div");
            dot.className = "activity-dot";

            let info = document.createElement("div");

            let p = document.createElement("p");
            p.textContent = typeof record === "string" ? record : record.message;

            let date = document.createElement("small");
            date.textContent = typeof record === "string"
                ? "Date unavailable"
                : record.date;

            info.appendChild(p);
            info.appendChild(date);
            item.appendChild(dot);
            item.appendChild(info);
            recordBox.appendChild(item);
        });
    }
}

function addRecord(message) {
    let record = {
        message: message,
        date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    };
    records.unshift(record);
    saveData();
    updateProfile();
}

function openQuizTab() {
    let tab = document.querySelector('[data-bs-target="#quizzes"]');
    bootstrap.Tab.getOrCreateInstance(tab).show();
}

let categories = [
    "safety", "safety", "safety",
    "science", "science", "science",
    "geography", "geography", "geography"
];

function updateQuizResults() {
    ["safety", "science", "geography"].forEach(function(name) {
        let total = 0;

        categories.forEach(function(category, index) {
            if (category === name) {
                total += Number(scores[index]) || 0;
            }
        });

        let percent = Math.round(total / 3);
        let percentId = name === "science" ? "sciencePercent" : name + "Percent";
        let barId = name === "science" ? "scienceBar" : name + "Bar";

        document.getElementById(percentId).textContent = percent + "%";
        document.getElementById(barId).style.width = percent + "%";
    });

    document.querySelectorAll(".quiz-btn").forEach(function(button) {
        let index = Number(button.dataset.question);

        if (scores[index] !== undefined) {
            button.textContent = "Retake quiz";
        }
    });
}

let checkboxes = document.querySelectorAll(".check-item");
let savedChecks = JSON.parse(localStorage.getItem("checklist") || "[]");

checkboxes.forEach(function(checkbox, index) {
    checkbox.checked = savedChecks[index] || false;

    checkbox.addEventListener("change", function() {
        updateReadiness();
    });
});

function updateReadiness() {
    let checked = document.querySelectorAll(".check-item:checked").length;
    let total = checkboxes.length;
    let percent = total ? Math.round(checked / total * 100) : 0;

    document.getElementById("readinessPercent").textContent = percent + "%";
    document.getElementById("readinessCount").textContent =
        checked + " of " + total + " items prepared";

    document.getElementById("readinessChart").style.background =
        "conic-gradient(#2d8a76 " + percent + "%, #e1eae5 " + percent + "%)";

    let checks = [];

    checkboxes.forEach(function(checkbox) {
        checks.push(checkbox.checked);
    });

    localStorage.setItem("checklist", JSON.stringify(checks));
}

document.querySelectorAll(".donate-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        let card = button.closest(".donation-card");
        let name = card.querySelector("h5").textContent;
        let cost = parseInt(card.querySelector("span").textContent);

        if (points < cost) {
            alert("You don't have enough points. Complete quizzes to earn more!");
            return;
        }

        if (confirm("Use " + cost + " points for " + name + "?")) {
            points -= cost;
            donationCount++;

            addRecord("Redeemed " + cost + " points for " + name);
            alert("Donation recorded successfully!");
        }
    });
});

let filterButtons = document.querySelectorAll(".category-btn");

function filterPosts(type) {
    document.querySelectorAll(".community-post").forEach(function(post) {
        let category = post.dataset.type;

        if (type === "all" || category === type) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

let typeNames = {
    all: "Personal blogs",
    volunteer: "Volunteer program",
    community: "Community post",
    donation: "Donation deeds"
};

document.querySelectorAll("#postsContainer > .community-post").forEach(function(post) {
    let label = post.querySelector("small").textContent.trim().toLowerCase();

    if (label.includes("volunteer")) {
        post.dataset.type = "volunteer";
    } else if (label.includes("donation")) {
        post.dataset.type = "donation";
    } else if (label.includes("community")) {
        post.dataset.type = "community";
    } else {
        post.dataset.type = "all";
    }
});

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        filterPosts(button.dataset.filter);
    });
});

function displayPost(post) {
    let container = document.getElementById("postsContainer");

    let card = document.createElement("div");
    card.className = "community-post";
    card.dataset.type = post.type;

    let header = document.createElement("div");
    header.className = "post-header";

    let avatar = document.createElement("div");
    avatar.className = "post-avatar";
    avatar.textContent = post.name.substring(0, 2).toUpperCase();

    let info = document.createElement("div");

    let author = document.createElement("h6");
    author.textContent = post.name;

    let category = document.createElement("small");
    category.textContent = typeNames[post.type];

    info.appendChild(author);
    info.appendChild(category);
    header.appendChild(avatar);
    header.appendChild(info);

    let title = document.createElement("h5");
    title.textContent = post.title;

    let content = document.createElement("p");
    content.textContent = post.text;

    card.appendChild(header);
    card.appendChild(title);
    card.appendChild(content);
    container.prepend(card);
}
posts.forEach(function(post) {
    displayPost(post);
});

document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let type = document.getElementById("postType").value;
    let title = document.getElementById("postTitle").value.trim();
    let content = document.getElementById("postText").value.trim();
    let name = document.getElementById("profileName").textContent;
    if (title === "" || content === "") return;
    let post = {
        type: type,
        title: title,
        text: content,
        name: name
    };
    posts.push(post);
    postCount++;
    displayPost(post);
    addRecord("Uploaded a post: " + title);
    this.reset();
    document.querySelector('[data-filter="' + type + '"]').click();
    alert("Post uploaded successfully!");
});

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("fullName").value.trim();
    document.getElementById("profileName").textContent = name || "User";
    let profile = {
        name: name,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        description: document.getElementById("description").value
    };
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved!");
});

let savedProfile = JSON.parse(localStorage.getItem("profile") || "{}");

document.getElementById("fullName").value = savedProfile.name || "";
document.getElementById("profileName").textContent = savedProfile.name || "User";
document.getElementById("email").value = savedProfile.email || "";
document.getElementById("phone").value = savedProfile.phone || "";
document.getElementById("description").value = savedProfile.description || "";

function showGoals() {
    let list = document.getElementById("goalList");
    list.innerHTML = "";

    goals.forEach(function(goal, index) {
        let div = document.createElement("div");
        div.className = "d-flex justify-content-between align-items-center mb-2";

        let text = document.createElement("span");
        text.textContent = goal;

        let button = document.createElement("button");
        button.className = "teal-btn";
        button.textContent = "Remove";

        button.addEventListener("click", function() {
            goals.splice(index, 1);
            saveData();
            showGoals();
        });

        div.appendChild(text);
        div.appendChild(button);
        list.appendChild(div);
    });
}

document.getElementById("addGoal").addEventListener("click", function() {
    let input = document.getElementById("goalInput");
    let goal = input.value.trim();

    if (goal === "") return;

    goals.push(goal);
    input.value = "";

    saveData();
    showGoals();
});

updateProfile();
updateQuizResults();
updateReadiness();
showGoals();

document.querySelector('[data-filter="all"]').click();

// Open dashboard sections from the login dropdown

document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");

    if (section) {
        const tab = document.querySelector(
            '[data-bs-target="#' + section + '"]'
        );

        if (tab) {
            bootstrap.Tab.getOrCreateInstance(tab).show();
        }
    }

});

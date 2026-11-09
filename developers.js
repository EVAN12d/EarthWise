const members = [
    {
        number: "01",
        name: "Myat Noe Thadar",
        role: "Research & Preparedness Developer",
        image: "image/mnt.jpg",
        bio: "A member of the team who contributed to researching earthquake information and developing educational resources for earthquake awareness.",
        work: "Worked on earthquake research, statistics, safety guidelines, preparedness, dashboard, quiz progress and community hub.",
        telegram: "https://t.me/Ashylynny",
        tiktok: "https://www.tiktok.com/@ashylynny?_r=1&_t=ZS-9BFahlGVIai"
    },

    {
        number: "02",
        name: "Kyi Phyu Phyo Thant",
        role: "Web Developer & Content Designer",
        image: "image/kppt.png",
        bio: "Contributed to the website's development and content organisation, focusing on presenting information in a clear and accessible way.",
        work: "Worked on website development, About Us, FAQ and Fun Time activities.",
        telegram: "https://t.me/kas_here",
        tiktok: "https://www.tiktok.com/@kyi.p_who?_r=1&_t=ZS-9BFbYk04tL2"
    },

    {
        number: "03",
        name: "Win Min Htun",
        role: "Research & Content Developer",
        image: "image/wmt.png",
        bio: "Contributed to researching earthquake-related information and preparing educational content to help visitors understand earthquake risks.",
        work: "Worked on earthquake causes, impacts, natural and human-induced earthquakes and safety information.",
        telegram: "https://t.me/catblessy0umeow",
        tiktok: "https://www.tiktok.com/@evankrzy?_r=1&_t=ZS-9BFaegH0SiU"
    },

    {
        number: "04",
        name: "Myat Min Thit",
        role: "Risk Analysis & Research Developer",
        image: "image/mmt.png",
        bio: "Contributed to researching earthquake vulnerability and presenting information about areas that may face earthquake risks.",
        work: "Worked on Myanmar's earthquake vulnerability, areas at risk, earthquake information and statistics.",
        telegram: "https://t.me/Myat_Su83",
        tiktok: "https://www.tiktok.com/@dexter32144?_r=1&_t=ZS-9BFbommmDgr"
    }
];

function showProfile(index) {
    const member = members[index];

    document.getElementById("memberNumber").textContent = member.number;
    document.getElementById("memberName").textContent = member.name;
    document.getElementById("memberRole").textContent = member.role;
    document.getElementById("memberBio").textContent = member.bio;
    document.getElementById("memberWork").textContent = member.work;
    document.getElementById("memberImage").src = member.image;
    document.getElementById("memberImage").alt = member.name;

    document.getElementById("memberSocials").innerHTML = `
        <a href="${member.telegram}" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <i class="bi bi-telegram"></i>
        </a>
        <a href="${member.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i class="bi bi-tiktok"></i>
        </a>
    `;

    document.getElementById("profileModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProfile() {
    document.getElementById("profileModal").classList.remove("active");
    document.body.style.overflow = "";
}

document.getElementById("profileModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeProfile();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeProfile();
    }
});

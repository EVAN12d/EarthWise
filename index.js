// Navbar (KPPT)

const navLinks = document.querySelectorAll(
            ".nav-links > .nav-item-custom"
        );
        navLinks.forEach(function(item) {
            item.addEventListener("click", function() {
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
                item.classList.add("active");

                if (window.innerWidth < 992) {
                    const navbarMenu = document.getElementById("navbarMenu");
                    const menu = bootstrap.Collapse.getInstance(navbarMenu);

                    if (menu) {
                        menu.hide();
                    }
                }
            });
        });
        
// Seismic Snapshot Section (MNT)

const gallery = document.querySelector(".city-img");
const photos = document.querySelectorAll(".city-photo");

photos.forEach(function(photo) {

    // Make the photos keyboard-accessible too
    photo.setAttribute("role", "button");
    photo.setAttribute("tabindex", "0");
    photo.setAttribute("aria-pressed", "false");

    function togglePhoto() {
        const isActive = photo.classList.contains("active");
        if (isActive) {
            gallery.classList.remove("has-selection");

            photos.forEach(function(item) {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });
        } else {
            gallery.classList.add("has-selection"); //turn on blur effect
            photos.forEach(function(item) {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });
            photo.classList.add("active"); //selected pic
            photo.setAttribute("aria-pressed", "true");
        }
    }

    photo.addEventListener("click", togglePhoto); //mouse click
    photo.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            togglePhoto();
        }
    });
});

// Safety Guide Section (MNT)

const options = document.querySelectorAll(".option");

options.forEach(option => {
    //click function
    option.addEventListener("click", () => {
        options.forEach(item => {
            item.classList.remove("active"); //unselected cards
        });

        option.classList.add("active"); //clicked card
    });
});


//  Statistic Section (MNT)

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            let counter = entry.target;
            let target = Number(counter.getAttribute("data_ceil"));
            let startTime = null;
            let duration = 2500;

            function countUp(time) {
                if (startTime === null) {
                    startTime = time;
                }
                let progress = Math.min((time - startTime) / duration, 1);
                let current = Math.ceil(target * (1 - Math.pow(1 - progress, 4)));
                counter.innerText = current.toLocaleString();
                if (progress < 1) {
                    requestAnimationFrame(countUp);
                }
            }
            requestAnimationFrame(countUp);
            observer.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(function(counter) {
    observer.observe(counter);
});


//WMT JS
  // Scroll animations (AOS); IntersectionObserver keeps them working offline.
  if (window.AOS) {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
  } else {
    const revealItems = document.querySelectorAll('[data-aos]');
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wmt-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      revealItems.forEach(el => { el.classList.add('wmt-offline-reveal'); observer.observe(el); });
    }
  }
  document.querySelectorAll('.wmt-card').forEach(card => {
    card.tabIndex = 0;
    const animate = () => {
      card.classList.remove('wmt-clicked');
      void card.offsetWidth;
      card.classList.add('wmt-clicked');
    };
    card.addEventListener('click', animate);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); animate(); }
    });
    card.addEventListener('animationend', () => card.classList.remove('wmt-clicked'));
  });

//   Footer (KPPT)

// Newsletter form demonstration
    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("newsletterEmail").value;
        var message = document.getElementById("signupMessage");

        if (email.trim() !== "") {
            message.textContent = "Thank you for signing up!";
            document.getElementById("newsletterEmail").value = "";
        }
    });
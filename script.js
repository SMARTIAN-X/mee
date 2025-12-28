// GSAP Animations
gsap.from(".animate-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

gsap.from(".animate-img", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".animate-card", {
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});


gsap.from(".resume-grid", {
  scrollTrigger: {
    trigger: "#resume",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
});

// Mobile Menu Toggle
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle on burger click
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});

// Close menu when any link is clicked
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("toggle");
  });
});

// Contact Form Submission 
  const form = document.querySelector("form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          status.innerHTML = "❌ " + data.errors.map(err => err.message).join(", ");
        } else {
          status.innerHTML = "❌ Something went wrong. Please try again.";
        }
      }
    } catch (error) {
      status.innerHTML = "❌ Error: " + error.message;
    }
  });


// === Typed.js Typing Effect ===
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: [
      "Frontend Developer",
      "UI/UX Designer",
      "Code Artist",
      "Fullstack Knight"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
  });
});

// Page Transition (Fade In)
gsap.from("body", {
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});


gsap.utils.toArray(".section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 90%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });
});


document.querySelectorAll(".skill-card, .portfolio-item").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
});
  // Check if the page has a success indicator (Formspree can redirect with ?success=1)
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
      const successMsg = document.querySelector('.success-message');
      if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 4000); // Hide after 4 seconds
      }
    }
  });

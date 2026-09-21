// ===== Auto-update footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== DARK MODE TOGGLE (interactive feature #1) =====
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
  // HOOK: save preference to localStorage here later
});

// ===== PROJECT FILTERING (interactive feature #2) =====
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = (filter === "all" || filter === category) ? "block" : "none";
    });
  });
});

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ==========================================================
   FUTURE INTERACTIVE FEATURE HOOKS (add these later):
   - Scroll-reveal animations (Intersection Observer)
   - Project modal popups with detailed case studies
   - Animated skill bars / progress indicators
   - Contact form with validation (e.g., Formspree)
   - Typing animation for the hero tagline
   - Persist dark-mode choice via localStorage
   ========================================================== */

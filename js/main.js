// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = (filter === "all" || filter === category) ? "flex" : "none";
    });
  });
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

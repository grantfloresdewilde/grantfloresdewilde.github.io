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
// ===== FEATURED CASE STUDY EXPAND / COLLAPSE =====
const caseToggle = document.getElementById("case-toggle");
const caseDetails = document.getElementById("case-details");
if (caseToggle && caseDetails) {
  caseToggle.addEventListener("click", () => {
    const isOpen = !caseDetails.hasAttribute("hidden");
    if (isOpen) {
      caseDetails.setAttribute("hidden", "");
      caseToggle.setAttribute("aria-expanded", "false");
      caseToggle.classList.remove("open");
      caseToggle.childNodes[0].textContent = "Read full case study ";
    } else {
      caseDetails.removeAttribute("hidden");
      caseToggle.setAttribute("aria-expanded", "true");
      caseToggle.classList.add("open");
      caseToggle.childNodes[0].textContent = "Show less ";
    }
  });
}

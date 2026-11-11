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
      caseToggle.childNodes[0].textContent = "Read more";
    } else {
      caseDetails.removeAttribute("hidden");
      caseToggle.setAttribute("aria-expanded", "true");
      caseToggle.classList.add("open");
      caseToggle.childNodes[0].textContent = "Show less ";
    }
  });
}

// ===== PROJECT GALLERY (mosaic) =====
(function () {
  const modal   = document.getElementById("gallery-modal");
  const grid    = document.getElementById("gallery-grid");
  const titleEl = document.getElementById("gallery-title");
  const closeBtn= document.getElementById("gallery-close");

  function openGallery(card) {
    const raw = card.getAttribute("data-gallery");
    if (!raw) return; // no gallery defined → ignore click
    const images = raw.split(",").map((s) => s.trim()).filter(Boolean);
    if (images.length === 0) return;

    const title = card.getAttribute("data-title") || "";
    titleEl.textContent = title;

    // Build the mosaic (supports images AND videos)
grid.innerHTML = "";
images.forEach((src, i) => {
  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);
  if (isVideo) {
    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    grid.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${title} — image ${i + 1}`;
    img.loading = "lazy";
    grid.appendChild(img);
  }
});

    grid.scrollTop = 0;
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden"; // lock background scroll
  }

  function closeGallery() {
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  // Open when a card is clicked
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openGallery(card));
  });

  // Close controls
  closeBtn.addEventListener("click", closeGallery);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGallery(); // click outside the box
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.hasAttribute("hidden") && e.key === "Escape") closeGallery();
  });
})();

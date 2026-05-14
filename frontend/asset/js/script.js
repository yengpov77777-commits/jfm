// Category pills toggle
document.querySelectorAll(".cat-pill").forEach((pill) => {
  pill.addEventListener("click", function () {
    document
      .querySelectorAll(".cat-pill")
      .forEach((p) => p.classList.remove("active"));
    this.classList.add("active");
  });
});

// Heart toggle
document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const icon = this.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    this.style.borderColor = icon.classList.contains("fas")
      ? "var(--accent)"
      : "";
    this.style.color = icon.classList.contains("fas") ? "var(--accent)" : "";
  });
});

// Smooth counter animation for stats
function animateCount(el, target, suffix) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent =
      suffix === "k" ? (current / 1000).toFixed(1) + "k" : Math.floor(current);
  }, 16);
}

// Intersection observer for stats
const statsSection = document.querySelector(".stats-section");
let animated = false;
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !animated) {
    animated = true;
    const vals = statsSection.querySelectorAll(".stat-value");
    animateCount(vals[0], 1100, "k");
    animateCount(vals[1], 17900, "k");
    animateCount(vals[2], 189, "");
  }
});
observer.observe(statsSection);

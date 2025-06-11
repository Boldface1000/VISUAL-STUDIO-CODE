const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".slider-btn.left");
const rightBtn = document.querySelector(".slider-btn.right");

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});

const themeToggle = document.getElementById("themeLabel");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.textContent = isDark ? "🌙" : "☀";
  themeIcon.classList.add("rotate");
  setTimeout(() => themeIcon.classList.remove("rotate"), 300);
});

const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.add("active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

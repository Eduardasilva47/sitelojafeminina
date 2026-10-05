// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });
}


// ANIMAÇÃO AO ROLAR A PÁGINA
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

reveals.forEach((element) => {
  observer.observe(element);
});


// GARANTIA PARA ELEMENTOS JÁ VISÍVEIS AO ABRIR O SITE
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight) {
      element.classList.add("active");
    }
  });
});
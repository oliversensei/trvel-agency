document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".link a");

  const activateLink = () => {
    let currentSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentSection && link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", activateLink);
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  let toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav__links');
  navLinks.classList.toggle('show');
}


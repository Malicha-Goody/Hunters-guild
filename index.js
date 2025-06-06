// ==== Mobile Menu Toggle ====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobile-menu");
  const menu = document.querySelector(".navbar__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  }

  // ==== Optional: Smooth Scroll to Top Button ====
  const scrollTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==== Contact Form Handling ====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Grab inputs
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      console.log("Form Submission:", data);

      alert("Message sent! Thank you for reaching out.");
      contactForm.reset();
    });
  }

  // ==== Page-Specific JS ====
  const bodyClass = document.body.className;

  if (bodyClass.includes("homepage")) {
    // Homepage-specific code here
  }

  if (bodyClass.includes("servicespage")) {
    // Services-specific code here
  }

  // Add more conditions as needed for pages like about, contact, etc.
});

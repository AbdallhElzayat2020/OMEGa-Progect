// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show hidden Faq answer
const faqs = document.querySelectorAll(".Faq");
faqs.forEach((Faq) => {
  Faq.addEventListener("click", () => {
    Faq.classList.toggle("open");
    // change icon
    const icon = Faq.querySelector(".Faq-icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

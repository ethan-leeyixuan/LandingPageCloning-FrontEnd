const storeButton = document.querySelector(".first-nav-button");
const subNav = document.querySelector(".sub-nav-container");

// Show dropdown on hover
storeButton.addEventListener("mouseenter", () => {
  subNav.style.display = "flex";
});

// Hide dropdown when mouse leaves both button and dropdown
storeButton.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!subNav.matches(":hover")) {
      subNav.style.display = "none";
    }
  }, 200);
});

subNav.addEventListener("mouseleave", () => {
  subNav.style.display = "none";
});
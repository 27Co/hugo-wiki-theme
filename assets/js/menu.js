// wait for html to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("main-nav");

  // safety check to ensure the elements exist on the page
  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", () => {
      // toggles the 'open' class on and off every time you click
      navMenu.classList.toggle("open");
      toggleButton.classList.toggle("close");
    });
  }
});

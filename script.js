document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const secretScreen = document.getElementById("secret-screen");
  const mainSite = document.getElementById("main-site");

  // Hide loading screen and show the secret screen
  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
    }
  }, 1800);

  // Secret access
  window.unlockSite = function () {
    const passwordInput = document.getElementById("secret-input");
    const errorMessage = document.getElementById("error-message");

    if (!passwordInput) return;

    const enteredPassword = passwordInput.value.trim();

    // Temporary placeholder: replace with the password you choose
    const correctPassword = "PARI";

    if (enteredPassword.toUpperCase() === correctPassword) {
      secretScreen.classList.add("hidden");
      mainSite.classList.remove("hidden");

      if (errorMessage) {
        errorMessage.textContent = "";
      }
    } else {
      if (errorMessage) {
        errorMessage.textContent = "Not quite! Try again, Pari 💗";
      }
    }
  };

  // Mobile navigation menu
  window.toggleMenu = function () {
    const navigation = document.querySelector("nav");

    if (navigation) {
      navigation.classList.toggle("active");
    }
  };

  // Close mobile menu after selecting a section
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      const navigation = document.querySelector("nav");

      if (navigation) {
        navigation.classList.remove("active");
      }
    });
  });

  // Enter key also unlocks the website
  const passwordInput = document.getElementById("secret-input");

  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        window.unlockSite();
      }
    });
  }
});

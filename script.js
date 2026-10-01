document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".mini-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const originalText = button.textContent;
      button.textContent = "Added";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1200);
    });
  });
});

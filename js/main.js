const emailIcon = document.getElementById("email-icon");
const emailContainer = document.querySelector(".email-container");

emailIcon.addEventListener("click", () => {
    emailContainer.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!emailContainer.contains(e.target)) {
        emailContainer.classList.remove("active");
    }
});

document.getElementById("copy-btn").addEventListener("click", () => {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email);
  alert("Correo copiado al portapapeles");
});
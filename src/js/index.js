const button = document.querySelector(".btn-platform");

const elementoPlatform = document.querySelector(".btn-platform .platforms");

button.addEventListener("click", () => {

    const buttonActivated = elementoPlatform.classList.contains("ativo")

    elementoPlatform.classList.toggle("ativo");
} );

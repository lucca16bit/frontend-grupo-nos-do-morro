const formMessage   = document.getElementById("form-message");

document.getElementById("formulario").addEventListener("submit", function (event) {
    formMessage.classList.add("show"); 

    setTimeout(() => {
        formMessage.classList.remove("show"); 
    }, 5000);
});
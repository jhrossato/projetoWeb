const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const btnEntrar = document.querySelector("#btn-entrar");

btnEntrar.addEventListener("click", () => {

    const email = document.querySelector("#input-email-login");
    const senha = document.querySelector("#input-password-login");
    const emailError = document.querySelector("#email-error-login");
    const usuarioInvalido = document.querySelector("#login-help");
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    !regex.test(email.value) ?
        emailError.classList.add("show") : emailError.classList.remove("show");

    for (l = 0; l < usuarios.length; l++) {

        usuarios[l].email == email.value && usuarios[l].senha == senha.value ?
            window.location = 'home.html' : usuarioInvalido.classList.add("show");
    }
});

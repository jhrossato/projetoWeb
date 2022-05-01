const btn = document.querySelector("#send");

btn.addEventListener("click", () => {
    const name = document.querySelector("#input-name");
    const email = document.querySelector("#input-email");
    const password = document.querySelector("#input-password");
    const password2 = document.querySelector("#input-repeat-password");
    const passwordError = document.querySelector("#passwordError");
    const emailError = document.querySelector("#emailError");
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let validEmail = false;
    let validPassword = false;

    password.value != password2.value ? passwordError.classList.add("show") : (validPassword = true);

    !regex.test(email.value) ? emailError.classList.add("show") : (validEmail = true);

    if (validPassword && validEmail) {
        passwordError.classList.remove("show");
        emailError.classList.remove("show");
        alert("Nome: " + name.value +
            "\nE-mail: " + email.value +
            "\nSenha: " + password.value +
            "\nRepetir a Senha: " + password2.value
        );

        salvaCadastro(name.value, email.value, password.value);
        window.location = 'index.html';
    }
});

function salvaCadastro(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
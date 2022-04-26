
document.querySelector("#input-imagem").addEventListener("change", function () {

    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.removeItem("colecao-image");
        localStorage.setItem("colecao-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});

document.querySelector("#send").addEventListener("click", () => {

    const nome = document.querySelector("#input-name-colecao");
    const img = localStorage.getItem("colecao-image");

    addNovaColecao(nome.value, img);
});



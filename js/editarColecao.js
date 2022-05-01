const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');
const colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];

document.querySelector("#input-name-colecao").value = colecoes[idParam].nome;

document.querySelector("#input-imagem").addEventListener("change", function () {

    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.removeItem("colecao-image");
        colecoes[idParam].img = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});

document.querySelector("#send").addEventListener("click", () => {

    const nome = document.querySelector("#input-name-colecao");

    editaColecao(nome.value);
    location.reload();
});

function editaColecao(nomeColecao) {

    let cartas = colecoes[idParam].cartas;
    let img = colecoes[idParam].img;

    colecoes[idParam] = ({
        nome: nomeColecao,
        img: img,
        cartas: cartas
    });

    localStorage.setItem("colecoes", JSON.stringify(colecoes));
}

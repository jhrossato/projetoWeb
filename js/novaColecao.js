const colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];
const cartas = [];

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
    location.reload();
});

function addNovaColecao(nomeColecao, imgColecao) {
    let posicoesNulas = 0;
    for (l = 0; l < colecoes.length; l++) {
        if (colecoes[l] == null) {
            colecoes[l] = ({
                nome: nomeColecao,
                img: imgColecao,
                cartas: cartas
            });
            localStorage.setItem("colecoes", JSON.stringify(colecoes));
            posicoesNulas++;
            break;
        }
    }

    if (posicoesNulas == 0) {
        colecoes.push({
            nome: nomeColecao,
            img: imgColecao,
            cartas: cartas
        });

        localStorage.setItem("colecoes", JSON.stringify(colecoes));
    }
}





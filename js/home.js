
window.onload = () => {

    // carregaCartao(10, "Objetos", "images/Ball.png");
    mostraColecao();
}

function mostraColecao() {

    let colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];
    for (l = 0; l < colecoes.length; l++) {
        carregaCartao(l, colecoes[l].nome, colecoes[l].img);
    }
}

function carregaCartao(id, nome, imagemSrc) {

    let linha = document.querySelector(".row");

    let novoEspaco = document.createElement("div");
    novoEspaco.classList.add("col-3");
    novoEspaco.classList.add("home-colecao");
    linha.appendChild(novoEspaco);

    let novoCartao = document.createElement("div");
    novoCartao.classList.add("card");
    novoEspaco.appendChild(novoCartao);

    let divEditar = divCartao(novoCartao);
    let editar = document.createElement("img");
    editar.setAttribute("src", "images/Editar.png");
    editar.classList.add("icone-editar");
    divEditar.appendChild(editar);

    let divImg = divCartao(novoCartao);
    divImg.classList.add("div-img");
    let img = document.createElement("img");
    img.src = imagemSrc;
    img.classList.add("carta-img");
    divImg.appendChild(img);
    img.addEventListener("click", () => {
        window.location = 'colecao.html' + '?id=' + id;
    });

    let divTexto = divCartao(novoCartao);
    let novoTexto = document.createElement("h5")
    novoTexto.classList.add("texto-carta");
    divTexto.appendChild(novoTexto);
    novoTexto.innerHTML = nome;
    novoTexto.addEventListener("click", () => {
        window.location = 'colecao.html' + '?id=' + id;
    });

    let divExcluir = divCartao(novoCartao);
    let excluir = document.createElement("img");
    excluir.setAttribute("src", "images/Excluir.png");
    excluir.classList.add("icone-excluir");
    divExcluir.appendChild(excluir);
}

function divCartao(novoCartao) {
    let novaDivCartao = document.createElement("div");
    novaDivCartao.classList.add("carta-conteudo");
    novoCartao.appendChild(novaDivCartao);
    return novaDivCartao;
}


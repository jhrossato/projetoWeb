
window.onload = () => {

    let colecoes = [];
    colecoes = JSON.parse(localStorage.getItem("colecoes"));

    mostraColecao(colecoes);
}

function mostraColecao(colecoes) {

    let novaColecao = [];

    colecoes.forEach(() => {
        novaColecao = colecoes;
    });

    novaColecao.forEach(() => {
        carregaCartao();
    });
}

function carregaCartao() {

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
    let img = document.createElement("img");
    img.src = novaColecao[1];
    img.classList.add("carta-img");
    divImg.appendChild(img);

    let divTexto = divCartao(novoCartao);
    let novoTexto = document.createElement("h5")
    novoTexto.classList.add("texto-carta");
    divTexto.appendChild(novoTexto);
    novoTexto.innerHTML = novaColecao[0];

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
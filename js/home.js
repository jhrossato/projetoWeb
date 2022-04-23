
localStorage.nomeColecaoFixo = "Objetos";
localStorage.imagemColecaoFixa = "images/Ball.png";

var colecoes = [];
colecoes = JSON.parse(localStorage.getItem("colecoes"));

var novaColecao = [];
novaColecao = colecoes[0];

window.onload = () => {


    let novoCartao = document.createElement("div");
    novoCartao.classList.add("card");

    let espaco01 = document.querySelector("#espaco-01");
    espaco01.appendChild(novoCartao);

    let primeiraDivCartao = document.createElement("div");
    primeiraDivCartao.classList.add("carta-conteudo");
    novoCartao.appendChild(primeiraDivCartao);

    let segundaDivCartao = document.createElement("div");
    segundaDivCartao.classList.add("carta-conteudo");
    novoCartao.appendChild(segundaDivCartao);

    let terceiraDivCartao = document.createElement("div");
    terceiraDivCartao.classList.add("carta-conteudo");
    novoCartao.appendChild(terceiraDivCartao);

    let quartaDivCartao = document.createElement("div");
    quartaDivCartao.classList.add("carta-conteudo");
    novoCartao.appendChild(quartaDivCartao);

    let editar = document.createElement("img");
    editar.setAttribute("src", "images/Editar.png");
    editar.classList.add("icone-editar");
    primeiraDivCartao.appendChild(editar);

    let bola = document.createElement("img");
    bola.src = novaColecao[1];
    //bola.setAttribute("src", "images/Ball.png");
    bola.classList.add("carta-img");
    segundaDivCartao.appendChild(bola);

    let novoTexto = document.createElement("h5")
    novoTexto.classList.add("texto-carta");
    terceiraDivCartao.appendChild(novoTexto);
    novoTexto.innerHTML = novaColecao[0];

    let excluir = document.createElement("img");
    excluir.setAttribute("src", "images/Excluir.png");
    excluir.classList.add("icone-excluir");
    quartaDivCartao.appendChild(excluir);
}

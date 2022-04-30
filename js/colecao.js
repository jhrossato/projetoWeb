const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const idParam = urlParams.get('id');
const colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];
let cartas = colecoes[idParam].cartas;
let i = 0;

window.onload = () => {
    mostraNomeDaColecao(idParam);
    listaCartas();
}

function mostraNomeDaColecao(idParam) {
    for (l = 0; l < colecoes.length; l++) {
        if (l == idParam) {
            document.getElementById("titulo-colecao").innerHTML += colecoes[l].nome;
        }
    }
}

document.querySelector("#novo-cartao").addEventListener("click", () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("container").innerHTML = xhttp.responseText;
            document.querySelector("#cadastrar-novo-cartao").addEventListener("click", () => {
                addNovaCarta();
                location.reload();
            });
        }
    }
    xhttp.open("GET", "novo-cartao.txt", true);
    xhttp.send();
});

function addNovaCarta() {
    const frente = document.querySelector("#input-frente");
    const verso = document.querySelector("#input-verso");
    for (l = 0; l < colecoes.length; l++) {
        if (l == idParam) {
            colecoes[idParam].cartas.push({
                frente: frente.value,
                verso: verso.value
            });
            localStorage.setItem("colecoes", JSON.stringify(colecoes));
        }
    }
}

function listaCartas() {

    let cartas = colecoes[idParam].cartas;
    cartas.forEach((item) => {

        let container = document.querySelector("#lista-cartas");

        let novaCarta = document.createElement("div");
        novaCarta.classList.add("p-2");
        novaCarta.classList.add("bd-highlight");
        novaCarta.classList.add("lista-cartas");
        container.appendChild(novaCarta);

        let novoTexto = document.createElement("h5");
        novoTexto.classList.add("texto-carta-lista");
        novaCarta.appendChild(novoTexto);
        novoTexto.innerHTML = item.frente;

        let excluir = document.createElement("img");
        excluir.setAttribute("src", "images/Excluir.png");
        excluir.classList.add("icone-excluir");
        novoTexto.appendChild(excluir);

        let editar = document.createElement("img");
        editar.setAttribute("src", "images/Editar.png");
        editar.classList.add("icone-editar");
        novoTexto.appendChild(editar);
    })
}

document.querySelector("#jogar").addEventListener("click", () => {
    cartaFrenteJogar(cartas[i]);
});

function cartaFrenteJogar(item) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("container-fluid").innerHTML = xhttp.responseText;
            document.getElementById("texto-carta-frente-jogar").innerHTML = item.frente;
            let totalCartoes = document.querySelector("#total-cartoes-frente");
            totalCartoes.innerHTML += (i + 1) + " / " + cartas.length;
            document.querySelector("#virar").addEventListener("click", () => {
                cartaVersoJogar(item);
            });
        }
    }
    xhttp.open("GET", "jogar-frente.txt", true);
    xhttp.send();
}

function cartaVersoJogar(item) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("container-fluid").innerHTML = xhttp.responseText;
            document.getElementById("texto-carta-frente-jogar").innerHTML = item.frente;
            document.getElementById("texto-carta-verso-jogar").innerHTML = item.verso;
            let totalCartoes = document.querySelector("#total-cartoes-verso");
            totalCartoes.innerHTML += (i + 1) + " / " + cartas.length;
            if (i == cartas.length - 1) {
                document.querySelector("#proximo").innerHTML = "Finalizar";
                document.querySelector("#proximo").addEventListener("click", () => {
                    location.reload();
                });

            } else {
                document.querySelector("#proximo").addEventListener("click", () => {

                    cartaFrenteJogar(cartas[i += 1]);
                });
            }
        }
    }
    xhttp.open("GET", "jogar-verso.txt", true);
    xhttp.send();
}
localStorage.nomeColecaoFixo = "Objetos";
localStorage.imagemColecaoFixa = "images/Ball.png";

localStorage.setItem("colecoes", "[]");
localStorage.setItem("novaColecao", "[]");

var novaColecao = [] = JSON.parse(localStorage.getItem("novaColecao"));
var colecoes = [] = JSON.parse(localStorage.getItem("colecoes"));

novaColecao.push(
    localStorage.nomeColecaoFixo,
    localStorage.imagemColecaoFixa
);

colecoes.push(novaColecao);

localStorage.setItem("colecoes", JSON.stringify(colecoes));
localStorage.setItem("novaColecao", JSON.stringify(novaColecao));



function addNovaColecao(nomeColecao, imgColecao) {

    let colecoes = JSON.parse(localStorage.getItem("colecoes")) || [];
    let novaColecao = [];
    novaColecao.push(
        nomeColecao,
        imgColecao
    );

    colecoes.push(novaColecao);
    localStorage.setItem("colecoes", JSON.stringify(colecoes));
}


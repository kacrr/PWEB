let estaQuebrada = false;

function abrir() {
    if (!estaQuebrada) {
        document.getElementById("janela").src = "./janela_aberta.png";
        document.getElementById("titulo").innerText = "Janela Aberta";
    }
}

function fechar() {
    if (!estaQuebrada) {
        document.getElementById("janela").src = "janela_fechada.png";
        document.getElementById("titulo").innerText = "Janela Fechada";
    }
}

function quebrar() {
    estaQuebrada = true;
    document.getElementById("janela").src = "janela_quebrada.png";
    document.getElementById("titulo").innerText = "Janela Quebrada";
}
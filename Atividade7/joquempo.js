function jogar(escolhaUsuario) {
    let numero = Math.random();
    let escolhaComputador;

    if (numero < 0.33) {
        escolhaComputador = "pedra";
    } else if (numero < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    let resultado;

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate";
    } else if ((escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaComputador === "pedra" && escolhaUsuario === "tesoura")) {
        resultado = "Pedra quebra tesoura";
    } else if ((escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaComputador === "tesoura" && escolhaUsuario === "papel")) {
        resultado = "Tesoura corta papel";
    } else if ((escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaComputador === "papel" && escolhaUsuario === "pedra")) {
        resultado = "Papel cobre pedra";
    }
    document.getElementById("usuario").innerText = escolhaUsuario;

    document.getElementById("computador").innerText = escolhaComputador;

    document.getElementById("resultado").innerHTML = resultado;
}
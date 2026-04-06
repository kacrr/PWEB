var Operacoes = function () {
    let num1 = parseFloat(prompt("Digite um número:"));
    let num2 = parseFloat(prompt("Digite outro número:"));

    soma = num1 + num2;
    subtracao = num1 - num2;
    produto = num1 * num2;
    divisao = num1 / num2;
    resto = num1 % num2;

    alert(
        "Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Produto: " + produto + "\n" +
        "Divisão: " + divisao + "\n" +
        "Resto: " + resto
    );

}

Operacoes();
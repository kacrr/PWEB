var calcularMedia = function() {

    let nome = prompt("Digite o seu nome:");
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota do aluno:"));

    let media=(nota1+nota2+nota3+nota4)/4;

    return `A média do aluno ${nome} é igual a ${media}`;
}

alert(calcularMedia());
"use strict";
// 1
console.log('Receba');
// 2
let inpermanente = 'Eu mudo';
const permanente = 'Eu NÃO mudo';
var idoso = 'Porque eu existo?';
console.log(`${inpermanente} 
${permanente} 
${idoso}`);
// 3
function sominator500(a, b) {
    return a + b;
}
console.log(sominator500(1, 1));
// 4
function parOuImparinator1000(i) {
    if (i % 2 === 0) {
        return `${i} é par!`;
    }
    else {
        return `${i} é ímpar!`;
    }
}
console.log(parOuImparinator1000(2));
// 5
function comparinatorV1(a, b) {
    if (a > b) {
        return `${a} é maior que ${b}`;
    }
    else if (b > a) {
        return `${b} é maior que ${a}`;
    }
    else if (a === b) {
        return 'Os números são iguais';
    }
    else {
        return 'Algo deu errado';
    }
}
console.log(comparinatorV1(2, 5));
// 6
function aquiloQueTeuCrushNuncaVaiFalarPraVoceinatorV1(i) {
    return `Olá ${i}`;
}
console.log(aquiloQueTeuCrushNuncaVaiFalarPraVoceinatorV1('Arbinaldinilsonino'));
// 7
function quadradinatorV1a(a) {
    return a ** 2;
}
console.log(quadradinatorV1a(5));
// 8
function medianatorV1(a, b, c) {
    return (a + b + c) / 3;
}
console.log(medianatorV1(3, 6, 19));
// 9
function celciusPraFahrenheitinatorV1(c) {
    return Math.round((c * 1.8) + 32);
}
console.log(celciusPraFahrenheitinatorV1(31));
// 10
function contarDeUmADezinatorV1b() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
contarDeUmADezinatorV1b();
// 11
let amostradinho = 0;
while (amostradinho < 10) {
    amostradinho++;
    console.log(amostradinho);
}
// 12
function somaDeArrayinatorV1(arr) {
    let result = 0;
    arr.map((i) => result += i);
    return result;
}
let arrayteste = [1, 4, 7, 2];
console.log(somaDeArrayinatorV1(arrayteste));
// 13
/* USA ISSO AQUI:
    const found = arrayteste.some((item) => item === 2)

    Ele retorna: true
*/
function cacarNumeroinatorV1(i, arr) {
    let contagem = -1;
    let found = false;
    let contagemFinal = 0;
    arr.forEach((thing) => {
        contagem++;
        if (thing === i) {
            found = true;
            contagemFinal = contagem;
        }
    });
    if (found === true) {
        return console.log(`O número ${i} está na posição ${contagemFinal}`);
    }
    else {
        return console.log('O número inserido não está no banco de dados ou não é um número');
    }
}
cacarNumeroinatorV1(7, arrayteste);
// 14
let arrayDeNomes = ['José', 'Bruno', 'Aszercelbalildo', 'Jonas', 'Kleber'];
arrayDeNomes.forEach((nome) => {
    console.log(nome);
});
// 15
function contarALetraAiDoidoinatorV1(letra, palavra) {
    let contador = 0;
    for (let i = 0; i <= palavra.length; i++) {
        if (palavra.toLowerCase()[i] === letra.toLowerCase()) {
            contador++;
        }
    }
    return console.log(`A letra ${letra} aparece ${contador} vezes na palavra ${palavra}`);
}
contarALetraAiDoidoinatorV1('a', 'Soft and Wet');
// 16
function inverterPalavrasinatorV1(palavra) {
    let palavraInvertida = '';
    for (let i = 0; i < palavra.length; i++) {
        palavraInvertida = palavra[i] + palavraInvertida;
    }
    return console.log(palavraInvertida);
}
inverterPalavrasinatorV1('Sigma');
// 17
function removedorDeEspacosinator(palavra) {
    let palavraDesespacada = palavra.split(' ').join('');
    return console.log(palavraDesespacada);
}
removedorDeEspacosinator('Sig ma');

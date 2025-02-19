// 1
console.log('Receba')

// 2
let inpermanente: string = 'Eu mudo'
const permanente: string = 'Eu NÃO mudo'
var idoso: string = 'Porque eu existo?'

console.log(`${inpermanente} 
${permanente} 
${idoso}`)

// 3
function sominator500(a: number, b: number): number {
    return a + b
}

console.log(sominator500(1, 1))

// 4
function parOuImparinator1000(i: number): string {
    if (i % 2 === 0) {
        return `${i} é par!`
    } else {
        return `${i} é ímpar!`
    }
}

console.log(parOuImparinator1000(2))

// 5
function comparinatorV1(a: number, b: number): string {
    if (a > b) {
        return `${a} é maior que ${b}`
    } else if (b > a) {
        return `${b} é maior que ${a}`
    } else if (a === b) {
        return 'Os números são iguais'
    } else {
        return 'Algo deu errado'
    }
}

console.log(comparinatorV1(2, 5))

// 6
function aquiloQueTeuCrushNuncaVaiFalarPraVoceinatorV1(i: string): string {
    return `Olá ${i}`
}

console.log(aquiloQueTeuCrushNuncaVaiFalarPraVoceinatorV1('Arbinaldinilsonino'))

// 7
function quadradinatorV1a(a: number): number {
    return a ** 2
}

console.log(quadradinatorV1a(5))

// 8
function medianatorV1(a: number, b: number, c: number): number {
    return (a + b + c) / 3
}

console.log(medianatorV1(3, 6, 19))

// 9
function celciusPraFahrenheitinatorV1(c: number): number {
    return Math.round((c * 1.8) + 32)
}

console.log(celciusPraFahrenheitinatorV1(31))

// 10
function contarDeUmADezinatorV1b(): void {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

contarDeUmADezinatorV1b()

// 11
let amostradinho: number = 0

while (amostradinho < 10) {
    amostradinho++;
    console.log(amostradinho)
}

// 12
function somaDeArrayinatorV1(arr: number[]): number {
    let result: number = 0

    arr.map((i) => result += i)

    return result
}

let arrayteste: number[] = [1, 4, 7, 2]

console.log(somaDeArrayinatorV1(arrayteste))

// 13
/* USA ISSO AQUI:
    const found = arrayteste.some((item) => item === 2)

    Ele retorna: true
*/
function cacarNumeroinatorV1(i: number, arr: number[]): void {
    let contagem: number = -1
    let found: any = false
    let contagemFinal: number = 0

    arr.forEach((thing) => {
        contagem++

        if (thing === i) {
            found = true
            contagemFinal = contagem
        }
    })

    if (found === true) {
        return console.log(`O número ${i} está na posição ${contagemFinal}`)
    } else {
        return console.log('O número inserido não está no banco de dados ou não é um número')
    }
}

cacarNumeroinatorV1(7, arrayteste)

// 14
let arrayDeNomes: string[] = ['José', 'Bruno', 'Aszercelbalildo', 'Jonas', 'Kleber']

arrayDeNomes.forEach((nome) => {
    console.log(nome)
})

// 15
function contarALetraAiDoidoinatorV1(letra: string, palavra: string): void {
    let contador: number = 0

    for (let i = 0; i <= palavra.length; i++) {
        if (palavra.toLowerCase()[i] === letra.toLowerCase()) {
            contador++
        }
    }

    return console.log(`A letra ${letra} aparece ${contador} vezes na palavra ${palavra}`)
}

contarALetraAiDoidoinatorV1('a', 'Soft and Wet')

// 16
function inverterPalavrasinatorV1(palavra: string): string {
    let palavraInvertida: string = ''

    for (let i = 0; i < palavra.length; i++) {
        palavraInvertida = palavra[i] + palavraInvertida 
    }

    return palavraInvertida
}

console.log(inverterPalavrasinatorV1('Sigma'))

// 17
function removedorDeEspacosinator(palavra: string): void {
    let palavraDesespacada: string = palavra.split(' ').join('')
    
    return console.log(palavraDesespacada)
}

removedorDeEspacosinator('Sig ma')

// 18
function letraMaiusculinatorV1(palavra: string): void {
    let palavraMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1)

    console.log(palavraMaiuscula)
}

letraMaiusculinatorV1('bill')

// 19
function palindromoCheckerinatorV1(palavra: string): void {
    let palavraInvertida: string = inverterPalavrasinatorV1(palavra)

    if (palavraInvertida.toLowerCase() === palavra.toLowerCase()) {
        return console.log(`A palavra ${palavra} é um palíndomo`)
    } else if (palavraInvertida.toLowerCase() != palavra.toLowerCase()) {
        return console.log(`A palavra ${palavra} não é um palíndromo`)
    } else {
        return console.log('Isso não é uma palavra')
    }
}

palindromoCheckerinatorV1('Esse')

// 20
const Aderbalildeson: object = {
    nome: "Aderbalildeson",
    idade: 24,
    profissão: "Assistente de pedreiro"
}
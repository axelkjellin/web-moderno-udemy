let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: [
            7,
            8,
            9
        ]
    })
})

p.then(function(valor) {
    console.log(valor.y)
})

let g = new Promise(function (cumprirPromessa) {
    cumprirPromessa([ 'Ana', 'Paulo', 'Carlos', 'Daniel'])
})

g
    .then(valor => valor[0])
    .then(primeiroValordoValor => primeiroValordoValor[0])
    .then(primeiraLetra => primeiraLetra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


//modo função
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve([ 'Ana', 'Paulo', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(letraMinuscula => console.log(letraMinuscula))
    //esse de cima é a mesma coisa que só passar a função, ja que ele SEMPRE RETORNA APENAS UM PARAMETRO
    .then(console.log)


const numeros = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    n5: 5,
}

const numeros2 = Object.entries(numeros)

const result = numeros2.map(([chave, valor]) => {
    return valor
})

const resultado = function([...results]){
    let total = 0
    results.forEach(n => total+= n)
    return total
}

console.log(resultado(result))

// console.log(resultado(result))

// const result = numeros2.map(([chave, valor]) => {
//     console.log('chave => '+ chave + '\nvalor => ' + valor)
//     return valor
// })
// console.log(result)
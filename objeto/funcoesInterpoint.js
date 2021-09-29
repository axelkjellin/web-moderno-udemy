const pessoa ={
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

const numeros = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    n5: 5,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

const numeros2 = Object.entries(numeros)
const result = numeros2.map(([chave, valor]) => {
    console.log('chave => '+ chave + '\nvalor => ' + valor)
    return valor
})
console.log(result)


Object.entries(pessoa).forEach(e =>{

    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) =>{// destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign(ECMAScript 2015)
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
const nums = [1 ,2 ,3 ,4, 5]

//for com proposito 
let resultado = nums.map(
    function(e){            // o e eh o parametro e ele ta recebendo o nums
        return e*2;
})
console.log(resultado, nums)

const soma10 = nums.map(function(numero){
    return numero +10
})

console.log(soma10)

//com função arrow que ja possui o return implicito
const soma20 = e => e +20
const triplo = e => e*3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

const result = nums.map(soma20)
console.log(result)
const result2 = nums.map(triplo)
console.log(result2)
const result3 = nums.map(paraDinheiro)
console.log(result3)

const resultadoProfessor = nums.map(soma20).map(triplo).map(paraDinheiro)
console.log(resultadoProfessor)


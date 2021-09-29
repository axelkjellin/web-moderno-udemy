const nums =[1, 2, 3, 4]

let resultado = nums.map(function(numeros){
    return numeros *2
})

console.log(resultado)

const soma10 = numero => numero +10
const multiplicar = n1 => n1 * 3
const ParaDinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(multiplicar).map(ParaDinheiro)


//console.log(resultado)


const real = [12, 45, 36, 99]

const paraReal = valor => `R$ ${parseFloat(valor).toFixed(2)}`
const resultado2 = real.map(paraReal)
console.log(resultado2)

const paraDolar = (valor) => valor/3.41
const sintaxeDolar =(valor)=> `$ ${parseFloat(valor).toFixed(2)}`
const resultado3 = real.map(paraDolar).map(sintaxeDolar)
console.log(resultado3)

//////////////////////////////////////////////////////////////
//          FILTHER

const produtos =[
    {nome: 'Notebook', preco:2499, fragil:true},
    {nome: 'ipad', preco:4199, fragil:true},
    {nome: 'Copo de vrido', preco:12.49, fragil:true},
    {nome: 'Copo de Plastico', preco:18.99, fragil:false}
]

console.log(produtos.filter(function(produto){
     return produto.fragil == true     
}))

const pFragil = (produto) => produto.fragil == true
const pCaro = (valor) => valor.preco > 500

const total = produtos.filter(pFragil).filter(pCaro)
console.log(total)


const pBarato = (produto) => produto.preco < 50
const pResistente = (resistencia) => resistencia.fragil == false

const total2 = produtos.filter(pBarato).filter(pResistente)

console.log(total2)


const pessoas = [
    {nome: 'Axel', idade: 29, peso: 99},
    {nome: 'Joao', idade: 15, peso: 60},
    {nome: 'Maria', idade: 55, peso: 75}
]

const idadeMaior = (a) => a.idade > 25
const pesoOk = (p) => p.peso > 70

const asPessoasSelecionadas = pessoas.filter(idadeMaior).filter(pesoOk)

console.log(asPessoasSelecionadas)

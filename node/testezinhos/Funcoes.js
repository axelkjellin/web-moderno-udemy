//função retornando algum valor
function MultiplicarNumeros(a, b){
    return a *b
}
//imprimindo esse valor chamando a função no console.log
console.log(MultiplicarNumeros(3, 4))
//////////////////////////////////////////////////////////////////////////////


//função retornando algum valor
function MultiplicarNumeros2(n1, n2, n3){
    return console.log(n1*n2*n3)
}
//imprimindo esse valor chamando a função no console.log
MultiplicarNumeros2(2,2,2)
////////////////////////////////////////////////////////////////////////////////

//função imprimindo em template do js um nome e uma idade que foi recebido como parametros
function EscreverIdade(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
}
//apenas chamando a função
EscreverIdade("Axel", 29)
////////////////////////////////////////////////////////////////////////////////////////////


function Soma(a, b, c, d = 10){
   console.log(a+b+c+d)
}

Soma(5,5,5)

//função anonima sendo colocada em uma variavel, sem retorno
const imprimirSoma = function(a, b, c, d=10){
    console.log(a+b+c+d)
}
imprimirSoma(10,10,10)
imprimirSoma(10,10,10,15)

/////////////////////////////////////////////////////////////////

//FUNÇÃO ARROW IMPORTANTE
const cliente = (nome, idade, valor, tempo) => {
    console.log(`Nome: ${nome}\nIdade: ${idade} anos\nValor: R$${valor} reais\nTempo ${tempo} meses`)
}

cliente("Axel Kjellin", 29, 300.00, 6)


const preencherMatriz = (n1, n2) =>{
   for(let i = 1; i < n2+1; i++){
       console.log(n1+i)
   }
}
preencherMatriz(10,10)
//console.log(preencherMatriz(0, 10))

// arrow function com retorno implicito

const exponencial = (n1, n2) => Math.pow(n1, n2)
console.log(exponencial(5, 5))

const idadeTotal = (idade) => (idade +1)
const nomeTemplate = (nome, idadeTotal) => `Nome: ${nome}\nIdade: ${idadeTotal}`

console.log(nomeTemplate("Axel", idadeTotal(29)))

/////////////////////////////////////////////////////////////////
//função callback em array
const carros = [" mercedez ", " BMW" , " Volvo "]

const imprimirCarros = function(nome, indice) {
    console.log(`${indice+1}) ${nome}`)
  
} 
carros.forEach(imprimirCarros)

carros.forEach( function(indice, nome){
    console.log(indice, nome)
})

carros.forEach(carro => console.log(carro))
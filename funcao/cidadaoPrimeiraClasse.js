//Funcao em js é first-class Object (Citizens)
// higher-order function

//criar de forma literal
function fun1() { }

// armazenar em uma variavel
const fun2 = function() {}

// armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
// indice[0] pegando a primeira funçaõ function(a, b) {return a + b}
console.log(array[0](2, 3))

//armazenar dentro de um atributo de um objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//passar funçao como parametro para outra função
function run(fun){
    fun()
}

run(function() {console.log('executando ...')})

//uma funçao pode retirnar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
//primeira possibilidade
soma(2, 3)(4)
//segunda possibilidade
const cincoMais = soma(2, 3)
cincoMais(4)

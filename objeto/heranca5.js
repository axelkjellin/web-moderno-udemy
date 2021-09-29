//tudo em js eh funçao, segue exemplos de função
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// e toda função tem um prototype, ou seja, herança

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
//literal do tipo string
console.log('Escola coder'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// String.prototype.toString = function(){
//     return "Lascou tudo!!"
// }
// console.log("Escola coder".reverse())


const teste = 'Testando Split'

const result = teste.split('');

console.log(result)
console.log(result.reverse())
console.log(result.join(''))
console.log(result.reverse())
console.log(result.join(''))


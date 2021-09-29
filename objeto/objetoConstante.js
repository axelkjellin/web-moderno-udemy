//pessoa -> memoria(123)
const pessoa = {nome:'pessoa'}
pessoa.nome = 'Pedro'

console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
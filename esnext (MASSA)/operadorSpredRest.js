//spread object
const functionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...functionario}
console.log(clone)

//spread array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)
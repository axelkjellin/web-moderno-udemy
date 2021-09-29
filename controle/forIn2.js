const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//              0    1    2     3   4

for(let i in notas){
    console.log(i, notas[i]);
}

//objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64.0
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);

}

console.log(pessoa);
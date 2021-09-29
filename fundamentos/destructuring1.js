// novo recurso es2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }

}
//maneira padrao de retirar um objeto de dentro de uma estrutura
/*const nome = pessoa.nome;
console.log(nome);
const idade = pessoa.idade;
console.log(idade);*/

//maneira desconstruction
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

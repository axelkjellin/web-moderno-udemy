class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

var numero = prompt("digite um numero: ")

const p1 = new Pessoa("João")
p1.falar()


const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${"Joao"}`)
    }
}

const p2 = criarPessoa("joao")
p2.falar()
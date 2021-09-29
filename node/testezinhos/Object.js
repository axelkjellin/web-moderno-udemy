function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log(`${nome} Kjellin`)
    }

}

const pessoa = {
    nome:'Axel',
    idade: 29,
    endereco: {
        rua:"abc",
        numero:123,
    },
    vivo: true
}

console.log(typeof pessoa)
console.log(typeof pessoa.endereco.numero)
console.log(typeof pessoa.endereco.vivo)

console.log(pessoa)

const seguro = (nome, idade, vivo) => {
    if(idade > 20 && nome === 'Axel' && vivo == true){
        console.log("Cliente aprovado para seguro")
    }else{
        console.log("cliente nao aprovado")
    }
}

seguro(pessoa.nome, pessoa.idade, pessoa.vivo)

console.log({rua, nome} = pessoa)

const func = function(){
    console.log('oi')
}

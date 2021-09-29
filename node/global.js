//console.log(global)
global.minhaApp = {
    saudacao(){
        return 'estou em todos os lugares!'
    }, 
    nome: "sistema legal"
}

global.teste1 = {
    nome: 'axel',
    idade: 29,
    fezAniversario() {
        return this.idade += 1
    },
    casou() {
        return this.nome= this.nome.concat(' Kjellin');
    }

}


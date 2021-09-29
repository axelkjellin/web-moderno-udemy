//factory simples
function criarPessoa(){
    return {
        nome:pessoaNome,
        sobrenome:pessoaSobrenome
        
    }
}

let pessoaNome = "axel"
let pessoaSobrenome = "Kjellin"

criarPessoa()

console.log(criarPessoa(pessoaNome, pessoaSobrenome))
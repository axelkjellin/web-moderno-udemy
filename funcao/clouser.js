//clouser é o escopo criado quando uma função é declarada
// esse escopo permite acessar e manipular variaveis externas as funçoes
//basicamente permite usar as variaveis fora da função

//contexto lexico em ação
const x = "global"

function fora() {
    const x = "local"
    function dentro(){
        return x;
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/*
//criaando a funçao para retirar as chinesas de funcionarios
const chinesas = f => f.pais === 'China'
//criando a função para retirar as mulheres
const mulheres = f => f.gerero === 'F'
//criando a função para retirar um menor salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}*/
const indonesia = i => i.pais === 'Indonesia'
const genero = g => g.genero === 'M'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func:funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    /*const func = funcionarios.filter(chinesas).filter(mulheres).reduce(menorSalario)
    console.log(func)*/

    const func = funcionarios.filter(indonesia).filter(genero).reduce(menorSalario)
    console.log(func)
})

//mulher chinesa com menor salario



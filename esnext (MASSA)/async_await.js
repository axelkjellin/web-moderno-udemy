const esperarPor = (tempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>  resolve(), tempo)
    })
}


// esperarPor(2000)
//     .then(() => console.log('executando a promisse 1'))
//     .then(esperarPor)
//     .then(() => console.log('executando a promisse 2'))
//     .then(esperarPor)
//     .then(() => console.log('executando a promisse 3'))
//     .then(esperarPor)

const retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function executar() {
    let valor = await retornarValor()


    await esperarPor(2000)
    console.log(`async/await ${valor}`)

    await esperarPor(2000)
    console.log(`async/await ${valor + 1}`)

    await esperarPor(2000)
    console.log(`async/await ${valor +3}`)

    return valor + 5;
}

const testando = null

const teste = executar().then(e => this.testando = e)
console.log(teste) // aqui ele retorna uma promisse e nao o valor, acessar o valor apenas no .thenai voè atribui a alguma coisa

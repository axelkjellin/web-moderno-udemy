const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                    reject('ocorreu um erro')
                } else {
                    resolve(valor)
                }
        } catch (e) {
            reject(e)
        }
        // if(Math.random() < chanceErro) {
        //     reject('ocorreu um erro')
        // } else {
        //     resolve(valor)
        // }
    })
}


funcionarOuNao('testando', 0.9)
    .then(console.log)
    .then(v => 
        v => consol.log(v),
        // err => console.log(`error inesperado: ${err}\n`)
    )
    .then(() => console.log('quase fim'))
    .catch(err => console.log(`èrro geral: ${err}`))
    .then(() => console.log('fim!'))
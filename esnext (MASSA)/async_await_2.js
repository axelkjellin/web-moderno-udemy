function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
       [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator)+ min
        if(numerosProibidos.includes(aleatorio)) {
            reject('numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

const gerarMegaSena = async (qtDeNumeros, tentativas = 1) => {
    try {
        const numeros = []
        for(let _ of Array(qtDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 250) {
            throw 'que chato cara'
        } else {
            return  gerarMegaSena(qtDeNumeros, tentativas +1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)
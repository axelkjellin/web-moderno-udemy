function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase/** , 'abc'*/) //o abc nao funciona pq o resolve só retorna 1 parametro
                                // se quiser mais parametros bota em um objeto
            // reject(frase)
        }, segundos * 1000)
    })
}

// falarDepoisDe(3, 'que legal')
//     .then(frase => frase.concat('????'))
//     .then(outrafrase => console.log(outrafrase)) // aqui você recebe como parametro o then de cima

falarDepoisDe(3, 'que legal')
    .then(frase => {
        return frase.concat('?!?!?!')
    })
    .then(outrafrase => console.log(outrafrase))
    //.catch(e => console.log(e)) //aqui é o reject

// const intervalo = (valor, tempo) =>{
//     setTimeout(function() {
//         console.log(valor)
//     }, tempo)
// }

// intervalo('opa--', 3000)
// intervalo('opa2', 9000)

// setTimeout(function () {
//     console.log('executando callback')
//     setTimeout(function() {
//         console.log('executando callback')
//         setTimeout(function() {
//             console.log('executando callback')
//         }, 2000)
//     }, 2000)
// }, 2000)


// function esperarPor(tempo = 2000) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('executando promisse...')
//             resolve('vishh')
//         }, tempo)
//     })
// }

// esperarPor(3000).then(texto => console.log(texto))


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promisse...')
        }, tempo)
    })
}

esperarPor()
    .then(texto => console.log(texto))
    .then(esperarPor)
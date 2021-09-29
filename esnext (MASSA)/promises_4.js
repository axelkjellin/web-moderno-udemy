const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
           resolve(conteudo.toString())
        })
        console.log('depois de ler')
    })
}
const arquivo = null

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(l => l.join(','))
    .then(conteudo => `o valor é ${conteudo}`)
    .then(console.log)

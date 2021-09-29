const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconteo: 0.15
}

//gerando um arquivo no proprio diretorio
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})
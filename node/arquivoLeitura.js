const fs = require('fs')

const caminho = __dirname + '\\arquivo.json'

console.log('caminho =>', caminho)

// //sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
const conteudoParsed = JSON.parse(conteudo);
console.log(conteudoParsed.db)
console.log(conteudoParsed.db.host,':' ,conteudoParsed.db.port)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

console.log('////////')
const config = require('./arquivo.json');
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})
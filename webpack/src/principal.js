import Pessoa from './pessoa'//padra ECMA script
// const Pessoa = require('./pessoa') //padrao node
// import './modulos/moduloA' passado para o pessoa.js
// import './assets/css/estilos.css' procura direto
import './assets' //vai procurar um arquivo index.js pra fazer os imports do css e sass

const atendente = new Pessoa()
console.log(atendente.cumprimentar())
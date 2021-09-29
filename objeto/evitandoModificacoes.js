//Object.preventExtensions
// impede o aumento da quantidade de atributos em um objeto
//permite a diminuição de elementos

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log("Extensivel: ", Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha branca"
delete produto.tag
console.log(produto)

//Object.seal
//so modifica mas nao aumenta nem diminui
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log("Selado: ", Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze = selado + valores constantes
//ou seja ele nao pode ser modificado nem deletado nem nada
//pode ser writeble ou ennumerable
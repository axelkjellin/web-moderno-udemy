const produtos =[
    {nome: 'Notebook', preco:2499, fragil:true},
    {nome: 'ipad', preco:4199, fragil:true},
    {nome: 'Copo de vrido', preco:12.49, fragil:true},
    {nome: 'Copo de Plastico', preco:18.99, fragil:false}
]

console.log(produtos.filter(function(p){
    return false

}))

console.log(produtos.filter(function(a){
    if(a.fragil == true){
        return a.fragil
    }else{
        return false
    }
}))

console.log(produtos.filter(function(b){
    if(b.preco>500){
        return b.preco
    }else{
        return false
    }
}))
console.log()

//metodo criado pelo professor com função arrow
//duas arrow functions com nome caro e fragil
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))



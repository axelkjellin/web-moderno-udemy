/*forEach2 = function(){
    const nome, indice;
    for(i = 0; i< length; i++){
        nome = 
    }
}*/

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i<this.length;i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})
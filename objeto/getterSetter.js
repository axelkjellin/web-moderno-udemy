const sequencia ={
    _valor: 1, //convençao para saber que essa variavel eh privada, nao eh obrigatorio
    get valor() {return this._valor++},
    set valor(valor){ 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 998
console.log(sequencia.valor, sequencia.valor)
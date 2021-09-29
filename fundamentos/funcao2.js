// armazendando uma funçao em uma bareavel.

const imprimirSoma = function(a, b){
    console.log(a+b);
}

imprimirSoma(2, 3);

// armazendando uma funcao arrow em uma variavel;

const soma =(a, b) => {
    return a+b;
}
console.log(soma(2, 4));

//retorno implicoto

const subtracao = (a, b) => a-b;

console.log(subtracao(5, 7));

const imprimir2 = a => console.log(a);

imprimir2('Legal!!');
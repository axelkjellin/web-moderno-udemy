// funcao sem retorn

function imprimirSoma(a, b){
    
    console.log(a+b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7);
imprimirSoma();

// funcao com retorno;

function soma(a, b = 1){
        return a+b;
}

console.log(soma(2, 7));
console.log(soma(2,3));
console.log(soma(2));// usou b valendo 1;
console.log(soma());
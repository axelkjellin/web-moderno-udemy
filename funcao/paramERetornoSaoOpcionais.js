function area(largura, altura){
    const area = largura * altura;
    if(area>20){
        console.log(`Valor acima do permitodo: ${area}m2.`);
    }else{
        return area;
    }
}

console.log(area(2,11));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 3));
console.log(area(5,5));

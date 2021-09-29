let dobro = function (a) {
    return 2 * a;
}
//função arrow, anonima se voce quiser chamar ela dpois tera que armazenar em uma vareavel
dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //return implicito
console.log(dobro(Math.PI));

let ola = function(){
    return 'ola';
}

ola = () => 'alow';
console.log(ola());

ola = _ => 'Olé'; // possui um param
console.log(ola());

console.log(ola)
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado(6.1));
console.log(resultado(7.1));

let a = 3;
global.b=123;
this.c = 456;
this.d = false;
this.e = 'teste';





console.log(a)
console.log(global.b);
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) 
console.log(module.exports);

//criando uma variavel maluca sem let

abc = 3; // nao faça isso em casa!!!
console.log(global.abc);
module.exports = {e: 456, f: false, g: 'teste'};
console.log(module.exports.f);

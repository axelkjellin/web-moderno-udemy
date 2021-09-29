const a = {name: 'eai blz? ',
        idade: '19'
};

console.log(a);

const b = a;

console.log(b);

b.name = 'Aqui blz e ai?';

console.log(a, b);

a.idade = '23';
console.log(a, b);

b.idade = '39';

console.log(a, b);
///////////// aqui nao fica igual por conta da chaves, que no caso nao eh um objeto
let c = 3;
console.log(c);

let d = c;
console.log(d);

d++;
console.log(d);
console.log(c);
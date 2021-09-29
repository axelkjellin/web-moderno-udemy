const prod1 = {};
prod1.nome = "celular ultra mega";
prod1.preco = 4998.90;
prod1["desconto legal"] = 0.40;//evitar atributos com espaço;

console.log(prod1);

const prod2 = {
    nome:"camiseta polo",
    preco: 79.90,
    obj:{
        blablabla:1,
        obj:{
            blablabla:2,
        }
    }

}
//json

{ "nome:", "camiseta polo", "preco: 79.90," }
console.log(prod2);

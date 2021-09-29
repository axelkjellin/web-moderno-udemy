//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42
    }],
    CalcularValorSeguro(){
        //....
    }
}
console.log(carro)
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.CalcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)// so deu certo porque eu comentei o delete carro.condutores
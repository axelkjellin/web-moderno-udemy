function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado desse escopo
    let velocidadeAtual = 0;

    //metodo publico // this torna algo visivel para o publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico dentro da estrutura respontasabel por pegar a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 80)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());


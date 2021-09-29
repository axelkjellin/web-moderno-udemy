//par nome / valor

const saudacao = 'Opa'; // contexto lexico 1

function exec(){
            //nome = valor
    const saudacao = 'falaaa' // contexto lexico 2
    return saudacao;
}

//objeto sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    numero: 4791358945,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123,
        cep: 66895564.3
    }
}
console.log(saudacao)
console.log(exec());

console.log(cliente);


function tratarErroELancar(erro){
   // throw new Error('algo deu errado ...');
   //throw 10;
   throw {
       nome: erro.name,
       msg: erro.massage,
       date: new Date
   }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    }catch(e){

        tratarErroELancar(e)
    }finally{
        console.log('final');
    }
}

const obj = {nome:'Roberto'}
imprimirNomeGritado(obj);

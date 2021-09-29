/*Jason eh apenas em formato de texto o trafego de dados que esta 
occorrendo em determinada aplicação, podendo ser feita em qualquer linguagem,
entretando nao executa funçoes nem outro tipos de comandos, apenas mostra
em texto o que esta trafegando naquela operação, mas nao executando-a*/

const obj ={ 
    a:1,
    b:2,
    c:3,
     soma(){
         return this.a + this.b + this.c
         
        } 
    }
console.log(obj)
console.log(JSON.stringify(obj))

console.log(JSON.parse("{a:1"))
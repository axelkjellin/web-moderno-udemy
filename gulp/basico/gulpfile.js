const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const { series } = require('gulp')
//os dois jeitos da certo pra pegar o series
// const series = gulp.series

//cmd => gulp na pasta do gulpfil.js raiz

const antes1 = callback => {
    console.log('tarefa antes 1')
    return callback()
}

const antes2 = callback => {
    console.log('tarefa antes 2')
    return callback()
}

function copiar(callback) {
    console.log('tarefa de copiar!')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) exemplo pra copiar algo especifico
    gulp.src('pastaA/**/*.txt') //copia tudo que tem na pasta e na subpasta com final txt
        .pipe(gulp.dest('pastaB')) // direciona uma copia para um destino que ele mesmo cria
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        //acima temos um pipe de pipeline para transformar
        //os arquivos de entrada no src para fazer varias transformações 
        //nos arquivos, essas funções podem ser criadas por você
        //ou podem ser outras bibliotecas que possuem essas funções
    return callback()
}



const fim = callback => {
    console.log('tarefa fim')
    return callback()

}

module.exports.default = series(
    parallel(
        antes1, 
        antes2
    ),
    copiar,
    fim
)
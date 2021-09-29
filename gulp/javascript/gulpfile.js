const gulp = require('gulp')
const { series, parallel } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //remove os comentarios do codigo
            presets: ["env"] // usa o js mais atual
        }))
        .pipe(uglify()) // deixa tudo em uma linha
        .pipe(concat('codigo.min.js')) //pega todos arquivos selecionados e transpilados do babel que ja foi feito o processo de deixar em uam linha e concatena
        .pipe(gulp.dest('build')) //direciona para a pagina que você quer
        .pipe(gulp.dest('build/js')) //cria na subpasta do build
        .on('error', err => console.log(err))
}

function copiarHTML() {
    return gulp.src('src.index.html')
        .pipe(gulp.dest('build'))
}

function fim(callback) {
    console.log('fim')
    return callback()
}

exports.default = series(transformacaoJS, fim)

//aqui depois que rodar no cmg o gulp na pasta raiz ele cria a pasta build
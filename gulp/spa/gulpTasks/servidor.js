const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { watch } = require('gulp')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', gulp.series('appHTML'))
    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}
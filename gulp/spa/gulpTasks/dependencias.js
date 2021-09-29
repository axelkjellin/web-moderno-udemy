const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

async function dependeciasCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments" : false }))
        .pipe(concat('dependecias.min.css'))
        .pipe(gulp.dest('build/assets/css'))
        .on('error', err => console.log(err))
}

function dependeciasFONTS() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))

}

module.exports = {
    dependeciasCSS,
    dependeciasFONTS
}
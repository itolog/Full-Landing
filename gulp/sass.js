'use strict';
module.exports = function(){
const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const cssunit = require("gulp-css-unit");

gulp.task('sass', function () {
  return gulp.src('./app/css/main.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sassGlob())
    .pipe(gp.sass())
     .on('error', gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error in style"
      }))
    .pipe(gp.autoprefixer({
            browsers: [
            'last 5 versions',
            '> 1%',
            'ie 8',
            'ie 9',
            ]
        }))
    .pipe(cssunit({
            type     :    'px-to-rem',
            rootSize  :    16
        }))
    .pipe(gp.csso())
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('./app/build/css'));
});
}
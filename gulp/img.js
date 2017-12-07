"use strict";

module.exports = function(){
const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
 
gulp.task('img', () =>
    gulp.src('./app/img/**/*')
        .pipe(gp.imagemin([
    gp.imagemin.gifsicle({interlaced: true}),
    gp.imagemin.jpegtran({progressive: true}),
    gp.imagemin.optipng({optimizationLevel: 6}),
    gp.imagemin.svgo({plugins: [{removeViewBox: true}]})
]))
        .pipe(gulp.dest('./app/build/img'))
);
}
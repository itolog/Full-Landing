'use strict';
module.exports = function(){
const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
        	port: 3000,
            baseDir: "./app/build/"
        }
    });
     gulp.watch("app/build/*.html").on('change', browserSync.reload);
     gulp.watch("app/build/js/*.js").on('change', browserSync.reload);
     gulp.watch("app/build/css/*.css").on('change', browserSync.reload);
});

}
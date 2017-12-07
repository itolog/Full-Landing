'use strict';
module.exports = function(){
	const gulp = require('gulp');
	const gp = require('gulp-load-plugins')();
	const svgSprite = require('gulp-svg-sprites');
	//const svgo = require('gulp-svgo');

	gulp.task('sprites', function () {
    return gulp.src('app/img/sprite/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("app/img/sprite"));
});
}

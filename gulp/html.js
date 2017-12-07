'use strict';
module.exports = function(){
const gulp = require('gulp');
const gp = require('gulp-load-plugins')();

gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(gp.htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('app/build'));
});

}
"use strict";

module.exports = function(){
const gulp = require('gulp');

gulp.task('watch', function () { 
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/css/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['compress']);
  gulp.watch('app/img/*', ['img']);
});
}
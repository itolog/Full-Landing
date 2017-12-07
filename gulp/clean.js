'use strict';
module.exports = function() {
var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('clean', function () {
    return gulp.src('app/build', {read: false})
        .pipe(clean());
});
}
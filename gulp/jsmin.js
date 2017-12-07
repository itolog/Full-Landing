"use strict";

module.exports = function(){
const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const pump = require('pump');
//var babel = require("babel");

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./app/js/*.js')
        .pipe(gp.babel({
            presets: ['env']
        }))
        .pipe(gp.browserify({
          insertGlobals : true
        })),
        gp.uglify(),
        gulp.dest('./app/build/js')
    ],
    cb
  );
});
}
'use strict';
 var gulp = require('gulp');
var gp = require('gulp-load-plugins')();
//подключаем модули
require("./gulp/sass.js")('sass');
require("./gulp/clean.js")('clean');
require("./gulp/watch.js")('watch');
require("./gulp/serve.js")('serve');
require("./gulp/html.js")('html');
require("./gulp/jsmin.js")('compress');
require("./gulp/img.js")('img');


gulp.task('build', ['html','sass','compress','img']);
gulp.task('default', ['watch','serve']);
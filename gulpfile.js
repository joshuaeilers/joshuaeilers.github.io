var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps')
var stylish = require('jshint-stylish');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');

var paths = {
  src: {
    js: ['app/**/*.js'],
    css: ['app/**/*.css']
  },
  vendor: {
    js: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-material/angular-material.js'
    ],
    css: ['node_modules/angular-material/angular-material.css']
  }
};

gulp.task('clean', function() {
  return del(['assets/js']);
});

gulp.task('vendor-js', function() {
  return gulp.src(paths.vendor.js)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('vendor-css', function() {
  return gulp.src(paths.vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('src-js', function() {
  return gulp.src(paths.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(wrap('(function(){"use strict";<%= contents %>})();'))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('src-css', function() {
  return gulp.src(paths.src.css)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch([paths.src.js, paths.src.css], ['src-js', 'src-css']);
});

gulp.task('default', ['clean', 'vendor-js', 'vendor-css', 'src-js', 'src-css', 'watch']);

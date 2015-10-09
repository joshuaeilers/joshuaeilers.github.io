var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var src = {
  js: {
    min: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/angular/angular.min.js',
      'build/js/custom.min.js'
    ],
    custom: [
      'app.js'
    ]
  },
  css: {
    min: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'build/css/custom.min.css'
    ],
    custom: [
      'app.css'
    ]
  }
};

// process custom js files
gulp.task('js', function() {
  return gulp.src(src.js.custom)
    .pipe(jshint())
    .pipe(jshint.reporter('fail'))
    .pipe(concat('custom.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// combine vendor and custom minified js files
gulp.task('js-combine', function() {
  return gulp.src(src.js.min)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/js'));
});

// process custom css files
gulp.task('css', function() {
  return gulp.src(src.css.custom)
    .pipe(concat('custom.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

// combine vendor and custom minified css files
gulp.task('css-combine', function() {
  return gulp.src(src.css.min)
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/css'));
});

// watch for changes in css / js files
gulp.task('watch', function() {
  gulp.watch(src.js.custom, ['js', 'js-combine']);
  gulp.watch(src.css.custom, ['css', 'css-combine']);
});

// start the watch task when running "gulp"
gulp.task('default', ['watch']);

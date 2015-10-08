var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css')

var src = {
  js: [
    'app.js'
  ],
  css: [
    'app.css'
  ]
};

gulp.task('js', function() {
  return gulp.src(src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('fail'))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('css', function() {
  return gulp.src(src.css)
    .pipe(concat('app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch(src.js, ['js']);
  gulp.watch(src.css, ['css']);
});

gulp.task('default', ['watch']);

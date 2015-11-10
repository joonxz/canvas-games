// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass =   require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var csso =   require('gulp-csso');
var foreach = require('gulp-foreach');
var include = require('gulp-include');

// download livereload browser extension for livereload to work
var livereload = require('gulp-livereload');

// Lint JS Task
gulp.task('lint-js', function() {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('frontend/sass/*.scss')
    .pipe(foreach(function(stream, file){
      return stream
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('public/css'))
        
    }))
    .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('build', function() {
    gulp.src('frontend/js/loop.js')
        .pipe(include())
        .pipe(gulp.dest('public/js'))
        .pipe(livereload());
});

// Livereload Html changes
gulp.task('markup', function() {
    gulp.src('public/index.html')
    .pipe(livereload({reloadPage: 'public/index.html'}));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/*',['markup']);
    gulp.watch('frontend/js/*', ['build']);
    gulp.watch('frontend/sass/**/*', ['sass']);
});

// Default Task
gulp.task('default', ['lint-js', 'sass', 'build']);
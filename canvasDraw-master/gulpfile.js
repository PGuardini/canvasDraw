var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');

gulp.task('scripts',function(){
    return gulp
        .src(['src/**/*.js'])
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('build'));
})
gulp.task('styles',function(){
    return gulp
        .src(['src/**/*.css'])
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
})
gulp.task('default',['scripts','styles']);
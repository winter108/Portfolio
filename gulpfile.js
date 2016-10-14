var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src(['styles/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('styles/'))
        .pipe(refresh(server))
})

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})

gulp.task('default', function() {
    gulp.run('lr-server', 'styles');
    gulp.watch('styles/**', function(event) {
        gulp.run('styles');
    })
})
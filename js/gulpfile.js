// import all of the required plugins / packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// start writing your tasks
// serve the page with browsersync
gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});


// compile SASS
gulp.task('sass', function() {
    //define the gulp-sass task
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle : "compressed"}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// watch SASS files for changes, compile
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
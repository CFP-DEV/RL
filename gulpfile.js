const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// SCSS / SASS
gulp.task('sass', function () {
    return gulp.src('./resources/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css'));   
});

// Default
gulp.task('default', function() {
    gulp.watch(['./resources/assets/scss/*.scss', 
                './resources/assets/scss/base/*.scss', 
                './resources/assets/scss/components/*.scss', 
                './resources/assets/scss/modules/*.scss', 
                './resources/assets/scss/views/*.scss'], ['sass']);
});
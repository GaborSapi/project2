var gulp = require('gulp');

var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', [ 'sass' ]);

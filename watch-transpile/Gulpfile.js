var gulp = require('gulp'),
	traceur = require('gulp-traceur'),
    watch = require('gulp-watch'),
	sass = require('gulp-sass');

gulp.task('watch', function() {
	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('styles', function() {
	return gulp.src('styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('styles'));
});

gulp.task('scripts', function() {
	return gulp.src('src/**/*.js')
		.pipe(traceur())
		.pipe(gulp.dest('dest'));
});


var gulp = require('gulp'),
	qunit = require('gulp-qunit');
gulp.task('test', function() {
	return gulp.src('./qunit/tests.html')
		.pipe(qunit({'phantomjs-options': ['--ssl-protocol=any']}));
});



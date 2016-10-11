const gulp = require('gulp');
//压缩css
const cssnano = require('gulp-cssnano');

//压缩合并替换
const useref = require('gulp-useref');

//判断文件是js还是css
const gulpif = require('gulp-if');

//压缩js
const uglify = require('gulp-uglify');

/*gulp.task('style',()=>{
	gulp.src('app/app.css')
		.pipe(cssnano())
		.pipe(gulp.dest('dist'));
});*/

gulp.task('default',()=>{
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js',uglify()))
		.pipe(gulpif('*.css',cssnano()))
		.pipe(gulp.dest('dist'));
});

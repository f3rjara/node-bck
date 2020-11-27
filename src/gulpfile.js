var gulp 			= require('gulp'),
	autoprefixer 	= require('gulp-autoprefixer'),
	eslint 			= require('gulp-eslint'),
	htmlmin 		= require('gulp-htmlmin'),
	imagemin 		= require('gulp-imagemin'),
	plumber 		= require('gulp-plumber'),
	rename 			= require("gulp-rename"),
	sass 			= require('gulp-sass'),
	sassLint 		= require('gulp-sass-lint'),
	size 			= require('gulp-size'),
	uglify 			= require('gulp-uglify-es').default;
	sass.compiler 	= require('node-sass');

gulp.task('img', () => {
	return gulp.src('./build/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./../assets/img'));
});

gulp.task('fonts', () => {	
	return gulp.src('./build/fonts/**/*')
		.pipe(gulp.dest('./../assets/fonts'));
});

gulp.task('sass', () => {
	return gulp.src('./build/scss/**/*.scss')
		.pipe(plumber())
		// .pipe(sassLint())
		// .pipe(sassLint.format())
		// .pipe(sassLint.failOnError())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./../assets/css'));
});

gulp.task('eslint', () => {
	return gulp.src('./build/js/custom/**/*.js')
		.pipe(eslint({
			globals: [
				'localStorage',
				'$', 'jQuery', 'document'
			]
		}))
		.pipe(eslint.format());
});	

gulp.task('js', () => {
	return gulp.src('./build/js/**/*.js')
		.pipe(uglify())
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./../assets/js'));
});	

gulp.task('part_html', () => {
	return gulp.src('./partials/*.ejs')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(gulp.dest('./../views/partials'));
});	

gulp.task('html', () => {
	return gulp.src('./*.ejs')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(size({ gzip: true, showFiles: true }))
		.pipe(gulp.dest('./../views'));
});	

gulp.task('watch', () => {
	gulp.watch('./build/img/**/*', gulp.series('img'));
	gulp.watch('./build/fonts/**/*', gulp.series('fonts'));
	gulp.watch('./build/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('./build/js/**/*.js', gulp.series('js'));
	gulp.watch('./*.ejs', gulp.series('html'));
});

gulp.task('default', gulp.parallel(
	'img',
	'fonts',
	'sass',
    'js',
    'part_html',
	'html'
));
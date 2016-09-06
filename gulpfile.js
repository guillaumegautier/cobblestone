var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var cp = require('child_process');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');

// Clean
gulp.task('clean', function(){
	return gulp.src('dist/assets', {read : false})
	.pipe(clean())
	})

// Compile SASS
gulp.task('sass', function(){
	gulp.src('assets/scss/**/[^_]*.?(s)css')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'compressed'
		}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('dist/assets/css'))
	});


// Minify Javascript
gulp.task('javascript', function() {
	gulp.src('assets/js/**/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('dist/assets/js/'))
	});


// Image optimization
gulp.task('images', function() {
	gulp.src('assets/img/**/*')
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
		}))
	.pipe(gulp.dest('dist/assets/img'))
	});


// Build Jekyll 
gulp.task('build-jekyll', (code) => {
	var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
	return cp.spawn(jekyll, ['build', '--config', 'src/_config.yml'], {stdio: 'inherit'})
	.on('error', (error) => gutil.log(gutil.colors.red(error.message)))
	.on('close', code)
	});

//Fonts
gulp.task('fonts', function(){
	gulp.src('assets/fonts/**/*.{ttf,woff,woff2,eof,eot,svg}')
	.pipe(gulp.dest('dist/assets/fonts'))
	})


// Watch for changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['./src/*.html', './src/_layouts/*.html', './src/_includes/*.html', './src/_posts/*', './src/_config.yml'], ['build-jekyll']);
	gulp.watch(['./assets/js/**/*.js'], ['javascript']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});;
	gulp.watch('./assets/scss/**/*.scss', ['sass']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	gulp.watch(['./assets/img/**/*'], ['images']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});;
	gulp.watch(['./assets/fonts/**/*'], ['fonts']).on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});;
	gulp.watch(['./dist/**/*.html', './dist/**/*.css', './dist/**/*.js', '.dist/assets/fonts/*.*']).on('change', function (file) {
		livereload.changed(file.path);
		});
	});


// Gulp default
gulp.task('default', ['sass', 'javascript', 'images', 'fonts', 'watch', 'build-jekyll']);


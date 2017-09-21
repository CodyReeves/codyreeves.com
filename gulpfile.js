
/*---------------------------------------------------------
 Gulp Dependencies
 --------------------------------------------------------*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const plumberNotifier = require('gulp-plumber-notifier');
const stripCSSComments = require('gulp-strip-css-comments');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const image = require('gulp-image');
const cssmin = require('gulp-cssmin');
const webp = require('gulp-webp');

/*---------------------------------------------------------
 Required paths for Gulp
 --------------------------------------------------------*/

const paths = {
  scss: {
    src: './src/scss/**/*.scss',
    dest: './public/',
    file: './src/scss/main.scss',
  },
  css: {
    src: './public/*.css',
    dest: './public/',
    file: 'main.css',
  },
};

/*---------------------------------------------------------
 CSS/SCSS Tasks
 --------------------------------------------------------*/

/* Configures all tasks to automate
----------------------------------*/
gulp.task('watch', () => {
  gulp.watch(paths.scss.src, ['sass']);
  gulp.watch(paths.css.src, ['clean']);
});

/* Compiles all sass linking to partials in source dir, concats, creates source map, and outputs
----------------------------------*/
gulp.task('sass', () => {
  return gulp.src(paths.scss.file)
    .pipe(plumberNotifier())
    //.pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat(paths.css.file))
    .pipe(plumber.stop())
    //.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.scss.dest));
});


/* Cleans CSS Removes comments and minifies stylesheet
----------------------------------*/
gulp.task('clean', () => {
  return gulp.src(paths.css.src)
    .pipe(stripCSSComments())
    .pipe(gulp.dest(paths.css.dest));
});

/*---------------------------------------------------------
 Going Live Tasks -- Pushing to server
 --------------------------------------------------------*/

/* Complies SCSS
----------------------------------*/
gulp.task('live-sass', () => {
  return gulp.src(paths.scss.file)
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat(paths.css.file))
    .pipe(gulp.dest(paths.scss.dest));
});

/* Minifies and cleans the CSS
----------------------------------*/
gulp.task('minify-css', () => {
  return gulp.src(paths.css.src)
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(cssmin())
    .pipe(gulp.dest(paths.css.dest));
});

/* Puts tasks into sequence
----------------------------------*/
gulp.task('live', (callback) => {
  runSequence(
    'live-sass',
    'clean',
    'minify-css',
    callback
  );
});

/* Images
----------------------------------*/

gulp.task('image', function () {
  gulp.src('./src/images/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./public/img/'));
});

gulp.task('image-webp', function () {
  return gulp.src('./src/images/*')
    .pipe(webp())
    .pipe(gulp.dest('./public/img/webp/'));
});

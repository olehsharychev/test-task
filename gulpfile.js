var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

function styles(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
}

function sync(){
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
}


function watch(){
    gulp.watch('app/sass/**/*.sass', gulp.series('styles'));
}

var build = gulp.series(styles, gulp.parallel(sync, watch));

exports.styles = styles;
exports.sync = sync;
exports.watch = watch;
exports.build = build;

exports.default = build;

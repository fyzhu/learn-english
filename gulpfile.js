var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var webpack = require('webpack') ;
var gulpWebpack = require('webpack-stream');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var reload = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass', 'babel'], function () {

    browserSync.init({
        server: "./app",
        open: false
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
    gulp.watch("app/js/*.js", ['babel']);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
    return gulp.src("app/scss/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({ stream: true }));
});

gulp.task('babel', function () {
    gulp.src('app/js/*.js')
        .pipe(plumber())
        // .pipe(babel({
        //     presets: ['env']
        // }))
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('./app/bundle/'))
        .pipe(rename({
            basename: 'main',
            extname: '.min.js'
        }))
        // .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
        .pipe(gulp.dest('./app/bundle/'))
})
gulp.task('default', ['serve']);

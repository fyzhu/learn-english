var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel')
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
        .pipe(sass())
        // .pipe($.plumber())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({ stream: true }));
});

gulp.task('babel', function () {
    gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./app/bundle/'))
})
gulp.task('default', ['serve']);

var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    minifycss = require("gulp-minify-css"),
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729,
    webpack = require('gulp-webpack');

gulp.task("html",function(){
    var htmlSrc = "./lib/*.html",
        htmlDst = "./build";

    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
});
 
gulp.task("css",function(){
    var cssSrc = "./lib/css/*.css",
        cssDst = "./build/css";

    gulp.src(cssSrc)
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst))
});

gulp.task('webpack', function () {
    var jsSrc = ['lib/js/*.js','!lib/js/*.min.js'],
        jsDst ='./build/js';

    gulp.src(jsSrc)
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest(jsDst));
});

gulp.task('js', function () {
    var jsSrc = ['lib/js/*.js','!lib/js/*.min.js'],
        jsDst ='./build/js';

    gulp.src(jsSrc)
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

gulp.task('jsmin', function () {
    var jsSrc = ['lib/js/*.min.js'],
        jsDst ='./build/js';

    gulp.src(jsSrc)
        .pipe(gulp.dest(jsDst));
});

gulp.task("images",function(){
    var imgSrc = "./lib/images/**.*",
        imgDst = "./build/images";

    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
});


gulp.task('default',['webpack'], function(){
    gulp.start('html','css');
});
// 监听任务 运行语句 gulp watch
gulp.task('watch',['webpack'],function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }
        gulp.watch('lib/*.html', function(event){
            gulp.run('html');
        })
        gulp.watch('lib/css/*.css', function(event){
            gulp.run('css');
        })
        gulp.watch(['lib/js/*.js'], function(event){
            gulp.run('webpack');
        })
        
        // gulp.watch('./lib/**.*', function(event){
        //     gulp.run('images');
        // })

    });
});
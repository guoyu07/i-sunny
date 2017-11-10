var gulp = require('gulp');
var sass = require('gulp-sass');

//创建任务 任务名为compileSass
gulp.task('compileSass',function(){
    //寻找路径
    gulp.src('./src/sass/index.scss')
        //编译sass
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./src/css/'))
})

//监听
gulp.task('jtSass',function(){
    //文件只要有修改
    gulp.watch('./src/sass/index.scss',['compileSass'])

})

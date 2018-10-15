// 从package.json分析,node_modules引入gulp
const gulp = require('gulp');
const jsonminify = require('gulp-jsonminify');
const combiner = require('stream-combiner2');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
// gulp 的思想很简单，将我们的开发流程分成一个个的任务
// 创建了一个json 专业任务
const src = './client';//开发目录
const dist = '.dist';//项目目录
gulp.task('json',() =>{
  return gulp
    // 找到文件
    .src(`${src}/**/*.json`)// **代表任何层级
    // 进行一番处理
    .pipe(jsonminify())
    .pipe(gulp.dest(dist))
});

gulp.task('wxss',()=>{
  const combined = combiner.obj([
    gulp.src(`${src}/**/*.{wxss,scss}`),
    sass().on('error',sass.logError),
    rename((path)=>(path.extname = '.wxss')),
    gulp.dest(dist)
  ]);
  combined.on('error',()=>{})
});

gulp.task('wxml', () => {
  return gulp
    .src(`${src}/**/*.wxml`)
    .pipe(gulp.dest(dist))
})

gulp.task('default',['wxml','wxss','json']);
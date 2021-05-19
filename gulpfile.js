const gulp = require("gulp");    // Gulp إستدعاء مكتبة
const concat = require('gulp-concat'); // لجمع عدة صفحات فى صفحة واحدة  Concat إستدعاء مكتبة 
const autoprefixer = require('gulp-autoprefixer');  // تلقائيا Autoprefixer تستخدم لوضع 
const sass = require('gulp-sass'); // sass لكود format تستخدم لعمل
const pug = require('gulp-pug');   // pug لكود format تستخدم لعمل

// HTML Task
gulp.task("html", async function () {

    return gulp.src("project/pug/includes/head.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("dist"))
})


// Css Task
gulp.task("css", async function () {
    
    return gulp.src("project/css/main.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("dist/css"))
})

// JS Task
gulp.task("js", async function () {

    return gulp.src("project/*.js")
    .pipe(concat('all.js'))
    .pipe(gulp.dest("dist"))
})
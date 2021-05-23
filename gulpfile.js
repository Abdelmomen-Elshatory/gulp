let gulp = require("gulp");    // Gulp إستدعاء مكتبة
let concat = require('gulp-concat'); // لجمع عدة صفحات فى صفحة واحدة  Concat إستدعاء مكتبة 
let autoprefixer = require('gulp-autoprefixer');  // تلقائيا Autoprefixer تستخدم لوضع 
let sass = require('gulp-sass'); // sass لكود format تستخدم لعمل
let pug = require('gulp-pug');   // pug لكود format تستخدم لعمل
let livereload = require('gulp-livereload');   // livereload استدعاء مكتبة
let sourcemaps = require('gulp-sourcemaps');   // sourcemap  استدعاء مكتبة 
let uglify = require('gulp-uglify');   //  js لعمل ضغط لملفات uglify استدعاء مكتبة
let notify = require("gulp-notify");  // taskلاظهار رسالة بتنفيذ ال  notify استدعاء مكتبة 
let zip = require('gulp-zip');        //لضغط ملفات المشروع فى ملف واحد zip  استدعاء مكتبة 






// HTML Task
gulp.task("html", function () {
    return gulp.src("project/PugJs/*.pug")
    .pipe(sourcemaps.init())
    .pipe(pug({pretty: true}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"))
    .pipe(notify("Html Is Done"))
    .pipe(livereload());
})


// Css Task
gulp.task("css", function () {
    return gulp.src("project/css/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("Css Is Done"))
    .pipe(livereload());
})


// JS Task
gulp.task("js", function () {
    return gulp.src("project/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("Js Is Done"))
    .pipe(livereload());
})


// Compress Files
gulp.task("compress", function () {
    return gulp.src("dist/**/*.*")
        .pipe(zip("website.zip"))
        .pipe(gulp.dest("."))
        .pipe(notify("File Is Compressed"))
})


// Watch Task
gulp.task("watch" , function () {
    require("./server.js");
    livereload.listen();
    gulp.watch("project/PugJs/**/*.pug",  gulp.series('html'))
    gulp.watch("project/css/**/*.scss",  gulp.series('css'))
    gulp.watch("project/js/*.js",  gulp.series('js'))
    gulp.watch("dist/**/*.*",  gulp.series('compress'))


})


// Default Task
// gulp.task("default", ["watch"]);
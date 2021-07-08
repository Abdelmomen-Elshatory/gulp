// Gulp إستدعاء مكتبة                                               npm install --save-dev gulp 
let gulp = require("gulp");    
// لجمع عدة صفحات فى صفحة واحدة  Concat إستدعاء مكتبة             npm i --save-dev gulp-concat 
let concat = require('gulp-concat'); 
// تلقائيا Autoprefixer تستخدم لوضع                                 npm i --save-dev gulp-autoprefixer 
let autoprefixer = require('gulp-autoprefixer');  
// sass لكود format تستخدم لعمل                                     npm install --save-dev gulp-sass 
let sass = require('gulp-sass'); 
// pug لكود format تستخدم لعمل                                      npm i gulp-pug --save-dev    
let pug = require('gulp-pug');  
// livereload استدعاء مكتبة                                         npm i live-reload --save-dev 
let livereload = require('gulp-livereload');
// sourcemap  استدعاء مكتبة                                         npm i gulp-sourcemaps --save-dev 
let sourcemaps = require('gulp-sourcemaps');   
//  js لعمل ضغط لملفات uglify استدعاء مكتبة                        npm install --save-dev gulp-uglify 
let uglify = require('gulp-uglify');   
// taskلاظهار رسالة بتنفيذ ال  notify استدعاء مكتبة                 npm install --save-dev gulp-notify      
let notify = require("gulp-notify"); 
//لضغط ملفات المشروع فى ملف واحد zip  استدعاء مكتبة                npm install --save-dev gulp-zip            
let zip = require('gulp-zip');        
//لضغط الصور gulp-image استدعاء مكتبة                               npm install --save-dev gulp-image
let image = require('gulp-image'); 




// HTML Task
gulp.task("html", function () {
    return gulp.src("project/PugJs/*.pug")
    .pipe(pug({pretty: true}))
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

// Compress Img
gulp.task('img', function () {
    gulp.src('img/*')
        .pipe(image())
        .pipe(gulp.dest('dist/images'));
});


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

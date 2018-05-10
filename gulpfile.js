// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
// LiveReload環境プラグインの読み込み
const browserSync = require("browser-sync");
// ベンダープレフィクスを自動付与プラグインの読み込み
const autoprefixer = require("gulp-autoprefixer");
// スタイルガイドプラグインの読み込み
const frontnote = require("gulp-frontnote");
 

gulp.task('default',['server'], function () {
    gulp.watch('css/*.scss',['sass','bs-reload']);
    gulp.watch('*.html',['bs-reload']);
});

gulp.task('sass', function () {
	// style.scssファイルを取得
  	gulp.src('css/style.scss')
    // Sassのコンパイルを実行
    .pipe(sass())
    // cssフォルダー以下に保存
    .pipe(gulp.dest('css'));
});

gulp.task("server", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
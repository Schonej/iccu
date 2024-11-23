import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);

const sassFiles = "./src/scss/**/*.scss";
const cssDest = "./dist/css/";

export function styles() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest));
}

export function watch() {
  gulp.watch(sassFiles, gulp.series(styles));
}

export default gulp.series(styles, watch);

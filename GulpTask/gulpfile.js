const {src ,dest, series, parallel,watch}=require ('gulp')
const concat = require("gulp-concat");


///////////////////html
const htmlPlugin=require ('gulp-htmlmin')
function Html() {
    //from [src/*] get all files of html
    return src('src/*.html')
    //before send to dist make it small
    .pipe(htmlPlugin({collapseWhitespace: true,removeComments:true}))
    .pipe(dest('dist'));
  }
  exports.html = Html
  ////for html use command ====>[ gulp html ]


  ////////////////////////css
const cssMin=require("gulp-clean-css");
function cssMinfy() {
  return src("src/css/**/*.css").pipe(concat("style.css"))
  .pipe(cssMin()).pipe(dest("dist/css"));
}
exports.css=cssMinfy;
////for css use command ====>[ gulp css ]


////////////////js
const minJs=require("gulp-terser");
function JSMinfy() {
  return src("src/js/*.js").pipe(concat("script.js"))
  .pipe(minJs())
  .pipe(dest("dist/Js"));
}
exports.js=JSMinfy;
////for js use command ====>[ gulp js ]

/////////////////////for image
const imgMin=require("gulp-imagemin");
function imgsMinify() {
  return src("src/imgs/*").pipe(imgMin())
  .pipe(dest("dist/images"));
}
exports.img=imgsMinify;


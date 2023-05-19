(()=>{"use strict";var n={902:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root{\n    \n    --textColor: #1b2741;\n\n    --sectionBack: #f7f6f9;\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n}\nbody{\n    background-color: var(--bodyBack);\n    min-height: 100vh;\n    display: grid;\n    place-content: center;\n}\n.container{\n    width: 80vw;\n    height:80vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.header{\n    width: 100%;\n    text-align: center;\n}\n.header h1{\n    font-size: 4em;\n    text-transform: uppercase;\n    color: var(--textColor);\n}\n.products{\n    width: 100%;\n    align-self: center;\n    height: 70%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n.product{\n    position: relative;\n    background-color: var(--sectionBack);\n    width: 300px;\n    height: 100%;\n    box-shadow: 0 5px 20px rgba(0, 0, 0, .3);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px 20px 40px;\n    border-radius: 10px;\n    transition: .3s;\n}\n.product:hover{\n    transform: translateY(-15px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n}\n.image{\n    width:100%;\n    height: 60%;\n    display: grid;\n    place-content: center;\n}\n.image img{\n    width: 240px;\n}\n.namePrice{\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.namePrice h3{\n    font-size: 2em;\n    text-transform: capitalize;\n    color: var(--textColor);\n}\n.namePrice span{\n    font-size: 1.5em;\n    color: var(--starColor);\n}\n.product p{\n    font-size: 18px;\n    line-height: 25px;\n}\n.stars svg{\n    font-size: 1.3em;\n    color: var(--starColor);\n}\n.bay{\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n}\n.bay button{\n    padding: 10px 20px;\n    border-radius: 7px;\n    border: none;\n    background-color: var(--textColor);\n    color: var(--sectionBack);\n    font-size: 18px;\n    text-transform: capitalize;\n    cursor: pointer;\n    transition: .5s;\n}\n.bay button:hover{\n    transform: scale(1.1);\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),p=t(216),d=t.n(p),l=t(589),u=t.n(l),f=t(902),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var m=new XMLHttpRequest,h=document.getElementsByClassName("products")[0];m.open("GET","https://dummyjson.com/products"),m.send(),m.onreadystatechange=function(){if(4==m.readyState){var n=JSON.parse(m.responseText).products;console.log(n);for(var e=0;e<n.length;e++)h.innerHTML+=`<div class="product">\n            <div class="image">\n                <img src=${n[e].thumbnail} alt="">\n            </div>\n            <div class="namePrice">\n                <h3>${n[e].brand}</h3>\n                <span>$ ${n[e].price}</span>\n            </div>\n            <p>${n[e].title}</p>\n            \n            <div class="bay">\n                <button onclick="add(${e})"> bay now </button>\n            </div>\n        </div>`}};var g=document.getElementsByClassName("views")[0],x=JSON.parse(localStorage.getItem("product"));g.innerHTML="";for(var b=0;b<x.length;b++)g.innerHTML+=`<div class="product">\n        <div class="image">\n            <img src=${x[b].thumbnail} alt="">\n        </div>\n        <div class="namePrice">\n            <h3>${x[b].brand}</h3>\n            <span>$ ${x[b].price}</span>\n        </div>\n        <p>${x[b].title}</p>\n        \n        <div class="bay">\n            <button> bay now </button>\n        </div>\n    </div>`})()})();
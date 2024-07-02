//get elements
var fpbtn = document.querySelector(".first");
var spbtn = document.querySelector(".sec");
var tpbtn = document.querySelector(".third");
var fopbtn = document.querySelector(".four");

//create delete button
var fmbtn = document.createElement("img");
var smbtn = document.createElement("img");
var tmbtn = document.createElement("img");
var fombtn = document.createElement("img");
//set src attribute
fmbtn.setAttribute(`src`, `./icon-minus.svg`);
smbtn.setAttribute(`src`, `./icon-minus.svg`);
tmbtn.setAttribute(`src`, `./icon-minus.svg`);
fombtn.setAttribute(`src`, `./icon-minus.svg`);
//create text
var ftext = document.querySelector(".fcontent");
var stext = document.querySelector(".scontent");
var thtext = document.querySelector(".ttext");
var fotext = document.querySelector(".lcontent");

   fpbtn.onclick = function(){
        ftext.style.display ="inline-block"
        fpbtn.replaceWith(fmbtn)
    }
    fmbtn.onclick =function(){
        ftext.style.display = "none"
        fmbtn.replaceWith(fpbtn)
    }
   spbtn.onclick = function(){
        stext.style.display ="inline-block"
        spbtn.replaceWith(smbtn)
    }
    smbtn.onclick =function(){
        stext.style.display = "none"
        smbtn.replaceWith(spbtn)
    }
tpbtn.onclick = function () {
  thtext.style.display = "inline-block";
  tpbtn.replaceWith(tmbtn);
};
tmbtn.onclick = function () {
  thtext.style.display = "none";
  tmbtn.replaceWith(tpbtn);
};
 fopbtn.onclick = function () {
   fotext.style.display = "inline-block";
   fopbtn.replaceWith(fombtn);
 };
 fombtn.onclick = function () {
   fotext.style.display = "none";
   fombtn.replaceWith(fopbtn);
 };

console.log(thtext);

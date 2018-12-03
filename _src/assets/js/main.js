'use strict';

console.log('>> Ready :)');

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

////IMAGE 

const fr = new FileReader();
const uploadBtn = document.querySelector('.button__add--image');

const fileField = document.querySelector('#img-selector');

const profileImages = document.querySelectorAll('.profile__picture');

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  for (const cardImage of profileImages) {
    cardImage.src = fr.result;
  }
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
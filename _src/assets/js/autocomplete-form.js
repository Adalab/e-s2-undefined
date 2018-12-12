'use strict';

let dataObject = {
  'palette': 1,
  'typography': 2,
  'name': '',
  'job': '',
  'phone': '',
  'email': '',
  'linkedin': '',
  'github': '',
  'photo': 'data:image/jpeg;base64,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',
  'skills': ['', '', '']
}; 

function updateDataObject(key,value) {
  dataObject[key] = value;
}

function updateLocalStorage(){
  localStorage.setItem('dataObject', JSON.stringify(dataObject));
} 

// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');

function updateFullName(event) {
  // console.log(event);
  let fullNameLabel = document.body.querySelector('#name');
  fullNameLabel.innerText = event.target.value;
  updateDataObject('name', event.target.value);
  updateLocalStorage();
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
//console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition(event) {
  // console.log(event);
  let jobPositionLabel = document.body.querySelector('#job-card');
  jobPositionLabel.innerText = event.target.value;
  updateDataObject('job', event.target.value);
  updateLocalStorage();
}

jobPositionInput.addEventListener('keyup', updateJobPosition);


// Here starts SKILLS JavaScript:

//HTML Checkbox
function myFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("html");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}

//CSS Checkbox 
function myFunction2() {
  let checkBox = document.getElementById("css-input");
  let text = document.getElementById("css");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}

//React Checkbox 
function myFunction3() {
  let checkBox = document.getElementById("react-input");
  let text = document.getElementById("react");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}


// Here starts EMAIL JavaScript:

let emailInput = document.body.querySelector('#email-input');

function updateEmail(event) {
  console.log(event);
  let emailLabel = document.querySelector('#email-card');
  console.log(emailLabel);
  emailLabel.href = `mailto:${event.currentTarget.value}`;
  updateDataObject('email', event.currrentTarget.value);
  updateLocalStorage();
}

emailInput.addEventListener('keyup', updateEmail);


// Here starts GitHub JavaScript:

let githubInput = document.body.querySelector('#github-input');

function updateGithub(event) {
  let githubLabel = document.querySelector('#github-card');
  githubLabel.href = `https://${event.currentTarget.value}`;
  updateDataObject('github', event.currentTarget.value);
  updateLocalStorage();
}

githubInput.addEventListener('keyup', updateGithub);


// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');

function updateLinkedin(event) {
  let linkedinLabel = document.querySelector('#linkedin-card');
  linkedinLabel.href = `https://www.${event.currentTarget.value}`;
  updateDataObject('linkedin', event.currentTarget.value);
  updateLocalStorage();
}

linkedinInput.addEventListener('keyup', updateLinkedin);

// Here starts Telephone Javascript 

let telInput = document.body.querySelector('#telf_movil');

function updateTelephone(event) {
  let telLabel = document.querySelector('#tel-card');
  telLabel.href = `tel:${event.currentTarget.value}`;
  updateDataObject('phone', event.currentTarget.value);
  updateLocalStorage();
}

telInput.addEventListener('keyup', updateTelephone);


//Color palette

let inputGreen = document.querySelector('#palette__green');
let inputRed = document.querySelector('#palette__red');
let inputGray = document.querySelector('#palette__gray');

function savePalette() {
  if (inputGreen.checked === true) {
    console.log('green');
    dataObject.palette = 1;
    updateDataObject('palette', 1);
  } else if (inputRed.checked === true){
    console.log('red');
    dataObject.palette = 2;
    updateDataObject('palette', 2);
  } else if (inputGray.checked === true){
    console.log('gray');
    dataObject.palette = 3;
    updateDataObject('palette', 3);
  } else {
    console.log('green');
  }
  updateLocalStorage();
}
inputGreen.addEventListener('click', savePalette);
inputRed.addEventListener('click', savePalette);
inputGray.addEventListener('click', savePalette);

//Typography

let inputUbuntu = document.querySelector('#font__option--1');
let inputComicSans = document.querySelector('#font__option--2');
let inputMontserrat = document.querySelector('#font__option--3');

function saveTypography() {
  if (inputUbuntu.checked === true) {
    console.log('ubuntu');
    dataObject.typography = 'u';
    updateDataObject('typography', 'u');
  } else if (inputComicSans.checked === true){
    console.log('ComicSans');
    dataObject.typography = 'c';
    updateDataObject('typography', 'c');
  } else if (inputMontserrat.checked === true){
    console.log('Montserrat');
    dataObject.typography = 'm';
    updateDataObject('typography', 'm');
  } else {
    console.log('Montserrat');
  }
  updateLocalStorage();
}
inputUbuntu.addEventListener('click', saveTypography);
inputComicSans.addEventListener('click', saveTypography);
inputMontserrat.addEventListener('click', saveTypography);


//Habilidades

// let inputUbuntu = document.querySelector('#font__option--1');
// let inputComicSans = document.querySelector('#font__option--2');
// let inputMontserrat = document.querySelector('#font__option--3');

// function saveTypography() {
//   if (inputUbuntu.checked === true) {
//     console.log('ubuntu');
//     dataObject.typography = 'u';
//     updateDataObject('typography', 'u');
//   } else if (inputComicSans.checked === true){
//     console.log('ComicSans');
//     dataObject.typography = 'c';
//     updateDataObject('typography', 'c');
//   } else if (inputMontserrat.checked === true){
//     console.log('Montserrat');
//     dataObject.typography = 'm';
//     updateDataObject('typography', 'm');
//   } else {
//     console.log('Montserrat');
//   }
//   updateLocalStorage();
// }
// inputUbuntu.addEventListener('click', saveTypography);
// inputComicSans.addEventListener('click', saveTypography);
// inputMontserrat.addEventListener('click', saveTypography);

// Here starts the API call

let url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
let button = document.querySelector('.button__create-card');
const cardLink = document.querySelector('.title__card--link');

function apiCall(json) {
  fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(dataObject), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(response => {

  cardLink.innerHTML = response.cardURL;

})
.catch(error => console.error('Error:', error));}

button.addEventListener('click', apiCall);

'use strict';


function updateDataObject(key, value) {
  dataObject[key] = value;
}

function updateLocalStorage() {
  localStorage.setItem('dataObject', JSON.stringify(dataObject));
}

// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');
let fullNameLabel = document.body.querySelector('#name');

function updateFullName(event) {
  // console.log(event);
  fullNameLabel.innerText = event.target.value;
  updateDataObject('name', event.target.value);
  updateLocalStorage();
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
let jobPositionLabel = document.body.querySelector('#job-card');
//console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition(event) {
  // console.log(event);

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
console.log('email', emailInput);
let emailLabel = document.querySelector('#email-card');
console.log('emaillabel', emailLabel);

function updateEmail(event) {
  console.log(event);

  console.log(emailLabel);
  emailLabel.href = `mailto:${event.currentTarget.value}`;
  updateDataObject('email', event.currentTarget.value);
  updateLocalStorage();
}

emailInput.addEventListener('keyup', updateEmail);


// Here starts GitHub JavaScript:

let githubInput = document.body.querySelector('#github-input');
let githubLabel = document.querySelector('#github-card');

function updateGithub(event) {
  githubLabel.href = `https://${event.currentTarget.value}`;
  updateDataObject('github', event.currentTarget.value);
  updateLocalStorage();
}

githubInput.addEventListener('keyup', updateGithub);


// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');
let linkedinLabel = document.querySelector('#linkedin-card');

function updateLinkedin(event) {
  linkedinLabel.href = `https://www.${event.currentTarget.value}`;
  updateDataObject('linkedin', event.currentTarget.value);
  updateLocalStorage();
}

linkedinInput.addEventListener('keyup', updateLinkedin);

// Here starts Telephone Javascript 

let telInput = document.body.querySelector('#telf_movil');
let telLabel = document.querySelector('#tel-card');
console.log('telLAbel', telLabel);

function updateTelephone(event) {
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
    dataObject.palette = '1';
    updateDataObject('palette', '1');
  } else if (inputRed.checked === true) {
    console.log('red');
    dataObject.palette = '2';
    updateDataObject('palette', '2');
  } else if (inputGray.checked === true) {
    console.log('gray');
    dataObject.palette = '3';
    updateDataObject('palette', '3');
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
  } else if (inputComicSans.checked === true) {
    console.log('ComicSans');
    dataObject.typography = 'c';
    updateDataObject('typography', 'c');
  } else if (inputMontserrat.checked === true) {
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

// Here starts the API call

let url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
let button = document.querySelector('.button__create-card');
const cardLink = document.querySelector('.title__card--link');
const tweetbutton = document.querySelector('.twitter');

function apiCall(json) {
  fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(dataObject), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {

      cardLink.innerHTML = response.cardURL;
      tweetbutton.href = "https://twitter.com/intent/tweet?text=%C2%A1He%20creado%20esta%20tarjeta%20personalizada%20con%20Awesome%20Profile%20Card%20de%20undefined-team!%20✨" + response.cardURL;

    })
    .catch(error => console.error('Error:', error));
}

button.addEventListener('click', apiCall);



function getLocalStorage() {
  // localStorage.getItem('dataObject');
  let myLocalStorage = localStorage.getItem('dataObject');
  let myLocalStorageObject = JSON.parse(myLocalStorage);
  console.log(myLocalStorageObject);

  if (myLocalStorageObject !== null) {
 
    dataObject = myLocalStorageObject; 
 
    fullNameInput.value = dataObject.name;
    fullNameLabel.innerHTML = dataObject.name;
 
    jobPositionLabel.innerHTML= dataObject.job;
    jobPositionInput.value = dataObject.job;


    if (dataObject.name === '') {
      fullNameLabel.innerText = 'Name Surname';
    }
    if (dataObject.job === '') {
      jobPositionLabel.innerText = 'Job';
    }
 
    emailInput.value = dataObject.email;
    emailLabel.href = dataObject.email;
 
    linkedinInput.value = dataObject.linkedin;
    linkedinLabel.href = dataObject.linkedin;

    telInput.value = dataObject.phone;
    telLabel.href = dataObject.phone;

    githubInput.value = dataObject.github;
    githubLabel.href = dataObject.github;

    for (const cardImage of profileImages) {
      cardImage.style.backgroundImage = `url(${dataObject.photo})`;
    }
  } 
}
getLocalStorage();


//Reset button
const resetBtn = document.querySelector('.profile__action');
const form = document.querySelector('#form');
const colorForm = document.querySelector('#color-form');
const fontForm = document.querySelector('#font-form');

function resetAll() {
  dataObject = {
    'palette': '',
    'typography': '',
    'name': '',
    'job': '',
    'phone': '',
    'email': '',
    'linkedin': '',
    'github': '',
    'photo': '',
    'skills': ['', '', '']
  };
  updateLocalStorage();
  cardLink.innerHTML = 'Share the card with your friends!';
  tweetbutton.href = '';
  form.reset();
  colorForm.reset();
  fontForm.reset();
  fullNameLabel.innerText = 'Name Surname';
  jobPositionLabel.innerText = 'Job';
  profileImages[0].style.backgroundImage = dataObject.photo;
  profileImages[1].style.backgroundImage = dataObject.photo;
}
resetBtn.addEventListener('click', resetAll);
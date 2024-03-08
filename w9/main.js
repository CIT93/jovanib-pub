import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./other.js";
import {FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

function start(firstName, lastName, houseHoldMembers, houseHoldSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseHoldSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHold: houseHoldMembers,
    houseSPTS: houseSizePTS,
    houseSize: houseHoldSize,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
});

 // Function to validate a single field
 const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
document.getElementById('firstname').addEventListener('blur', validateField);
document.getElementById('lastname').addEventListener('blur', validateField);

// Listen for form submission
document.getElementById('form').addEventListener('submit', function (event) {
  //Prevent default behavior
  event.preventDefault();
  const firstNameIsValid = document.getElementById('firstname').value !== '';
  const lastNameIsValid = document.getElementById('lastname').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
      alert('Form is valid. You can proceed with submitting the form to the server.');
  }
})
// no questions on modules, reading the mdn doc. I had an error bc I had both fun in the modules

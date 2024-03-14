import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT } from "./global.js"
import {saveLS, cfpData} from "./storage.js"

// const start = (firstName, lastName, houseHoldMembers, houseHoldSize) => {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseHoldSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: firstName,
//     lastName: lastName,
//     houseHold: houseHoldMembers,
//     houseSPTS: houseSizePTS,
//     houseSize: houseHoldSize,
//     cfpTotal: total,
//   });
// }

const start = (...input) => {
  const houseHoldPTS = determineHouseHoldPts(input[2]);
  const houseSizePTS = determineHouseSizePts(input[3] );
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: input[0],
    lastName: input[1],
    houseHold: input[2],
    houseSPTS: input[3 ],
    houseSize: houseHoldSize,
    cfpTotal: total,
  });
}


renderTbl(cfpData)
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
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', e => {
  e.preventDefault();
 if (FNAME.value !== '' && LNAME.value !== '') {
  SUBMIT.textContent = '';
start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

// rest operator
// const add2 = function(...a) {
//  return 2 + a(3);
// }
// const result = add2(1,2,3,4);


//arrow function

const add2 = a =>  2 + a;

  const result = add2(100 );


const a = 3;

(function(a){
  console.log("inside IIFE");
  console.log(a);
})(a);
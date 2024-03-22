import { renderTbl } from "./render.js";
import { determineHouseHoldPoints, determineHouseSizePoints } from "./other.js";
import {FORM, FNAME, LNAME, SUBMIT } from "./global.js"
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js"

const start = function(firstName, lastName, houseHoldMembers, houseHoldSize, foodChoice) {
  const foodChoicePts = calFoodPts(foodChoice)
  const houseHoldPTS = determineHouseHoldPoints(houseHoldMembers);
  const houseSizePTS = determineHouseSizePoints(houseHoldSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHold: houseHoldMembers,
    houseSPTS: houseSizePTS,
    houseSize: houseHoldSize,
    foodChoicePts: foodChoice,
    cfpTotal: total,
  });
}
renderTbl(cfpData)
 // Function to validate a single field
const validateField = function (event) {
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

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
 if (FNAME.value !== '' && LNAME.value !== '') {
  SUBMIT.textContent = '';
// start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value,  FORM.foodChoice.value);
    // fpObj.houseHoldPoints(); 
    // fpObj.houseSizePts();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

// const me = {
//   name: "Jovani",
//   hairColor: "Black",
//   location: "Room",
//   sleepScore: 95,
//   introduce: function(){
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }
// }

// const you = {
//   name: "Jane",
//   hairColor: "Brown",
//   location: "Room",
//   sleepScore: 55,
//   introduce: function(){
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }
// }

// me.introduce();
// you.introduce();
 
// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce(){
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }
// }
// const rio = new Human ('Rio', 'Red', 'Office', 95)
// const tio = new Human ('Tio', 'Red', 'Office', 55)
// rio.introduce();
// tio.introduce();
// rio.hrv = 50;
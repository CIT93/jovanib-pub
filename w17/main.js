import { renderTbl } from "./render.js";
import { determineHouseHoldPoints, determineHouseSizePoints } from "./other.js";
import {FORM, FNAME, LNAME, SUBMIT, WATER, BOTH, WASTE} from "./global.js"
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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    alum: e.target.alum.checked,
    steel: e.target.steel.checked,
    foodwaste: e.target.foodwaste.checked,
    recyclePts: (24 - (numberChecked * 4)),
  }
}

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
 if (FNAME.value !== '' && LNAME.value !== '') {
  SUBMIT.textContent = '';
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodChoice.value,
      e.target.foodSource.value,
      e.target.water.value,
      e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
      e.target.dish_washer.checked,
      parseInt(e.target.purchases.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.personal.value),
      parseInt(e.target.publicT.value),
      parseInt(e.target.flight.value)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  BOTH.disabled = false;
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

WATER.addEventListener("change", e =>{
  if(parseInt(WATER.value) === 0){
    BOTH.disabled = true;
  } else { 
    BOTH.disabled = false;
  }
})
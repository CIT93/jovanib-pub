import { renderTbl } from "./render.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

let cardonFootprintPoints = 0;

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large")  {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 6;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 1) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPts = 4;
  } else {
    houseHoldPts = 2;
  }
  return houseHoldPts;
}

function start(first, last, houseHoldMembers, houseHoldSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseHoldSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseH: houseHoldMembers,
    houseSPTS: houseSizePTS,
    houseS: houseHoldSize,
    cfpTotal: total,
  });
}


// error bc td not defined in global scope
FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
 // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});
// no questions on modules, reading the mdn doc. I had an error bc I had both fun in the modules

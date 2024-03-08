import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./other.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});
// no questions on modules, reading the mdn doc. I had an error bc I had both fun in the modules

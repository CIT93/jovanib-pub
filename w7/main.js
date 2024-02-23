import { renderTbl } from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./other.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];



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

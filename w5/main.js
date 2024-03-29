const cfpData = [];
let cardonFootprintPoints = 0;

function determineHouseSizePts(size) {
  let HouseSizePoints = 0;
  if (size === "large") {
    HouseSizePoints = 10;
  } else if (size === "medium") { // Corrected typo here
    HouseSizePoints = 6;
  } else if (size === "small") {
    HouseSizePoints = 4;
  } else if (size === "apt") {
    HouseSizePoints = 2;
  }
  return HouseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let HouseHoldPts = 0;
  if (numberInHousehold === 1) {
    HouseHoldPts = 14;
  } else if (numberInHousehold === 2) {
    HouseHoldPts = 12;
  } else if (numberInHousehold === 3) {
    HouseHoldPts = 10;
  } else if (numberInHousehold === 4) {
    HouseHoldPts = 8;
  } else if (numberInHousehold === 5) {
    HouseHoldPts = 6;
  } else if (numberInHousehold === 6) {
    HouseHoldPts = 4;
  } else { // Adjusted to cover cases where numberInHousehold is greater than 6
    HouseHoldPts = 2;
  }

  return HouseHoldPts;
}

function start(houseHoldMembers, houseHoldSize) {
  const HouseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseHoldSize);
  const total = HouseHoldPTS + houseSizePTS;
  cfpData.push({
    houseH: houseHoldMembers,
    houseSPTS: houseSizePTS,
    houseS: houseHoldSize,
    cfpTotal: total,
  });
}

function displayOutput() {
  const output = document.getElementById("output");
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = 'Based on number in and size of home';
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseH} (score: ${obj.houseSPTS}),`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");

console.log(cfpData);
displayOutput();


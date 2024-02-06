const cfpData = [];
let cardonFootprintPoints = 0;

function determineHouseSizePts(size) {
  
  let HouseSizePoints = 0;
  if (size === "large") {
    HouseSizePoints = 10;
  } else if (size === "meduim") {
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
  } else if (numberInHousehold > 6) {
    HouseHoldPts = 2;
  }
  
  return HouseHoldPts;
}

function start(houseHoldMembers, houseHoldSize) {
  const HouseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseHoldSize);
  const total = HouseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseHoldSize,
    HouseHoldPTS,
    houseSizePTS,
    total]
  );
  
  
}
/* function displayoutput() {
    for (arr of cfpData) 
    {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2. textContent = `Cardon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = 'Based on number in and size of home'
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr [0]} (score: ${arr[3]}),`;
    newP.textContent += `and a $arr[1]) size of home (score:${arr[2]}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}
} */

function displayoutput() {

    for (let i = 0; i < cfpData.length; i++) {
    console.log(i)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2. textContent = `Cardon Footprint ${cfpData[1][4]}`;
  //  const newH3 = document.createElement("h3");
   // newH3.textContent = 'Based on number in and size of home'
    //const newP = document.createElement("p");
    //newP.textContent = `This number is based on the number of people in the house of ${arr [0]} (score: ${arr[3]}),`;
    //newP.textContent += `and a $arr[1]) size of home (score:${arr[2]}).`;
    output.appendChild(newH2);
    //output.appendChild(newH3);
    //output.appendChild(newP); 
}
}

start(5, "apt");
start(4, "large");
start(3, "medium");

displayoutput()
// for (initialization; condition; afterthought) 
// statement

for (let i = 0; i < 5; i++) {
    // block scope
    console.log(i)
}
// challenge 
for (let i = 0; i <= 15; i++) {
   
    console.log(i)
}
// count back
for (let i = 6; i > 0; i--) {
   
    console.log(i)
}
// refactor
// ^^^
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
 
function displayOutPut() {
for (arr of cfpData){
console.log(arr);
const output = document.getElementById("output")

const newP = document.createElement("p");
newP.textContent = `Carbon footprint total is ${arr[4]} number of household members is ${arr[0]}, score for house members is 
${arr[2]}, house hold size ${arr[1]}, score for house size is ${arr[3]}`;
output.appendChild(newP);


} 
}

start(5, "apt");
start(4, "large");
start(3, "medium");

 
displayOutPut()




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
  const houseSizePts = determineHouseSizePts(houseHoldSize);
  const total = HouseHoldPTS + houseSizePts;
  cfpData.push(
    houseHoldMembers,
    houseHoldSize,
    HouseHoldPTS,
    houseSizePts,
    total
  );
  
  
}
 
function displayOutPut() {
  
}

start([5, "apt"]);
start([5, "apt"])
start(3, "medium")
start([8, "apt"]);
start([2, "apt"])
start(4, "medium")
 
displayOutPut()




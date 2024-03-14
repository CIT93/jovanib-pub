let carbonFootprintPoints = 0;

const determineHouseSizePts = (size = "medium") => {
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

 console.log(determineHouseSizePts(medium)); 
}

const determineHouseHoldPts = (numberInHousehold = 1) => {
  let houseHoldPts = 0 ;
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
  console.log(numberInHousehold(5));
}
export {determineHouseHoldPts, determineHouseSizePts}
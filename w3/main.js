function determineHouseHoldPts (numberInHousehold) {
    console.log("Inside the function");
    if (numberInHousehold === 1) {
        carbonFpPoints = carbonFpPoints + 14
    } else if (numberInHousehold === 2) {
        carbonFpPoints = carbonFpPoints + 12
    } else if (numberInHousehold === 3) {
        carbonFpPoints = carbonFpPoints + 10
    } else if (numberInHousehold === 4) {
        carbonFpPoints = carbonFpPoints + 8
    } else if (numberInHousehold === 5) {
        carbonFpPoints = carbonFpPoints + 6
    } else if (numberInHousehold === 6) {
        carbonFpPoints = carbonFpPoints + 4
    } else if (numberInHousehold > 6) {
        carbonFpPoints = carbonFpPoints + 2
    }  else {
        console.log("no update to points")
    }
    console.log(`Points for household of ${numberInHousehold} would be ${carbonFpPoints} `) 
}
let carbonFpPoints = 0;
// const numberInHousehold = 5;
// global scope 
// determineHouseHoldPts (3) 
// determineHouseHoldPts (4)
// 

function calculateEnviornmentPoints (homeSize) {
    if (homeSize === "large") {
      return 10;
    } else if (homeSize === "medium") {
      return 7;
    } else if (homeSize === "small") {
      return 4;
    } else if (homeSize === "apt") {
      return 2;
    }
  }
  let homeSize = "medium";
  let enviornmentPoints = calculateEnviornmentPoints(homeSize);
  
  console.log(`My home is ${homeSize} sized and my points are ${enviornmentPoints}.`)

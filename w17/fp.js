class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterValue,
    waterConsum,
    both,
    purchases,
    waste,
    recycle,
    personal,
    publicT,
    flight
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterValue = waterValue;
    this.both = both;
    this.purchasesPts = purchases;
    this.waterConsumPoints = waterConsum;
    this.wastePts = waste;
    this.recycle = recycle;
    this.personalPts = personal;
    this.publicPts = publicT;
    this.flightPts = flight;
    this.calHouseHoldPoints();
    this.calFoodPts();
    this.calHouseSizePoints();
    this.calFoodSourcePoints();
    this.calTotal();
  }
  calHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else {
      this.houseHoldPoints = 2;
    }
  }
  calHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 6;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }
  calFoodPts() {
    if (this.foodChoice === "meat daily") {
      this.foodChoicePts = 10;
    } else if (this.foodChoice === "meat weekly") {
      this.foodChoicePts = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePts = 4;
    } else if (this.foodChoice === "vegan") {
      this.foodChoicePts = 2;
    }
  }

  calFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.FoodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.FoodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.FoodSourcePoints = 2;
    }
  }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePts +
      this.FoodSourcePoints +
      this.waterConsumPoints +
      this.purchasesPts +
      this.wastePts +
      this.recycle.recyclePts +
      this.personalPts +
      this.publicPts +
      this.flightPts;
  }
}
export { FP };

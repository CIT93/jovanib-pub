class DecisionMaker {
  constructor() {
    this.idealSpots = [];
  }
  determineIdealSpots = (climate, activities, budget) => {
    const idealSpots = [];

    if (climate === "tropical" || climate === "sunny") {
      idealSpots.push("Hawaii", "Thailand", "Maldives", "Bali");
      if (activities.includes("sightseeing") && budget >= 2000) {
        idealSpots.push("Japan", "Spain", "Italy", "Greece");
      } else if (activities.includes("day at the beach") && budget <= 1000) {
        idealSpots.push("Bora Bora", "Seychelles", "Bahamas", "Fiji");
      }
    } else if (climate === "mountainous" || climate === "hiking climate") {
      idealSpots.push("Rocky Mountains", "Grand Canyon", "Himalayas", "Alps");
      if (activities.includes("skiing") && budget >= 2000) {
        idealSpots.push("Switzerland", "Canada");
      } else if (activities.includes("hiking") && budget <= 1000) {
        idealSpots.push("Peru", "Nepal");
      }
    } else if (climate === "cold" || climate === "snowy") {
      idealSpots.push("Iceland", "Finland", "Norway", "Sweden");
      if (activities.includes("northern lights") && budget >= 2000) {
        idealSpots.push("Alaska", "Greenland");
      } else if (activities.includes("skiing") && budget <= 1000) {
        idealSpots.push("Austria", "France");
      }
    }

    return idealSpots;
  };
}

export { DecisionMaker };
  
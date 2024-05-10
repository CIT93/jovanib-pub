import {vacationData } from "./main.js";

const addVacationData = (firstName, budget, climate, activities, idealSpots) => {
  vacationData.push({
    firstName,
    budget,
    climate,
    activities,
    idealSpots,
  });
};

export { addVacationData};
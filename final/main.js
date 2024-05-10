import { addRowToTable } from "./render.js";
import { addVacationData } from "./global.js";
import { DecisionMaker } from "./DecisionMaker.js";

const decisionMaker = new DecisionMaker();

const determineIdealSpots = decisionMaker.determineIdealSpots.bind(decisionMaker);

let vacationData = [];

function saveToLocalStorage() {
  localStorage.setItem("vacationData", JSON.stringify(vacationData));
}
//render local storage
function loadFromLocalStorage() {
  const storedData = localStorage.getItem("vacationData");
 if (storedData) {
    vacationData = JSON.parse(storedData);
    vacationData.slice(-2).forEach((element) => {
      addRowToTable(element);
    });
    console.log(vacationData);
  }  
} 

loadFromLocalStorage();

// Function form values
function getFormValues() {
  const nameInput = document.getElementById("firstName");
  const firstName = nameInput.value;
  const climateInput = document.getElementById("climate");
  const climate = climateInput.value;
  const budgetInput = document.getElementById("budget");
  const budget = budgetInput.value;
  const activitiesInput = document.getElementById("activities");
  const activities = activitiesInput.value;
  return { firstName, climate, budget, activities };
}

// Function to create recommendations list
function createRecommendationsList(spots) {
  const ul = document.createElement("ul");
  spots.forEach((spot) => {
    const li = document.createElement("li");
    li.textContent = spot;
    ul.appendChild(li);
  });
  return ul;
}

// Custom validate budget
function validateBudget(budget) {
  if (budget < 0) {
    return "Budget cannot be less than 0.";
  } else if (budget > 2500) {
    return "Budget cannot be more than 2500.";
  }
  return "";
}

// Function to handle form
document
  .getElementById("vacationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const { firstName, climate, budget, activities } = getFormValues();
    const idealSpots = determineIdealSpots(climate, budget, activities); // corrected function call
    addVacationData(firstName, budget, climate, activities, idealSpots);
    addRowToTable({ firstName, budget, climate, activities, idealSpots });
    const form = document.getElementById("vacationForm");
    form.reset();
    saveToLocalStorage();
  });

export {
  vacationData,
  getFormValues,
  createRecommendationsList,
  validateBudget,
  saveToLocalStorage,
  loadFromLocalStorage,
};
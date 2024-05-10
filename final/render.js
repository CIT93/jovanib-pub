import {
    saveToLocalStorage,
    createRecommendationsList,
   
  } from "./main.js";
  
  function addRowToTable(data) {
    const table = document.getElementById("vacationTable");
  
    // Check if headers exist, if not, create them
    if (!table.querySelector("thead")) {
      const thead = table.createTHead();
      const headerRow = thead.insertRow();
      const headerText = [
        "Full Name",
        "Climate",
        "Budget",
        "Activities",
        "Location",
        "Actions",
      ];
  
      headerText.forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
      });
    }
    const row = table.insertRow(-1);
    const cells = [
      "firstName",
      "climate",
      "budget",
      "activities",
      "idealSpots",
    ].map((key, index) => {
      const cell = row.insertCell(index);
      if (key === "idealSpots") {
        cell.appendChild(createRecommendationsList(data[key]));
      } else {
        cell.textContent = data[key];
      }
      return cell;
    });
  
    const actionsCell = row.insertCell(cells.length);
  
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      const row = this.parentNode.parentNode;
      // Get the data from the row
      const firstName = row.cells[0].textContent;
      const climate = row.cells[1].textContent;
      const budget = row.cells[2].textContent;
      const activities = row.cells[3].textContent;
      // Populate the form with the row data
      document.getElementById("firstName").value = firstName;
      document.getElementById("climate").value = climate;
      document.getElementById("budget").value = budget;
      document.getElementById("activities").value = activities;
      // Remove the row from the table
      row.parentNode.removeChild(row);
      if (table.rows.length === 1 && table.querySelector("thead")) {
        table.removeChild(table.querySelector("thead"));
      }
      // Save the  data to local storage
      saveToLocalStorage();
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      document.getElementById("firstName").value = "";
      document.getElementById("climate").value = "";
      document.getElementById("budget").value = "";
      document.getElementById("activities").value = "";
      const row = this.parentNode.parentNode;
      // Get the firstName from the row
      const firstName = row.cells[0].textContent;
      // Remove the row from the table
      row.parentNode.removeChild(row);
      if (table.rows.length === 1 && table.querySelector("thead")) {
        table.removeChild(table.querySelector("thead"));
      }
      // Remove the data from the vacationData array
      // vacationData = vacationData.filter((data) => data.firstName !== firstName);
      saveToLocalStorage();
    });
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
  }
  
  export { addRowToTable };
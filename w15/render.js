import { getAvg} from "./hof.js";
import {FORM, TBL} from "./global.js"
import { saveLS } from "./storage.js";



const renderTblHeading = function() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArray = [
    "Name",
    "Household",
    "HouseSize",
    "Food Choice",
    "Footprint",
    "Actions",
  ];
  
  headingTextArray.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const  onUpdate = function(index, data){
  data.splice(index, 1);
    saveLS(data);
renderTbl(data);
}

const renderTblBtn = function(obj, index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
console.log("helloo from del btn");
console.log(e);
onUpdate(index, data)
  });
  btnEdit.addEventListener('click', function(e){
 
    FORM[1].value = obj.first; 
    FORM[2].value = obj.last; 
    FORM[3].value = obj.houseMembers; 
    FORM[4].value = obj.houseSize; 
    FORM[5].value = obj.foodChoice;
    onUpdate(index, data)
  })
  return td;
}

const renderTblBody = function(data){
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      }) 
 
   const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
   
  });
  return tbody;
 
}

const renderTbl = function(data) {
TBL.innerHTML = "";
if (data.length > 0){
  const tbody = renderTblBody(data);
  const table = renderTblHeading();
  table.appendChild(tbody);
  TBL.appendChild(table); }
  addRow("tab-data")

}
const addRow = () => {
  const tableRef = TBL.querySelector("table");
  const newRow = tableRef.insertRow(-1);
  const newCell = newRow.insertCell(0);
  newCell.colSpan = 1;
  const newText = document.createTextNode(
    `Average Carbon Footprint: ${getAvg().toFixed(2)}`
  );
  newCell.appendChild(newText);
};

export { renderTbl, renderTblHeading };

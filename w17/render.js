import {FORM, TBL} from "./global.js"
import { saveLS } from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id")
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Average footprint`)
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
}

const renderTblHeading = function() {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArray = [
    "First",
    "Last",
    "Footprint Total ",
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

onUpdate(index, data)
  });
  btnEdit.addEventListener('click', function(e){
 
    FORM[1].value = obj.first; 
    FORM[2].value = obj.last; 
    FORM[3].value = obj.houseMembers; 
    FORM[4].value = obj.houseSize; 
    FORM[5].value = obj.foodChoice;
    FORM[6].value = obj.foodSource;
    FORM[7].value = obj.waterValue; 
    FORM[8].value = obj.both;
    FORM[9].value = obj.purchasesPts;
    FORM[10].value = obj.wastePts;
    FORM.glass.checked = obj.recycle.glass;
    FORM.plastic.checked = obj.recycle.plastic;
    FORM.steel.checked = obj.recycle.steel;
    FORM.paper.checked = obj.recycle.paper;
    FORM.foodwaste.checked = obj.recycle.foodwaste;
    FORM.alum.checked = obj.recycle.alum;
    FORM.personal.value = obj.personalPts;
    FORM.publicT.value = obj.publicPts;
    FORM.flight.value = obj.flightPts;
    onUpdate(index, data)
  })
  return td;
}

const renderTblBody = function(data){
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total"]
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
if (data.length !== 0){
  const tbody = renderTblBody(data);
  const table = renderTblHeading();
  table.appendChild(tbody);
  TBL.appendChild(table);
  calculateAvg(data)
}  

}

export { renderTbl, renderTblHeading };

function displayoutput() {
    for (arr of cfpData) 
    {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2. textContent = `Cardon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = 'Based on number in and size of home'
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr [0]} (score: ${arr[3]}),`;
    newP.textContent += `and a $arr[1]) size of home (score:${arr[2]}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}
}
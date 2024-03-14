const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return []; 
    }
};

const saveLS = function(cfpData) {
    let serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
};

const cfpData = getLS();

export { cfpData, saveLS, getLS };
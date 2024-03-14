const getLS = () => {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return []; 
    }
};

const saveLS = cfpData => {
    let serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
};

const cfpData = getLS();

export { cfpData, saveLS, getLS };
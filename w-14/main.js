const output = document.getElementById("output");        
const link = "https://jsonplaceholder.typicode.com/photos?_limit=100";

const renderPics = (photos) => {
    photos.forEach((img) => {
        const imageElements = document.createElement("img");
        imageElements.setAttribute("src", img.thumbnailUrl);
        output.appendChild(imageElements);
    });
}

const start = async () => {
    try {
        const pics = await fetch(link);
        if (pics.status < 200) {
            throw console.log("HTTP error. ");
        }
        const photoData = await pics.json();
        if (!('length' in photoData)) {
            throw console.log("Data error.");
        }
        renderPics(photoData);
    } catch(error) {
        output.textContent = `Error`;
    }
}
start();

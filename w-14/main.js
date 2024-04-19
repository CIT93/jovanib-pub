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
        const photoData = await pics.json();    
        renderPics(photoData);
    } catch(error) {
        output.textContent = "Error";       
    }

}
start();

//access json element
const gallery = document.getElementById("photo-gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const column3 = document.getElementById("column3");
const columns = [column1, column2, column3]; //array to iterate over columns
let columnIndex = 0;
let i = 1;
var media = window.matchMedia("(max-width: 768px)")

//define variables and arrays for pages of different Photographers and Categories
const pageType = document.getElementById("pageType").textContent;
const pagePhotographer = document.getElementById("photographer").textContent;

//run this for big screens
function fetchData() {
  function getcorrectPath(q) {
    const dataStructure = {
      "FELIX DRESSLER.": {
        "PORTFOLIO": `https://ik.imagekit.io/photoggang/${q}/Felix/01_Portfolio/${i}_image.jpg`,
        "PEOPLE": `https://ik.imagekit.io/photoggang/${q}/Felix/02_People/${i}_image.jpg`,
        "TRAVELS": `https://ik.imagekit.io/photoggang/${q}/Felix/03_Travels/${i}_image.jpg`,
        "WEDDING": `https://ik.imagekit.io/photoggang/${q}/Felix/04_Wedding/${i}_image.jpg`
      },
      "LEO CONRADT.": {},
      "PAULA SCHMIDT.": {},
      "ARNE BÖHMER.": {},
      "HANNES SCHUBERT.": {},
    };
    const path = dataStructure[pagePhotographer][pageType];
    return path;
  };
  fetch(getcorrectPath("tr:w-8"))
    .then(response => {
      if (response.status === 404) {
        throw new Error("Image not found");
      }
      return response;
    })
    .then(response => response.blob())
    .then(blob => {
      // Process the image here
      const photo = document.createElement("div");
      photo.classList.add("photo")
      const image = document.createElement("img");
      image.sizes = "(max-width: 768px) 33.3vw, 100vw";
      image.src = getcorrectPath("tr:w-auto-800"); //used as default
      image.alt = "A picture. Probably beautiful.";
      image.classList.add("galleryImg");
      //decide if big or small screen
      if (media.matches) {
        gallery.appendChild(image);
      } else {
        //Append the photo to the current column
        columns[columnIndex].prepend(photo);
        photo.appendChild(image);
        //update the column index for the next iteration
        columnIndex = (columnIndex + 1) % columns.length;
      };
      // Increment the counter and call the next iteration
      i++;
      fetchData();
    })
    .catch(error => {
      // Handle the error here
      if (error.message === "Image not found") {
        console.log("404 Error: Image not found");
      } else {
        console.error(error);
      }
    });
};

//only run this script when on Photo Gallery Pages
if (typeof (gallery) != "undefined" && gallery != null) {
  console.log(pagePhotographer, pageType)
  fetchData();
}
else {
  console.log("Not on Photo Gallery Page.S");
};
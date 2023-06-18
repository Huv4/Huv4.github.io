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
var q = "";


//run this for big screens
function fetchData() {
  console.log("fetching path", getcorrectPath("tr:w-8"))
  function getcorrectPath(q) {
    const dataStructure = {
      "FELIX DRESSLER": {
        "PORTFOLIO": `https://ik.imagekit.io/photoggang/${q}/Blende17/Felix/01_Portfolio/${i}_image.jpg`,
        "PEOPLE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Felix/02_People/${i}_image.jpg`,
        "TRAVELS": `https://ik.imagekit.io/photoggang/${q}/Blende17/Felix/03_Travels/${i}_image.jpg`,
        "WEDDING": `https://ik.imagekit.io/photoggang/${q}/Blende17/Felix/04_Wedding/${i}_image.jpg`,
        "B&W": `https://ik.imagekit.io/photoggang/${q}/Blende17/Felix/05_B_W/${i}_image.jpg`
      },
      "LEO CONRADT": {
        "PORTFOLIO": `https://ik.imagekit.io/photoggang/${q}/Blende17/Leo/01_Portfolio/${i}_image.jpg`,
        "PEOPLE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Leo/02_People/${i}_image.jpg`,
        "MAKROWORLD": `https://ik.imagekit.io/photoggang/${q}/Blende17/Leo/03_MakroWorld/${i}_image.jpg`,
        "STREETLIFE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Leo/04_Streetlife/${i}_image.jpg`,
        "GO OUTSIDE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Leo/05_GoOutside/${i}_image.jpg`
      },
      "PAULA SCHMIDT": {
        "PORTFOLIO": `https://ik.imagekit.io/photoggang/${q}/Blende17/Paula/01_Portfolio/${i}_image.jpg`,
        "PEOPLE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Paula/02_People/${i}_image.jpg`,
        "MAKRO": `https://ik.imagekit.io/photoggang/${q}/Blende17/Paula/03_Makro/${i}_image.jpg`,
        "WEDDING": `https://ik.imagekit.io/photoggang/${q}/Blende17/Paula/04_Wedding/${i}_image.jpg`
      },
      "ARNE BÖHMER": {
        "PORTFOLIO": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/01_Portfolio/${i}_image.jpg`,
        "TRAVELS": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/02_Travels/${i}_image.jpg`,
        "EVENTS": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/03_Events/${i}_image.jpg`,
        "STREET": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/04_Street/${i}_image.jpg`,
        "NATURE": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/05_Nature/${i}_image.jpg`,
        "WEDDING": `https://ik.imagekit.io/photoggang/${q}/Blende17/Arne/06_Wedding/${i}_image.jpg`
      },
      "HANNES SCHUBERT": {},
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
      const smallimage = getcorrectPath("tr:w-1000");
      const mediumimage = getcorrectPath("tr:w-1300");
      const largeimage = getcorrectPath("tr:w-1600");
      // Process the image here
      const photo = document.createElement("div");
      photo.classList.add("photo")
      const image = document.createElement("img");
      image.src = getcorrectPath("tr:w-100"); //used as default
      image.srcset = `${largeimage} 768w,
            ${mediumimage} 2000w,
            ${smallimage} 3000w`;
      sizes = "(max-width: 768px) 100vw, 33vw";
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
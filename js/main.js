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

function fetchData() {
  fetch(`https://ik.imagekit.io/photoggang/tr:w-8/Felix/01_Portfolio/${i}_image.jpg`)
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
      image.src = `https://ik.imagekit.io/photoggang/tr:w-800/Felix/01_Portfolio/${1}_image.jpg 800w,
      `; //used as default
      image.srcset = `
      https://ik.imagekit.io/photoggang/tr:w-400/Felix/01_Portfolio/${i}_image.jpg 400w, 
      https://ik.imagekit.io/photoggang/tr:w-800/Felix/01_Portfolio/${i}_image.jpg 800w,
      https://ik.imagekit.io/photoggang/tr:w-1200/Felix/01_Portfolio/${i}_image.jpg 1200w`; //use this for different screen sizes
      image.alt = "A picture. Probably beautiful.";
      image.classList.add("galleryImg");

      //Append the photo to the current column
      columns[columnIndex].prepend(photo);
      photo.appendChild(image);
      //update the column index for the next iteration
      columnIndex = (columnIndex + 1) % columns.length;
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
  fetchData()
}
else {
  console.log("Not on Photo Gallery Page.S");
};
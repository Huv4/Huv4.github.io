//access json element
const gallery = document.getElementById("photo-gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const selectedIndex = null;
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const column3 = document.getElementById("column3");
const columns = [column1, column2, column3]; //array to iterate over columns
let columnIndex = 0;

//only run this script when on Photo Gallery Pages
if (typeof (gallery) != "undefined" && gallery != null) {
  imageIndex.forEach((i) => {
    console.log("Test der Console");
    const photo = document.createElement("div");
    photo.classList.add("photo")
    const image = document.createElement("img");
    image.src = `https://ik.imagekit.io/photoggang/image${i}.jpg`;
    image.alt = "A picture. Probably beautiful.";
    image.classList.add("galleryImg");

    image.addEventListener("click", () => {
      //popup stuff
      popup.style.transform = `translateY(0)`;
      selectedImage.src = `/PHP/uploads/${i}`;
      selectedImage.alt = "A picture. Probably beautiful.";
    });
    //Append the photo to the current column
    columns[columnIndex].appendChild(photo);
    photo.appendChild(image);
    //update the column index for the next iteration
    columnIndex = (columnIndex + 1) % columns.length;
  });
} else {
  console.log("Not on Photo Gallery Page.S");
}

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
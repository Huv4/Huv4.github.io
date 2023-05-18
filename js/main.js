//access json element
const gallery = document.getElementById("photo-gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");
const selectedIndex = null;

//only run this script when on Photo Gallery Pages
if (typeof (gallery) != "undefined" && gallery != null) {
  fetch("/PHP/get_images.php")
    .then(Response => Response.json())
    .then(data => {
      [0, 1].forEach(e => delete data[e]); //delete first two Elements from json ([.] and [..])
      data.forEach(i => {
        console.log("Test der Console");
        const image = document.createElement("img");
        image.src = `/PHP/uploads/${i}`;
        image.alt = "A picture. Probably beautiful.";
        image.classList.add("photo");

        image.addEventListener("click", () => {
          //popup stuff
        });

        gallery.appendChild(image);
      });
    });
} else {
  console.log("Not on Photo Gallery Page.S");
}

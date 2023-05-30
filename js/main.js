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
        image.classList.add("galleryImg");

        image.addEventListener("click", () => {
          //popup stuff
          popup.style.transform = `translateY(0)`;
          selectedImage.src = `/PHP/uploads/${i}`;
          selectedImage.alt = "A picture. Probably beautiful.";
        });

        gallery.appendChild(image);
      });
    });
} else {
  console.log("Not on Photo Gallery Page.S");
}

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});

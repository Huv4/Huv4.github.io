const dropdown = document.getElementById('dropdown-content');
const category = document.getElementById('categoryMenuContent');
const styleElement = document.getElementById('styleElement');

function transformHeightdropdown() {
  dropdown.style.height = "10rem";
}

function displayCategory() {
  category.style.display = "flex";
  styleElement.style.display = "none";
}

document.getElementById("dropdown").addEventListener('click', transformHeight);
document.getElementById("categoryMenu").addEventListener('click', displayCategory);
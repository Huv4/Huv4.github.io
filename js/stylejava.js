const category = document.getElementById('categoryMenuContent');
const dropdown = document.getElementById("nameDropdownContent");

function displayCategory() {
  category.style.display = "flex";
};

function hideCategory() {
  category.style.display = "none";
};

function displayNames() {
  dropdown.style.height = "10rem";
};

function hideNames() {
  dropdown.style.height = "0";
};

document.getElementById("categoryMenu").addEventListener('click', displayCategory);
document.getElementById("categoryMenu").addEventListener('mouseover', displayCategory);
document.getElementById("categoryMenu").addEventListener('mouseleave', hideCategory);
document.getElementById("nameDropdown").addEventListener('click', displayNames);
document.getElementById("nameDropdown").addEventListener('mouseover', displayNames);
document.getElementById("nameDropdown").addEventListener('mouseleave', hideNames);
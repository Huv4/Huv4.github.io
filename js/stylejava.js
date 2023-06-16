const dropdown = document.getElementById("nameDropdownContent");

function displayNames() {
  dropdown.style.height = "10rem";
};

function hideNames() {
  dropdown.style.height = "0";
};

document.getElementById("nameDropdown").addEventListener('click', displayNames);
document.getElementById("nameDropdown").addEventListener('mouseover', displayNames);
document.getElementById("nameDropdown").addEventListener('mouseleave', hideNames);
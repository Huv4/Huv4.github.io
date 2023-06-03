const category = document.getElementById('categoryMenuContent');

function displayCategory() {
  category.style.display = "flex";
};

function hideCategory() {
  category.style.display = "none";
}

document.getElementById("categoryMenu").addEventListener('click', displayCategory);
document.getElementById("categoryMenu").addEventListener('mouseleave', hideCategory);
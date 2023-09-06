function displayModal() {
  overlay.style.display = "unset";
  modal.style.display = "flex";
}

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

overlay.style.display = "none";
modal.style.display = "none";

const list = Array.from(document.getElementsByClassName("table__row"));

list.forEach((item) => {
  item.addEventListener("click", displayModal);
});

const cancelButton = document.getElementById("cancel-button");



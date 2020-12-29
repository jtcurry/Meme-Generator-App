const form = document.querySelector("form");
const picture = document.getElementById("pictureurl");
const topLineText = document.getElementById("toplinetext");
const bottomLineText = document.getElementById("bottomlinetext");
const memeContainer = document.getElementById("memecontainer");
const saveButton = document.getElementById("savebutton");
const discardButton = document.getElementById("discardbutton");
const savedContainer = document.getElementById("storedmemecontainer");
const submitButton = document.getElementById("submit");
const randomButton = document.getElementById("randombutton");

//FORM
form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("hidden");
  const newMeme = document.createElement("div");
  newMeme.classList.add("meme");
  newMeme.classList.add("currentMeme");
  newMeme.style.backgroundImage = `url(${picture.value})`;
  const topDiv = document.createElement("div");
  topDiv.textContent = topLineText.value;
  const bottomDiv = document.createElement("div");
  bottomDiv.textContent = bottomLineText.value;
  newMeme.append(topDiv, bottomDiv);
  memeContainer.append(newMeme);
  picture.value = "";
  topLineText.value = "";
  bottomLineText.value = "";
  saveButton.classList.remove("hidden");
  discardButton.classList.remove("hidden");
});

randomButton.addEventListener("click", function () {
  picture.value = `https://source.unsplash.com/collection/4670934?sig=${randomNumber()}`;
});

//SAVE BUTTON CLICKED
saveButton.addEventListener("click", function () {
  let savedMeme = document.createElement("div");
  let activeMeme = document.querySelector(".currentMeme");
  savedMeme.append(activeMeme);
  activeMeme.classList.remove("currentMeme");
  savedMeme.classList.add("savedMeme");
  savedMeme.classList.remove("currentMeme");
  const newDownloadIcon = document.createElement("i");
  const newTrashCan = document.createElement("i");
  newDownloadIcon.className = "fas fa-cloud-download-alt";
  newTrashCan.className = "fas fa-trash";
  newTrashCan.addEventListener("click", deleteMeme);
  savedMeme.append(newDownloadIcon);
  savedMeme.append(newTrashCan);
  savedContainer.append(savedMeme);
  resetButtons();
});

//DISCARD BUTTON
discardButton.addEventListener("click", function () {
  let activeMeme = document.querySelector(".currentMeme");
  activeMeme.remove();
  resetButtons();
});

//HELPER FUNCTIONS
function deleteMeme(event) {
  event.target.parentElement.remove();
}

function resetButtons() {
  discardButton.classList.add("hidden");
  saveButton.classList.add("hidden");
  form.classList.remove("hidden");
}

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

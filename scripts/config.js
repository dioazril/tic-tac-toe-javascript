//function for player button in app.js to show aside element
function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset["playerid"];
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

//function for cancel button in app.js to hide aside element
function closePlayerConfig() {
  playerWarningOverlayElement.style.display = "none";
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  configErrorElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.lastElementChild.value = "";
}

function warningField() {
  playerWarningFieldElement.children[0].textContent = `${players[activePlayer].name} Please select an empty field!`;
  playerWarningFieldElement.style.display = "block";
  backdropElement.style.display = "block";
  playerWarningFieldElement.style.marginTop = "3%";
}

function unclickWarningField() {
  playerWarningFieldElement.style.display = "none";
  playerWarningFieldElement.style.marginTop = "3%";
}

// function for save player config in app.js
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //for holding object!
  const enteredPlayerName = formData.get("playername").trim(); // " Dio " => "Dio"
  if (!enteredPlayerName) {
    configErrorElement.textContent = "Please enter a valid name";
    event.target.firstElementChild.classList.add("error");
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  console.log(updatedPlayerDataElement);
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}

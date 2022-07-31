const $ = (selector) => document.querySelector(selector);

/* document.addEventListener("deviceready", onDeviceReady, false); */

/* function onDeviceReady() {
  //den Event-Handler für die Schaltfläche registrieren
  */
document.getElementById("berechnen").addEventListener("click", berechnen);
document.getElementById("delete").addEventListener("click", deleteLast);
document.getElementById("ac").addEventListener("click", deleteAll);

document.querySelector(".button__container").onclick = (e) => {
  // uebersetzt alle Elemente, die die Klasse totranslate haben
  let input = e.target.value;
  appendOperation(input);
  showOperations(input);
};

function appendOperation(operation) {
  document.getElementById("ausgabe").innerHTML += operation;
}

function berechnen() {
  let container = document.getElementById("ausgabe");
  let outputSmall = document.getElementById("output__small");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
  outputSmall.innerHTML = result;
}

function deleteLast() {
  let container = document.getElementById("ausgabe");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
  let inputContainer = document.getElementById("input__container");
  if (inputContainer.innerHTML.endsWith(" ")) {
    inputContainer.innerHTML = inputContainer.innerHTML.slice(0, -3);
  } else {
    inputContainer.innerHTML = inputContainer.innerHTML.slice(0, -1);
  }
}

function deleteAll() {
  let container = document.getElementById("ausgabe");
  let inputContainer = document.getElementById("input__container");
  let outputSmall = document.getElementById("output__small");
  container.innerHTML = "";
  inputContainer.innerHTML = "";
  outputSmall.innerHTML = "";
}

// schow operation in the input__container
function showOperations(operation) {
  document.getElementById("input__container").innerHTML += operation;
}

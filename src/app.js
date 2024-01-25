import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  createCard();
};

function getRandom(values) {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function suitColor(suit) {
  return suit === "♥" || suit === "♦" ? "text-danger" : "text-dark";
}

const card = document.querySelector("#card");
function createCard() {
  const cardSymbols = ["♥", "♦", "♣", "♠"];
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomSuit = getRandom(cardSymbols);
  const randomNumber = getRandom(cardNumbers);
  const suitColorValue = suitColor(randomSuit);
  const number = document.querySelector("#number");
  number.innerHTML = randomNumber;
  number.className = suitColorValue;
  const up = document.querySelector("#up");
  up.innerHTML = randomSuit;
  up.className = suitColorValue;
  const bottom = document.querySelector("#bottom");
  bottom.innerHTML = randomSuit;
  bottom.className = suitColorValue;
}

let time = document.querySelector("#time");
function updateCountdown(i) {
  time.innerHTML = `NEW CARD IN: ${i}`;
  if (i === 0) {
    i = 10;
    createCard();
  }
  setTimeout(() => updateCountdown(i - 1), 1000);
}
updateCountdown(10);

const button = document.querySelector("#button");
button.addEventListener("click", () => createCard());

const heightInput = document.getElementById("heightInput");
heightInput.addEventListener("input", function() {
  const heightValue = heightInput.value;
  card.style.height = heightValue ? heightValue + "px" : "";
  heightInput.addEventListener("blur", function() {
    if (!heightInput.value) {
      card.style.height = "";
    }
  });
});

const widthInput = document.getElementById("widthInput");
widthInput.addEventListener("input", function() {
  const widthValue = widthInput.value;
  card.style.width = widthValue ? widthValue + "px" : "";
  widthInput.addEventListener("blur", function() {
    if (!widthInput.value) {
      card.style.width = "";
    }
  });
});

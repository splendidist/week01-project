//emoji image changes when different nav anchors are clicked

const emojiImg = document.getElementById("emoji");

const homeBtn = document.getElementById("home-button");

const planningBtn = document.getElementById("planning-button");

const flightsBtn = document.getElementById("flights-button");

const destinationsBtn = document.getElementById("destinations-button");

flightsBtn.addEventListener("click", function () {
  emojiImg.src = "./assets/dolphin.png";
});

homeBtn.addEventListener("click", function () {
  emojiImg.src = "./assets/flower.png";
});

planningBtn.addEventListener("click", function () {
  emojiImg.src = "./assets/flower.png";
});

destinationsBtn.addEventListener("click", function () {
  emojiImg.src = "./assets/hiking.png";
});

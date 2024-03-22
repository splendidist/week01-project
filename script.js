//emoji image changes when different nav anchors are clicked

const emojiImg = document.getElementById("emoji");

const homeBtn = document.getElementById("home-button");

const planningBtn = document.getElementById("planning-button");

const flightsBtn = document.getElementById("flights-button");

const destinationsBtn = document.getElementById("destinations-button");

flightsBtn.addEventListener("click", function () {
  emojiImg.src =
    "https://static-00.iconduck.com/assets.00/dolphin-emoji-953x1024-vjjv36x9.png";
});

homeBtn.addEventListener("click", function () {
  emojiImg.src =
    "https://static-00.iconduck.com/assets.00/tulip-emoji-1924x2048-gpvri83b.png";
});

planningBtn.addEventListener("click", function () {
  emojiImg.src =
    "https://static-00.iconduck.com/assets.00/tulip-emoji-1924x2048-gpvri83b.png";
});

destinationsBtn.addEventListener("click", function () {
  emojiImg.src =
    "https://em-content.zobj.net/source/skype/289/hiking-boot_1f97e.png";
});

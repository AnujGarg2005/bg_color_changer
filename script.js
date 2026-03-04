const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null;

function changeBGcolor() {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;

  const text = document.querySelector(".colorCode");
  if (text) {
    text.innerText = "Current Color: " + newColor;
  }
}

function startChanging() {
  if (intervalId !== null) return;
  intervalId = setInterval(changeBGcolor, 1000);
}

function stopChanging() {
  clearInterval(intervalId);
  intervalId = null;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").addEventListener("click", startChanging);
  document.getElementById("stop").addEventListener("click", stopChanging);
});
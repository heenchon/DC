let aBox = document.getElementById("box1");
aBox.onclick = function () {
  aBox.style = aBox.classList.toggle(
    "box--clicked"
  );
};

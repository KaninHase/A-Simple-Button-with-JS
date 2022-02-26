const colors = ["#006141", "#d8c8e0", "#e6a5b7", "#693971", "#800000"];

function changeColor(button) {
 var current = Number(button.dataset.ci || 0); // init to 0 on first click
 current = (current + 1) % colors.length; // clamp array index
 button.dataset.ci = current; // store new value in element
 button.style.color = colors[current]; // set color
 document.getElementById("color-change");
}

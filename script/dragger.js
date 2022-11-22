let mainArea = document.querySelector(".np-main");
let notes = document.querySelectorAll(".newNote");

/* Drag way */

let myLeft, myTop, myIndex;

// mainArea.addEventListener("dragstart", function (e) {
//   myLeft = e.layerX;
//   myTop = e.layerY;
// });

// mainArea.addEventListener("dragend", function (e) {
//   e.target.style.left = e.clientX - myLeft + "px";
//   e.target.style.top = e.clientY - myTop + "px";
//   e.target.style.opacity = 1;
// });

mainArea.addEventListener(
  "dragover",
  function (e) {
    if (e.target.classList.contains("newNote")) {
      e.target.style.left = e.clientX - myLeft + "px";
      e.target.style.top = e.clientY - myTop + "px";
      e.target.style.opacity = 0.5;
      e.preventDefault();
    }
  },
  false
);

mainArea.addEventListener(
  "dragend",
  function (e) {
    e.target.style.opacity = 1;
  },
  false
);

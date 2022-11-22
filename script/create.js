let area = document.querySelector(".np-main");
let Sq = area.querySelector(".square");
let Sq_R = area.querySelector(".square-radius");
let Circle = area.querySelector(".circle");
// let Line = area.querySelector(".square");
let PopClose = area.querySelector(".PopClose");
let create = document.querySelector(".createNote");
let PopUp_page = area.querySelector(".PopUp-main");
let noteType, radius, AllNotes;
let Nr = 1;

/* Drag Item */

/* A side Options */
Sq.addEventListener("click", () => openPop("sq"));
Sq_R.addEventListener("click", () => openPop("sq-s"));
Circle.addEventListener("click", () => openPop("cr"));
PopClose.addEventListener("click", () => {
  PopUp_page.style.top = "-2000px";
  document.querySelector(".EntHeight").value = "";
  document.querySelector(".EntWidth").value = "";
});

/* Select the Type of Note */
function openPop(type) {
  PopUp_page.style.top = 0;
  switch (type) {
    case "sq":
      radius = 0;
      break;

    case "sq-s":
      radius = 8;
      break;

    case "cr":
      radius = 50;
      break;
  }
}

/* Create a New Note */
create.addEventListener("click", Creator);
function Creator() {
  let height = document.querySelector(".EntHeight").value;
  let width = document.querySelector(".EntWidth").value;
  let bcColor = document.querySelector(".Pcolor").value;
  let { r, g, b } = hexToRgb(bcColor);

  /* Check Note size */
  if (height < 100 || width < 100) {
    height = 200;
    width = 150;
  }
  if (height > 400 || width > 400) {
    height = 400;
    width = 300;
  }
  /* Create Circle */
  if (radius == 50) {
    width = height;
  }

  let newDiv = document.createElement("div");
  newDiv.classList.add("newNote");
  newDiv.classList.add(`Note-` + Nr);
  newDiv.setAttribute("draggable", "true");

  area.appendChild(newDiv);

  area.querySelector(`.Note-` + Nr).style = `
    height : ${height}px;
    width : ${width}px;
    z-index : ${Nr};
    background: rgba(${r},${g},${b},0.8);
    border-radius: ${radius}%;`;
  Nr++;

  /* Add Drag Event */
  newDiv.addEventListener("dragstart", function (e) {
    deleteBtn.style.display = "none";
    myLeft = e.layerX;
    myTop = e.layerY;
  });

  /* Right Click */
  newDiv.addEventListener("contextmenu", (e) => {
    deleteBtn.style.display = "none";
    e.preventDefault();
    rClicker(e);
  });

  PopUp_page.style.top = "-5000px";

  /* Make the fields Clear */
  document.querySelector(".EntHeight").value = "";
  document.querySelector(".EntWidth").value = "";
}

/* Clear Area */
let clearArea = area.querySelector(".sideTrash");
clearArea.addEventListener("click", () => {
  AllNotes = area.querySelectorAll(".newNote");
  for (note of AllNotes) area.removeChild(note);
});

/* Convert Color hex to rgb */
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/* Right Click */
let target;

let deleteBtn = area.querySelector(".rightClick");
function rClicker(event) {
  deleteBtn.style = `
  display : block;
  top : ${event.clientY}px;
  left :${event.clientX}px`;
  target = event.target;
}

/* Delete the note */
deleteBtn.addEventListener("click", (e) => {
  area.removeChild(target);
  deleteBtn.style.display = "none";
  e.preventDefault();
});

area.addEventListener("click", () => (deleteBtn.style.display = "none"));

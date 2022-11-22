let nav = document.querySelector(".nav-burger");
let burger = nav.querySelector(".burger");
let aSide = document.querySelector(".aSide");
let item = aSide.querySelectorAll(".options-item");
let pos = false;

nav.addEventListener("click", () => {
  burger.classList.toggle("nav-burger-spn");
  burger.classList.toggle("nav-burger-active");
  aSide.classList.toggle("nav-active");

  if (!pos) {
    let i = 1;
    item.forEach((element) => {
      i++;
      element.style = `
      transition-delay:  ${i * 100}ms , 0s , 0s;
      transition-property: opacity ,color , background;
      opacity :1`;
    });
    pos = true;
  } else {
    let i = 4;
    item.forEach((element) => {
      i--;
      element.style = `
      transition-delay:  ${i * 100}ms , 0s , 0s;
      transition-property: opacity ,color , background;
      opacity :0`;
    });
    pos = false;
  }
});

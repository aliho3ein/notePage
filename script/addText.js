let mainArea2 = document.querySelector(".np-main");
// let nClass;

mainArea2.addEventListener("click", (e) => {
  let nClass = e.target;
  //console.log(nClass);
  //   if (nClass.getAttribute("class").includes("newNote")) {
  //     window.addEventListener("keydown", function (key) {
  //       console.log(nClass);
  //     });
  //   }

  nClass.addEventListener("keydown", function (key) {
    // if (!nClass.getAttribute("class").includes("newNote")) return;
    // debugger;
    console.log(key.code);
  });
});

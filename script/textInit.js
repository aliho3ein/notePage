let TBtn = document.querySelector(".text");
let body = document.querySelector("body");
let Text = false;

function textAllow(data) {
  if (!data) {
    console.log(false);
  } else console.log(true);
}

body.addEventListener("click", (e) => {
  textAllow(checkT(e.target.className));
});

TBtn.addEventListener("click", () => textAllow(true));

function checkT(check) {
  if (check == "text") return true;
  else if (check != "text" && check == "aSide-btm") {
    console.log("F");
    return false;
  }
}

const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (btn) => {
    // console.log("btn", btn, btn.target);
    if (btn.target.id === "grey") {
      body.style.backgroundColor = btn.target.id;
    }
    if (btn.target.id === "white") {
      body.style.backgroundColor = btn.target.id;
    }
    if (btn.target.id === "blue") {
      body.style.backgroundColor = btn.target.id;
    }
    if (btn.target.id === "yellow") {
      body.style.backgroundColor = btn.target.id;
    }
  });
});

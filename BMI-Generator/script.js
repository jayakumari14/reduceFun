const form = document.querySelector("form");
// console.log("form", form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid height ${height}`;
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid weight ${weight}`;
    result.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // result

    result.innerHTML = `<span style="color:green;">Result: ${bmi}</span>`;
  }
});

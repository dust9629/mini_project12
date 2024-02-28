let Z = document.getElementById("Z");
let result = document.getElementById("result");
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", () => {
  let XValue = parseFloat(document.getElementById("X").Value);
  let yValue = parseFloat(document.getElementById("Y").value);

  if(!isNaN(XValue) && !isNaN(yValue)){
    Z.value = (XValue * yValue / 100).toFixed(2);
    result.innerHTML = `${XValue}% of ${yValue} is <span>${Z.value}</span>`;
  } else {
    result.innerHTML = "Input cannot be empty!";
  }
})
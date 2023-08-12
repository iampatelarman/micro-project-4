const numberBtns = document.querySelectorAll(".number-btn");
const input = document.querySelector(".input-area");

numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (input.innerText == "0") {
      if (Number.isInteger(Number.parseInt(value))) input.innerText = value;
      else input.innerText += value;
    } else {
      let lastChar = input.innerText.slice(input.innerText.length - 1);

      if (
        !Number.isInteger(Number.parseInt(lastChar)) &&
        !Number.isInteger(Number.parseInt(value))
      ) {
      } else {
        input.innerText += value;
      }
    }
  });
});

function isIncompleteExpression(exp) {
  let lastChar = exp.charAt(exp.length - 1);
  if (
    lastChar == "+" ||
    lastChar == "-" ||
    lastChar == "*" ||
    lastChar == "/" ||
    lastChar == "."
  )
    return true;

  return false;
}
let errorTextDOM = document.querySelector(".error");
function displayError(msg) {
  errorTextDOM.innerText = msg;
  errorTextDOM.classList.add("show-error");
  setTimeout(() => {
    errorTextDOM.classList.remove("show-error");
  }, 3000);
}

const resultBtn = document.querySelector(".result-btn");
resultBtn.addEventListener("click", () => {
  let expression = input.innerText;
  if (isIncompleteExpression(expression)) {
    displayError("incomplete expression");
    return;
  }

  let result = eval(input.innerText);
  if (isNaN(result)) {
    input.innerText = "0";
    displayError("Undefined expression");
    return;
  }
  if (!isFinite(result)) {
    input.innerText = "0";
    displayError("Infinite");
    return;
  }
  if (!Number.isInteger(result)) {
    input.innerText = result.toFixed(2).toString();
    return;
  }
  input.innerText = result.toString();
});

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  input.innerText = "0";
});

const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
  if (input.innerText.length == 1) {
    input.innerText = "0";
  }

  if (input.innerText != "0") {
    input.innerText = input.innerText.slice(0, -1);
  }
});

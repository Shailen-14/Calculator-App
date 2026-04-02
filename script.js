const screen = document.querySelector(".calc-screen");

function appendToDisplay(button) {
  if (screen.value === "Error") {
    screen.value = "";
  }

  screen.value += button;
}

function clearScreen() {
  screen.value = "";
}

function calculate() {
  try {
    if (eval(screen.value) === Infinity || eval(screen.value) === -Infinity) {
      screen.value = "Error";
    } else {
      screen.value = eval(screen.value);
    }
  } catch (e) {
    screen.value = "Error";
  }
}

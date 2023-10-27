let tempString = "";
const operator = ["+", "-", "/", "*", "."];
const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const calculatorMonitorComp = document.getElementById("text");
const progresTextComp = document.getElementById("progres-text");
const err = false;
document.onkeydown = function (e) {
  handleCalculator(e.key);
};
function handleCalculator(key) {
  if (
    (key === "." && tempString[tempString.length - 1] === ".") ||
    (tempString === "0" && key === "0")
  ) {
    tempString = tempString;
  } else if (number.includes(key)) {
    calculatorMonitorComp.innerHTML = key;
    tempString += key;
  } else if (
    operator.includes(tempString[tempString.length - 1]) &&
    operator.includes(key)
  ) {
    tempString = tempString.slice(0, -1) + key;
  } else if (operator.includes(key) && tempString != "") {
    calculatorMonitorComp.innerHTML = key.replace("*", "x");
    tempString += key;
  } else if (key === "Backspace" || key === "del") {
    tempString = tempString.slice(0, -1);
    calculatorMonitorComp.innerHTML = "del";
  } else if (key === "reset") {
    tempString = "";
    progresTextComp.innerHTML = tempString;
    calculatorMonitorComp.innerHTML = tempString;
  }
  progresTextComp.innerHTML = tempString.replace("*", "x");
}
function result() {
  progresTextComp.innerHTML = new Function("return " + tempString)();
  tempString = "";
  calculatorMonitorComp.innerHTML = tempString;
}

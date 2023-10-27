let numberValue = "";
let display = document.getElementById("display");

function cetak(value) {
  if (numberValue === "" && isNaN(value)) {
    return;
  }

  if (value === "*" && numberValue.slice(-1) === "*") {
    return;
  }
  if (value === "+" && numberValue.slice(-1) === "+") {
    return;
  }
  if (value === "-" && numberValue.slice(-1) === "-") {
    return;
  }
  if (value === "/" && numberValue.slice(-1) === "/") {
    return;
  }

  numberValue += value;
  display.value = numberValue.replace(/\./g, ",");
  display.value = numberValue.replace("*", `x`);
}

function result() {
  try {
    const resultValue = eval(numberValue);
    numberValue = resultValue.toLocaleString();
    display.value = numberValue.replace(/\./g, ",");
  } catch (error) {
    display.value = "Error";
  }
}

function reset() {
  numberValue = "";
  display.value = "";
}

function del() {
  numberValue = numberValue.slice(0, -1);
  display.value = numberValue;
}

const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");

theme1.addEventListener("change", () => {
  document.documentElement.style.setProperty("--main-color", "#3b4664");
  document.documentElement.style.setProperty("--secondary-color", "#181c29");
  document.documentElement.style.setProperty("--third-color", "#23293c");
  document.documentElement.style.setProperty("--delres-color", "#a2b3e1");
  document.documentElement.style.setProperty("--delresbs-color", "#2e3b5a");
  document.documentElement.style.setProperty("--equal-color", "#f96c5b");
  document.documentElement.style.setProperty("--equalbs-color", "#a32d1e");
  document.documentElement.style.setProperty("--switch-color", "#23293c");
  document.documentElement.style.setProperty("--input-color", "#e9e4d8");
  document.documentElement.style.setProperty("--inputbs-color", "#b4a79a");
  document.documentElement.style.setProperty("--headertext-color", "#fff");
  document.documentElement.style.setProperty("--switchbtn-color", "#f96c5b");
  document.documentElement.style.setProperty("--delrestext-color", "#fff");
  document.documentElement.style.setProperty("--equaltext-color", "#fff");
  document.documentElement.style.setProperty("--inputtext-color", "#40444e");
});

theme2.addEventListener("change", () => {
  document.documentElement.style.setProperty("--main-color", "#e6e6e6");
  document.documentElement.style.setProperty("--secondary-color", "#eeeeee");
  document.documentElement.style.setProperty("--third-color", "#d3cdcd");
  document.documentElement.style.setProperty("--delres-color", "#61b6bb");
  document.documentElement.style.setProperty("--delresbs-color", "#195e63");
  document.documentElement.style.setProperty("--equal-color", "#ff8b38");
  document.documentElement.style.setProperty("--equalbs-color", "#9c4208");
  document.documentElement.style.setProperty("--switch-color", "#d4cccd");
  document.documentElement.style.setProperty("--input-color", "#ffffff");
  document.documentElement.style.setProperty("--inputbs-color", "#a69c90");
  document.documentElement.style.setProperty("--headertext-color", "#555553");
  document.documentElement.style.setProperty("--switchbtn-color", "#ed8e58");
  document.documentElement.style.setProperty("--delrestext-color", "#ffff");
  document.documentElement.style.setProperty("--equaltext-color", "#ffff");
  document.documentElement.style.setProperty("--inputtext-color", "#383931");
});

theme3.addEventListener("change", () => {
  document.documentElement.style.setProperty("--main-color", "#17062a");
  document.documentElement.style.setProperty("--secondary-color", "#1e0836");
  document.documentElement.style.setProperty("--third-color", "#1e0836");
  document.documentElement.style.setProperty("--delres-color", "#8631b0");
  document.documentElement.style.setProperty("--delresbs-color", "#bf15f4");
  document.documentElement.style.setProperty("--equal-color", "#94fff9");
  document.documentElement.style.setProperty("--equalbs-color", "#78f2ef");
  document.documentElement.style.setProperty("--switch-color", "#1e0836");
  document.documentElement.style.setProperty("--input-color", "#6b34ac");
  document.documentElement.style.setProperty("--inputbs-color", "#851c9d");
  document.documentElement.style.setProperty("--headertext-color", "#fde33b");
  document.documentElement.style.setProperty("--switchbtn-color", "#9df9f3");
  document.documentElement.style.setProperty("--delrestext-color", "#fffaff");
  document.documentElement.style.setProperty("--equaltext-color", "#112b30");
  document.documentElement.style.setProperty("--inputtext-color", "#fae23a");
});

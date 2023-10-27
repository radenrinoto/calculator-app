const btnSwitch = document.getElementById("ball");

const setThemeDark = () => {
  btnSwitch.classList.add("theme-dark");
  btnSwitch.classList.remove("theme-light");
  btnSwitch.classList.remove("theme-negative");

  localStorage.setItem("theme", "theme-dark");
  document.documentElement.className = "theme-dark";
};
const setThemeLight = () => {
  btnSwitch.classList.add("theme-light");
  btnSwitch.classList.remove("theme-dark");
  btnSwitch.classList.remove("theme-negative");

  localStorage.setItem("theme", "theme-light");
  document.documentElement.className = "theme-light";
};
const setThemeNegative = () => {
  btnSwitch.classList.add("theme-negative");
  btnSwitch.classList.remove("theme-light");
  btnSwitch.classList.remove("theme-dark");

  localStorage.setItem("theme", "theme-negative");
  document.documentElement.className = "theme-negative";
};

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
  } else {
    setTheme("theme-negative");
  }
}

/*============================= THEME CHANGE LOGIC =============================*/
const toggleContainer = document.querySelector('.toggle-container');
const pointer = document.querySelector('.pointer');
const headerTypography = document.querySelectorAll(
  'header h1, header p, .calculator-input input'
);
const calculatorInput = document.querySelector('.calculator-input');
const calculatorButtonContainer = document.querySelector(
  '.calculator-button-container'
);
const buttons = document.querySelectorAll('.calculator-buttons button');
const delButton = document.querySelector('.del');
const resetButton = document.querySelector('.reset');
const equalButton = document.querySelector('.equals');

const themes = {
  pointerThemes: ['#d13f30', '#d13f30', '#00ded0'],
  containerThemes: ['#252d44', '#d3cdcd', '#1e0836'],
  backgroundThemes: ['#3b4664', '#e6e6e6', '#17062a'],
  headerTypographyThemes: ['#fff', '#313329', '#e2cf5a'],
  calculatorInputThemes: ['#181f32', '#eeeeee', '#1e0836'],
  calculatorButtonContainerThemes: ['#252d44', '#d3cdcd', '#1e0836'],
  primaryButtonThemes: ['#eae3db', '#e5e4e0', '#331b4d'],
  primaryButtonTypographyThemes: ['#3d4753', '#313329', '#e2cf5a'],
  primaryButtonBorderThemes: ['#aa9e91', '#a69c95', '#78248f'],
  secondaryButtonThemes: ['#637297', '#388187', '#56067d'],
  secondaryButtonBorderThemes: ['#434c73', '#215c62', '#aa22de'],
  equalButtonBorderThemes: ['#902112', '#902112', '#6cf8f1'],
  equalButtonTypographyThemes: ['white', 'white', 'black'],
};

let currentThemeIndex = 0;

const updateTheme = () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.pointerThemes.length;
};

const changeColor = (element, theme) => {
  element.style.color = theme;
};

const changeBackgroundColor = (element, theme) => {
  element.style.backgroundColor = theme;
};

const changeBorderColor = (element, theme) => {
  element.style.borderColor = theme;
};

const applyTheme = () => {
  const currentPointerTheme = themes.pointerThemes[currentThemeIndex];
  const currentContainerTheme = themes.containerThemes[currentThemeIndex];
  const currentBackgroundTheme = themes.backgroundThemes[currentThemeIndex];
  const currentHeaderTypographyTheme =
    themes.headerTypographyThemes[currentThemeIndex];
  const currentCalculatorInputTheme =
    themes.calculatorInputThemes[currentThemeIndex];
  const currentCalculatorButtonContainerTheme =
    themes.calculatorButtonContainerThemes[currentThemeIndex];
  const currentPrimaryButtonTheme =
    themes.primaryButtonThemes[currentThemeIndex];
  const currentPrimaryButtonTypographyTheme =
    themes.primaryButtonTypographyThemes[currentThemeIndex];
  const currentSecondaryButtonTheme =
    themes.secondaryButtonThemes[currentThemeIndex];
  const currentPrimaryButtonBorderTheme =
    themes.primaryButtonBorderThemes[currentThemeIndex];
  const currentSecondaryButtonBorderTheme =
    themes.secondaryButtonBorderThemes[currentThemeIndex];
  const currentEqualButtonBorderTheme =
    themes.equalButtonBorderThemes[currentThemeIndex];
  const currentEqualButtonTypographyTheme =
    themes.equalButtonTypographyThemes[currentThemeIndex];

  //Adjust position of pointer
  pointer.style.transform = `translateX(${currentThemeIndex * 24}px)`;

  //Change Color
  headerTypography.forEach((element) => {
    changeColor(element, currentHeaderTypographyTheme);
  });
  changeBackgroundColor(calculatorInput, currentCalculatorInputTheme);
  changeBackgroundColor(
    calculatorButtonContainer,
    currentCalculatorButtonContainerTheme
  );
  changeBackgroundColor(toggleContainer, currentContainerTheme);
  changeBackgroundColor(pointer, currentPointerTheme);
  changeBackgroundColor(document.body, currentBackgroundTheme);
  buttons.forEach((button) => {
    if (button === delButton || button === resetButton) {
      changeBackgroundColor(button, currentSecondaryButtonTheme);
      changeBorderColor(button, currentSecondaryButtonBorderTheme);
    } else if (button === equalButton) {
      changeBackgroundColor(button, currentPointerTheme);
      changeBorderColor(button, currentEqualButtonBorderTheme);
      changeColor(button, currentEqualButtonTypographyTheme);
    } else {
      changeBackgroundColor(button, currentPrimaryButtonTheme);
      changeBorderColor(button, currentPrimaryButtonBorderTheme);
      changeColor(button, currentPrimaryButtonTypographyTheme);
    }
  });
};

toggleContainer.addEventListener('click', () => {
  updateTheme();
  applyTheme();
});

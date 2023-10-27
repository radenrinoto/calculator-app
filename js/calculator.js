/*============================= CALCULATOR LOGIC =============================*/
const display = document.getElementById('display');

const keyboardMapping = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '/',
  '.': '.',
  Enter: '=',
  Backspace: 'DEL',
  Escape: 'RESET',
};

//Keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (keyboardMapping[key]) {
    event.preventDefault();
    const buttonText = keyboardMapping[key];
    simulateButtonClick(buttonText);

    // Highlight button effect
    buttons.forEach((button) => {
      if (button.textContent === buttonText) {
        button.classList.add('active');
      }
    });
  }
});

// Remove "active" class on keyup
document.addEventListener('keyup', () => {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
});

// Add click event listener
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    simulateButtonClick(buttonText);
  });
});

//Number formatting
display.addEventListener('input', () => {
  // Replace '×' with '*'
  display.value = display.value.replace(/×/g, '*');
  // Input validation (ignores non-numeric characters)
  display.value = display.value.replace(/[^0-9.+\-*/]/g, '');
  display.value = Number(display.value).toLocaleString();
});

//Calculator logic
const simulateButtonClick = (buttonText) => {
  if (display.value === 'Syntax Error') {
    if (buttonText === 'DEL' || buttonText === 'RESET' || buttonText === '=') {
      display.value = '';
    } else {
      display.value = buttonText;
    }
  } else if (buttonText === '=') {
    try {
      let expression = display.value.replace(/×/g, '*').replace(/,/g, '');
      const result = eval(expression);
      display.value = result.toLocaleString();
    } catch (error) {
      display.value = 'Syntax Error';
    }
  } else if (buttonText === 'DEL') {
    display.value = display.value.slice(0, -1);
  } else if (buttonText === 'RESET' || display.value === 'RESET') {
    display.value = '';
  } else {
    display.value += buttonText.replace(/×/g, '*');
  }
};

function appendTarget(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function calculateResult() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
}
  
function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}
  
function deleteTarget() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

const firstThemeBtn = document.querySelector('#first');
const secondThemeBtn = document.querySelector('#second');
const thirdThemeBtn = document.querySelector('#third');
const ballBtn = document.querySelector('.ball');

firstThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '4px';
    document.querySelector('body').classList.remove('sun');
    document.querySelector('body').classList.remove('meteor');
})

secondThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '38px';
    document.querySelector('body').classList.remove('moon');
    document.querySelector('body').classList.remove('meteor');
    document.querySelector('body').classList.add('sun');
})

thirdThemeBtn.addEventListener('change', () => {
    ballBtn.style.left = '72px';
    document.querySelector('body').classList.remove('moon');
    document.querySelector('body').classList.remove('sun');
    document.querySelector('body').classList.add('meteor');
})
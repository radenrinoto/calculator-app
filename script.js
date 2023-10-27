function appendToDisplay (value) {
    document.getElementById("result").value += value;

}

function clearDisplay () {
    document.getElementById("result").value = ""
}

function calculateResult () {
    try {
        const hasil = eval(document.getElementById("result").value);
        document.getElementById("result").value = hasil;
    } catch (error) {
        document.getElementById("result").value = "error";
    }
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
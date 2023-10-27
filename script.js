// Display output function
let outputScreen = document.getElementById('text-display')
let operatorLastInput = false

const displayOutput = (num) => {
    if (operatorLastInput && '+-*/'.includes(num)) {
        
        return;
    }

    const displayed = num === '*' ? 'x' : num

    outputScreen.value += displayed
    operatorLastInput = '+-*/'.includes(num)
}

const results = () => {
    try {
        const expression = outputScreen.value.replace(/x/g, '*');
        if (expression !== '' && !operatorLastInput) {
            outputScreen.value = eval(expression)
        }
    } catch (err) {
        console.log('Invalid', err);
        throw err
    }
}

const clearScreen = () => {
    outputScreen.value = ''
    operatorLastInput = true
}

const deleted = () => {
    outputScreen.value = outputScreen.value.slice(0, -1)
}

// Switch button function
const btnRadio1 = document.getElementById('theme1')
const btnRadio2 = document.getElementById('theme2')
const btnRadio3 = document.getElementById('theme3')
const textTheme = document.getElementById('theme')
const combineSlider = document.getElementById('combine-slider')
const colorDisplay =document.getElementById('text-display')

const themeSelected = (theme) => {
    document.documentElement.style.setProperty('--back-color1', theme.backColor1)
    document.documentElement.style.setProperty('--back-color2', theme.backColor2)
    document.documentElement.style.setProperty('--display', theme.display)
    document.documentElement.style.setProperty('--input', theme.input)
    document.documentElement.style.setProperty('--input2', theme.input2)
    document.documentElement.style.setProperty('--shadow', theme.shadow)
    document.documentElement.style.setProperty('--shadow2', theme.shadow2)
    document.documentElement.style.setProperty('--shadow3', theme.shadow3)
    document.documentElement.style.setProperty('--text', theme.text)
    document.documentElement.style.setProperty('--orange', theme.difButton)
    textTheme.style.color = theme.themeLeft
    colorDisplay.style.color = theme.themeDisplay
    
}

btnRadio1.addEventListener('change', () => {
    const theme = {
        backColor1: '#3B4664',
        backColor2: '#3B4664',
        display: '#181F32',
        input: '#252D44',
        input2: '#EAE3DB',
        shadow: '#B2A196',
        shadow2: '#902517',
        shadow3: '#424E75',
        text: '#424B59',
        difButton: '#D13F30',
        themeLeft: 'white',
        themeDisplay: 'white',
    }
    themeSelected(theme)
})

btnRadio2.addEventListener('change', () => {
    const theme = {
        backColor1: '#E6E6E6',
        backColor2: '#388187',
        display: '#D3CDCD',
        input: '#D3CDCD',
        input2: '#E5E4E0',
        shadow: '#A79E90',
        shadow2: '#8A3900',
        shadow3: '#1A6165',
        text: '#35352D',
        difButton: '#C85401',
        themeLeft: '#35352D',
        themeDisplay: '#35352D'
    }
    themeSelected(theme)
})

btnRadio3.addEventListener('change', () => {
    const theme = {
        backColor1: '#17062A',
        backColor2: '#56077B',
        display: '#1E0836',
        input: '#1E0836',
        input2: '#331B4D',
        shadow: '#861C9C',
        shadow2: '#6CFAF0',
        shadow3: '#B31EE6',
        text: '#FEE25A',
        difButton: '#00DECF',
        themeLeft: '#FFE63C',
        themeDisplay: '#FEE25A',
    }
    themeSelected(theme)
})
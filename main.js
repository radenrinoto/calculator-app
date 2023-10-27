let runningTotal = 0
let buffer = '0'
let prevOperator
const resultScreen = document.querySelector('.results')
const screen = document.querySelector('.container')
const root = document.documentElement
const handleClick = value => {
  if (isNaN(value)) {
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  resultScreen.innerText = buffer.toString().replace('.', ',')
}

const handleSymbol = symbol => {
  switch (symbol) {
    case 'RESET':
      buffer = '0'
      runningTotal = 0
      break
    case '=':
      if (prevOperator === null) {
        return
      }
      flushOperation(parseInt(buffer))
      prevOperator = null
      buffer = runningTotal
      runningTotal = 0
      break
    case 'DEL':
      if (buffer.length === 1) {
        buffer = '0'
      } else {
        buffer = buffer.substring(0, buffer.length - 1)
      }
      break
    case '.':
      if (!buffer.includes(',')) {
        buffer += ','
      }
      break
    case '+':
    case '−':
    case '×':
    case '/':
      handleMath(symbol)
      break
  }
}

const handleMath = symbol => {
  if (buffer === '0') return
  let intBuffer
  if (buffer.toString().includes(',')) {
    intBuffer = parseFloat(buffer.toString().replace(',', '.')).toFixed(1)
  } else {
    intBuffer = parseInt(buffer)
  }

  if (runningTotal === 0) {
    runningTotal = intBuffer
  } else {
    flushOperation(intBuffer)
  }

  prevOperator = symbol
  buffer = '0'
}

const flushOperation = intBuffer => {
  if (prevOperator === '+') {
    runningTotal += intBuffer
  } else if (prevOperator === '−') {
    runningTotal -= intBuffer
  } else if (prevOperator === '×') {
    runningTotal *= intBuffer
  } else if (prevOperator === '/') {
    runningTotal /= intBuffer
  }
}

const handleNumber = numberString => {
  if (buffer === '0.0' || buffer === '0') {
    buffer = numberString
  } else {
    buffer += numberString
  }
}

const init = () => {
  const enterButton = document.querySelector('.calc__btn__wrapper')
  enterButton.addEventListener('click', e => {
    handleClick(e.target.textContent)
  })
}

init()

const buttons = document.getElementsByClassName('toggle__btn')
const arr = [...buttons]

// Fungsi untuk menyimpan status toggle ke localStorage
function saveToggleStatus(index) {
  localStorage.setItem('selectedToggle', JSON.stringify({ index }))
}

arr.forEach((element, index) => {
  element.addEventListener('click', () => {
    element.style.opacity = '1'
    let buttonColor

    if (index === 0) {
      buttonColor = '#d33d36'
      root.style.setProperty('--bg-primary', '#3b4664')
      root.style.setProperty('--screen-result-color', '#181f32')
      root.style.setProperty('--bg-screen-btn-color', '#252d44')
      root.style.setProperty('--bg-btn-primary', '#e9e3db')
      root.style.setProperty('--bg-btn-secondary', '#63729a')
      root.style.setProperty('--bg-btn-tertiary', '#d13f30')
      root.style.setProperty('--color-btn-primary', '#464b5a')
      root.style.setProperty('--color-btn-tertiary', '#f9ffff')
      root.style.setProperty('--btn-color', '#3b414d')
      root.style.setProperty('--color-result', '#feffff')
      root.style.setProperty('--brand-color', '#feffff')
      root.style.setProperty('--toggle-bg', '#252d44')
    } else if (index === 1) {
      buttonColor = '#c85303'
      root.style.setProperty('--bg-primary', '#e6e6e6')
      root.style.setProperty('--screen-result-color', '#eeeeee')
      root.style.setProperty('--bg-screen-btn-color', '#d3cdcd')
      root.style.setProperty('--bg-btn-primary', '#e5e4df')
      root.style.setProperty('--bg-btn-secondary', '#3c7f88')
      root.style.setProperty('--bg-btn-tertiary', '#c85401')
      root.style.setProperty('--color-btn-primary', '#35342f')
      root.style.setProperty('--color-btn-tertiary', '#f9ffff')
      root.style.setProperty('--btn-color', '#1e1d18')
      root.style.setProperty('--color-result', '#303026')
      root.style.setProperty('--brand-color', '#393832')
      root.style.setProperty('--toggle-bg', '#d3cdcd')
    } else {
      buttonColor = '#00e0d0'
      root.style.setProperty('--bg-primary', '#17062a')
      root.style.setProperty('--screen-result-color', '#1e0836')
      root.style.setProperty('--bg-screen-btn-color', '#1e0836')
      root.style.setProperty('--bg-btn-primary', '#331b4d')
      root.style.setProperty('--bg-btn-secondary', '#580778')
      root.style.setProperty('--bg-btn-tertiary', '#00decf')
      root.style.setProperty('--color-btn-primary', '#ffef4d')
      root.style.setProperty('--color-btn-tertiary', '#002f37')
      root.style.setProperty('--btn-color', '#ffe435')
      root.style.setProperty('--color-result', '#ffe435')
      root.style.setProperty('--brand-color', '#ffe435')
      root.style.setProperty('--toggle-bg', '#1e0836')
    }
    buttons[index].style.backgroundColor = buttonColor

    arr
      .filter(item => item !== element)
      .forEach(item => {
        item.style.opacity = '0'
      })

    saveToggleStatus(index)
  })
})

// Periksa apakah status toggle telah disimpan di localStorage
const savedToggleStatus = localStorage.getItem('selectedToggle')

if (savedToggleStatus) {
  const { index } = JSON.parse(savedToggleStatus)
  arr.forEach((element, i) => {
    if (i === index) {
      element.style.opacity = '1'
    }
  })

  // Terapkan tema berdasarkan status toggle yang disimpan
  let buttonColor

  if (index === 0) {
    buttonColor = '#d33d36'
    root.style.setProperty('--bg-primary', '#3b4664')
    root.style.setProperty('--screen-result-color', '#181f32')
    root.style.setProperty('--bg-screen-btn-color', '#252d44')
    root.style.setProperty('--bg-btn-primary', '#e9e3db')
    root.style.setProperty('--bg-btn-secondary', '#63729a')
    root.style.setProperty('--bg-btn-tertiary', '#d13f30')
    root.style.setProperty('--color-btn-primary', '#464b5a')
    root.style.setProperty('--color-btn-tertiary', '#f9ffff')
    root.style.setProperty('--btn-color', '#3b414d')
    root.style.setProperty('--color-result', '#feffff')
    root.style.setProperty('--brand-color', '#feffff')
    root.style.setProperty('--toggle-bg', '#252d44')
  } else if (index === 1) {
    buttonColor = '#c85303'
    root.style.setProperty('--bg-primary', '#e6e6e6')
    root.style.setProperty('--screen-result-color', '#eeeeee')
    root.style.setProperty('--bg-screen-btn-color', '#d3cdcd')
    root.style.setProperty('--bg-btn-primary', '#e5e4df')
    root.style.setProperty('--bg-btn-secondary', '#3c7f88')
    root.style.setProperty('--bg-btn-tertiary', '#c85401')
    root.style.setProperty('--color-btn-primary', '#35342f')
    root.style.setProperty('--color-btn-tertiary', '#f9ffff')
    root.style.setProperty('--btn-color', '#1e1d18')
    root.style.setProperty('--color-result', '#303026')
    root.style.setProperty('--brand-color', '#393832')
    root.style.setProperty('--toggle-bg', '#d3cdcd')
  } else {
    buttonColor = '#00e0d0'
    root.style.setProperty('--bg-primary', '#17062a')
    root.style.setProperty('--screen-result-color', '#1e0836')
    root.style.setProperty('--bg-screen-btn-color', '#1e0836')
    root.style.setProperty('--bg-btn-primary', '#331b4d')
    root.style.setProperty('--bg-btn-secondary', '#580778')
    root.style.setProperty('--bg-btn-tertiary', '#00decf')
    root.style.setProperty('--color-btn-primary', '#ffef4d')
    root.style.setProperty('--color-btn-tertiary', '#002f37')
    root.style.setProperty('--btn-color', '#ffe435')
    root.style.setProperty('--color-result', '#ffe435')
    root.style.setProperty('--brand-color', '#ffe435')
    root.style.setProperty('--toggle-bg', '#1e0836')
  }

  buttons[index].style.backgroundColor = buttonColor
} else {
  arr[0].style.backgroundColor = '#d33d36'
}

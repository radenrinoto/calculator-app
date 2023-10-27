let btnSwitch = document.getElementById('btn-switch-theme')

const switchTheme1 = () => {
    btnSwitch.classList.add('theme1');
    btnSwitch.classList.remove('theme2');
    btnSwitch.classList.remove('theme3')

   localStorage.setItem('theme', "theme-1")
   document.documentElement.className = "theme-1"
}

const switchTheme2 = () => {
    btnSwitch.classList.remove('theme1');
    btnSwitch.classList.add('theme2');
    btnSwitch.classList.remove('theme3')

    localStorage.setItem('theme', "theme-2")

    document.documentElement.className = "theme-2"
}

const switchTheme3 = () => {
    btnSwitch.classList.remove('theme1');
    btnSwitch.classList.remove('theme2');
    btnSwitch.classList.add('theme3')

    localStorage.setItem('theme', "theme-3")
    document.documentElement.className = "theme-3"
}

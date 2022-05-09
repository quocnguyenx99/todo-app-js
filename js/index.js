
const themeBtn = document.getElementById('theme-button')
const backgroundBtn = document.getElementById('bg-image')

const darkTheme = 'dark-theme'


const darkThemeImage = 'http://127.0.0.1:5500/todo-app/assets/icon-sun.svg'
const lightThemeImage = 'http://127.0.0.1:5500/todo-app/assets/icon-moon.svg'

const darkBackground = 'http://127.0.0.1:5500/todo-app/assets/bg-desktop-dark.jpg'
const lightBackground = 'http://127.0.0.1:5500/todo-app/assets/bg-desktop-light.jpg'



const selectedTheme = localStorage.getItem('selected-theme')

let currentTheme = selectedTheme

console.log(currentTheme);
updateTheme(currentTheme);


function updateTheme(currentTheme) {
    document.body.classList[currentTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if(currentTheme === 'dark') {
        themeBtn.setAttribute('src', darkThemeImage)
        backgroundBtn.setAttribute('src', darkBackground)
    } else {
        themeBtn.setAttribute('src', lightThemeImage)
        backgroundBtn.setAttribute('src', lightBackground)
    }
    
}

themeBtn.addEventListener('click', () => {
    
    if(currentTheme === 'dark') {
        currentTheme = 'light'
    } else {
        currentTheme = 'dark'
    }
    updateTheme(currentTheme)
    localStorage.setItem('selected-theme', currentTheme)
})


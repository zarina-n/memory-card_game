import '../css/style.css'
import './game_screen'

const levelForm = document.getElementById('level')

const levelChoiceButtons = levelForm.querySelectorAll('.level__choice')

const levelChoices = document.getElementById('level__choices')

let clicked = false

levelChoices.addEventListener('click', (event) => {
    event.preventDefault()
    const { target } = event

    if (target.closest('button')) {
        console.log(target.dataset.level)

        localStorage.setItem('level', target.dataset.level)

        let level = localStorage.getItem('level')

        clicked = true

        console.log(level)
    }
})

levelForm.addEventListener('submit', (event) => {
    if (clicked === 'false') {
        event.preventDefault()
        levelChoiceButtons.forEach((levelButton) => {
            levelButton.style.border = '1px solid red'
        })
    }
})

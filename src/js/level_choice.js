const levelForm = document.getElementById('level')

const levelChoiceButtons = document.querySelectorAll('.level__choice')

const levelChoices = document.getElementById('level__choices')

let clicked = false

levelChoices.addEventListener('click', (event) => {
    event.preventDefault()
    const { target } = event

    if (target.closest('button')) {
        console.log(target.dataset.level)

        levelChoiceButtons.forEach((levelButton) => {
            levelButton.classList.remove('error')
        })

        localStorage.setItem('level', target.dataset.level)

        let level = localStorage.getItem('level')

        clicked = true

        console.log(level)
    }
})

levelForm.addEventListener('submit', (event) => {
    if (clicked === false) {
        event.preventDefault()
        levelChoiceButtons.forEach((levelButton) => {
            levelButton.classList.add('error')
        })
    }
})

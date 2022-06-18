const levelForm = document.getElementById('level')

const levelChoiceButtons = levelForm.querySelectorAll('.level__choice')

const levelChoices = document.getElementById('level__choices')

levelChoices.addEventListener('click', (event) => {
    event.preventDefault()
    const { target } = event

    if (target.closest('button')) {
        console.log(target.dataset.level)

        window.application.level = target.dataset.level
    }
})

levelForm.addEventListener('submit', (event) => {
    if (!window.application.level) {
        event.preventDefault()
        levelChoiceButtons.forEach((levelButton) => {
            levelButton.style.border = '1px solid red'
        })
    }

    console.log(window.application)
})

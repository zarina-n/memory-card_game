const levelForm = document.getElementById('level') as HTMLFormElement

const levelChoiceButtons =
    document.querySelectorAll<HTMLButtonElement>('.level__choice')

const levelChoices = document.getElementById('level__choices') as HTMLDivElement

let clicked = false

levelChoices.addEventListener('click', (event: Event) => {
    event.preventDefault()
    const target = event.target as HTMLButtonElement

    if (target.closest('button')) {
        console.log(target.dataset.level)

        levelChoiceButtons.forEach((levelButton) => {
            levelButton.classList.remove('error')
        })

        localStorage.setItem('level', target.dataset.level!)

        clicked = true
    }
})

levelForm.addEventListener('submit', (event: Event) => {
    if (clicked === false) {
        event.preventDefault()
        levelChoiceButtons.forEach((levelButton) => {
            levelButton.classList.add('error')
        })
    }
})

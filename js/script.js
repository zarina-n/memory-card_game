const levelForm = document.querySelector('#level');

const levelButtons = levelForm.querySelectorAll('.level__choice');

const levelChoices = levelForm.querySelector('#level__choices');
const levelSubmit = levelForm.querySelectorAll('#level__start')

// levelButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(button.value);

//         window.application.level = button.value;
//     })
// });

levelChoices.addEventListener('click', (event) => {
    event.preventDefault();
    target = event.target
    if (target.closest('.level__choice')) {
        console.log(target.value);

        window.application.level = target.value;
    }
});

levelForm.addEventListener('submit', (event) => {
    if (!window.application.level) {
        event.preventDefault();
        levelButtons.forEach(button => {
            button.style.border = '1px solid red';
        });
    }

    console.log(window.application);
});


const levelForm = document.getElementById('level');

const levelButtons = levelForm.querySelectorAll('.level__choice');

const levelChoices = document.getElementById('level__choices');
const levelSubmit = document.getElementById('level__start');

levelChoices.addEventListener('click', (event) => {
    event.preventDefault();
    target = event.target;

    if (target.closest('button')) {
        console.log(target.dataset.level);

        window.application.level = target.dataset.level;
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


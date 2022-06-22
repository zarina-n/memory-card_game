const cardsField = document.getElementById('cards-field')

let index

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

const cardArray = [
    'card_1',
    'card_2',
    'card_3',
    'card_4',
    'card_5',
    'card_6',
    'card_7',
    'card_8',
    'card_9',
    'card_10',
    'card_11',
    'card_12',
    'card_13',
    'card_14',
    'card_15',
    'card_16',
    'card_17',
    'card_18',
    'card_19',
    'card_20',
    'card_21',
    'card_22',
    'card_23',
    'card_24',
    'card_25',
    'card_26',
    'card_27',
    'card_28',
    'card_29',
    'card_30',
    'card_31',
    'card_32',
    'card_33',
    'card_34',
    'card_35',
    'card_36',
]

function createCard(container) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card__inner')

    const cardFront = document.createElement('img')
    const cardCover = document.createElement('img')

    cardContainer.appendChild(cardFront)
    cardContainer.appendChild(cardCover)

    cardFront.classList.add('card_front', 'card-face')
    cardCover.classList.add('card_back', 'card-face')

    cardCover.src = './src/img/card-suit.jpg'
    cardFront.src = `./src/img/numbered_cards/${cardArray[index]}.jpg`

    cardContainer.setAttribute('data-name', cardArray[index])

    cardContainer.style.order = Math.floor(Math.random() * 10)

    container.appendChild(cardContainer)

    cardContainer.addEventListener('click', (event) => {
        cardContainer.classList.toggle('is-flipped')
        console.log(event.target.name)

        const clickedCard = document.querySelectorAll('.is-flipped')
        console.log(clickedCard)
        console.log(clickedCard[0].getAttribute('data-name'))

        if (clickedCard.length === 2) {
            matchCards(clickedCard[0], clickedCard[1])
        }
    })

    showCard(cardContainer)
}

function showCard(card) {
    card.classList.toggle('is-flipped')

    setTimeout(() => {
        card.classList.toggle('is-flipped')
    }, 5000)
}

function matchCards(cardOne, cardTwo) {
    if (
        cardOne.getAttribute('data-name') === cardTwo.getAttribute('data-name')
    ) {
        setTimeout(() => {
            alert('your score')
            cardOne.classList.toggle('is-flipped')
            cardTwo.classList.toggle('is-flipped')
        }, 2000)
    } else {
        setTimeout(() => {
            alert('try again')
            cardOne.classList.toggle('is-flipped')
            cardTwo.classList.toggle('is-flipped')
        }, 2000)
    }
}

function renderLevelScreen(level) {
    if (level === 9) {
        cardsField.style.gridTemplateColumns = 'repeat(6, 1fr)'
    }
    if (level === 6) {
        cardsField.style.gridTemplateColumns = 'repeat(4, 1fr)'
    } else if (level === 3) {
        cardsField.style.gridTemplateColumns = 'repeat(3, 1fr)'
    }

    for (let i = 0; i < level; i++) {
        index = randomNumber(0, 35)

        createCard(cardsField)
        for (let j = 0; j < 1; j++) {
            createCard(cardsField)
        }
    }
}

function getLevelNumber() {
    let levelNumber
    if (window.application.level === 'easy') {
        levelNumber = 3
    }
    if (window.application.level === 'medium') {
        levelNumber = 6
    }
    if (window.application.level === 'hard') {
        levelNumber = 9
    }

    return levelNumber
}

console.log(getLevelNumber())
console.log(window.application)
renderLevelScreen(getLevelNumber())

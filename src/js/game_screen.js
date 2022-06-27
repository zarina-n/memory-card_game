const cardsField = document.getElementById('cards-field')

const cover = { imgSrc: './static/img/card-suit.jpg', name: 'back' }

const cardData = [
    { imgSrc: './static/img/cards/card_1.jpg', name: 'card_1' },
    { imgSrc: './static/img/cards/card_2.jpg', name: 'card_2' },
    { imgSrc: './static/img/cards/card_3.jpg', name: 'card_3' },
    { imgSrc: './static/img/cards/card_4.jpg', name: 'card_4' },
    { imgSrc: './static/img/cards/card_5.jpg', name: 'card_5' },
    { imgSrc: './static/img/cards/card_6.jpg', name: 'card_6' },
    { imgSrc: './static/img/cards/card_7.jpg', name: 'card_7' },
    { imgSrc: './static/img/cards/card_8.jpg', name: 'card_8' },
    { imgSrc: './static/img/cards/card_9.jpg', name: 'card_9' },
    { imgSrc: './static/img/cards/card_10.jpg', name: 'card_10' },
    { imgSrc: './static/img/cards/card_11.jpg', name: 'card_11' },
    { imgSrc: './static/img/cards/card_12.jpg', name: 'card_12' },
    { imgSrc: './static/img/cards/card_13.jpg', name: 'card_13' },
    { imgSrc: './static/img/cards/card_14.jpg', name: 'card_14' },
    { imgSrc: './static/img/cards/card_15.jpg', name: 'card_15' },
    { imgSrc: './static/img/cards/card_16.jpg', name: 'card_16' },
    { imgSrc: './static/img/cards/card_17.jpg', name: 'card_17' },
    { imgSrc: './static/img/cards/card_18.jpg', name: 'card_18' },
    { imgSrc: './static/img/cards/card_19.jpg', name: 'card_19' },
    { imgSrc: './static/img/cards/card_20.jpg', name: 'card_20' },
    { imgSrc: './static/img/cards/card_21.jpg', name: 'card_21' },
    { imgSrc: './static/img/cards/card_22.jpg', name: 'card_22' },
    { imgSrc: './static/img/cards/card_23.jpg', name: 'card_23' },
    { imgSrc: './static/img/cards/card_24.jpg', name: 'card_24' },
    { imgSrc: './static/img/cards/card_25.jpg', name: 'card_25' },
    { imgSrc: './static/img/cards/card_26.jpg', name: 'card_26' },
    { imgSrc: './static/img/cards/card_27.jpg', name: 'card_27' },
    { imgSrc: './static/img/cards/card_28.jpg', name: 'card_28' },
    { imgSrc: './static/img/cards/card_29.jpg', name: 'card_29' },
    { imgSrc: './static/img/cards/card_30.jpg', name: 'card_30' },
    { imgSrc: './static/img/cards/card_31.jpg', name: 'card_31' },
    { imgSrc: './static/img/cards/card_32.jpg', name: 'card_32' },
    { imgSrc: './static/img/cards/card_33.jpg', name: 'card_33' },
    { imgSrc: './static/img/cards/card_34.jpg', name: 'card_34' },
    { imgSrc: './static/img/cards/card_35.jpg', name: 'card_35' },
    { imgSrc: './static/img/cards/card_36.jpg', name: 'card_36' },
]

let levelNumber

function getLevelNumber() {
    let level = localStorage.getItem('level')

    if (level === 'easy') {
        levelNumber = 3
    }
    if (level === 'medium') {
        levelNumber = 6
    }
    if (level === 'hard') {
        levelNumber = 9
    }

    return levelNumber
}

function randomize() {
    cardData.sort(() => Math.random() - 0.5)

    const newArr = cardData.slice(1, levelNumber + 1)
    const duplicate = [...newArr]
    const finalCardField = newArr.concat(duplicate)

    finalCardField.sort(() => Math.random() - 0.5)

    return finalCardField
}

function checkCards(event) {
    const clickedCard = event.target

    clickedCard.classList.add('clicked')
    const clickedCards = document.querySelectorAll('.clicked')

    if (clickedCards.length === 2) {
        if (
            clickedCards[0].getAttribute('name') ===
            clickedCards[1].getAttribute('name')
        ) {
            setTimeout(() => {
                alert('A score!')
            }, 1000)

            clickedCards.forEach((card) => {
                card.classList.remove('clicked')
                card.style.pointerEvents = 'none'
            })
        } else {
            setTimeout(() => {
                alert('try again')
            }, 1000)

            clickedCards.forEach((card) => {
                card.classList.remove('clicked')
                setTimeout(() => {
                    card.classList.remove('flipCard')
                }, 1000)
            })
        }
    }
}

function showCard(card) {
    card.classList.toggle('flipCard')

    setTimeout(() => {
        card.classList.toggle('flipCard')
    }, 4000)
}

function cardGenerator() {
    const cards = randomize()

    cards.forEach((item) => {
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('img')

        card.classList.add('card')
        face.classList.add('face')
        back.classList.add('back')

        card.setAttribute('name', item.name)

        cardsField.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        face.src = item.imgSrc
        back.src = cover.imgSrc

        showCard(card)

        card.addEventListener('click', (event) => {
            card.classList.add('flipCard')

            checkCards(event)
        })
    })
}

function createCardBlock() {
    getLevelNumber()

    if (levelNumber === 9) {
        cardsField.style.gridTemplateColumns = 'repeat(6, 1fr)'
    }
    if (levelNumber === 6) {
        cardsField.style.gridTemplateColumns = 'repeat(4, 1fr)'
    } else if (levelNumber === 3) {
        cardsField.style.gridTemplateColumns = 'repeat(3, 1fr)'
    }

    cardGenerator()
}

createCardBlock()

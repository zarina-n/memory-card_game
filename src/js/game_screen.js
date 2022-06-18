const cardsField = document.getElementById('cards-field')

for (let i = 0; i < 36; i++) {
    const card = document.createElement('img')
    // card.src = './src/img/card-suit.jpg';

    card.src = `./src/img/numbered_cards/card_${i + 1}.jpg`

    card.classList.add('card__image')

    cardsField.appendChild(card)
}

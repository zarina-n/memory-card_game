/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/game_screen.js":
/*!*******************************!*\
  !*** ./src/js/game_screen.js ***!
  \*******************************/
/***/ (() => {

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
    let level = localStorage.getItem('level')
    let levelNumber

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

console.log(getLevelNumber())
renderLevelScreen(getLevelNumber())


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_screen */ "./src/js/game_screen.js");
/* harmony import */ var _game_screen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_screen__WEBPACK_IMPORTED_MODULE_1__);



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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
gameGridDOMElement = document.querySelector('.game-grid')
console.log(gameGridDOMElement)

startGameBtnDOMElement = document.getElementById('start-game')
console.log(startGameBtnDOMElement)

startGameBtnDOMElement.addEventListener('click', function (){

    gameGridDOMElement.innerHTML = ''

    for (i = 0; i < 100 ; i++) {
        n = i + 1

        const htmlCell = `<div class='cell>${n}</div>`

        gameGridDOMElement.innerHTML += htmlCell
    }
})